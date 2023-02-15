<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb :breadCump="[
            { name: 'Statistika', path: this.global ? '/admin/statistic' : '/admin/partstatistic' },
            { name: 'Yangi xodimlar', path: '' },
          ]"></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold">Ishga qabul qilingan xodimlar -
            <span class="text-base text-primary pl-2">
              ({{ totalItem }})</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-6">
          <InputText type="text" v-model="params.search" class="p-inputtext-sm" placeholder="Qidiruv"
            @keyup.enter="searchBtn()" />
        </div>
        <div class="col-6 flex justify-content-end">
          <Calendar inputId="range" @date-select="changeCalendar" dateFormat="dd/mm/yy" v-model="rangeDate"
            selectionMode="range" class="p-inputtext-sm font-bold" :manualInput="false" />
        </div>

      </div>
    </div>

    <div class="col-12" v-show="!loading">
      <DataTable ref="dt" :value="List" dataKey="id" responsiveLayout="scroll" showGridlines class="p-datatable-sm"
        v-show="List.length > 0">
        <Column style="min-width:30px; width:36px">
          <template #header>
            <div class="text-800 text-sm font-medium">
              No
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-sm font-normal">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 50px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Rasm
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image :src="slotProps.data.photo" alt="Rasm yo'q" width="30" height="30" preview />
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:200px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">F.I.SH</div>
          </template>
          <template #body="slotProps">
            <div class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-normal">
              {{
                slotProps.data.fullname
              
              }}
            </div>
          </template>
        </Column>

        <Column style="min-width:100px;">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Lavozimi
            </div>
          </template>
          <template #body="slotProps">
            <div class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">
              <span class="text-primary">
                {{
                  formatter.outDateFormatter(slotProps.data.staff.staff_date)
                
                }}
              </span>
              {{
                slotProps.data.staff.staff_full
              }}
            </div>

          </template>
        </Column>


        <Column style="min-width: 100px; width:250px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">

              {{ global? 'Korxona nomi': 'Bo\'lim nomi' }}
            </div>
          </template>
          <template #body="slotProps">
            <div class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">
              <div v-show="global">{{ slotProps.data.organization.name }}</div>
              <div v-show="!global">{{ slotProps.data.staff.department_id.name }}</div>
            </div>
          </template>
        </Column>
        <Column style="min-width: 60px; width:100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">

              Faoliyat turi
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-green-600 font-normal text-center">
              <div>{{ slotProps.data.staff.staff_status }}</div>
            </div>
          </template>
        </Column>
        <Column style="min-width: 60px; width:80px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">

              Stavkasi
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-green-600 font-normal text-center">
              <div>{{ slotProps.data.staff.rate }}</div>
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex w-full align-items-center gap-2">
              <download-button :color="'bg-primary active:bg-primary'" :border="'border-1 border-primary border-round'"
                v-tooltip.left="`Ma'lumotlarni ko'rish`" :icon="'pi pi-id-card'"
                @click="goPushDetails(slotProps.data.id)"></download-button>
              <download-button v-tooltip.left="`Ma'lumotlarni yuklash`" :color="'bg-green-600 active:bg-green-600'"
                :border="'border-1 border-green-600 border-round'" :icon="'pi pi-cloud-download'"
                @click="DowloadResume(slotProps.data.id)"></download-button>
            </div>
          </template>
        </Column>




        <template #footer>
          <table-pagination v-show="totalItem > 10" :total_page="totalItem" :page="params.page"
            :per_page="params.per_page" @pagination="changePagination($event)"></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!List.length > 0"></no-data-component>
    </div>
    <div class="col-12" v-show="loading">
      <birthday-loader></birthday-loader>
    </div>
    <div class="col-12" v-show="false">
      <word-template ref="word_resume"></word-template>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb.vue";
import ViewService from '@/service/servises/ViewService'
import TablePagination from "../../../components/Pagination/TablePagination.vue";
import NoDataComponent from "../../../components/EmptyComponent/NoDataComponent.vue";
import BirthdayLoader from "../../../components/loaders/BrithdayLoader.vue"
import formatter from "../../../util/formatter";
import DownloadButton from '@/components/buttons/DownloadButton.vue'
import WordTemplate from "../../../components/Eksport/WordTemplate.vue";
import EmployeeDetails from "../../../components/partEmployee/EmployeeDetails.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    TablePagination,
    NoDataComponent,
    BirthdayLoader,
    DownloadButton,
    WordTemplate,
    EmployeeDetails,
  },
  data() {
    return {
      formatter,
      loading: false,
      global: true,
      rangeDate: [new Date(), new Date()],
      params: {
        railway_id: null,
        organization_id: null,
        department_id: null,
        page: 1,
        per_page: 10,
        search: null,
        date1: null,
        date2: null,

      },
      today: new Date(),


      List: [],
      totalItem: 0,
      totalcount: 0,
    };
  },
  methods: {
    ...mapActions(["set_new_cadry_date"]),
    get_List(params) {
      this.controlLoaser(true)
      this.params.date1 = this.formatter.outDateFormatter(this.rangeDate[0])
      this.params.date2 = this.formatter.outDateFormatter(this.rangeDate[1])
      ViewService.get_ViewNewCadry(params).then((res) => {
        console.log(res.data);
        let number =
          (this.params.page - 1) * this.params.per_page;
        res.data.cadries.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.List = res.data.cadries.data;
        this.totalItem = res.data.cadries.pagination.total;

        this.controlLoaser(false)
      })
    },
    changeCalendar() {
      if (this.rangeDate[1] !== null) {
        this.set_new_cadry_date({
          date1: this.rangeDate[0],
          date2: this.rangeDate[1],
        })
        this.get_List(this.params)
      }
    },
    DowloadResume(id) {
      this.$refs.word_resume.generateWord(id);
    },
    goPushDetails(id) {
      this.$router.push(`/admin/employee/view/${id}`);
    },
    searchBtn() {
      this.get_List(this.params)
    },
    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_List(this.params)
    },
    controlLoaser(item) {
      this.loading = item;
    }
  },
  computed: {
    ...mapGetters(["get_new_cadry_date"])
  },
  created() {
    this.params.railway_id = JSON.parse(this.$route.params.railway_id);
    this.params.organization_id = JSON.parse(this.$route.params.organization_id);
    this.params.department_id = JSON.parse(this.$route.params.department_id);
    this.global = this.$route.params.global == "1" ? true : false;
    if (this.get_new_cadry_date.date1) {
      this.rangeDate[0] = this.get_new_cadry_date.date1
      this.rangeDate[1] = this.get_new_cadry_date.date2
      this.get_List(this.params)

    } else {
      this.get_List(this.params)
    }

  }
};
</script>
<style lang="">
</style>