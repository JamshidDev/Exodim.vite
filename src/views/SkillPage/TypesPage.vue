<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Xo\'jaliklar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Xo'jaliklar
            <span class="text-base text-primary pl-2"> ({{ totalItem }})</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 xl:col-6 lg:col-6 md:col-6 sm:col-6">
          <InputText
            type="text"
            v-model="params.search"
            placeholder="Nomi orqali qidiruv"
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
        </div>

        <div
          class="
            col-12
            xl:col-6
            lg:col-6
            md:col-6
            sm:col-6
            flex
            justify-content-end
            align-items-center
          "
        >
          <Button
            icon="pi pi-plus"
            label="Qo'shish"
            class="p-button-info p-button-sm"
            @click="addItem()"
            v-tooltip.bottom="`Xo'jalik qo'shish`"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-12 py-0" v-show="!loader">
      <DataTable
        ref="dt"
        :value="List"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalItem"
        v-model:selection="selectitem"
        selectionMode="single"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Nomi
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
                font-medium
              "
            >
              <div>{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 140px; width: 140px">
          <template #header>
            <div class="text-800 font-semibold">Ta'lim turi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                text-center
              "
            >
              <Chip
                :label="slotProps.data.type_qualification.name.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-bold"
              />
            </div>
          </template>
        </Column>



        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Yo'nalishlar</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                text-center
              "
            >
              <Chip
                :label="slotProps.data.directions.toString() "
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-bold"
              />
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItem($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItem($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItem>10"
            :total_page="totalItem"
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalItem"></no-data-component>
    </div>
    <div class="col-12 py-0" v-show="loader">
      <types-loader></types-loader>
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
            {{
              apparatDialogtype
                ? " Xo'jalik qo'shish "
                : "Xo'jalikni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Ta'lim turi</h6>
            <Dropdown
              id="bornRegion"
              v-model="type_qualification"
              :options="type_qualification_List"
              optionLabel="name"
              optionValue="id"
              placeholder="Tanlang"
              class="w-full"
              :class="{ 'p-invalid': qualification_Error && submitted }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Nomi</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="apparatName"
              :class="{ 'p-invalid': apparatName_Error && submitted }"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="addAndEdit()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
    <div class="col-12" v-show="false">
        <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import TablePagination from "@/components/Pagination/TablePagination";
import SkillService from "@/service/servises/SkillService";
import DeleteButton from "../../components/buttons/DeleteButton.vue";
import EditButton from "../../components/buttons/EditButton.vue";
import NoDataComponent from "../../components/EmptyComponent/NoDataComponent.vue";
import TypesLoader from "../../components/loaders/TypesLoader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    TablePagination,
    DeleteButton,
    EditButton,
    NoDataComponent,
    TypesLoader,
  },

  data() {
    return {
      List: [],
      selectitem: null,
      apparatDialogtype: true,
      submitted: false,
      dialog: false,
      loader:false,

      type_qualification_List:[],
      type_qualification:null,


      params: {
        page: localStorage.getItem("page_6")
          ? Number(localStorage.getItem("page_6"))
          : 1,
          per_page:localStorage.getItem("per_page_6")
          ? Number(localStorage.getItem("per_page_6"))
          : 10,
        search: null,
      },

      totalItem: 0,
      apparatName: null,
      apparat_id:null,
    };
  },
  methods: {
    ...mapActions(["set_type_page_search"]),
    get_skill_Types(params, loader) {
      this.controlLoader(loader)
      SkillService.get_Skill_Apparats({ params: params }).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.apparats.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.List = res.data.apparats.data;
        this.type_qualification_List = res.data.type_qualifications
        this.totalItem = res.data.apparats.pagination.total;
        this.controlLoader(false)
      });
    },

    addItem() {
      this.submitted = false;
      this.apparatDialogtype = true;
      this.apparatName = null;
      this.type_qualification = null;
      this.controlDialog(true);
    },
    editItem(event){
        this.submitted = false;
      this.apparatDialogtype = false;
      this.apparatName = event.name;
      this.apparat_id = event.id;
      this.type_qualification = event.type_qualification.id;
      this.controlDialog(true);
    },

    addAndEdit() {
      this.submitted = true;
      if (!this.apparatName_Error && !this.qualification_Error) {
        this.controlDialog(false);
        let data = {
          name: this.apparatName,
          type_qualification_id:this.type_qualification
        };
        if (this.apparatDialogtype) {
            SkillService.create_Skill_Apparats({data }).then(
            (res) => {
              this.get_skill_Types(this.params, false);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Qo'shildi",
                life: 2000,
              });
            }
          );
        } else {
          SkillService.update_Skill_Apparats({ apparat_id: this.apparat_id , data }).then(
            (res) => {
              this.get_skill_Types(this.params, false);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Tahrirlandi",
                life: 2000,
              });
            }
          );
        }
      }
    },
    deleteItem(id) {
      SkillService.delete_Skill_Apparats({ apparat_id: id }).then((res) => {
        this.get_skill_Types(this.params, false);
        this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "O'chirildi",
            life: 2000,
          });
      }).catch((error)=>{
        this.$toast.add({
              severity: "warn",
              summary: "Xatolik",
              detail: "Yo'nalish mavjud",
              life: 2000,
            });
      })
    },
    searchByName() {
      this.set_type_page_search(this.params.search)
      this.get_skill_Types(this.params, true);
    },
    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      localStorage.setItem("page_6", event.page);
      localStorage.setItem("per_page_6", event.per_page);
      this.get_skill_Types(this.params, true);
    },
    controlDialog(item) {
      this.dialog = item;
    },
    controlLoader(item){
      this.loader = item;
    },
  },
  computed: {
    ...mapGetters(["get_type_page_search"]),
    apparatName_Error() {
      if (!this.apparatName) {
        return true;
      } else {
        return false;
      }
    },
    qualification_Error(){
      if (!this.type_qualification) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if(this.get_type_page_search){
      this.params.search =  this.get_type_page_search;
      this.get_skill_Types(this.params, true);
    }else{
      this.get_skill_Types(this.params, true);
    }
    
  },
};
</script>
<style lang="">
</style>