<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[
              { name: 'Arxivdagi xodimlar', path: '/admin/partemployee' },
            ]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Arxivdagi xodimlar
            <span class="text-base text-primary pl-2"> ({{ totalItems }})</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 p-fluid">
          <InputText
            type="text"
            v-model="params.last_name"
            class="w-full p-inputtext-sm"
            placeholder="Familiya kiriting"
            @keyup.enter="get_List(true)"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 p-fluid">
          <InputText
            type="text"
            v-model="params.first_name"
            class="w-full p-inputtext-sm"
            placeholder="Ismn kiriting"
            @keyup.enter="get_List(true)"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4 p-fluid">
          <InputText
            type="text"
            v-model="params.middle_name"
            class="w-full p-inputtext-sm"
            placeholder="Sharif kiriting"
            @keyup.enter="get_List(true)"
          />
        </div>
      </div>
    </div>

    <div class="col-12 pt-0" v-show="!loading">
      <DataTable
        ref="dt"
        :value="cadryList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalItems > 0"
        v-model:selection="selectitem"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
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
              <Image
                :src="slotProps.data.photo"
                alt="Rasm yo'q"
                width="30"
                height="30"
                preview
              />
            </div>
          </template>
        </Column>

        <Column field="name" style="min-width: 100px; width: 300px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              F.I.SH
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
                cursor-pointer
              "
            >
              <div>{{ slotProps.data.fullname }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Lavozimi</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
              {{
                slotProps.data.staff_full
                  ? slotProps.data.staff_full
                  : `Tizimda ma'lumot yo'q`
              }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Prikaz raqami
            </div>
          </template>
          <template #body="slotProps">
            <div
              class=" text-800 text-sm font-normal
              "
            >
              <span>{{ slotProps.data.command_number }}</span>
            </div>
          </template>
        </Column>

        <Column style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Izohlar
            </div>
          </template>
          <template #body="slotProps">
            <div class="text-sm font-normal">
              <span>{{ slotProps.data.comment }}</span>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 50px; width: 50px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex w-full align-items-center justify-content-center">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="open_dialog($event)"
              ></edit-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItems > 10"
            :total_page="totalItems"
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
     
    </div>
    <div class="col-12 pt-0" v-show="loading">
        <employee-loader></employee-loader>
    </div>
    <div class="col-12">
      <Dialog
        v-model:visible="dialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500 font-medium">
            Pasport JSHRni tahrirlash <span class="text-sm text-green-500 capitalize"> ( {{edit_fullname}} )</span>
          </h6>
        </template>
        <div class="grid pt-2">
         
          
          <div class="col-12">
            <h6 class="mb-1 pl-2 text-500">Passport JSHR</h6>
            <InputText
              type="number"
              id="archive_jshr"
              v-model.trim="passport_JSHR"
              placeholder="JSHRni kiriting"
              class="w-full p-inputtext-sm text-base font-medium"
              :class="{ 'p-invalid': !pinfl_Error && submitted }"
              @keyup.enter="passport_JSHR"
              v-maska="'##############'"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="edit_CadryInfo()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
    <div class="col-12">
      <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import TablePagination from "../../components/Pagination/TablePagination.vue";
import EmployeeLoader from "../../components/loaders/EmployeeLoader.vue";
import Archive from "@/service/servises/Archive";
import EditButton from "../../components/buttons/EditButton.vue";
export default {
  components: {
    BreadCrumb,
    TablePagination,
    EmployeeLoader,
    EditButton,
  },
  data() {
    return {
      selectitem: null,
      cadryList: [],
      totalItems: 0,
      loading:false,
      params: {
        page:localStorage.getItem("page_9")? Number(localStorage.getItem("page_9")) : 1,
        per_page:localStorage.getItem("per_page_9")? Number(localStorage.getItem("per_page_9")) : 10,
        last_name: null,
        first_name: null,
        middle_name: null,
      },
      dialog:false,
      passport_JSHR:null,
      edit_user_id:null,
      edit_fullname:null,
      submitted:false,
    };
  },
  computed:{
    pinfl_Error(){
      if(this.passport_JSHR && this.passport_JSHR.length == 14){
        return true
      }else{
        return false
      }
    }
  },
  methods: {
    get_List(loader) {
        this.loading = true;
      Archive.archive_CadryList(this.params).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.cadries.data.forEach((item) => {
          number++;
          item.number = number;
          // this.selectitem.push(item);
        });
        this.totalItems = res.data.cadries.pagination.total;
        this.cadryList = res.data.cadries.data;
        this.loading = false;
      });
    },
    open_dialog(event){
      this.edit_user_id = event.id;
      this.passport_JSHR = event.pinfl;
      this.edit_fullname = event.fullname;
      this.dialog = true;
      this.submitted = false;
    },
    edit_CadryInfo(){
      this.submitted = true;
      if(this.pinfl_Error){
        this.dialog = false;
        Archive.update_CadryPinfl({archive_cadry_id: this.edit_user_id, data:{pinfl: this.passport_JSHR}}).then((res) =>{
          console.log(res.data.status);
          if(res.data.status){
            this.$toast.add({
            severity: "success",
            summary: `${res.data.message}`,
            detail: "",
            life: 2000,
          });
          this.get_List();
          }else{
            this.$toast.add({
            severity: "warn",
            summary: `${res.data.message}`,
            detail: `${res.data.cadry.fullname}(${res.data.cadry.organization})`,
            life: 3000,
          });
          }
        })
        
      }else{
      }
      
    },
    
    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      localStorage.setItem("page_9", event.page);
      localStorage.setItem("per_page_9", event.per_page);
      this.get_List();
    },
  },
  created() {
    this.get_List();
  },
};
</script>
<style lang="">
</style>