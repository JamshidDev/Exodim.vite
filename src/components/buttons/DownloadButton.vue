<template>
    <div
      class="
        flex
        w-full
        justify-content-center
        py-2
        cursor-pointer
      "
      :class="[color? color: ' bg-yellow-500 active:bg-yellow-400', border? border : 'border-1 border-yellow-500 border-round']"
      style="max-width: 40px"
    >
      <i :class="['pi',icon? icon: 'pi-cloud-download' ]" class="text-white"></i>
    </div>
  </template>
  <script>
  export default {
      props:["icon", "color","border"],
  };
  </script>
  <style lang="">
  </style>