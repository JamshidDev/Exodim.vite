
<template>
    <div class="grid">
      <div class="col-12">
        <DataTable
          :value="products"
          responsiveLayout="scroll"
          showGridlines
          class="p-datatable-sm"
        >
          <Column style="min-width: 30px; width: 40px">
            <template #body>
              <Skeleton size="2rem" class="mr-2"></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 16rem">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
  

          <Column style="min-width: 50px; width: 100px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 50px; width: 100px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 120px; width: 120px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <div class="flex"> 
                <Skeleton size="2rem" class="mr-2"></Skeleton>
                <Skeleton size="2rem" class="mr-2"></Skeleton>
                <Skeleton size="2rem" class="mr-2"></Skeleton>
  
              </div>
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
        products: new Array(10),
        selectedProducts: null,
      };
    },
  };
  </script>
  <style lang="">
  </style>