<template >
  <div class="grid">
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <AutoComplete
        v-model="value2"
        :suggestions="filteredCountries"
        @complete="searchCountry($event)"
        field="name"
        placeholder="Xodim F.I.SH"
        class="w-full"
      />
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <Dropdown
        v-model="selectedCountry"
        :options="countries"
        optionLabel="name"
        :filter="true"
        placeholder="Bo'limni tanlang"
        :showClear="true"
        class="w-full"
      >
        <template #value="slotProps">
          <div class="country-item country-item-value" v-if="slotProps.value">
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <Dropdown
        v-model="selectedCountry"
        :options="countries"
        optionLabel="name"
        :filter="true"
        placeholder="Shtat lavozimi tanlang"
        :showClear="true"
        class="w-full"
      >
        <template #value="slotProps">
          <div class="country-item country-item-value" v-if="slotProps.value">
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <Button
        label="Qidiruv"
        icon="pi pi-search"
        class="p-button-secondary w-10"
      />
      <Button
        icon="pi pi-filter"
        class="w-2 p-button-text p-button-secondary"
        @click="openFilterPanel"
      />

      <!-- Additional property -->
      <OverlayPanel
        ref="op"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '450px' }"
      >
        <div class="grid">
          <div class="col-12">
            <h6 class="text-sm uppercase">Qo'shimcha filter sozlamalari</h6>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Viloyat</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Viloyati"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Tuman</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Tumani"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>

           <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ma'lumoti</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Ma'lumoti"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ta'til</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Ta'til"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-1">Yosh oralig'i</h6>
              <p class="text-center text-blue-600 font-semibold">{{selectedAge[0]+" -- "+selectedAge[1]}} </p>
            </div>
            <div class="w-full flex">
              <div class="w-full">
               <Slider class="" v-model="selectedAge"  :step="1" :range="true" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Jinsi</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Jinsi"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <p class="text-left text-600">Qo'shimcha filter sozlamalariga e'tibor bilan tanlang</p>
          </div>
          


        </div>
      </OverlayPanel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedregion: null,
      selectedAge:[10 , 80],
      region: [
        {
          id: 1,
          name: "Xorazm",
        },
        {
          id: 2,
          name: "Toshkent",
        },
        {
          id: 3,
          name: "Buxoro",
        },
        {
          id: 4,
          name: "Termiz",
        },
        
      ],
    };
  },
  methods: {
    openFilterPanel(event) {
      this.$refs.op.toggle(event);
    },
  },
};
</script>
<style lang="">
</style>