<template >
  <div class="grid px-3 min-w-full">
    <!-- Title section -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[
              { name: 'Malaka oshirish', path: '/admin/skill' },
              { name: 'Korxonalaar', path: '' },
            ]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-1 relative">
          <span class="text-lg font-semibold"
            ><span class="text-blue-500">{{ $route.params.name }} </span> ga
            tegishli korxonalar
          </span>
         
        </div>
      </div>
    </div>

    <!-- Header section -->
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <div class="grid p-0">
            <div class="col-7 p-fluid">
              <InputText
                type="text"
                v-model="search_name"
                placeholder="Qidiruv..."
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>

            <div class="col-5 p-fluid">
              <Calendar
                inputId="yearpicker"
                class="p-inputtext-sm"
                @date-select="changeDate"
                v-model="date1"
                view="year"
                dateFormat="yy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- table section -->
    <div class="col-12 pt-0" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="skillorganizationList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        v-show="totalItem > 0"
        class="p-datatable-sm"
        v-model:selection="selectItem"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-800
                w-full
                text-center text-sm
                lg:text-base
                xl:text-base
                font-normal
              "
            >
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Korxona nomi
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-normal
              "
            >
              <div>{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="name" style="min-width: 50px; width: 60px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Xodimlar soni
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                text-center
                cursor-pointer
              "
            >
              <div
                v-show="slotProps.data.upgrades == 0"
                class="w-full text-center text-400"
              >
                {{ slotProps.data.upgrades }}
              </div>
              <Chip
                @click="open_Modal(slotProps.data.id, slotProps.data.name)"
                v-show="slotProps.data.upgrades !== 0"
                :label="slotProps.data.upgrades.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-medium"
              />
            </div>
          </template>
        </Column>

        <Column style="min-width: 50px; width: 160px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Yotoqxonaga z.y. xodimlar
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                text-center
              "
            >
              <div
                v-show="slotProps.data.status_bedroom == 0"
                class="w-full text-center text-400"
              >
                {{ slotProps.data.status_bedroom }}
              </div>
              <Chip
                v-show="slotProps.data.status_bedroom !== 0"
                :label="slotProps.data.status_bedroom.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-medium"
              />
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItem > 10"
            :total_page="totalItem"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalItem"></no-data-component>
    </div>
    <div class="col-12">
      <organization-modal ref="org_modal"></organization-modal>
    </div>
    <div class="col-12 pt-0" v-show="loadingtable">
      <skill-loader></skill-loader>
    </div>

    <div class="col-12" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        :name="'Test'"
        ref="Skill_table"
      >
      </download-excel>
    </div>
  </div>
</template>
  <script>
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
import SkillService from "@/service/servises/SkillService";
import NoDataComponent from "@/components/EmptyComponent/NoDataComponent.vue";
import TablePagination from "@/components/Pagination/TablePagination.vue";
import SkillLoader from "@/components/loaders/SkillLoader.vue";
import OrganizationModal from "@/views/SkillPage/components/OrganizationModal.vue";

export default {
  components: {
    BreadCrumb,
    NoDataComponent,
    TablePagination,
    SkillLoader,
    OrganizationModal,
  },
  data() {
    return {
      List: [],
      qualificationList: [],
      qualification: null,
      apparatList: [],
      apparat: null,
      DirectionList: [],
      direction: null,

      selectItem: null,

      statisticList: [],
      totalItem: 0,
      search_name: null,
      date1: "2022",
      loadingtable: false,
      skillorganizationList: [],

      params: {
        date_qual: "2022",
        search: null,
        page: 1,
        per_page: 10,
        apparat_id: null,
        training_direction_id: null,
      },
      skill_List: [],

      jsonData: [],
      json_fields: {
        "Xo'jalik nomi": "name",
        "Yo'nalish nomi": "nameOfType",
        "Tinglovchilarning kasbiy toifalari": "typeOfListener",
        "O'qish davri": "educationTime",
        "Toshkent MTU": "MTU_one",
        "Qo'qon MTU": "MTU_two",
        "Buxoro MTU": "MTU_three",
        "Qo'ng'irot MTU": "MTU_four",
        "Qarshi MTU": "MTU_five",
        "Termiz MTU": "MTU_six",
        "Boshqarma va korxonalar": "departmentAndOrganization",
        Jami: "total",
      },
    };
  },

  methods: {
    get_Skill_Organization(id, loader) {
      this.controlLoader(loader);
      SkillService.get_Skill_Organization({ id, params: this.params }).then(
        (res) => {
          let number = (this.params.page - 1) * this.params.per_page;
          res.data.organizations.data.forEach((item) => {
            number++;
            item.number = number;
          });
          this.skillorganizationList = res.data.organizations.data;
          this.totalItem = res.data.organizations.pagination.total;
          this.controlLoader(false);
        }
      );
    },
   
   
    get_Skill_Exports() {
      SkillService.get_Skill_Export({ date_qual: this.params.date_qual }).then(
        (res) => {
          res.data.data.forEach((item) => {
            item[0].directions.forEach((direct) => {
              this.jsonData.push({
                name: item[0].name,
                nameOfType: direct.name,
                typeOfListener: direct.staff_name,
                educationTime: direct.comment_time,
                MTU_one: direct.mtu1,
                MTU_two: direct.mtu2,
                MTU_three: direct.mtu3,
                MTU_four: direct.mtu4,
                MTU_five: direct.mtu5,
                MTU_six: direct.mtu6,
                departmentAndOrganization: direct.others,
                total: direct.total,
              });
            });
            this.jsonData.push({
              name: " ",
              nameOfType: `<b>${item[0].total_directions.total}</b>`,
              typeOfListener: `<b>${item[0].total_directions.total_directions}</b>`,
              educationTime: `<b>${item[0].total_directions.total_time}</b>`,
              MTU_one: `<b>${item[0].total_directions.total_mtu1}</b>`,
              MTU_two: `<b>${item[0].total_directions.total_mtu2}</b>`,
              MTU_three: `<b>${item[0].total_directions.total_mtu3}</b>`,
              MTU_four: `<b>${item[0].total_directions.total_mtu4}</b>`,
              MTU_five: `<b>${item[0].total_directions.total_mtu5}</b>`,
              MTU_six: `<b>${item[0].total_directions.total_mtu6}</b>`,
              departmentAndOrganization: `<b>${item[0].total_directions.total_others}</b>`,
              total: `<b>${item[0].total_directions.total_all}</b>`,
            });
          });

          console.log(this.jsonData);
          setTimeout(() => {
            this.$refs.Skill_table.generate();
          }, 1000);
        }
      );
    },
    open_Modal(id, name) {
      this.$refs.org_modal.get_Preview(id,this.params.apparat_id,this.params.training_direction_id,this.params.date_qual , name);
    },

   
   
    

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_Skill_Organization(this.$route.params.railway_id, true);
    },
    changeDate() {
      this.params.date_qual = new Date(this.date1).getFullYear();
      this.get_Skill_Organization(this.$route.params.railway_id, true);
    },

    searchByName() {
      this.params.search = this.search_name;
      this.get_Skill_Organization(this.$route.params.railway_id, true);
    },
    controlLoader(item) {
      this.loadingtable = item;
    },
  },
  created() {
    this.date1 = this.$route.params.date_equal;
    this.params.date_qual =this.$route.params.date_equal;
    this.params.apparat_id =JSON.parse(this.$route.params.type_id);
    this.params.training_direction_id =JSON.parse(this.$route.params.direction_id);
    
    console.log(this.$route.params);
    this.get_Skill_Organization(this.$route.params.railway_id, true);
  },
};
</script>
  