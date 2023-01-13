<template>
    <a
      class="
        flex
        w-full
        justify-content-center
        py-2
        bg-yellow-500
        active:bg-yellow-400
        cursor-pointer
        border-1 border-yellow-500 border-round
      "
      @click="updateBtn"
      style="max-width: 40px"
      :href="file_Link"
      target="_blank"
      download
    >
      <i :class="['pi',icon? icon: 'pi-cloud-download' ]" class="text-white text-base"></i>
    </a>
  </template>
  <script>
  export default {
      props:["file_Link", "icon"],
  };
  </script>
  <style lang="">
  </style>