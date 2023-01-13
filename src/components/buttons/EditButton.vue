<template>
  <div
    class="
      flex
      w-full
      justify-content-center
      align-items-center
      py-2
      bg-blue-500
      active:bg-blue-400
      cursor-pointer
      border-1 border-blue-500 border-round
    "
    v-tooltip.bottom="`Tahrirlash`"
    @click="updateBtn"
    style="max-width: 40px"
  >
    <i class="pi pi-pencil text-white text-base"></i>
  </div>
</template>
<script>
export default {
    props:["editItem"],
    methods:{
        updateBtn(){
            this.$emit("editEvent", this.editItem)
        }
    }
};
</script>
<style lang="scss" scoped>
</style>