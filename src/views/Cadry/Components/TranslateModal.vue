<template>
    <div class="grid">
        <div class="col-12">
            <Dialog
        v-model:visible="visible"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
        :showHeader="false"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500 font-medium">
            Ma'lumotlar lotin hariflariga o'girilmoqda
          </h6>
        </template>
        <div class="grid pt-2">
         <div class="col-12 pt-4">
            <ProgressBar mode="indeterminate" style="height:0.4em" class="w-full" />
            <div class="min-w-full block text-center text-500">Ma'lumotlar o'girilmoqda...</div>
         </div>
        </div>

        
      </Dialog>
        </div>
    </div>
</template>
<script>
import employeeService from '@/service/servises/employeeService.js';
export default {
    data(){
        return{
            visible:false,
        }
    },
    methods:{
        controlModal(item, id){
            this.visible = item;
            this.translateInfoToLotin(id)
        },
        translateInfoToLotin(id){
            employeeService.get_CadryInfoTranslate({cadry_id:id}).then((res) =>{
                location.reload()
            })
        }
    }
}
</script>
<style lang="">
    
</style>