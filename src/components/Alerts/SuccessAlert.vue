<template >
  <Dialog
    :closable="false"
    v-model:visible="dialogSuccess"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <template #header>
      <div class="col-12">
        <div class="flex justify-content-center">
          <i class="pi pi-check-circle text-green-500 text-6xl mb-4"></i>
        </div>
        <p
          class="
            text-center
            uppercase
            font-semibold
            text-green-500
            w-full
            text-2xl
          "
        >
          {{title}}
        </p>
      </div>
    </template>
    <div class="grid">
      <div class="col-12">
              <div class="text-left font-medium text-lg">{{company}} </div>
            </div>
      <div class="col-12">
        <div class="text-left font-medium text-lg">
         {{fullName}}
          
        </div>
      </div>
    </div>

    <template #footer>
      <div class="col-12">
        <div class="flex justify-content-center">
          <Button
            label="Tushunarli"
            class="p-button-success"
            @click="controlDialog(false)"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script>
export default {
    data(){
        return{
            dialogSuccess:false,
            title:"",
            company:"",
            fullName:"",
        }
    },
    methods:{
        controlDialog(item, title, company, fullName){
            this.dialogSuccess = item;
            this.title =title;
            this.company = company;
            this.fullName = fullName;
        }
    }
};
</script>
<style lang="">
</style>