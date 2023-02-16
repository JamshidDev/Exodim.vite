<template >
  <div
    class="
      w-full
      loader_container
      flex
      justify-content-center
      align-items-center
    "
    :style="{
      'min-height':min_height
    }"
  >
    <ProgressSpinner style="width:50px;height:50px" />
  </div>
</template>
<script>
export default {
  props:{
    min_height:{
      type:String,
      default:'600px',
    }
  }
};
</script>
<style lang="scss">

</style>