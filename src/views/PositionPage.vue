<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Bo\'limlar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="xl:text-lg lg:text-base text-sm font-semibold"
            >Shtat lavozimlari
            <span class="text-base text-primary pl-2">
              ({{ totalPosition }})</span
            >
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-6">
          <InputText
            type="text"
            v-model="searchPositionName"
            placeholder="Nomi orqali qidiruv"
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
        </div>
        <div class="col-6 flex justify-content-end">
          <Button
            icon="pi pi-plus"
            label="Qo'shish"
            class="p-button-info p-button-sm"
            @click="addItem()"
            v-tooltip.bottom="`Yangi shtat qo'shish`"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-12" v-show="loader">
      <position-loader></position-loader>
    </div>
    <div class="col-12 py-0" v-show="!loader">
      <DataTable
        ref="dt"
        :value="positionList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
      >
        <Column header="" style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              No
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                w-full
                text-center text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Shtat lavozim nomi
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
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>

        <Column class="py-0" style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Biriktirilgan bo'limlar
            </div>
          </template>
          <template #body="slotProps">
            <Dropdown
              class="w-full p-inputtext-sm py-0 font-medium"
              v-model="selectParty[`${slotProps.data.id}`]"
              :options="slotProps.data.departments"
              optionLabel="name"
              emptyMessage="Biriktirilgan bo'limlar yo'q"
              placeholder="Bo'limlarni ko'rish"
            />
          </template>
        </Column>
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Kategoriya
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
                text-center text-blue-600
              "
            >
              {{ positionCategoryName(slotProps.data.category_id) }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 150px">
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
                font-medium
                text-center
              "
            >
              {{ slotProps.data.cadries_count }}
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 150px; width: 150px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <view-button-v
                @click="goPositionCadry(slotProps.data)"
                v-tooltip.bottom="`Xodimlarni ko'rish`"
                :icon="'pi-users'"
              ></view-button-v>
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItem($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deletePosition($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalPosition > 10"
            :total_page="totalPosition"
            :page="position.page"
            :per_page="position.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
    </div>

    <div class="col-12">
      <Toast position="bottom-right" />

      <Dialog
        v-model:visible="dialogPos"
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
            {{ posDialogType ? "Ma'lumot qo'shish" : "Ma'lumotni tahrirlash" }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Shtat lavozim nomi</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model.trim="positionDialog.name"
              :class="{ 'p-invalid': postionNameError && submitPosition }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Kategoriyasi</h6>
            <Dropdown
              v-model="positionDialog.category"
              :options="positionCategoryList"
              optionLabel="name"
              optionValue="id"
              placeholder="Tanlang"
              class="w-full font-semibold"
              :class="{ 'p-invalid': postionCategoryError && submitPosition }"
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
  </div>
</template>
<script>
import TablePagination from "../components/Pagination/TablePagination.vue";
import DeleteButton from "../components/buttons/DeleteButton.vue";
import EditButton from "../components/buttons/EditButton.vue";
import ViewButtonV from "../components/buttons/ViewButtonV.vue";
import positionService from "@/service/servises/positionService";
import positionLoader from "../components/loaders/positionLoader.vue";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";

export default {
  components: {
    DeleteButton,
    EditButton,
    ViewButtonV,
    TablePagination,
    positionLoader,
    BreadCrumb,
  },
  data() {
    return {
      loader: true,
      submitPosition: false,
      searchPositionName: null,
      positionList: [],
      positionCategoryList: [],
      totalPosition: 0,
      selectParty: {},
      position: {
        page: localStorage.getItem("page_3")
          ? Number(localStorage.getItem("page_3"))
          : 1,
        per_page: localStorage.getItem("per_page_3")
          ? Number(localStorage.getItem("per_page_3"))
          : 10,
        name: null,
      },
      dialogPos: false,
      posDialogType: true,
      positionDialog: {
        name: null,
        category: null,
      },
      position_id: null,
    };
  },
  computed: {
    postionNameError() {
      if (!this.positionDialog.name) {
        return true;
      } else {
        return false;
      }
    },
    postionCategoryError() {
      if (!this.positionDialog.category) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    get_positions(params, loader) {
      this.controlLoader(loader);
      positionService
        .get_Positions(params)
        .then((res) => {
          this.totalPosition = res.data.staffs.pagination.total;
          console.log(this.totalPosition);
          let cadrList = [];
          let number = (this.position.page - 1) * this.position.per_page;
          res.data.staffs.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.positionList = res.data.staffs.data;
          this.controlLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_positionCategory() {
      positionService
        .get_postionCategory()
        .then((res) => {
          console.log(res.data);
          this.positionCategoryList = res.data.categories;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addItem() {
      this.submitPosition = false;
      this.posDialogType = true;
      (this.positionDialog.name = null),
        (this.positionDialog.category = null),
        this.controlPosDialog(true);
    },

    editItem(event) {
      this.submitPosition = false;
      this.position_id = event.id;
      this.posDialogType = false;
      this.positionDialog.name = event.name;
      (this.positionDialog.category = event.category_id),
        this.controlPosDialog(true);
    },

    addAndEdit() {
      this.submitPosition = true;
      if (!this.postionNameError && !this.postionCategoryError) {
        this.controlPosDialog(false);
        let data = {
          name: this.positionDialog.name,
          category_id: this.positionDialog.category,
        };

        if (this.posDialogType) {
          positionService
            .create_Positions({ data })
            .then((res) => {
              this.get_positions(this.position, false);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Yaratildi",
                life: 2000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          positionService
            .update_Positions({ id: this.position_id, data })
            .then((res) => {
              this.get_positions(this.position, false);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Tahrirlandi",
                life: 2000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
    deletePosition(id) {
      positionService
        .delete_Positions({ id })
        .then((res) => {
          this.get_positions(this.position, false);
          this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "O'chirildi",
            life: 2000,
          });
        })
        .catch((error) => {
          console.log(error);
          this.$toast.add({
            severity: "warn",
            summary: "Ruxsat etilmadi",
            detail: "Bo'lim mavjud",
            life: 2000,
          });
        });
    },

    changePagination(event) {
      this.position.page = event.page;
      this.position.per_page = event.per_page;
      this.get_positions(this.position, true);
      localStorage.setItem("page_3", event.page);
      localStorage.setItem("per_page_3", event.per_page);
    },

    searchByName() {
      this.position.name = this.searchPositionName;
      this.position.page = 1;
      this.get_positions(this.position, true);
    },

    positionCategoryName(id) {
      if (this.positionCategoryList.length) {
        return this.positionCategoryList.filter((item) => item.id == id)[0]
          .name;
      }
    },

    goPositionCadry(item) {
      this.$router.push({
        name: "positionList",
        params: { position_id: item.id, position_name: item.name },
      });
    },
    controlPosDialog(item) {
      this.dialogPos = item;
    },
    controlLoader(item) {
      this.loader = item;
    },
  },

  created() {
    this.get_positionCategory();
    this.get_positions(this.position, true);
  },
};
</script>
<style lang="scss">
</style>