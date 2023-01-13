<template>
    <div class="grid">
      <div class="col-12 xl:col-3 lg:col-3 md:col-3 sm:col-4 p-3" v-for="item in products" :key="item">
        <Skeleton width="100%" height="220px"></Skeleton>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        products: new Array(12),
      };
    },
  };
  </script>
  <style lang="">
  </style>