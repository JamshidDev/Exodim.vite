<template>
  <div class="grid py-2 px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Bo\'limlar', path: '/admin/partfactory' }, { name: 'Xodimlar', path: ' ' }]"></bread-crumb>
        </div>
        <div class="col-12 py-0">
          <span class="xl:text-base lg:text-base text-sm font-semibold"> <span class="text-blue-600">{{ department_name
          }}</span>
            bo'limidagi xodimlar ro'yhati
          </span>
        </div>
      </div>
    </div>

    <div class="col-12 pt-1" v-show="!loader">
      <DataTable ref="dt" :value="cadryList" dataKey="id"  v-model:selection="selectitem" selectionMode="multiple" responsiveLayout="scroll" showGridlines class="p-datatable-sm"
        stripedRows v-show="totalCadries > 1">
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center text-sm font-normal">
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
              <Image :src="slotProps.data.photo" :alt="slotProps.data.fullname" width="30" height="30" preview />
            </div>
          </template>
        </Column>

        <Column style="min-width:100px;">
          <template #header>
            <div class="text-800 font-semibold">F.I.O</div>
          </template>
          <template #body="slotProps">
            <div class="
                  text-sm
                  lg:text-base
                  xl:text-base
                  font-normal
                  text-left
                ">
              {{ slotProps.data.fullname }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Status</div>
          </template>
          <template #body="slotProps">
            <div v-if="slotProps.data.staff.status_fdecret == 1" class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip label=" Dekretdagi xodim o'rniga" class="mr-2 mb-2 text-sm text-cyan-700  border-1 border-cyan-400 bg-cyan-100 font-normal" />

            </div>
          </template>
        </Column>


        <Column style="min-width: 100px; width: 160px">
          <template #header>
            <div class="text-800 font-semibold">Sverx</div>
          </template>
          <template #body="slotProps">
            <div v-if="slotProps.data.staff.status_sv == 1" class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip label="Ortiqcha ish o'rni" class="mr-2 mb-2 text-sm text-reg-700 border-1 border-red-400 bg-red-100 font-normal" />

            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Ta'til turi</div>
          </template>
          <template #body="slotProps">
            <div v-if="slotProps.data.staff.status_vacation != 3" class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip :label="checkVacation(slotProps.data.staff.status_vacation)" class="mr-2 mb-2 text-sm text-yellow-700 border-1 border-yellow-400 bg-yellow-100 font-normal" />

            </div>

            <!-- <div v-if="slotProps.data.staff.status_vacation == 3" class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip :label="checkVacation(slotProps.data.staff.status_vacation)" class="mr-2 mb-2 text-sm text-teal-700 bg-teal-100 border-1 border-teal-700 font-normal" />

            </div> -->
          </template>
        </Column>


        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Faoliyat turi</div>
          </template>
          <template #body="slotProps">
            <div class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip :label="slotProps.data.staff.staff_status" class="mr-2 mb-2 text-sm text-green-700 bg-green-100 border-1 border-green-400 font-normal" />

            </div>

          </template>
        </Column>
        <Column style="min-width: 50px; width: 50px">
          <template #header>
            <div class="text-800 font-semibold">Stavka</div>
          </template>
          <template #body="slotProps">
            <div class="
                  w-full
                   flex
                   justify-content-center
                   ">
              <Chip :label="slotProps.data.staff.rate" class="mr-2 mb-2 text-sm text-cyan-700 bg-cyan-100 border-1 border-cyan-400 font-medium" />

            </div>

          </template>
        </Column>

        

        <Column :exportable="false" style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <!-- <view-button-v
                  v-tooltip.bottom="`Xodimlarni ko'rish`"
                  :icon="'pi-users'"
                ></view-button-v> -->
              <edit-button :editItem="slotProps.data.id" @editEvent="editItem($event)"></edit-button>
              <!-- <delete-button
                  :deleteItem="slotProps.data.id"
                  @deleteAcceptEvent="deletePosition($event)"
                ></delete-button> -->
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination v-show="totalCadries > 10" :total_page="totalCadries"
            @pagination="changePagination($event)"></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="totalCadries < 1"></no-data-component>

    </div>
    <div class="col-12" v-show="loader">
      <user-list-loader></user-list-loader>
    </div>
  </div>
</template>
<script>
import DepartmentService from "../../service/servises/DepartmentService";
import UserListLoader from "../loaders/UserListLoader.vue";
import EditButton from "../buttons/EditButton.vue";
import TablePagination from "../Pagination/TablePagination.vue";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
import NoDataComponent from "../EmptyComponent/NoDataComponent.vue";
export default {
  components: {
    UserListLoader,
    EditButton,
    TablePagination,
    BreadCrumb,
    NoDataComponent,
  },
  data() {
    return {
      department_name: null,
      selectitem:null,
      vacationList: [],
      loader: false,
      cadryList: [],
      totalCadries: 0,
      params: {
        page: 1,
        per_page: 10,
      },
    };
  },
  methods: {
    get_DepartmentCadry(id, params, loader) {
      this.controlLoader(loader);
      DepartmentService.get_DepartmentCadry({ id, params }).then((res) => {
        this.totalCadries = res.data.cadries.pagination.total;
        this.vacationList = res.data.status_vacation;
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.cadries.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.cadryList = res.data.cadries.data;
        this.controlLoader(false);
      });
    },

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page
      this.get_DepartmentCadry(this.$route.params.id, this.params, true);
    },


    goPush() {
      this.$router.push("/admin/partfactory");
    },
    editItem(id) {
      this.$router.push(`/admin/editemployee/${id}`)
    },
    checkVacation(id) {
      return this.vacationList.filter((item) => item.id == id)[0].name
    },
    controlLoader(item) {
      this.loader = item;
    },
  },
  created() {
    this.department_name = this.$route.params.name;
    this.get_DepartmentCadry(this.$route.params.id, this.params, true);
  },
};
</script>
<style lang="scss"></style>