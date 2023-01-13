<template>
    <div class="grid px-3">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 pb-0">
            <bread-crumb
              :breadCump="[
                { name: 'Statistika', path: this.global? '/admin/statistic': '/admin/partstatistic' },
                { name: 'Passport', path: '' },
              ]"
            ></bread-crumb>
          </div>
          <div class="col-12 y-0 py-0">
            <span class="text-2xl font-semibold"
              >Passport nusxasi yuklanmagan xodimlar -
              <span class="text-base text-primary pl-2">
              ({{ totalItem }})</span
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
              v-model="params.search"
              class="p-inputtext-sm"
              placeholder="Qidiruv"
              @keyup.enter="searchBtn()"
            />
          </div>
          <div class="col-6 flex justify-content-end">
             
          </div>
        
        </div>
      </div>
  
      <div class="col-12" v-show="!loading">
          <DataTable
          ref="dt"
          :value="List"
          dataKey="id"
          responsiveLayout="scroll"
          showGridlines
          class="p-datatable-sm"
          v-show="List.length>0"
        >
          <Column style="min-width:30px; width:36px">
            <template #header>
              <div class="text-800 text-sm font-medium">
                No
              </div>
            </template>
            <template #body="slotProps">
              <div class="w-full text-center text-base font-medium">
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
          <Column style="min-width:100px; width:200px">
            <template #header>
              <div class="text-800 font-semibold">F.I.SH</div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.fullname
                   
                }}
              </div>
            </template>
          </Column>
          <Column :exportable="false" style="min-width: 100px;">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                Lavozimi
              </div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.staff.staff_full
                }}
              </div>
            
            </template>
          </Column>
          
          <Column  style="min-width: 100px; width: 400px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                
                {{global? 'Korxona nomi': 'Bo\'lim nomi' }}
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
                  hover:text-blue-500
                  cursor-pointer
                "
              >
                <div v-show="global">{{ slotProps.data.organization.name }}</div>
                <div v-show="!global">{{ slotProps.data.staff.department_id.name }}</div>

              </div>
            </template>
          </Column>
          <Column :exportable="false" style="min-width: 30px; width: 40px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex w-full align-items-center">
              <download-button
                :color="'bg-primary active:bg-primary'"
                :border="'border-1 border-primary border-round'"
                v-tooltip.left="`Ma'lumotlarni ko'rish`"
                :icon="'pi pi-id-card'"
                @click="goPushDetails(slotProps.data.id)"
              ></download-button>
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
        <no-data-component v-show="!List.length>0"></no-data-component>
      </div>
     <div class="col-12" v-show="loading">
      <birthday-loader></birthday-loader>
     </div>
    </div>
  </template>
  <script>
  import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb.vue";
  import ViewService from '@/service/servises/ViewService'
  import TablePagination from "../../../components/Pagination/TablePagination.vue";
  import NoDataComponent from "../../../components/EmptyComponent/NoDataComponent.vue";
  import BirthdayLoader from "../../../components/loaders/BrithdayLoader.vue"
  import DownloadButton from '@/components/buttons/DownloadButton'
  
  export default {
    components: {
      BreadCrumb,
      TablePagination,
      NoDataComponent,
      BirthdayLoader,
      DownloadButton,
    },
    data() {
      return {
        loading:false,
        global:true,
        params: {
          railway_id:null,
          organization_id:null,
          department_id:null,
          page: 1,
          per_page: 10,
          search: null,
        },
        List:[],
        totalItem:0,
        totalcount:0,
      };
    },
    methods:{
      get_List(params){
        this.controlLoaser(true)
          ViewService.get_ViewNotPassportCadry(params).then((res)=>{
            console.log(res.data.passports.data);
              let number =
              (this.params.page - 1) * this.params.per_page;
              res.data.passports.data.forEach((item) => {
              number++;
              item.number = number;
            });
              this.List = res.data.passports.data;
              this.totalItem = res.data.passports.pagination.total;
  
              this.controlLoaser(false)
          })
      },
      searchBtn(){
        this.get_List(this.params)
      },
      changePagination(event){
          this.params.page = event.page;
          this.params.per_page = event.per_page;
          this.get_List(this.params)
      },
      goPushDetails(id) {
      this.$router.push(`/admin/employee/view/${id}`);
    },
      controlLoaser(item){
        this.loading = item;
      }
    },
    created(){
      this.params.railway_id = JSON.parse(this.$route.params.railway_id);
      this.params.organization_id = JSON.parse(this.$route.params.organization_id);
      this.params.department_id =  JSON.parse(this.$route.params.department_id);
      this.global = this.$route.params.global=="1"? true : false;
      this.get_List(this.params)
     
    }
  };
  </script>
  <style lang="">
  </style>