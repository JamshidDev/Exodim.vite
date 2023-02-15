<template >
  <div class="grid px-3 min-w-full">
    <!-- Title section -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Malaka oshirish', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-1 relative">
          <span class="text-2xl font-semibold"
            >Malaka oshirish
            <span class="text-base text-primary pl-2">
              ( {{ totalItem }} )</span
              
            > 
            <Chip :label="allCadry.toString()" v-tooltip.bottom="'Joriy yil uchun barcha xodimlar'" icon="pi pi-users" class="ml-4 bg-blue-100 text-blue-500 text-sm font-semibold cursor-pointer" />
            <Chip :label="allBedroom.toString()" v-tooltip.bottom="'Joriy yil uchun barcha yotoqxonaga zarurati yo\'q  xodimlar'" icon="pi pi-building" class="mx-2 bg-blue-100 text-blue-500 text-sm font-semibold cursor-pointer" />
            
           
          </span>
          <Button
            label="Yuklash"
            @click="get_Skill_Exports()"
            class="
              p-button-raised p-button-success p-button-sm
              absolute
              right-0
              mr-2
            "
            icon="pi pi-arrow-circle-down"
          />
        </div>
      </div>
    </div>

    <!-- Header section -->
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
          <Dropdown
            v-model="get_qualification"
            :options="get_qualificationList"
            optionLabel="name"
            placeholder="Tayorlov turini tanlang"
            class="w-full p-inputtext-sm"
            @change="changeQualification"
          />
        </div>

        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <Dropdown
            id="adressDistrict"
            v-model="get_apparat"
            :options="get_apparatList"
            optionLabel="name"
            :filter="true"
            placeholder="Xo'jalikni tanlang"
            class="w-full p-inputtext-sm"
            @change="changeApparats"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value w-full"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item w-full">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <Dropdown
            id="adressDistrict"
            v-model="get_direction"
            :options="get_directionList"
            optionLabel="name"
            :filter="true"
            placeholder="Yo'nalishni tanlang"
            class="w-full p-inputtext-sm"
            @change="changeDirection"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value w-full"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item w-full">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
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
                v-model="get_data_qual"
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
        :value="statisticList"
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
                w-full
                text-center text-sm
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
        <Column field="name" style="min-width: 50px; width: 50px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Ko'rish
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
                v-show="slotProps.data.upgrades == 0"
                class="w-full text-center text-400"
              >
                <i class="pi pi-eye-slash text-2xl cursor-pointer"></i>
              </div>
              <div
                v-show="slotProps.data.upgrades !== 0"
                class="w-full text-center text-blue-600"
              >
                <i @click="goOrganization(slotProps.data.id, slotProps.data.name)" class="pi pi-eye text-2xl cursor-pointer"></i>
              </div>
            </div>
          </template>
        </Column>

        <Column field="name" style="min-width: 50px; width: 60px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Xodimlar
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
                v-show="slotProps.data.upgrades == 0"
                class="w-full text-center text-400"
              >
                {{ slotProps.data.upgrades }}
              </div>
              <Chip
                v-show="slotProps.data.upgrades !== 0"
                :label="slotProps.data.upgrades.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-medium"
              />
            </div>
          </template>
        </Column>

        <Column style="min-width: 50px; width: 160px">
          <template #header>
            <div class="text-800 font-semibold">
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
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalItem"></no-data-component>
    </div>
    <div class="col-12 pt-0" v-show="loadingtable">
      <skill-loader></skill-loader>
    </div>
    <div class="col-12" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        :name="'Malaka oshirish rejasi - '+ params.date_qual+ ` (${formatter.textDateFormat((new Date()))})` "
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
import formatter from "../../util/formatter";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
    TablePagination,
    SkillLoader,
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
      formatter,

      statisticList: [],
      totalItem: 0,
      allCadry:0,
      allBedroom:0,
      search_name: null,
      date1: "2022",
      loadingtable: false,

      params: {
        date_qual: "2022",
        search: null,
        page: localStorage.getItem("page_7")
          ? Number(localStorage.getItem("page_7"))
          : 1,
        per_page: localStorage.getItem("per_page_7")
          ? Number(localStorage.getItem("per_page_7"))
          : 10,
        apparat_id: null,
        training_direction_id: null,
      },

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
  computed:{
    ...mapGetters(["get_qualificationList", "get_apparatList","get_directionList","get_qualification","get_apparat", "get_direction", "get_data_qual"   ])
  },

  methods: {
    ...mapActions(["set_qualificationList", "set_apparatList", "set_directionList","set_qualification","set_apparat","set_direction", "set_data_qual" ]),
    get_Statistic(params, loader) {
      this.controlLoader(loader);
      SkillService.get_Skill_Statistic(params).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.railways.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.statisticList = res.data.railways.data;
        this.allCadry = res.data.upgrades_count;
        this.allBedroom = res.data.upgrades_count_bedroom;

        this.totalItem = res.data.railways.pagination.total;

        this.controlLoader(false);
      });
    },
    get_Apparats() {
      SkillService.get_Skill_Apparats({
        params: {
          page: 1,
          per_page: 1000,
          search: null,
        },
      }).then((res) => {
        this.qualificationList = res.data.type_qualifications;
        this.set_qualificationList(res.data.type_qualifications)
        this.List = res.data.apparats.data;
      });
    },
    get_Directions() {
      SkillService.get_Skill_Direction({
        params: {
          page: 1,
          per_page: 1000,
          search: null,
        },
      }).then((res) => {
        this.set_directionList( res.data.directions.data.filter(
          (item) => item.apparat.id == this.get_apparat.id
        ))
      });
    },
    get_Skill_Exports() {
      SkillService.get_Skill_Export({ date_qual: this.params.date_qual }).then(
        (res) => {
          this.jsonData = [];
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

    goOrganization(railway_id,name){
      this.$router.push(`/admin/skill/organization/${this.apparat? this.apparat.id : null}/${this.direction? this.direction.id : null}/${this.params.date_qual}/${railway_id}/${name}`)

    },

    changeApparats(event) {
      this.params.apparat_id = event.value.id;
      this.set_apparat(event.value);
      this.set_direction(null);
      this.set_directionList([])
      this.get_Statistic(this.params, true);
      this.get_Directions();
    },
    changeDirection(event) {
      this.set_direction(event.value)
      this.params.training_direction_id = event.value.id;
      this.get_Statistic(this.params, true);
    },
    changeQualification(event) {
      this.set_qualification(event.value)
      this.set_apparat(null);
      this.set_direction(null);
      this.set_directionList([])
      this.set_apparatList([])
      this.set_apparatList( this.List.filter(
        (item) => item.type_qualification.id == this.get_qualification.id
      ));
      this.get_Statistic(this.params, true);
    },

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      localStorage.setItem("page_7", event.page);
      localStorage.setItem("per_page_7", event.per_page);
      this.get_Statistic(this.params, true);
    },
    changeDate(event) {
      this.set_data_qual(event)
      this.params.date_qual = new Date(this.get_data_qual).getFullYear();

      this.get_Statistic(this.params, true);
    },
    searchByName() {
      this.params.search = this.search_name;
      this.get_Statistic(this.params, true);
    },
    controlLoader(item) {
      this.loadingtable = item;
    },
  },
  created() {
    if(this.get_qualification){
      this.params.apparat_id = this.get_apparat? this.get_apparat.id : null;
      this.params.training_direction_id = this.get_direction? this.get_direction.id : null;
      this.params.date_qual = new Date(this.get_data_qual).getFullYear()
      this.get_Statistic(this.params, true);
      this.params
    }else{
      this.get_Statistic(this.params, true);
    }
    
    this.get_Apparats();
  },
};
</script>
