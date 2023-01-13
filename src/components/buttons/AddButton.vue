<template>
    <div class="w-full border-dashed border-1 border-400  py-4 flex justify-content-center align-items-center">

        <div v-show="!text" class="bg-blue-300 active:bg-blue-400 text-sm text-white p-2 border-1 uppercase font-medium border-round-sm cursor-pointer"> <i class="pi pi-plus-circle"></i> {{title}}</div>
        <div v-show="text" class="text-sm text-500 p-2 border-1 uppercase font-medium border-round-sm cursor-pointer"> {{title}}</div>
        
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"qo'shish"
        },
        text:{
            type:Boolean,
            default:false,
        }
    },
}
</script>
<style lang="">
    
</style>