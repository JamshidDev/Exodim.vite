<template>
  <div class="grid">
    <div class="col-12 py-1 px-0 mb-6" v-show="pasportList.length == 0">
      <add-button :title="'Pasport qo\'shish'" @click="addItem()"></add-button>
    </div>
    <div class="col-12 px-0">
      <DataTable
        :value="pasportList"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        v-show="pasportList.length > 0"
        class="pb-6 p-datatable-sm"
      >
        <Column style="min-wdth: 100px">
          <template #header>
            <div class="text-800 font-semibold">Pasportni yuklash</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
                <view-button :file_Link="slotProps.data.file_path"></view-button>
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItem($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="col-12">
        <Dialog
          v-model:visible="dialog"
          :breakpoints="{
            '1960px': '30vw',
            '1600px': '40vw',
            '1200px': '70vw',
            '960px': '80vw',
            '640px': '90vw',
          }"
          :style="{ width: '50vw' }"
          :modal="true"
        >
          <template #header>
            <h6 class="uppercase text-lg text-blue-500 font-medium">
                Pasport qo'shish
            </h6>
          </template>
          <div class="grid pt-2">
            <div class="col-12">
              <h6 class="mb-1 pl-2 text-yellow-500 font-normal">Pasport fayli sifatli va rangli ko'rinishda nusxasi yuklansin.</h6>
              <h6 class="mt-0 mb-2 pl-2 text-yellow-500 font-normal">2 , 3 sahiflari  va yashash manzili sahifasi</h6>

              <Button
                label="Fayl yuklash"
                icon="pi pi-cloud-upload"
                class="p-button-info p-button-sm w-full"
                @click="$refs.pasport_file.click()"
                :class="{ 'p-invalid': file_Error && submitted }"
              />
              <input
                v-show="false"
                type="file"
                ref="pasport_file"
                @change="uploadFile($event)"
                accept="application/pdf"
              />
              <h6 class="text-sm my-1 text-green-600" v-if="file_Name">
                {{ file_Name }}
              </h6>
              <h6 class="text-sm my-1 text-red-600" v-if="error_msg">
                {{ error_msg }}
              </h6>
              
            </div>
          </div>
  
          <template #footer>
            <div class="col-12 pt-2">
              <div class="flex justify-content-end">
                <Button
                  label="Saqlash"
                  class="p-button-secondary p-button-sm"
                  @click="addandEdit()"
                />
              </div>
            </div>
          </template>
        </Dialog>
    </div>
  </div>
</template>
<script>
import AddButton from "@/components/buttons/AddButton";
import DeleteButton from "@/components/buttons/DeleteButton";
import PasportService from "@/service/servises/PasportService";
import ViewButton from '@/components/buttons/ViewButton'
export default {
  components: {
    AddButton,
    DeleteButton,
    ViewButton,
  },
  data() {
    return {
      pasportList: [],
      pasport: null,

      dialog:false,
      file_path:null,
      file_Name:null,

      submitted:false,
      error_msg:null,

    };
  },
  computed:{
    file_Error(){
        if(!this.file_path){
            return true
        }else{
            return false
        }
    }
  },
  methods: {
    getItem(id) {
      PasportService.get_cadryPasport({ cadry_id: id }).then((res) => {
        this.pasportList = res.data.passports
      });
    },
    addItem() {
        this.file_path = null;
        this.submitted = false;
        this.error_msg = null;
        this.controlDialog(true)
    },
    addandEdit(){
        this.submitted = true;
        if(!this.file_Error){
            this.error_msg= null;
            let form = new FormData();
        form.append("file_path", this.file_path);
            this.controlDialog(false)
            PasportService.create_cadryPasport({cadry_id:this.$route.params.id, form}).then((res)=>{
                this.getItem(this.$route.params.id);
            })

        }else{
            this.error_msg = "Fayl yuklashingiz shart."
        }

    },
    deleteItem(id){
        PasportService.delete_cadryPasport({passport_id:id}).then((res)=>{
            this.getItem(this.$route.params.id);
            })
    },

    uploadFile(event) {
        console.log(event);
        const { files } = event.target;
        let fileArray = files[0].name.split(".");
        let extention = fileArray[fileArray.length - 1];
        if (extention == "pdf" || extention == "PDF") {
            this.error_msg = null,
          this.file_path = files[0];
          this.file_Name = files[0].name;
          console.log(files[0]);
        } else {
            this.error_msg = 'pdf fayl yuklashingiz kerak '
        }
      },
    controlDialog(item){
        this.dialog = item
    }
  },
  created() {
    this.getItem(this.$route.params.id);
  },
};
</script>
<style lang="scss">
</style>