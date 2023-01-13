<template>
  <div class="grid px-3 min-w-full">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Dual ta\'lim', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-1 relative">
          <span class="text-2xl font-semibold"
            >Texnikumlar
            <span class="text-base text-primary pl-2"> ( {{ totalItem }} )</span>
            <!-- <Chip :label="allCadry.toString()" v-tooltip.bottom="'Joriy yil uchun barcha xodimlar'" icon="pi pi-users" class="ml-4 bg-blue-100 text-blue-500 text-sm font-semibold cursor-pointer" />
            <Chip :label="allBedroom.toString()" v-tooltip.bottom="'Joriy yil uchun barcha yotoqxonaga zarurati yo\'q  xodimlar'" icon="pi pi-building" class="mx-2 bg-blue-100 text-blue-500 text-sm font-semibold cursor-pointer" /> -->
          </span>
        </div>
      </div>
    </div>

    <!-- table section -->
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 xl:col-6 lg:col-6 md:col-6 sm:col-6"></div>

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
            @click="AddItem()"
            v-tooltip.bottom="`Texnikum qo'shish`"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-12 pt-0" v-show="!loading">
      <DataTable
        ref="dt"
        :value="List"
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
              Texnikum nomi
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
                @editEvent="EditItem($event)"
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
            v-show="totalItem > 10"
            :total_page="totalItem"
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="totalItem == 0"></no-data-component>
    </div>

    <div class="col-12 pt-0" v-show="loading">
      <dual-loader></dual-loader>
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
            {{ dialogType ? "Texnikum qo'shish " : "Texnikumni tahrirlash" }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Texnikum nomi</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="technical_Name"
              :class="{ 'p-invalid': technical_Name_Error && submitted }"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="EditAndAdd()"
              />
            </div>
          </div>
        </template>
      </Dialog>
      <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import NoDataComponent from "@/components/EmptyComponent/NoDataComponent";
import TablePagination from "@/components/Pagination/TablePagination";
import DualService from "@/service/servises/DualService";
import EditButton from "../../components/buttons/EditButton.vue";
import DeleteButton from "../../components/buttons/DeleteButton.vue";
import DualLoader from "@/components/loaders/DualLoader";
export default {
  components: {
    TablePagination,
    NoDataComponent,
    BreadCrumb,
    EditButton,
    DeleteButton,
    DualLoader,
  },
  data() {
    return {
      loading: false,
      List: [],
      technical_Name: null,
      technical_Id: null,
      submitted:false,

      totalItem: 0,
      selectItem: null,
      dialog: false,
      dialogType: true,
      params: {
        page: 1,
        per_page: 10,
      },
    };
  },
  computed:{
    technical_Name_Error() {
      if (!this.technical_Name) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    get_Technical(loader) {
      this.controlLoading(loader);
      DualService.get_Technical(this.params).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.technicals.forEach((item) => {
          number++;
          item.number = number;
        });
        this.List = res.data.technicals;
        this.totalItem = res.data.technicals.length;
        this.controlLoading(false);
      });
    },
    AddItem() {
      this.dialogType = true;
      this.technical_Name = null;
      this.submitted=false;
      this.controlDialog(true);
    },
    EditItem(event) {
      this.dialogType = false;
      this.submitted=false;
      this.technical_Name = event.name;
      this.technical_Id = event.id;
      this.controlDialog(true);
    },

    EditAndAdd() {
      this.submitted=true;
        
        if(!this.technical_Name_Error){
            if (this.dialogType) {
        this.controlDialog(false);
        DualService.create_Technical({
          data: { name: this.technical_Name },
        }).then((res) => {
          this.controlDialog(false);
          this.get_Technical(true);
          this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "Yaratildi",
            life: 2000,
          });
        });
      } else {
        this.controlDialog(false);
        DualService.update_Technical({
          data: { name: this.technical_Name },
          technical_id: this.technical_Id,
        }).then((res) => {
          this.controlDialog(false);
          this.get_Technical(false);
          this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "Tahrirlandi",
            life: 2000,
          });
        });
      }
        }
     
    },
    deleteItem(id) {
      DualService.delete_Technical({ technical_id: id })
        .then((res) => {
          this.get_Technical(false);
          this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "O'chirildi",
            life: 2000,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_Technical(true);
    },
    controlDialog(item) {
      this.dialog = item;
    },
    controlLoading(item) {
      this.loading = item;
    },
  },
  created() {
    this.get_Technical(true);
  },
};
</script>
