<template>
  <div class="w-full">
    <Paginator
      v-model:first="currentPage"
      v-model:rows="page_count"
      :totalRecords="total_page"
      class="py-0 w-full text-base"
      style="background: transparent"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
      @page="changePagination($event)"
    >
      >
      <template #start>
        <span class="pr-2">Sahifaning</span>
        <InputText
          type="text"
          v-model.trim="enter_page_value"
          v-maska="'####'"
          class="w-5rem p-inputtext-sm"
          @keyup.enter="enter_page()"
        /> <span class="pl-2"> o'tish</span>
      </template>
      <template #end>
        <span class="pr-2 text-sm">Ma'lumotlarni</span>
        <Dropdown
        class=" m-0 p-0 p-inputtext-sm"
          v-model="row_page_drop"
          :options="row_per_page"
          optionLabel="name"
          @change="changeRowPage"
        />
        <span class="pl-2 text-sm">dan ko'rish</span>
      </template>
    </Paginator>
  </div>
</template>
<script>
export default {
  props: {
    total_page: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    per_page: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      pageDetails: {
        page: this.page,
        per_page: this.per_page,
      },

      currentPage: this.page,
      page_count: this.per_page,

      enter_page_value: this.page,

      row_per_page: [
        {
          name: "10",
          count: 10,
        },
        {
          name: "20",
          count: 20,
        },
        {
          name: "30",
          count: 30,
        },
      ],
      row_page_drop: {
        name: 10,
        count: 10,
      },
    };
  },

  methods: {
    enter_page() {
      if (this.enter_page_value && this.enter_page_value<= Math.ceil(this.total_page /this.per_page) && this.enter_page_value>=1) {
        this.pageDetails.page = this.enter_page_value;
        this.currentPage =
          (this.enter_page_value - 1) * this.pageDetails.per_page;
        this.pageEmit();
      }
      this.enter_page_value;
    },
    changeRowPage(event) {
      this.page_count = event.value.count;
      this.pageDetails.per_page = event.value.count;
      this.pageDetails.page = 1;
      this.currentPage = 1;
      this.enter_page_value = 1;
      this.pageEmit();
    },
    changePagination(event) {
      this.pageDetails.per_page = Number(event.rows);
      this.pageDetails.page = (event.first + Number(event.rows)) / event.rows;
      this.enter_page_value = (event.first + Number(event.rows)) / event.rows;
      this.pageEmit();
    },
    pageEmit() {
      this.$emit("pagination", this.pageDetails);
    },
  },
  created() {
    this.row_page_drop = this.row_per_page[this.per_page / 10 - 1];
    this.currentPage = (this.page - 1) * this.per_page;
    this.page_count = this.per_page;
  },
};
</script>