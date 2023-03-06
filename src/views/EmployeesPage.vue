<template>
  <div class="grid px-3">

    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Korxonalar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Korxonalar
            <span class="text-base text-primary pl-2">
              ({{ totalCadries }})</span
            >
          </span>
        </div>
      </div>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <h6 class="text-sm mb-1 mt-0 pl-1">
        Katta korxonalar -
        {{
          get_bigFactoryList.length
            ? get_bigFactoryList.length - 1
            : get_bigFactoryList.length
        }}
      </h6>
      <Dropdown
        id="adressDistrict"
        v-model="get_bigFactory"
        :options="get_bigFactoryList"
        optionLabel="name"
        :filter="true"
        placeholder="Tanlang"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
        @change="changeRailway"
      >
        <template #value="slotProps" class="custop_dropdown">
          <div class="max-w-100" v-if="slotProps.value">
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="max-w-100">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6 class="text-sm mb-1 mt-0 pl-1">
        Korxonalar -
        {{
          get_factoryList.length ? get_factoryList.length - 1 : get_factoryList.length
        }}
      </h6>
      <Dropdown
        id="adressDistrict"
        v-model="get_factory"
        :options="get_factoryList"
        optionLabel="name"
        @change="changeOrganization"
        :filter="true"
        placeholder=" Tanlang"
        class="w-full"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
      >
        <template #value="slotProps">
          <div
            class="country-item country-item-value w-full"
            v-if="slotProps.value"
          >
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item w-full">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6 class="text-sm mb-1 mt-0 pl-1">
        Bo'limlar va bekatlar -
        {{
          get_facDepartmentList.length
            ? get_facDepartmentList.length - 1
            : get_facDepartmentList.length
        }}
      </h6>
      <Dropdown
        id="adressDistrict"
        v-model="get_factoryDepartment"
        :options="get_facDepartmentList"
        optionLabel="name"
        :filter="true"
        placeholder="Tanlang"
        class="w-full"
        @change="changeDepartment"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
      >
        <template #value="slotProps">
          <div
            class="country-item country-item-value w-full"
            v-if="slotProps.value"
          >
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item w-full">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <Button
        icon="pi pi-filter "
        label="Filter"
        class="mt-3 w-full p-button-secondary"
        @click="openFilterPanel"
      />
      <!-- Additional filter menu -->
      <OverlayPanel
        ref="op"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '550px' }"
      >
        <div class="grid">
          <div class="col-12">
            <h6 class="text-sm uppercase">Qo'shimcha filter sozlamalari</h6>
          </div>

          <div class="col-12">
            <div class="col-12">
              <h6 class="text-sm mb-0">Lavozim {{ Stuffs.length }}</h6>
            </div>
            <div class="w-full flex">
              <Dropdown
                id="adressDistrict"
                v-model="stuffValue"
                :options="Stuffs"
                optionLabel="name"
                :filter="true"
                placeholder="Tanlang"
                :showClear="true"
                class="w-full p-inputtext-sm"
                @change="changeStuffs"
                emptyMessage="Hech narsa topilmadi"
                emptyFilterMessage="Tizmda ma'lumot topilmadi..."
                @before-show="beforeOpen"
                :disabled="Stuffs.length == 0"
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value w-full"
                    v-if="slotProps.value"
                  >
                    <div>{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="country-item w-full">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Viloyat</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="regionValue"
                  :options="regionList"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full p-inputtext-sm"
                  @change="changeRegion"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ta'til</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="vacationValue"
                  :options="vacationList"
                  optionLabel="name"
                  placeholder="Ta'til"
                  class="w-full p-inputtext-sm"
                  @change="changeVacation"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-1">Yosh oralig'i</h6>
              <p class="text-center text-blue-600 font-semibold">
                {{ selectedAge[0] + " -- " + selectedAge[1] }}
              </p>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Slider
                  class=""
                  v-model="selectedAge"
                  :step="1"
                  :range="true"
                  @change="changeCadrAge"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Jinsi</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="genderValue"
                  :options="genderList"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full p-inputtext-sm"
                  @change="changeGender"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="grid">
              <div class="col-6">
                <p class="text-left text-600 mb-0">Filter sozlamalar</p>
              </div>
              <div class="col-6">
                <div class="grid w-full">
                  <div class="col-6">
                    <Tag
                      class="cursor-pointer w-full"
                      value="Izlash"
                      severity="info"
                      icon="pi pi-search"
                      @click="searchBtn()"
                    ></Tag>
                  </div>
                  <div class="col-6">
                    <Tag
                      class="cursor-pointer w-full"
                      value="Tozalash"
                      severity="danger"
                      icon="pi pi-filter-slash"
                      @click="clearFilterDetails()"
                    ></Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OverlayPanel>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <InputText
            type="text"
            v-model="organization.last_name"
            class="w-full"
            placeholder="Familiya"
            @keyup.enter="searchBtn()"
          />
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <InputText
            type="text"
            v-model="organization.first_name"
            class="w-full"
            placeholder="Ism"
            @keyup.enter="searchBtn()"
          />
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <InputText
            type="text"
            v-model="organization.middle_name"
            class="w-full"
            placeholder="Sharif"
            @keyup.enter="searchBtn()"
          />
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="educationValue"
                  :options="educationList"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full"
                  @change="changeEducation"
                />
              </div>
            </div>
    </div>



    <!-- Employees table ---start -->
    <div class="col-12 pt-2" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="cadries"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalCadries"
        stripedRows
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 font-semibold" >No</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-center"
            >
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 50px"> 
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
        <Column style="min-width:100px; width:200px">
          <template #header>
            <div class="text-800 font-semibold">F.I.SH</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
              <div>{{ slotProps.data.fullname }}</div>
            </div>
          </template>
        </Column>

        <Column field="rating" style="min-width:100px">
          <template #header>
            <div class="text-800 font-semibold">Lavozimi</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
              {{
                slotProps.data.staff
                  ? slotProps.data.staff.staff_full
                  : `Tizimda ma'lumot yo'q`
              }}
            </div>
          </template>
        </Column>
        <Column field="rating" style="min-width: 100px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Korxona</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
              <span>{{ slotProps.data.organization.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="rating" style="min-width: 40px; width: 40px">
          <template #header>
            <div class="text-800 font-semibold">SMS</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
            <download-button
            class="px-3"
                v-tooltip.left="`SMS xabar jo'natish`"
                :color="'bg-yellow-500 active:bg-yellow-500'"
                :border="'border-1 border-yellow-500 border-round'"
                :icon="'pi pi-send'"
                @click="SMS_Dialog(slotProps.data.id,slotProps.data.fullname)"
              ></download-button>
            </div>
          </template>
        </Column>


        <Column :exportable="false" style="min-width:100px; width:100px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex w-full align-items-center gap-2">
              <download-button
                :color="'bg-primary active:bg-primary'"
                :border="'border-1 border-primary border-round'"
                v-tooltip.left="`Ma'lumotlarni ko'rish`"
                :icon="'pi pi-id-card'"
                @click="goPushDetails(slotProps.data.id)"
              ></download-button>
              <download-button
                v-tooltip.left="`Ma'lumotlarni yuklash`"
                :color="'bg-green-600 active:bg-green-600'"
                :border="'border-1 border-green-600 border-round'"
                :icon="'pi pi-cloud-download'"
                @click="DowloadResume(slotProps.data.id, slotProps.data.fullname)"
              ></download-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalCadries > 10"
            :total_page="totalCadries"
            :page="organization.page"
            :per_page="organization.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <search-not-found-page v-show="!totalCadries"></search-not-found-page>
    </div>


    <div class="col-12 pt-2" v-show="loadingtable">
      <employee-loader></employee-loader>
    </div>


    <div class="col-12">
      <Toast position="bottom-right" />

      <Dialog
        v-model:visible="sms_dialog"
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
            SMS xabar yuborish <span class="text-sm text-green-500 capitalize"> ( {{sms_user}} )</span>
          </h6>
        </template>
        <div class="grid pt-2">
         
          
          <div class="col-12">
            <h6 class="mb-1 pl-2 text-500">Xabar</h6>
            <Textarea
              class="w-full font-medium"
              placeholder="Bu yerga xabar matnini yozing..."
              id="sms_msg"
              v-model="sms_msg"
              :autoResize="true"
              rows="3"
              :class="{ 'p-invalid': cadry_ref_comment && refresh_submitted }"
            />
          </div>
          <span class="pl-2 text-sm text-500">Elementlar soni - {{sms_msg.length}} </span>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Yuborish"
                class="p-button-secondary p-button-sm"
                @click="send_Message()"
              />
            </div>
          </div>
        </template>
      </Dialog>

      <word-template
        :cadry_id="Dowload_cadry_id"
        v-show="false"
        ref="word_resume"
      ></word-template>
    </div>
  </div>
</template>
<script>
import TablePagination from "../components/Pagination/TablePagination.vue";
import organizationsService from "../service/servises/organizationsService";
import globalFactoryService from "../service/servises/globalFactoryService";
import EmployeeLoader from "../components/loaders/EmployeeLoader.vue";
import SearchNotFoundPage from "../components/EmptyComponent/SearchNotFoundPage.vue";
import WordTemplate from "../components/Eksport/WordTemplate.vue";
import DownloadButton from "@/components/buttons/DownloadButton.vue";
import SmsService from '@/service/servises/SmsService'
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
import {mapActions, mapGetters} from "vuex"
export default {
  components: {
    EmployeeLoader,
    TablePagination,
    SearchNotFoundPage,
    WordTemplate,
    DownloadButton,
    BreadCrumb,
  },
  data() {
    return {
      displayBasic: true,
      loadingtable: false,
      selectedCadries: null,
      cadries: [],
      sms_dialog:false,
      sms_msg:'',
      sms_user:null,
      sms_user_id:null,

      Dowload_cadry_id: null,

      selectedAge: [10, 80],

      Stuffs: [],
      stuffValue: null, //fake
      educationList: [],
      educationValue: null, //fake
      regionList: [],
      regionValue: null, //fake
      vacationList: [],
      vacationValue: null, //fake
      genderList: [
        {
          name: "Erkak",
          id: 0,
        },
        {
          name: "Ayol",
          id: 1,
        },
      ],
      genderValue: null, //fake
      selectedAge: [10, 80],

      totalCadries: 0,

      // Organization params
      organization: {
        railway_id: null,
        organization_id: null,
        department_id: null,
        page: localStorage.getItem("page_2")
          ? Number(localStorage.getItem("page_2"))
          : 1,
        per_page: localStorage.getItem("per_page_2")
          ? Number(localStorage.getItem("per_page_2"))
          : 10,
        last_name: null,
        first_name: null,
        middle_name: null,
        staff_id: null,
        sex: null,
        vacation_id: null,
        education_id: null,
        age_start: null,
        age_end: null,
        birth_region_id: null,
      },
    };
  },
  computed:{
    ...mapGetters(["get_bigFactoryList", "get_factoryList", "get_facDepartmentList", "get_bigFactory", "get_factory", "get_factoryDepartment"])
  },
  methods: {
    ...mapActions(["set_bigFactoryList", "set_factoryList", "set_facDepartmentList", "set_bigFactory", "set_factory", "set_factoryDepartment" ]),
    // get Global organization function
    getOrg(params) {
      this.controlLoading(true);
      this.organization.railway_id = this.get_bigFactory? this.get_bigFactory.id : null;
      this.organization.organization_id = this.get_factory? this.get_factory.id : null;
      this.organization.department_id = this.get_factoryDepartment? this.get_factoryDepartment.id : null;

      globalFactoryService
        .getOrganization(params)
        .then((res) => {
          this.totalCadries = res.data.cadries.pagination.total;
          let number =
            (this.organization.page - 1) * this.organization.per_page;
          res.data.cadries.data.forEach((item) => {
            number++;
            item.number = number;
          });
          this.cadries = res.data.cadries.data;
          this.controlLoading(false);
        })
        .catch((error) => {
          this.controlLoading(false);
          console.log(error);
        });
    },

    // get  Factory function
    get_Railway() {
      organizationsService
        .get_Railway()
        .then((res) => {
          if (res.data.length) {
            res.data.unshift({
              name: "Barchasi",
              id: null,
            });
            this.set_bigFactoryList(res.data)
          } else {
            this.set_bigFactoryList(res.data)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Organization(id) {
      organizationsService
        .get_Organization({ railway_id: id })
        .then((res) => {
          if (res.data.length) {
            res.data.unshift({
              name: "Barchasi",
              id: null,
            });
            this.set_factoryList(res.data)
          } else {
            this.set_factoryList(res.data)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Department(id) {
      organizationsService
        .getDepartment({ organization_id: id })
        .then((res) => {
          res.data.unshift({
            name: "Barchasi",
            id: null,
          });
          this.set_facDepartmentList(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Stuffs(id) {
      organizationsService
        .get_Staffs({ organization_id: id })
        .then((res) => {
          this.Stuffs = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Education() {
      organizationsService
        .getEducation()
        .then((res) => {
          this.educationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_getRegions() {
      organizationsService
        .getRegions()
        .then((res) => {
          this.regionList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_getVacations() {
      organizationsService
        .getVacations()
        .then((res) => {
          this.vacationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    SMS_Dialog(id, name){
      this.sms_user = name;
      this.sms_user_id = id;
      this.sms_dialog =true
    },
    send_Message(){
      this.sms_dialog =false
      SmsService.send_SMS({cadry_id:this.sms_user_id, data:{comment:this.sms_msg}}).then((res) =>{
        console.log(res.data);
        this.$toast.add({
        severity: "success",
        summary: "SMS xabar",
        detail: "Xabar muvofaqiyatli jo'natildi",
        life: 2000,
      });
      }).catch((error) =>{
        this.$toast.add({
        severity: "error",
        summary: "SMS xabar",
        detail: "Xatolik yuz berdi...",
        life: 2000,
      });
      })
    },

    changeRailway(event) {
      this.set_bigFactory(event.value)
      this.get_Organization(event.value.id);
      this.set_factory(null);
      this.set_factoryDepartment(null);
      this.set_facDepartmentList([])
      this.getOrg(this.organization);
    },

    changeOrganization(event) {
      this.set_factory(event.value);
      this.set_factoryDepartment(null)
      this.stuffValue = null;
      this.get_Department(event.value.id);
      this.get_Stuffs(event.value.id);
      this.getOrg(this.organization);
    },

    changeDepartment(event) {
      this.set_factoryDepartment(event.value)
      this.getOrg(this.organization);
    },

    changeStuffs(event) {
      this.organization.staff_id = event.value.id;
    },
    changeEducation(event) {
      this.organization.education_id = event.value.id;
      this.searchBtn();

    },
    changeRegion(event) {
      this.organization.birth_region_id = event.value.id;
    },

    changeCadrAge(event) {
      this.organization.age_start = event[0];
      this.organization.age_end = event[1];
    },
    changeGender(event) {
      this.organization.sex = event.value.id;
    },

    changeVacation(event) {
      this.organization.vacation_id = event.value.id;
    },
    changePagination(event) {
      this.organization.page = event.page;
      this.organization.per_page = event.per_page;
      localStorage.setItem("page_2", event.page);
      localStorage.setItem("per_page_2", event.per_page);
      this.getOrg(this.organization);
    },

    searchBtn() {
      this.getOrg(this.organization);
    },

    // Dowload resume
    DowloadResume(id, fullName) {
      this.$refs.word_resume.generateWord(id, fullName);
    },
    goPushDetails(id) {
      this.$router.push(`/admin/employee/view/${id}`);
    },

    beforeOpen(event) {
      console.log(event);
    },
    // clear additional filter details
    clearFilterDetails() {
      this.organization.staff_id = null;
      this.stuffValue = null;
      this.organization.education_id = null;
      this.educationValue = null;
      this.organization.vacation_id = null;
      this.vacationValue = null;
      this.organization.first_name = null;
      this.organization.last_name = null;
      this.organization.middle_name = null;
      this.organization.age_end = null;
      this.organization.age_start = null;
      this.organization.sex = null;
      (this.organization.birth_region_id = null),
        (this.regionValue = null),
        (this.genderValue = null);
      this.selectedAge = [10, 80];
      this.$toast.add({
        severity: "success",
        summary: "Muvofaqqiyatli bajarildi",
        detail: "Tozalandi",
        life: 2000,
      });
    },

    openFilterPanel(event) {
      this.$refs.op.toggle(event);
    },
    controlLoading(item) {
      this.loadingtable = item;
    },
  },
  created() {
    if(this.get_bigFactory){

    }else{
      this.get_Railway();
    }
    this.getOrg(this.organization);

    this.get_Education();
    this.get_getRegions();
    this.get_getVacations();
  },
};
</script>
<style lang="scss"></style>
