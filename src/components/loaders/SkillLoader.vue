
<template>
    <div class="grid">
      <div class="col-12">
        <DataTable
          :value="products"
          responsiveLayout="scroll"
          showGridlines
          class="p-datatable-sm"
        >
          <Column header="" style="min-width: 30px; width: 36px">
            <template #body>
              <Skeleton size="1rem" class="mr-1"></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 60px; width: 60px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton size="2rem" class="mr-1"></Skeleton>
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
          <Column style="min-width: 100px; width: 150px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 100px; width: 100px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width: 100px; width: 100px">
            <template #header>
              <div class="text-800 font-semibold"></div>
            </template>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column style="min-width:120px; width:120px">
            <template #body>
              <div class="flex">
                <Skeleton size="2rem" class="px-7"></Skeleton>
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