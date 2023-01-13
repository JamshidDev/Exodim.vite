<template>
    <div
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
    >
      <i :class="['pi',icon? icon: 'pi-cloud-download' ]" class="text-white text-base"></i>
    </div>
  </template>
  <script>
  export default {
      props:["icon"],
  };
  </script>
  <style lang="">
  </style>