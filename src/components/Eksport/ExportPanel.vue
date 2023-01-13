<template>
  <div class="grid">
    <div class="col-12">
      <Dialog
        v-model:visible="exportDialog"
        :breakpoints="{
          '640px': '100vw',
        }"
        :style="{ width: '90vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-base text-blue-500 font-medium">
            Yuklash sozlamalarini
          </h6>
        </template>
        <div class="grid md:px-4 sm:px-6">
          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[0]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[0].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[0].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[0].id)
                    ? `(${elementNumber(exporOption[0].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[1]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[1].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[1].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[1].id)
                    ? `(${elementNumber(exporOption[1].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[2]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[2].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[2].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[2].id)
                    ? `(${elementNumber(exporOption[2].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[3]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[3].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[3].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[3].id)
                    ? `(${elementNumber(exporOption[3].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[4]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[4].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[4].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[4].id)
                    ? `(${elementNumber(exporOption[4].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[5]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[5].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[5].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[5].id)
                    ? `(${elementNumber(exporOption[5].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[6]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[6].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[6].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[6].id)
                    ? `(${elementNumber(exporOption[6].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[7]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[7].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[7].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[7].id)
                    ? `(${elementNumber(exporOption[7].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[8]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[8].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[8].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[8].id)
                    ? `(${elementNumber(exporOption[8].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[9]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[9].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[9].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[9].id)
                    ? `(${elementNumber(exporOption[9].id)})`
                    : ""
                }}</span></label
              >
            </div>
          </div>

          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[10]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[10].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[10].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[10].id)
                    ? `(${elementNumber(exporOption[10].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[11]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[11].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[11].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[11].id)
                    ? `(${elementNumber(exporOption[11].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[12]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[12].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[12].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[12].id)
                    ? `(${elementNumber(exporOption[12].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[13]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[13].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[13].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[13].id)
                    ? `(${elementNumber(exporOption[13].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[14]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[14].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[14].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[14].id)
                    ? `(${elementNumber(exporOption[14].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[15]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[15].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[15].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[15].id)
                    ? `(${elementNumber(exporOption[15].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[16]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[16].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[16].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[16].id)
                    ? `(${elementNumber(exporOption[16].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[17]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[17].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[17].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[17].id)
                    ? `(${elementNumber(exporOption[17].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[18]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[18].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[18].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[18].id)
                    ? `(${elementNumber(exporOption[18].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[19]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[19].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[19].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[19].id)
                    ? `(${elementNumber(exporOption[19].id)})`
                    : ""
                }}</span></label
              >
            </div>
          </div>

          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[20]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[20].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[20].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[20].id)
                    ? `(${elementNumber(exporOption[20].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[21]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[21].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[21].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[21].id)
                    ? `(${elementNumber(exporOption[21].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[22]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[22].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[22].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[22].id)
                    ? `(${elementNumber(exporOption[22].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[23]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[23].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[23].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[23].id)
                    ? `(${elementNumber(exporOption[23].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[24]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[24].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[24].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[24].id)
                    ? `(${elementNumber(exporOption[24].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[25]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[25].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[25].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[25].id)
                    ? `(${elementNumber(exporOption[25].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[26]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[26].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[26].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[26].id)
                    ? `(${elementNumber(exporOption[26].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[27]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[27].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[27].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[27].id)
                    ? `(${elementNumber(exporOption[27].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[28]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[28].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[28].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[28].id)
                    ? `(${elementNumber(exporOption[28].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[29]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[29].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[29].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[29].id)
                    ? `(${elementNumber(exporOption[29].id)})`
                    : ""
                }}</span></label
              >
            </div>

            <div class="field-checkbox">
              <Checkbox :value="exporOption[30]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[30].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[30].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[30].id)
                    ? `(${elementNumber(exporOption[30].id)})`
                    : ""
                }}</span></label
              >
            </div>

            <div class="field-checkbox">
              <Checkbox :value="exporOption[31]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[31].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[31].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[31].id)
                    ? `(${elementNumber(exporOption[31].id)})`
                    : ""
                }}</span></label
              >
            </div>

            <div class="field-checkbox">
              <Checkbox :value="exporOption[32]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[32].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[32].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[32].id)
                    ? `(${elementNumber(exporOption[32].id)})`
                    : ""
                }}</span></label
              >
            </div>


            <div class="field-checkbox">
              <Checkbox :value="exporOption[33]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[33].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[33].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[33].id)
                    ? `(${elementNumber(exporOption[33].id)})`
                    : ""
                }}</span></label
              >
            </div>
         
          </div>
        </div>

        <template #footer>
          <div class="col-12">
            <h6 v-show="progressActive" class="mb-1 text-yellow-500 font-normal text-center" >Hozirda ma'lumotlar tayorlanmoqda, siz kerakli bo'limlrni tanlashingiz mumkin!</h6>
            <h6 v-show="!progressActive" class="mb-1 text-green-500 font-normal text-center">Ma'lumotlar yuklashga tayyor!</h6>
          </div>
            <div class="flex justify-content-center">
              <Button
                :label="export_btn_label"
                icon="pi pi-cloud-download"
                class="p-button-rounded font-normal px-8"
                :loading="progressActive"
                :class="[
                  progressActive ? 'p-button-secondary' : 'p-button-success',
                ]"
                @click="filterDetails"
              />
            </div>
        </template>
      </Dialog>
    </div>
    <div class="col-12" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        :name="organizationName+'.xls'"
        ref="excel_table"
      >
      </download-excel>
    </div>
    <div class="col-12">
      <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import EksportService from "@/service/servises/EksportService";
export default {
  data() {
    return {
      progressActive: true,
      export_btn_label:'Tayyorlanmoqda...',
      exportDialog: false,
      exportOptions: [],
      organizationName:localStorage.getItem("organization")? `Xodimlar ma'lumotlari(${JSON.parse(localStorage.getItem("organization")).name})` : "Xodimlar ma'lumotlari",

      jsonData: [],
      json_fields: {},
      exporOption: [
        {
          id: 1,
          name: "F.I.SH",
          key: "fullName",
        },
        {
          id: 2,
          name: "Lavozim",
          key: "position",
        },
        {
          id: 3,
          name: "Bo'lim nomi",
          key: "department",
        },
        {
          id: 4,
          name: "Millati",
          key: "nationality",
        },
        {
          id: 5,
          name: "Tug'ilgan sana",
          key: "birth_date",
        },
        {
          id: 6,
          name: "Telefon raqami",
          key: "phone",
        },
        {
          id: 7,
          name: "Yashash (Viloyati)",
          key: "now_position_region",
        },
        {
          id: 8,
          name: "Yashash (Tumani)",
          key: "now_position_city",
        },
        {
          id: 9,
          name: "Yashash manzili",
          key: "address",
        },
        {
          id: 10,
          name: "Pasport (Sana)",
          key: "passport_date",
        },
        {
          id: 11,
          name: "Pasport (JSHR)",
          key: "pinfl",
        },
        {
          id: 12,
          name: "Pasport (Seriya)",
          key: "passport",
        },
        {
          id: 13,
          name: "Pasport (Viloyat)",
          key: "passport_position_region",
        },
        {
          id: 14,
          name: "Pasport (Tuman)",
          key: "passport_position_city",
        },
        {
          id: 15,
          name: "Tug'ilgan (Viloyat)",
          key: "birth_region",
        },
        {
          id: 16,
          name: "Tug'ilgan (Tuman)",
          key: "birth_city",
        },
        {
          id: 17,
          name: "Jinsi",
          key: "sex",
        },
        {
          id: 18,
          name: "Ma'lumoti",
          key: "education",
        },
        {
          id: 19,
          name: "Ilmiy unvoni",
          key: "academic_title",
        },
        {
          id: 20,
          name: "Ilmiy darajasi",
          key: "academic_degree",
        },
        {
          id: 21,
          name: "Xarbiy unvoni",
          key: "academic_title",
        },
        {
          id: 22,
          name: "Chet tillari",
          key: "languages",
        },
        {
          id: 23,
          name: "Oilaviy sharoiti",
          key: "family_status",
        },
        {
          id: 24,
          name: "Stavka",
          key: "rate",
        },
        {
          id: 25,
          name: "Personal toifasi",
          key: "category",
        },
        {
          id: 26,
          name: "Ta'lim olgan muassasalari",
          key: "instituts",
        },
        {
          id: 27,
          name: "Deputatliligi",
          key: "deputy",
        },
        {
          id: 28,
          name: "Tibbiy ko'rik(Xulosa)",
          key: "med_result",
        },
        {
          id: 29,
          name: "Tibbiy ko'rik(Oxirgi sana)",
          key: "med_date1",
        },
        {
          id: 30,
          name: "Tibbiy ko'rik(Keyingi sana)",
          key: "med_date2",
        },
        {
          id: 31,
          name: "Lavozim sanasi",
          key: "staff_date",
        },
        {
          id: 32,
          name: "Tugatgan Oligohi(yo'nalishi)",
          key: "speciality",
        },
        {
          id: 33,
          name: "Oligohga kirgan yili",
          key: "education_date1",
        },

        {
          id: 34,
          name: "Oligohni tugatgan yili",
          key: "education_date2",
        },
      ],
    };
  },
  methods: {
    controlPanel(item, payload) {
      this.exportDialog = item;
      this.get_exportdetails(payload, true);
    },

    get_exportdetails(params, loader) {
      this.export_btn_label = 'Tayyorlanmoqda...',
      this.progressActive = true;
      EksportService.get_exportAnyDetails(params).then((res) => {
        console.log(res.data);
        this.jsonData = []
        res.data.forEach((item) => {
          let option = {
            fullName: item.fullname,
            
            birth_city: item.birth_city,
            birth_region:item.birth_region,
            now_position: item.now_position,
            academic_title:item.academic_title,
            academic_degree:item.academic_degree,
            deputy:item.deputy,
            languages:item.languages.map(a=> a.name).toString(),
            sex: item.sex,
            position: item.department_and_staffs.filter((b) => b.staff_status == 'Asosiy').map(a=> a.staff_full).toString(),
            category:item.department_and_staffs.filter((b) => b.staff_status == 'Asosiy').map(a=> a.category).toString(),
            staff_date:item.department_and_staffs.filter((b) => b.staff_status == 'Asosiy').map((a) => a.staff_date).toString(),
            department: item.department_and_staffs.map(a=> a.department).toString(),
            instituts:item.instituts? item.instituts.map(a=> a.name).toString() : '',
            education_date1:item.instituts? item.instituts.map(a=> a.date1).toString() : '',
            education_date2:item.instituts? item.instituts.map(a=> a.date2).toString() : '',
            speciality:item.instituts? item.instituts.map(a=> a.speciality).toString() : '',

            rate:item.department_and_staffs.map(a=> a.rate).toString(),
            education: item.education,
            phone:item.phone,
            military_rank:item.military_rank,
            birth_date:item.birth_date,
            nationality: item.nationality,
            family_status:item.family_status,

            passport: item.passport,
            pinfl: item.pinfl,
            passport_date: item.passport_date,
            passport_position_city:item.passport_position_city,
            passport_position_region:item.passport_position_region,

            now_position_region:item.now_position_region,
            now_position_city:item.now_position_city,
            address:item.address,

            med_date1:item.med?.date1,
            med_date2:item.med?.date2,
            med_result:item.med?.result,
            id:item.id



          };
          this.jsonData.push(option);
        });
        this.progressActive = false;
        this.export_btn_label = 'EXPORT'
      });
    },
    filterDetails() {
      if (this.exportOptions.length > 0 && !this.progressActive) {
        this.exportOptions.forEach((item) => {
          this.exporOption.forEach((option) => {
            if (item.id == option.id) {
              this.json_fields[option.name] = option.key;
            }
          });
        });
        this.$refs.excel_table.generate();
        this.exportDialog = false;
        
      }else{
        this.$toast.add({
        severity: "warn",
        summary: "Xatolik",
        detail: "Kamida bitta bo'limni tanlang",
        life: 2000,
      });
      }
    },

    elementNumber(id) {
      if (this.exportOptions.length > 0) {
        return this.exportOptions.findIndex((item) => item.id == id) == -1
          ? ""
          : this.exportOptions.findIndex((item) => item.id == id) + 1;
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>