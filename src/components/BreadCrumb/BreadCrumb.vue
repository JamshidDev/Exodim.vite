<template>
    <div class="grid">
        <div class="col-12 flex justify-content-end ">
          <span @click="goPush('/admin')" class="text-base text-primary cursor-pointer"><i class="pi pi-home"></i> Asosiy </span> 
          <span v-for="(item,index) in breadCump" :key="item.path">
            <span class="mx-2 cursor-pointer" :class="[index!==breadCump.length-1 && 'text-primary']">/</span> <span @click="goPush(item.path)" :class="[index!==breadCump.length-1 && 'text-primary']" class="text-base cursor-pointer">{{item.name}} </span>
          </span>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        breadCump:{
            type:Array,
            default:[],
        }
    },
    data(){
        return{
        }
    },
    methods:{
        goPush(path){
            if(path){
                this.$router.push(path)
            }
            
        }
    }
}
</script>
<style lang="">
    
</style>