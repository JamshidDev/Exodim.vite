
<template>
    <div class="grid">
      <div class="col-12">
        <DataTable
          :value="products"
          responsiveLayout="scroll"
          showGridlines
          class="p-datatable-sm"
        >
          <Column field="code" style="min-width:30px; width:36px">
            <template #body>
              <Skeleton size="1rem" class="mr-2"></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 200px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 100px; width: 300px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 100px; width: 200px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          
         
        </DataTable>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        products: new Array(15),
      };
    },
  };
  </script>
  <style lang="">
  </style>
  