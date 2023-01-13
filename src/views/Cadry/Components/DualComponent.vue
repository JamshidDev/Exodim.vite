<template>
  <div class="grid px-0" v-show="!loading">
    <div class="col-12 p-2" v-show="List.length == 0">
      <add-button
      class="mb-2"
        @click="openDialog()"
        :title="'Dual ta\'lim'"
        :text="false"
      ></add-button>
      
    </div>
    <div class="col-12">
      <DataTable
        :value="List"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        v-show="List.length > 0"
        class="pb-6 p-datatable-sm"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5
                class="text-base md:m-0 p-as-md-center uppercase text-blue-600"
              >
                Dual ta'lim
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="openDialog()"
              />
            </div>
          </div>
        </template>
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
              Kasb nomi
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
              <div>{{ slotProps.data.profession.name }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 400px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Kvalifikatsiya nomi
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
              <div>{{ slotProps.data.specialty.name }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 400px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Ta'lim muassasa nomi
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
              <div>{{ slotProps.data.technical.name }}</div>
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
              <!-- <edit-button
                  :editItem="slotProps.data"
                  @editEvent="EditItem($event)"
                ></edit-button> -->
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItem($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
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
              dialogType ? `Dual ta'limga yuborish` : `Dual ta'limni tahrirlash`
            }}
          </h6>
        </template>

        <div class="grid pt-2">
          <div class="col-12" v-show="loading">
            <progress-bar-loader></progress-bar-loader>
          </div>
          <div class="col-12" v-show="!loading">
            <div class="grid">
              <div class="col-12">
                <h6 class="mb-2 pl-2 text-500">Kasb nomi</h6>
                <Dropdown
                  id="new_cadry_academicTitle"
                  v-model="professionsVal"
                  :class="{ 'p-invalid': professionVal_Error && submitted }"
                  :options="professions_List"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full"
                  @change="changeProfession"
                />
              </div>
              <div class="col-12">
                <h6 class="mb-2 pl-2 text-500">Kvalifikatsiya nomi</h6>
                <Dropdown
                  id="new_cadry_academicTitle"
                  v-model="specialtiesVal"
                  :class="{ 'p-invalid': professionVal_Error && submitted }"
                  :options="specialties_List"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full"
                />
              </div>
              <div class="col-12">
                <h6 class="mb-2 pl-2 text-500">Ta'lim muassasa nomi</h6>
                <Dropdown
                  id="new_cadry_academicTitle"
                  v-model="technicalsVal"
                  :class="{ 'p-invalid': technicalsVal_Error && submitted }"
                  :options="technicals_List"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full"
                />
              </div>
            </div>
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
    </div>
  </div>
</template>
  <script>
import EditButton from "../../../components/buttons/EditButton.vue";
import DeleteButton from "@/components/buttons/DeleteButton";
import ProgressBarLoader from "../../../components/loaders/ProgressBarLoader.vue";
import DualService from "@/service/servises/DualService";
import AddButton from "../../../components/buttons/AddButton.vue"
export default {
  components: {
    EditButton,
    DeleteButton,
    ProgressBarLoader,
    AddButton,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      professions_List: [],
      professionsVal: null,
      profession_id:null,
      technicals_List: [],
      technicalsVal: null,
      specialties_List: [],
      specialtiesVal: null,

      List: [],
      dialogType: true,

      submitted: false,
      params: {
        page: 1,
        per_page: 10,
      },
    };
  },
  computed: {
    professionVal_Error() {
      if (!this.professionsVal) {
        return true;
      } else {
        return false;
      }
    },
    specialtiesVal_Error() {
      if (!this.specialtiesVal) {
        return true;
      } else {
        return false;
      }
    },
    technicalsVal_Error() {
      if (!this.technicalsVal) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    getItem(loader) {
      this.loading = loader;
      DualService.get_Duals({ cadry_id: this.$route.params.id }).then((res) => {
        this.professions_List = res.data.professions;
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.duals.forEach((item) => {
          number++;
          item.number = number;
        });
        this.List = res.data.duals;
        this.loading = false;
      });
    },
    changeProfession() {
      this.specialties_List = this.professions_List.filter(
        (item) => item.id == this.professionsVal.id
      )[0].specialties;
      this.technicals_List = this.professions_List.filter(
        (item) => item.id == this.professionsVal.id
      )[0].technicals;
      this.specialtiesVal = null;
      this.technicalsVal = null;
    },

    EditAndAdd() {
      this.submitted = true;
      let data = {
        profession_id: this.professionsVal.id,
        technical_id: this.technicalsVal.id,
        specialty_id: this.specialtiesVal.id,
      };
      if (
        !this.professionVal_Error &&
        !this.specialtiesVal_Error &&
        !this.technicalsVal_Error
      ) {
        if (this.dialogType) {
          this.dialog = false;

          DualService.create_Duals({
            cadry_id: this.$route.params.id,
            data,
          }).then((res) => {
            this.getItem(false);
          });
        }
      }
    },
    deleteItem(id) {
      DualService.delete_Duals({ dual_id: id }).then((res) => {
        this.getItem(false);
      });
    },
    openDialog() {
      this.dialogType = true;
      this.dialog = true;
     
    },
    EditItem(event) {
      console.log(event);
      this.dialogType = false;
      this.dialog = true;
      this.profession_id = event.id;
      this.professionsVal = event.profession;
      this.specialties_List = this.professions_List.filter(
        (item) => item.id == this.professionsVal.id
      )[0].specialties;
      this.technicals_List = this.professions_List.filter(
        (item) => item.id == this.professionsVal.id
      )[0].technicals;
      this.technicalsVal = event.technical;
      this.specialtiesVal = event.specialty
      

    },
  },
  created() {
    this.getItem(true);
  },
};
</script>
  <style lang="scss">
</style>