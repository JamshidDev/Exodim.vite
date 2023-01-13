<template >
  <div class="grid px-3">

    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Kiruvchi xatlar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold">Kiruvchi xatlar </span>
        </div>
      </div>
    </div>

    <div class="col-12">
        <DataTable
        ref="dt"
        :value="msgList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-model:selection="selectItem"
      >


      
        <Column style="min-width: 100px; width: 400px">
            <template #header>
            <div
              class="text-sm"
            >
            Korxona
            </div>
          </template>
          
            <template #body>
            <div
              class="text-sm xl:text-base lg:text-base font-medium"
            >
            МТУ-1 "Тошкент минтақавий темир йўл узели" УК
            </div>
          </template>
        </Column>
        <Column style="min-width: 30px; width: 36px">
            <template #body>
            <div
              class="w-full"
            >
            <Checkbox
                :value="'1'"
                v-model="selectOptions"
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 100px">
          
            <template #header>
            <div
              class="text-sm"
            >
            Turi
            </div>
          </template>
          
            <template #body>
            <div
              class="w-full flex justify-content-center"
            >
            <Chip label="Priyom" icon="pi pi-bookmark-fill" class="bg-green-100 text-green-700 text-sm" />
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px">
            <template #header>
            <div
              class="text-sm"
            >
            Xat mazmuni
            </div>
          </template>
        
          <template #body>
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
            Yangi xodimlarni ishga olish bo'yicha buyruq
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:100px;">
            <template #header>
            <div
              class="text-sm"
            >
            Muddati
            </div>
          </template>
        
          <template #body>
            <div
            class="w-full flex justify-content-center"
            >
            <Chip label="12-11-2022" class="bg-purple-100 text-purple-700 text-sm font-medium" />
            </div>
          </template>
        </Column>
        
        <Column style="min-width:100px; width: 120px;">
            <template #header>
            <div
              class="text-sm"
            >
            Amallar
            </div>
          </template>
        
          <template #body>
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
            <Button label="Yo'naltirish" icon="pi pi-arrow-circle-right" iconPos="right" class="p-button-success p-button-sm text-sm py-2" />
            </div>
          </template>
        </Column>
        

    
        <template #footer>
         
        </template>
      </DataTable>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
export default {
  components: {
    BreadCrumb,
  },
  data(){
    return{
        msgList:new Array(10),
        selectItem:null,
        selectOptions:[],
    }
  }
};
</script>
<style lang="">
</style>