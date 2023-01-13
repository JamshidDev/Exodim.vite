<template>
   <div class="grid mt-6">
            <div
              v-for="(item, index) in guideList"
              :key="item.to"
              class="
                col-12
                shadow-1
                hover:shadow-6
                transition_animation
                my-2
                cursor-pointer
                text-primary-700
                font-normal
                xl:text-lg
                lg:text-lg
                md:text-base
                sm:text-base
                text-sm
                py-2
              "
              @click="goPush(item.to)"
            >
              <span class="pr-3 font-medium">{{ index + 1 }}.</span>
              <span class="font-semibold">{{ item.title }}</span>
              <!-- <i :class="item.icon" class="pl-2"></i> -->
            </div>
          </div>
</template>
  <script>
export default {
  data() {
    return {

        guideList: [
        {
          title: `Tizimga kirish va ma'sul xodimlarni ma'lumotlarini kiritish bo'yicha qo'llanma`,
          icon: `pi pi-file`,
          to: "/guide/one",

        },
        {
          title: `Tizimga yangi xodim ma'lumotlarini kiritish bo'yicha qo'llanma`,
          icon: `pi pi-file`,
          to: "/guide/two",
        },
      ],

    };
    
  },
  methods:{
    goPush(link){
        this.$router.push(link)
    }
  }
};
</script>
  <style lang="scss">
.transition_animation {
  transition: all 0.2s linear;
}
</style>