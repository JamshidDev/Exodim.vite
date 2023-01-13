<template>
  <Dialog
    :closable="false"
    v-model:visible="dialog"
    :breakpoints="{'1400px': '50vw', '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <template #header>
      <div class="col-12">
        <div class="flex justify-content-center">
          <i class="pi pi-shield text-yellow-500 text-6xl mb-2"></i>
        </div>
        <p
          class="
            text-center
            uppercase
            text-yellow-500
            w-full
            text-2xl
            font-semibold
          "
        >
          {{title}}
        </p>
      </div>
    </template>
    <div class="grid">
      <div class="col-12 pb-1">
        <div class="text-center font-semibold text-2xl text-blue-500">{{company_name}}</div>
      </div>
      <div class="col-12 pt-0 ">
        <div class="text-center font-medium text-lg ">
         {{cadry_fullName}}
        </div>
      </div>
    </div>

    <template #footer>
      <div class="col-12">
        <div class="flex justify-content-center">
          <Button
            label="Yopish"
            class="p-button-warning font-medium p-button-sm"
            @click="controlDialog(item)"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      title:" ",
      company_name:"",
      cadry_fullName:"",
    };
  },
  methods: {
    controlDialog(item, title, company, fullName ) {
      this.title = title;
      this.company_name= company;
      this.cadry_fullName = fullName;
      this.dialog = item;
    },
  },
};
</script>
<style lang="">
</style>