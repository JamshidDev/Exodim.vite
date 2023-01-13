
<template>
    <div class="grid">
        <div class="col-12">
            <DataTable :value="products" responsiveLayout="scroll" showGridlines class="p-datatable-sm">
                <Column field="code"  style="width: 3rem">
                    <template #body>
                        <Skeleton size="2rem" class="mr-2"></Skeleton>
                    </template>
                </Column>
                <Column  >
                    <template #header>
            <div class="text-800 font-semibold">Shtat lavozim nomi</div>
          </template>
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column style="min-width: 200px; width: 300px">
                    <template #header>
            <div class="text-800 font-semibold">Biriktirilgan bo'limlar</div>
          </template>
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column  style="min-width: 100px; width: 100px">
                    <template #header>
            <div class="text-800 font-semibold">Kategoriya</div>
          </template>
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column  style="min-width: 100px; width: 150px">
                    <template #header>
            <div class="text-800 font-semibold">Xodimlar soni</div>
          </template>
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column  style="min-width: 150px; width: 150px">
                    <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
                    <template #body>
                      <div class="flex">
                        <Skeleton size="3rem" class="mr-2"></Skeleton>
                        <Skeleton size="3rem" class="mr-2"></Skeleton>
                        <Skeleton size="3rem" class="mr-2"></Skeleton>
                      </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            products:new Array(10),
      selectedProducts: null,
        }
    }
}
</script>
<style lang="">
    
</style>
