<template>
    <div class="grid px-3">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 pb-0">
            <bread-crumb
              :breadCump="[
                { name: 'Statistika', path: this.global? '/admin/statistic': '/admin/partstatistic' },
                { name: 'Faoliyati yakunlanganlar', path: '' },
              ]"
            ></bread-crumb>
          </div>
          <div class="col-12 y-0 py-0">
            <span class="text-2xl font-semibold "
              >Mehnat faoliyati yakunlanganlar -
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
            <Calendar inputId="range" @date-select="changeCalendar"  dateFormat="dd/mm/yy" v-model="rangeDate" selectionMode="range" class="p-inputtext-sm" :manualInput="false" />
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
          <Column style="min-width: 200px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">F.I.SH</div>
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
                  font-normal
                  cursor-pointer
                "
              >
                <div>{{ slotProps.data.organization.name }}</div>
              </div>
            </template>
          </Column>
          <Column :exportable="false" style="min-width: 100px; width: 300px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                Prikaz raqami
              </div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.command_number
                }}
              </div>
            
            </template>
          </Column>
  
         
  
          <Column :exportable="false" style="min-width: 100px; width: 300px">
            <template #header>
              <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
                Sababi
              </div>
            </template>
            <template #body="slotProps">
              <div
                class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
              >
                {{
                  slotProps.data.comment
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
  import formatter from "../../../util/formatter";
  export default {
    components: {
      BreadCrumb,
      TablePagination,
      NoDataComponent,
      BirthdayLoader,
    },
    data() {
      return {
        formatter,
        loading:false,
        global:true,
        rangeDate:[],
        params: {
          railway_id:null,
          organization_id:null,
          department_id:null,
          page: 1,
          per_page: 10,
          search: null,
          date1:null,
          date2:null,

        },
        today:new Date(),
        
        
        List:[],
        totalItem:0,
        totalcount:0,
      };
    },
    methods:{
      get_List(params){
        this.controlLoaser(true)
        this.params.date1 = this.formatter.outDateFormatter(this.rangeDate[0])
        this.params.date2 = this.formatter.outDateFormatter(this.rangeDate[1])
          ViewService.get_ViewDeleteCadry(params).then((res)=>{
              console.log(res.data.cadries);
              let number =
              (this.params.page - 1) * this.params.per_page;
              res.data.cadries.data.forEach((item) => {
              number++;
              item.number = number;
            });
              this.List = res.data.cadries.data;
              this.totalItem = res.data.cadries.pagination.total;
  
              this.controlLoaser(false)
          })
      },
      changeCalendar(){
        console.log(this.rangeDate.length);
        if(this.rangeDate[1]!==null){
            this.get_List(this.params)
        }
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
        var today = new Date()
        var currentDate = new Date()
        this.rangeDate=[
        new Date(currentDate.setDate(today.getDate() -1)),
            today
        ]
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