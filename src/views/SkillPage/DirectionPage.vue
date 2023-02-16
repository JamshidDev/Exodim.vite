<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Yo\'nalishlar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Yo'nalishlar
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
            <div class="w-full text-center text-sm font-normal">
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
                font-normal
              "
            >
              <div>{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Lavozim</div>
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
              {{ slotProps.data.staff_name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width:200px">
          <template #header>
            <div class="text-800 font-semibold">Xo'jaliklar</div>
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
              {{ slotProps.data.apparat.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 80px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Dars soati</div>
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
              <Chip
                :label="slotProps.data.time_lesson.toString()"
                class="
                  mr-2
                  mb-2
                  text-sm text-purple-700
                  bg-purple-100
                  font-medium
                "
              />
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 160px">
          <template #header>
            <div class="text-800 font-semibold">Izoh</div>
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
              <Chip
                :label="slotProps.data.comment_time.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-medium"
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
    <div class="col-12 py-0" v-show="loader">
      <direction-loader></direction-loader>
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
            {{ DialogType ? " Yo'nalish qo'shish " : "Yo'nalishni tahrirlash" }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Xo'jalik</h6>
            <Dropdown
              id="positionPart"
              v-model="apparat"
              :options="apparats_List"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
              :class="{ 'p-invalid': apparat_Error && submitted }"
              @change="changeActivity"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value">
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Yo'nalish</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="diraction_Name"
              :class="{ 'p-invalid': diraction_Name_Error && submitted }"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Lavozim</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="staff_Name"
              :class="{ 'p-invalid': staff_Name_Error && submitted }"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Dars vaqti</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="lesson_Time"
              :class="{ 'p-invalid': lesson_Time_Error && submitted }"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="lesson_Comment"
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
import TablePagination from "@/components/Pagination/TablePagination.vue";
import SkillService from "@/service/servises/SkillService";
import DeleteButton from "../../components/buttons/DeleteButton.vue";
import EditButton from "../../components/buttons/EditButton.vue";
import NoDataComponent from "../../components/EmptyComponent/NoDataComponent.vue";
import DirectionLoader from "@/components/loaders/DirectionLoader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BreadCrumb,
    TablePagination,
    DeleteButton,
    EditButton,
    NoDataComponent,
    DirectionLoader,
  },

  data() {
    return {
      List: [],
      apparats_List: [],
      apparat: null,
      selectitem: null,
      DialogType: true,
      submitted: false,
      dialog: false,
      submitted: false,
      loader: false,

      params: {
        page: localStorage.getItem("page_5")
          ? Number(localStorage.getItem("page_5"))
          : 1,
        per_page: localStorage.getItem("per_page_5")
          ? Number(localStorage.getItem("per_page_5"))
          : 10,
        search: null,
        apparat_id: null,
      },

      totalItem: 0,

      staff_Name: null,
      lesson_Time: null,
      lesson_Comment: null,
      diraction_Name: null,

      direction_id: null,
    };
  },
  methods: {
    ...mapActions(["set_direction_page_search"]),
    get_skill_Types(params, loader) {
      this.controlLoader(loader);
      SkillService.get_Skill_Direction({ params: params }).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.directions.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.List = res.data.directions.data;
        this.totalItem = res.data.directions.pagination.total;
        this.controlLoader(false);
      });
    },

    get_Skill_Apparats() {
      SkillService.get_Skill_Apparats({
        params: {
          page: 1,
          per_page: 1000,
          search: null,
        },
      }).then((res) => {
        this.apparats_List = res.data.apparats.data;
      });
    },

    addItem() {
      this.submitted = false;
      this.DialogType = true;
      this.reset();
      this.controlDialog(true);
    },
    editItem(event) {
      this.submitted = false;
      this.DialogType = false;
      this.diraction_Name = event.name;
      this.staff_Name = event.staff_name;
      this.lesson_Time = event.time_lesson;
      this.lesson_Comment = event.comment_time;
      this.apparat = event.apparat;
      this.direction_id = event.id;
      this.controlDialog(true);
    },

    addAndEdit() {
      this.submitted = true;
      if (
        !this.diraction_Name_Error &&
        !this.lesson_Time_Error &&
        !this.staff_Name_Error &&
        !this.apparat_Error
      ) {
        this.controlDialog(false);
        let data = {
          apparat_id: this.apparat.id,
          name: this.diraction_Name,
          staff_name: this.staff_Name,
          time_lesson: this.lesson_Time,
          comment_time: this.lesson_Comment,
        };
        if (this.DialogType) {
          SkillService.create_Skill_Direction({ data }).then((res) => {
            this.get_skill_Types(this.params, false);
            this.$toast.add({
              severity: "success",
              summary: "Muvofaqqiyatli bajarildi",
              detail: "Qo'shildi",
              life: 2000,
            });
          });
        } else {
          SkillService.update_Skill_Direction({
            direction_id: this.direction_id,
            data,
          }).then((res) => {
            this.get_skill_Types(this.params, false);
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
      SkillService.delete_Skill_Direction({ direction_id: id })
        .then((res) => {
          this.get_skill_Types(this.params, false);
          this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "O'chirildi",
            life: 2000,
          });
        })
        .catch((error) => {
          this.$toast.add({
            severity: "warn",
            summary: "Xatolik",
            detail: "Xodim mavjud",
            life: 2000,
          });
        });
    },
    searchByName() {
      this.set_direction_page_search(this.params.search);
      this.get_skill_Types(this.params, true);
    },

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      localStorage.setItem("page_5", event.page);
      localStorage.setItem("per_page_5", event.per_page);
      this.get_skill_Types(this.params, true);
    },

    reset() {
      this.staff_Name = null;
      this.lesson_Time = null;
      this.lesson_Comment = null;
      this.diraction_Name = null;
      this.apparat = null;
    },

    controlDialog(item) {
      this.dialog = item;
    },
    controlLoader(item) {
      this.loader = item;
    },
  },
  computed: {
    ...mapGetters(["get_direction_page_search"]),
    diraction_Name_Error() {
      if (!this.diraction_Name) {
        return true;
      } else {
        return false;
      }
    },

    lesson_Time_Error() {
      if (!this.lesson_Time || isNaN(this.lesson_Time)) {
        return true;
      } else {
        return false;
      }
    },

    staff_Name_Error() {
      if (!this.staff_Name) {
        return true;
      } else {
        return false;
      }
    },

    apparat_Error() {
      if (!this.apparat) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.get_direction_page_search) {
      this.params.search = this.get_direction_page_search;
      this.get_skill_Types(this.params, true);
    } else {
      this.get_skill_Types(this.params, true);
    }

    this.get_Skill_Apparats();
  },
};
</script>
  <style lang="">
</style>