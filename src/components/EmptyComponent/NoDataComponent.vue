<template>
    <div class="grid p-0">
        <div class="col-12  mt-8 pt-8">
        <div class="w-full flex justify-content-center">
            <img width="180" src="../../assets/picture/empty_card.png" alt=""/>
        </div>
        <h6 class="text-center text-400">{{message}}</h6>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        message:{
            type:String,
            default:"Ma'lumot yo'q"
        }
    }
}
</script>
<style lang="scss" scoped>
</style>