<template>
    <div class="grid">
        <div class="col-12">
            <DataTable :value="products" responsiveLayout="scroll" showGridlines class="p-datatable-sm">
                <Column   style="min-width:30px; width:36px">
                    <template #body>
                        <Skeleton size="1rem" class="mr-2"></Skeleton>
                    </template>
                </Column>
                <Column style="min-width:100px;">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column style="min-width:100px; width:120px">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column style="min-width:100px; width:150px">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column style="min-width:100px; width:150px">
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

