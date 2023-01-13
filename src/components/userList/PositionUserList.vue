<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Shtatlar', path: '/admin/position' },{ name: 'Xodimlar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="xl:text-lg lg:text-base text-sm font-semibold"
            >
            <span class="text-blue-600">{{ positionName }}</span>
                shtat lavozimidagi xodimlar ro'yhati
              
          </span>
        </div>
      </div>
    </div>
    <div class="col-12" v-show="loader">
      <user-list-loader></user-list-loader>
    </div>
    <div class="col-12 py-0" v-show="!loader">
      <DataTable
        ref="dt"
        :value="cadryList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
        v-show="totalCadries"
      >
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.photo"
                :alt="slotProps.data.fullname"
                width="30"
                height="30"
                preview
              />
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">F.I.O</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-medium
                text-left
              "
            >
              {{ slotProps.data.fullname }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">To'liq shtat lavozim nomi</div>
          </template>
          <template #body="slotProps">
            <div class="text-sm sm:text-sm md:text-md lg:text-lg">
              {{ slotProps.data.staff.staff_full }}
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalCadries > 10"
            :total_page="totalCadries"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalCadries"></no-data-component>
      
    </div>
  
   
  </div>
</template>
<script>
  import ViewButtonV from "../buttons/ViewButtonV.vue";
import employeeService from "../../service/servises/employeeService";
import UserListLoader from "../loaders/UserListLoader.vue";
import NoDataComponent from "../EmptyComponent/NoDataComponent.vue";
import TablePagination from "../Pagination/TablePagination.vue";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
export default {
  components:{
    UserListLoader,
    ViewButtonV,
    NoDataComponent,
    BreadCrumb,
    TablePagination,
  },
  data() {
    return {
      positionName: null,
      loader:false,
      cadryList: [],
      totalCadries: 0,
      organization: {
        railway_id: null,
        organization_id: null,
        department_id: null,
        per_page: 10,
        page: 1,
        last_name: null,
        first_name: null,
        middle_name: null,
        staff_id: null,
        sex: null,
        vacation_id: null,
        education_id: null,
        age_start: null,
        age_end: null,
        region_id: null,
      },
    };
  },
  methods: {
    get_Position_Cadry(id) {
      this.organization.staff_id = id;
      this.controlLoader(true)
      employeeService
        .get_Employees(this.organization)
        .then((res) => {
          
          this.totalCadries = res.data.cadries.pagination.total;
          let cadrList = [];
          let number =
            (this.organization.page - 1) * this.organization.per_page;
          res.data.cadries.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });

          this.cadryList = res.data.cadries.data;

          this.controlLoader(false)
        })
        .catch((error) => {
          console.log(error);
          this.controlLoader(false)
        });
    },
    goPush() {
      this.$router.push("/admin/position");
    },
    changePagination(event) {
      this.position.page = event.page;
      this.position.per_page = event.per_page;
      this.get_Position_Cadry(this.$route.params.position_id);
    },
    controlLoader(item){
      this.loader = item
    }
  },
  created() {
    this.positionName = this.$route.params.position_name;
    this.get_Position_Cadry(this.$route.params.position_id);
  },
};
</script>
<style lang="scss">
</style>