<template>
    <div class="grid">
        <div class="col-12">
            <DataTable
        ref="dt"
        :value="List"
        dataKey="id"
        responsiveLayout="scroll"
        class="p-datatable-sm"
        v-model:selection="selectitem"
        selectionMode="single"
      >
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm font-medium">Sana</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ formatter.arrowDateFormat(slotProps.data.staff_date) }}
            </div>
          </template>
        </Column>
        <Column field="name" style="min-width:100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
             Lavozim
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base font-medium"
            >
              <div>{{ slotProps.data.staff_full }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width:60px; width:60px;">
          <template #header>
            <div class="text-800 font-semibold text-center">Stavka</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-center"
            >
              {{
                slotProps.data.rate
            
              }}
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 300px; width: 300px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
                <edit-button
                          @click="editItemStuff(slotProps.data.id)"
                        ></edit-button>
                        <delete-button
                          v-if="List.length>1"
                          :deleteItem="slotProps.data.id"
                          @deleteAcceptEvent="deleteStuffItem($event)"
                        ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
        </div>
    </div>
</template>
<script>
import formatter from '../../../util/formatter';
import EditButton from '../../../components/buttons/EditButton.vue';
import DeleteButton from '../../../components/buttons/DeleteButton.vue';
export default {
    props:{
        List:{
            type:Array,
            default:[]
        }
    },
    components:{
        EditButton,
        DeleteButton
    },
    data(){
        return{
            formatter,
            selectitem:null,
        }
    },
    methods:{
        deleteStuff(){
            this.$emit("deleteEvent", true)
        }
    }
}
</script>
<style lang="">
    
</style>