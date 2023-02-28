<template>
  <div>
    <div class="document_container" id="exportContent">
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </head>

        <body style="padding: 0; margin-top:-20pt">
          <table
            class="table"
            cellpadding="0"
            cellspacing="0"
            style="
              margin-left:-25.5pt;
              margin-top: 0in;
              border-collapse: collapse;
            "
          >
            <tr>
              <th width="15%" style="min-width: 15%"></th>
              <th width="12%" style="min-width: 12%"></th>
              <th width="12%" style="min-width: 12%"></th>
              <th width="12%" style="min-width: 12%"></th>
              <th width="12%" style="min-width: 12%"></th>
              <th width="12%" style="min-width: 12%"></th>
              <th width="10%" style="min-width: 10%"></th>
              <th width="100px" style="max-width: 100px"></th>
            </tr>
            <tbody>
             
             
              <tr>
                <td colspan="8" style="text-align: center; font-size: 14pt; margin-bottom: 8pt;">
                  <b>MA'LUMOTNOMA </b>
                </td>
              </tr>
              <tr>
                <td colspan="7"></td>
                <td style="text-align:right; position:relative; display: fl;" rowspan="3">
                 <div style="min-width:100%; min-height:100%; display: flex; align-items: flex-start;">
                  <img :src="cadry.phote" width="90" height="120" style="position: fixed; top: 0px;"/>
                 </div>
                </td>
              </tr>

              <tr>
                <td colspan="7" style="text-align: center; font-size: 14pt">
                  <p
                    style="
                      margin-bottom:0pt;
                      margin-top: 0pt;
                      margin-bottom: 0pt;
                      font-size: 14pt;
                    "
                  >
                    <b> {{ cadry.fullName }}</b>
                  </p>
                </td>
              </tr>


             


             
              <tr style="font-size: 14.5px; margin-bottom:6pt;">
                <td colspan="7">
                 <div style="width:100%; min-height:100%">
                  {{ cadry.post_date }} dan:
                  <p style="margin:0pt;">  <b>{{ cadry.post_name }}</b></p>
                 </div>
                
                </td>
              </tr>
              <!-- <tr style="font-size: 14.5px; margin-bottom: 6pt">
                <td colspan="6">
                  <b>{{ cadry.post_name }}</b>
                </td>
                <td></td>
              </tr> -->
              <tr style="font-size: 14.5px; margin-bottom:0pt;">
                <td colspan="3">
                  <b>Tug'ilgan yili:</b>
                </td>
                <td></td>
                <td colspan="3">
                  <b>Tug'ilgan joyi:</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px">
                <td colspan="3" style="vertical-align: top; margin-bottom: 4pt">
                  {{ cadry.birth_date }}
                </td>
                <td></td>
                <td colspan="3" style="margin-bottom: 6pt">
                  {{ cadry.birth_place }}
                </td>
              </tr>

              <tr style="font-size: 14.5px">
                <td colspan="3">
                  <b>Millati:</b>
                </td>
                <td></td>
                <td colspan="3">
                  <b>Partiyaviyligi:</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="3" style="vertical-align: top; margin-bottom: 6pt">
                  {{ cadry.nationality }}
                </td>
                <td></td>
                <td colspan="3">{{ cadry.party }}</td>
              </tr>

              <tr style="font-size: 14.5px">
                <td colspan="3">
                  <b>Ma'lumoti:</b>
                </td>
                <td></td>
                <td colspan="3">
                  <b>Tamomlagan:</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="3" style="vertical-align: top">
                  {{ cadry.education }}
                </td>
                <td></td>
                <td colspan="4">
                  <div v-for="item in cadry.educations" :key="item.id">
                    {{ item.date2 }} yil, {{ item.name }}
                  </div>
                </td>
              </tr>

              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td style="vertical-align: top" colspan="3">
                  <b>Ma'lumoti bo'yicha mutaxassisligi:</b>
                </td>
                <td></td>
                <td colspan="4">
                  <div v-for="item in cadry.educations" :key="item.speciality">
                    {{ item.speciality }}
                  </div>
                </td>
              </tr>

              <tr style="font-size: 14.5px">
                <td colspan="3">
                  <b>Ilmiy darajasi:</b>
                </td>
                <td></td>
                <td colspan="4">
                  <b>Ilmiy unvoni:</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="3">{{ cadry.academec_degree }}</td>
                <td></td>
                <td colspan="4">{{ cadry.academec_title }}</td>
              </tr>

              <tr style="font-size: 14.5px">
                <td colspan="3">
                  <b>Qaysi chet tillarini biladi:</b>
                </td>
                <td></td>
                <td colspan="4">
                  <b>Xarbiy (maxsus) unvoni:</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="3">{{ cadry.lan }}</td>
                <td></td>
                <td colspan="4">{{ cadry.military_rank }}</td>
              </tr>
              <tr style="font-size: 14.5px">
                <td colspan="8">
                  <b>Davlat mukofotlari bilan taqdirlanganmi(qanaqa):</b>
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="8">
                  <span
                    v-for="(item, index) in cadry.incentives"
                    :key="item.id"
                    style="padding-right: 10px"
                  >
                    {{ item.type_incentive }}
                    {{ index + 1 == cadry.incentives.length ? "" : "," }}
                  </span>
                </td>
              </tr>
              <tr style="font-size: 14.5px">
                <td colspan="8">
                  <b
                    >Xalq deputatlari respublika, viloyat, shahar va tuman
                    Kengashi deputatimi yoki boshqa saylanadigan organlarning
                    a'zosimi(to'liq ko'rsatilishi lozim):</b
                  >
                </td>
              </tr>
              <tr style="font-size: 14.5px; margin-bottom: 4pt">
                <td colspan="8">yo'q</td>
              </tr>
              <tr>
                <td
                  colspan="8"
                  style="
                    text-align: center;
                    font-size: 14pt;
                    margin-bottom: 4pt;
                  "
                >
                  <b>MEHNAT FAOLIYATI</b>
                </td>
              </tr>

              <tr
                v-for="item in cadry.carers"
                :key="item.id"
                style="font-size: 14.5px; margin-bottom: 4pt"
              >
                <td style="vertical-align: top" v-if="item.date2">
                  <p>{{ item.date1}}-{{ item.date2 }} yy.</p>
                </td>
                <td style="vertical-align: top" v-if="!item.date2">
                  <p>{{ item.date1}} y.- h.v.</p>
                </td>
                <td colspan="7">
                  <p>
                    {{ item.staff_name }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>


          <p style="text-autospace: none"><span>&nbsp;</span></p>
          <p style="text-autospace: none"><span>&nbsp;</span></p>

          <b
            ><span><br clear="all" style="page-break-before: always" /> </span
          ></b>

        
          <p
            style="
              text-align: center;
              font-size: 12pt;
              margin-top: 0px;
              width: 100%;
              margin-bottom: 0pt;
              font-weight: 700;
            "
            >{{ cadry.fullName }}ning yaqin qarindoshlari haqida</p
          >

          <p
            style="
              text-align: center;
              margin-bottom: 5px;
              margin-top: 0px;
              font-size: 12pt;
            "
          >
            <b><span>MA'LUMOT</span></b>
          </p>

          <table
            class="table"
            cellpadding="0"
            cellspacing="0"
            style="
              margin-left: -25.5pt;
              border-collapse: collapse;
              border: none;
              text-align: center;
              font-size: 14.5;
            "
          >
            <tr>
              <th width="16%" style="min-width: 16%"></th>
              <th width="18%" style="min-width: 18%"></th>
              <th width="22%" style="min-width: 22%"></th>
              <th width="22%" style="min-width: 22%"></th>
              <th width="22%" style="min-width: 22%"></th>
            </tr>
            <tbody style="font-size: 14.5px">
              <tr>
                <td style="border: solid black 1pt">
                  <b>Qarindoshligi</b>
                </td>
                <td style="border: solid black 1pt">
                  <b>Familiyasi,ismi va otasining ismi</b>
                </td>
                <td style="border: solid black 1pt">
                  <b>Tug'ilgan yili va joyi</b>
                </td>
                <td style="border: solid black 1pt">
                  <b>Ish joyi va lavozimi</b>
                </td>
                <td style="border: solid black 1pt">
                  <b>Turar joyi</b>
                </td>
              </tr>

              <tr v-for="item in cadry.relatives" :key="item.id">
                <td style="border: solid black 1pt">
                  <b>{{ item.relative.name }}</b>
                </td>
                <td style="border: solid black 1pt">
                  {{ item.fullname }}
                </td>
                <td style="border: solid black 1pt">
                  {{ item.birth_place }}
                </td>
                <td style="border: solid black 1pt">{{ item.post }}</td>
                <td style="border: solid black 1pt">
                  {{ item.address }}
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    </div>
  </div>
</template>
<script>
import EksportService from "../../service/servises/EksportService";
export default {
  props: {
    cadry_id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      cadry: {
        fullName: null,
        phote: null,
        birth_place: null,
        birth_date: null,
        post_name: null,
        post_date: null,
        carers: [],
        relatives: [],
        educations: [],
        lan: null,
        academec_degree: null,
        academec_title: null,
        deputy: null,
        military_rank: null,
        incentives: [],
        nationality: null,
        party: null,
        education: null,
        // base64:null,
      },
    };
  },
  watch: {
    cadry_id(id) {
      console.log(id);
    },
  },
  methods: {
    generateWord(id) {
      console.log(id);
      EksportService.get_ResumeDetails({ id: id })
        .then((res) => {
          this.editTemplate(res.data);
          let fileName = res.data.cadry.fullname;
          // this.cadry.base64 = res.data.img_base64;

          setTimeout(() => {
            this.Export2Word("exportContent", fileName);
          }, 400);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async editTemplate(item) {
      console.log(item);
      this.cadry.fullName = item.cadry.fullname;
      this.cadry.phote = item.cadry.photo;
      // this.cadry.phote = res.data.img_base64;
      this.cadry.birth_place = item.cadry.birth_place;
      this.cadry.birth_date = item.cadry.birth_date;
      this.cadry.post_name = item.cadry.staff.staff_full;
      this.cadry.post_date = item.cadry.staff.staff_date;
      this.cadry.relatives = item.relatives;
      this.cadry.carers = item.carers;
      this.cadry.educations = item.educations;
      this.cadry.lan = item.lan;
      this.cadry.academec_degree = item.cadry.academec_degree;
      this.cadry.academec_title = item.cadry.academec_title;
      this.cadry.deputy = item.cadry.deputy;
      this.cadry.military_rank = item.cadry.military_rank;
      this.cadry.incentives = item.incentives;
      this.cadry.nationality = item.cadry.nationality;
      this.cadry.party = item.cadry.party;
      this.cadry.education = item.cadry.education;
    },
    Export2Word(element, filename = "") {
      var preHtml =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      var postHtml = "</body></html>";
      var html =
        preHtml + document.getElementById(element).innerHTML + postHtml;
      var blob = new Blob(["\ufeff", html], {
        type: "application/msword",
      });
      // Specify link url
      var url =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html);
      // Specify file name
      filename = filename ? filename + ".doc" : "document.doc";
      // Create download link element
      var downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        downloadLink.href = url;
        // Setting the file name
        downloadLink.download = filename;
        //triggering the function
        downloadLink.click();
      }
      document.body.removeChild(downloadLink);
    },
  },
};
</script>