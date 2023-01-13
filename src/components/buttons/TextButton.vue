<template>
    <div
      class="
        flex
        w-full
        justify-content-center
        py-1
        text-white
        bg-green-500
        active:bg-green-400
        cursor-pointer
        border-1 border-green-500 border-round
        text-sm uppercase font-medium
      "
    >
     {{text}}
    </div>
  </template>
  
  <script>
  export default {
      props:{
        text:{
            type:String,
            default:" "
        }
      }
  };
  </script>
  <style lang="">
  </style>