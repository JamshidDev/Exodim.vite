<template >
  <div
    class="
      flex
      w-full
      justify-content-center
      py-2
      bg-red-500
      cursor-pointer
      border-1 border-red-500 border-round
      active:bg-red-400
    "
    v-tooltip.bottom="`O'chirish`"
    @click="showTemplate($event)"
    style="max-width: 40px"
  >
    <i class="pi pi-trash text-white text-base"></i>
  </div>
  <ConfirmPopup group="demo">
    <template #message="slotProps">
      <div class="flex p-2">
        <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
        <p class="pl-2">{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmPopup>
</template>
<script>
import ConfirmPopup from "primevue/confirmpopup";
export default {
  components: {
    ConfirmPopup,
  },
  emits :{
    deleteAcceptEvent: null,
        },
  props: ["deleteItem"],
  data() {
    return {};
  },
  methods: {
    showTemplate(event) {
      this.$confirm.require({
        target: event.currentTarget,
        group: "demo",
        message: "Haqiqatdan ham o'chirmoqchimisiz",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "p-button-danger p-button-sm",
        rejectClass: "p-button-info p-button-sm",
        acceptLabel: "Ha",
        rejectLabel: "Yo'q",
        accept: () => {
          this.returnEvent1(this.deleteItem);
        },
        reject: () => {
          this.returnEvent2(this.deleteItem);
        },
      });
    },
    returnEvent1(item) {
      this.$emit("deleteAcceptEvent", item);
    },
    returnEvent2(item) {
      this.$emit("deleteRejectEvent", item);
    },
  },
};
</script>
<style lang="">
</style>