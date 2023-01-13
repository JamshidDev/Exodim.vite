<template>
    <div>
      <div class="grid w-full px-0 pt-6">
        <Menubar  class="px-4 fixed top-0 left-0 right-0 w-full guide_menu">
          <template #start>
           <div class="flex gap-3">
            <i @click="$router.go(-1)" class="pi pi-arrow-circle-left text-3xl cursor-pointer" ></i>
            <i @click="$router.go(1)" class="pi pi-arrow-circle-right text-3xl cursor-pointer"></i>
           </div>
          </template>
          <template #end class="w-full">
            <Dropdown
                v-model="guide"
                :options="guideList"
                optionLabel="name"
                :filter="true"
                placeholder="Qo'llanmani nomi orqali izlash..."
                class="font-semibold guide_search"
                @change="changeSearch"
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value"
                    v-if="slotProps.value"
                  >
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
          </template>
        </Menubar>
        <div class="col-12 mb-4">
          <div class="cs_container surface-0 px-4 py-3 mt-6">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </template>
    <script>
  export default {
    data() {
      return {
        guide:null,
        guideList: [
        {
          name: `Tizimga kirish va ma'sul xodimlarni ma'lumotlarini kiritish bo'yicha qo'llanma`,
          icon: `pi pi-file`,
          to: "/guide/one",

        },
        {
          name: `Exodimga yangi xodim ma'lumotlarini kiritish bo'yicha qo'llanma`,
          icon: `pi pi-file`,
          to: "/guide/two",
        },
       
      ],
        
      };
      
    },
    methods:{
       changeSearch(){
        this.$router.push(this.guide.to)
       } 
    }
  };
  </script>
    <style lang="scss">
  .transition_animation {
    transition: all 0.2s linear;
  }
  .guide_menu {
    .p-menubar-button{
        display: none !important;
    }
    .p-menubar-end{
        width:calc(100% - 100px) !important;
        max-width: 600px;
    }
  }
  .guide_search{
    width: 100%;
    

  }
  </style>