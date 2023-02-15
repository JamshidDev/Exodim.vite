<template>
    <div class="grid px-3">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 pb-0">
            <bread-crumb
              :breadCump="[
                { name: 'Statistika', path: this.global? '/admin/statistic': '/admin/partstatistic' },
                { name: 'Sverx', path: '' },
              ]"
            ></bread-crumb>
          </div>
          <div class="col-12 y-0 py-0">
            <span class="text-2xl font-semibold"
              >Ortiqcha ish o'rinlari
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
              <Button
                  icon="pi pi-filter"
                  label="Sverx"
                  class=" p-button-danger mx-2 p-button-sm"
                />
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
              <div class="w-full text-center text-sm font-normal">
                {{ slotProps.data.number }}
              </div>
            </template>
          </Column>
          <Column  style="min-width: 100px; width: 200px">
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
              {{ slotProps.data.organization_id.name }}
              </div>
            </template>
          </Column>
  
          <Column style="min-width: 200px">
            <template #header>
              <div class="text-800 font-semibold">Lavozim nomi</div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.staff_fullname
                    ? slotProps.data.staff_fullname
                    : `Tizimda ma'lumot yo'q`
                }}
              </div>
            </template>
          </Column>
          <Column style="min-width:80px; width:100px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                Stavka
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
                  text-red-400
                  text-center
                  font-bold
                "
              >
                <span>{{ slotProps.data.rate_sum - slotProps.data.rate }}</span>
              </div>
            </template>
          </Column>
  
          <Column :exportable="false" style="min-width: 100px; width: 200px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                Shtat 
              </div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.staff_id.name
                    ? slotProps.data.staff_id.name
                    : `Tizimda ma'lumot yo'q`
                }}
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
      <vacanc-loader></vacanc-loader>
     </div>
    </div>
  </template>
  <script>
  import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb.vue";
  import ViewService from '@/service/servises/ViewService'
  import TablePagination from "../../../components/Pagination/TablePagination.vue";
  import NoDataComponent from "../../../components/EmptyComponent/NoDataComponent.vue";
  import VacancLoader from '../../../components/loaders/VacancLoader.vue';
  
  export default {
    components: {
      BreadCrumb,
      TablePagination,
      NoDataComponent,
      VacancLoader,
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
          ViewService.get_ViewSverx(params).then((res)=>{
              let number =
              (this.params.page - 1) * this.params.per_page;
              res.data.over.data.forEach((item) => {
              number++;
              item.number = number;
            });
              this.List = res.data.over.data;
              this.totalItem = res.data.over.pagination.total;
  
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