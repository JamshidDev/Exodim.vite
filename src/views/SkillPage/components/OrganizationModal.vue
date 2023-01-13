<template>
  <div class="grid px-3">
    <div class="col-12">
      <Dialog
        v-model:visible="dialog"
        :breakpoints="{
          '1960px': '70vw',
          '1600px': '70vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500 font-medium">
            {{ dialog_title }}
          </h6>
        </template>
        <div class="grid">
          <div class="col-12" v-show="!loading">
            <DataTable
              :value="table_Item"
              class="p-datatable-sm"
              rowGroupMode="subheader"
              groupRowsBy="apparat_id.name"
              sortMode="single"
              sortField="apparat_id.name"
              :sortOrder="1"
              responsiveLayout="scroll"
              :expandableRowGroups="true"
              v-model:expandedRowGroups="expandedRowGroups"
              @rowgroupExpand="onRowGroupExpand"
              @rowgroupCollapse="onRowGroupCollapse"
            >
              <Column field="apparat_id.name" header="apparat_id.name">
              </Column>
              <Column field="name" header="">
                <td>
                  <span class="w-full text-base font-medium ml-2">{{
                    slotProps.data.name
                  }}</span>
                </td></Column
              >
              <Column header="">
                <template #body="slotProps">
                  <td>
                    <Chip
                      :label="slotProps.data.upgrades_count.toString()"
                      class="
                        mr-2
                        mb-2
                        text-sm text-blue-700
                        bg-blue-100
                        font-bold
                      "
                    />
                  </td>
                </template>
              </Column>

              <template #groupheader="slotProps">
                <span class="text-base text-blue-600 font-medium text-center">{{
                  slotProps.data.apparat_id.name
                }}</span>
                <span class="text-green-700 pl-4 font-medium">
                  <Chip
                    :label="
                      totalCounter(slotProps.data.apparat_id.name).toString()
                    "
                    class="mr-1 text-sm text-green-700 bg-green-100 font-bold"
                  />
                </span>
              </template>
              <template #groupfooter="slotProps">
                <td colspan="1" style="text-align: right">
                  <span class="text-sm font-medium">Umumiy soni</span>
                </td>
                <td>
                  <Chip
                    :label="
                      totalCounter(slotProps.data.apparat_id.name).toString()
                    "
                    class="mr-1 text-sm text-green-700 bg-green-100 font-bold"
                  />
                </td>
              </template>
            </DataTable>
          </div>
          <div class="col-12" v-show="loading">
            <progress-bar-loader :min_height="'200px'"></progress-bar-loader>
          </div>

        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-center">
              <Button
                label="Yopish"
                class="p-button-text p-button-sm p-button-danger"
                icon="pi pi-times"
                @click="dialog=false"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import SkillService from "@/service/servises/SkillService";
import ProgressBarLoader from "../../../components/loaders/ProgressBarLoader.vue";
export default {
  components:{
    ProgressBarLoader,
  },
  data() {
    return {
      table_Item: [],
      expandedRowGroups: null,
      skill_List: [],
      dialog: false,
      dialog_title: "",
      loading:false,
    };
  },
  methods: {
    onRowGroupExpand(event) {},
    onRowGroupCollapse(event) {},
    get_Preview(id, apparat_id,training_direction_id,date, name) {
      this.dialog_title = name;
      this.loading = true;
      this.dialog = true;
      SkillService.get_Skill_Preview({
        organization_id: id,
        data: {
          date_qual: date,
          apparat_id,
          training_direction_id,

        },
      }).then((res) => {
        this.table_Item = res.data.data;
        this.loading = false;
      });
    },
    totalCounter(name) {
      let total = 0;
      this.table_Item.forEach((item) => {
        if (item.apparat_id.name == name) {
          total += item.upgrades_count;
        }
      });
      return total;
    },
  },
  created() {},
};
</script>
<style lang="">
</style>