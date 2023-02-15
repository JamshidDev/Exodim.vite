<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb :breadCump="[{name:'Bo\'limlar', path:'/admin/partfactory'}, {name:'Shtatlar', path:`/admin/department/stuff/${$route.params.depId}/${$route.params.depName}`},{name:'Xodimlar', path:''}]"></bread-crumb>
        </div>
        <div class="col-12 y-0 pt-0 pb-1">
          <span class="xl:text-base lg:text-base text-sm font-semibold"
            > <span class="text-blue-600">{{ stuff_name }}</span>
                lavozimidagi xodimlar ro'yhati
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 pt-1" v-show="!loader">
        <DataTable
        ref="dt"
        :value="stuffCadryList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
        v-show="totalPage"
        v-model:selection="selectitem" selectionMode="single"
      >
        <Column header="" style="min-width:30px; width:36px">
          <template #header>
            <div class="text-800 font-semibold">No</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-sm font-normal">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column  style="min-width: 60px; width: 60px">
            <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.cadry.photo"
                :alt="slotProps.data.cadry.fullname"
                width="30"
                height="30"
                preview
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">F.I.O</div>
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
              {{ slotProps.data.cadry.fullname }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Faoliyat turi</div>
          </template>
          <template #body="slotProps">
            <div v-show="slotProps.data.staff_status=='Asosiy'" class=" text-sm
            text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-normal text-center text-green-500">
              {{ slotProps.data.staff_status }}
            </div>
            <div v-show="slotProps.data.staff_status!=='Asosiy'" class=" text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-normal text-center text-yellow-500">
              {{ slotProps.data.staff_status }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 30px; width: 50px">
          <template #header>
            <div class="text-800 font-semibold">Stavkasi</div>
          </template>
          <template #body="slotProps">
            <div class=" text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                 text-center ">
              {{ slotProps.data.rate }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 180px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Ta'til</div>
          </template>
          <template #body="slotProps">
            <div v-show="slotProps.data.status_vacation != 3" class=" min-w-full min-h-full bg-yellow-500">
              {{checkVacation(vacationList, slotProps.data.status_vacation)}}
            </div>
            <div v-show="slotProps.data.status_vacation == 3" class="">
              {{checkVacation(vacationList, slotProps.data.status_vacation)}}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <edit-button :editItem="slotProps.data.cadry.id"  @editEvent="editItem($event)"></edit-button>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalPage > 10"
            :total_page="totalPage"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalPage"></no-data-component>
    </div>
    <div class="col-12 pt-1" v-show="loader">
        <user-list-loader></user-list-loader>
      </div>
  </div>
</template>
<script>
import EditButton from "../buttons/EditButton.vue";
import DepartmentStuffService from "@/service/servises/DepartmentStuffService";
import TablePagination from "../Pagination/TablePagination.vue";
import UserListLoader from "../loaders/UserListLoader.vue";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
import NoDataComponent from "../EmptyComponent/NoDataComponent.vue";
export default {
  components:{
    TablePagination,
    UserListLoader,
    EditButton,
    BreadCrumb,
    NoDataComponent,
  },
  data() {
    return {
      stuffCadryList: [],
      vacationList:[],
      totalPage:0,
      selectitem:null,

      stuff_name: "",
      loader: false,
      params: {
        page: 1,
        per_page: 10,
      },
    };
  },
  methods: {
    get_StuffCadry(id, params, loader) {
      this.controlLoader(loader)
      DepartmentStuffService.get_StuffCadry({ id, params })
        .then((res) => {
          this.totalPage = res.data.department_cadries.pagination.total
          let cadrList = [];
          let number = (this.params.page - 1) * this.params.per_page;
          res.data.department_cadries.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.vacationList = res.data.status_vacation
          this.stuffCadryList = res.data.department_cadries.data;
          this.controlLoader(false)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_StuffCadry(this.$route.params.id, this.params, true);
    },
    editItem(id){
      this.$router.push(`/admin/editemployee/${id}`)
    },
    checkVacation(array, id){
     return array.filter((item)=>item.id == id)[0].name
    },
    controlLoader(item){
      this.loader =item
    },
  },
  created() {
    this.stuff_name = this.$route.params.name;
    this.get_StuffCadry(this.$route.params.id, this.params, true);
  },
};
</script>
