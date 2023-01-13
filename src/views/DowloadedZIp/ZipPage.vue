<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb :breadCump="[{name:'Xodimlar', path:'/admin/partemployee'}, {name:'Yuklamalar', path:''}]"></bread-crumb>
        </div>
        <div class="col-12">
         <div class="grid p-0">
          <div class="col-6 py-0">
            <span class="text-2xl font-semibold"
            >Yuklamalar
            <span v-show="totalItem > 0" class="text-base text-primary pl-2">
              ({{ totalItem }})</span
            >
          </span>
          </div>
          <div class="col-6 py-0 flex justify-content-end">
            <Button  :loading="loading" icon="pi  pi-refresh" class=" p-0  p-button-sm p-button-success" @click="get_Task()" />
          </div>
         </div>
        </div>
      </div>
    </div>
    <div class="col-12 py-0" v-show="!loading">
      <DataTable
        ref="dt"
        :value="List"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        v-show="totalItem>0"
        class="p-datatable-sm"
        v-model:selection="selectitem"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Fayl nomi
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-left text-base font-medium">
              {{ slotProps.data.comment }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width: 120px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Status
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full" v-show="slotProps.data.status == 1">
              <Chip
                label="Yakunlangan"
                class="
                  mr-2
                  mb-2
                  text-sm text-green-700
                  bg-green-100
                  font-bold
                "
                icon="pi pi-check-circle"
              >
               </Chip
              >

            </div>
            <div class="w-full" v-show="slotProps.data.status == 0">
              <ProgressBar mode="indeterminate" style="height: 0.2em" />
            </div>

          </template>
        </Column>
        <Column style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Sana
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              <Chip
                :label="formatter.arrowDateFormat(slotProps.data.created_at)"
                class="
                  mr-2
                  mb-2
                  text-sm text-purple-700
                  bg-purple-100
                  font-bold
                "
              />
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Yuklash
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium" v-show="slotProps.data.status == 1">
              <a :href="slotProps.data.file_path"><Chip
                label="Yuklash"
                class="
                  mr-2
                  mb-2
                  text-sm text-green-700
                  bg-green-100
                  font-bold
                "
                icon="pi pi-arrow-circle-down"
              >
               </Chip
              ></a>
              
            </div>
            <div class="w-full text-center text-base font-medium" v-show="slotProps.data.status == 0">
              <Chip
                label="Kutilmoqda"
                class="
                  mr-2
                  mb-2
                  text-sm text-yellow-700
                  bg-yellow-100
                  font-bold
                "
                icon="pi pi-clock"
              />
              
            </div>
          </template>
        </Column>

        <Column style="min-width:50px; width:60px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteTask($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItem >10"
            :total_page="totalItem"
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="totalItem==0"></no-data-component>
    </div>

    <div class="col-12 py-0" v-show="loading">
      <zip-loader></zip-loader>
    </div>
  </div>
</template>
<script>
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import NoDataComponent from '@/components/EmptyComponent/NoDataComponent'
import EksportService from "@/service/servises/EksportService";
import formatter from "@/util/formatter";
import ZipLoader from '@/components/loaders/ZipLoader'
import TablePagination from '@/components/Pagination/TablePagination'
import DeleteButton from '@/components/buttons/DeleteButton'
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
    ZipLoader,
    TablePagination,
    DeleteButton,
  },
  data() {
    return {
      formatter,
      loading:false,
      params: {
        search: null,
        page: 1,
        per_page: 10,
      },
      List: [],
      totalItem: 0,
    };
  },
  methods: {
    get_Task(loader) {
      this.controlLoader(loader)
      EksportService.get_Task(this.params).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.tasks.data.forEach((item) => {
          number++;
          item.number = number;
        });

        this.List = res.data.tasks.data;
        this.totalItem = res.data.tasks.pagination.total;
        this.controlLoader(false)
      });
    },
    deleteTask(id){
      console.log(id);
      EksportService.delete_Task({task_id:id}).then((res)=>{
        this.get_Task(false);
      })
    },
    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_Task(true);
    },
    controlLoader(item){
      this.loading = item;
    }
  },
  created() {
    this.get_Task(true);
  },
};
</script>
<style lang="">
</style>