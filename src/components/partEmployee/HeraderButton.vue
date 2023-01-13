
<template >
     <div class="grid">
            <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 ">
                 <h6 class="uppercase pl-2">Korxona xodimlar</h6>
            </div>
            <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
                <div class="w-full flex justify-content-end">
                       <SplitButton label="Export" :model="exportsProperty" class="p-button-success mr-2 p-button-sm"></SplitButton>
                      <Button icon="pi pi-plus" @click="goPush()" class="p-button-secondary p-button-sm" label="Xodim qo'shish" />
                </div>

            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            exportsProperty: [
				{
					label: 'Word fayl',
					icon: 'pi pi-file',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Exel fayl',
					icon: 'pi pi-file-excel',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Pdf fayl ',
					icon: 'pi pi-file-pdf',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
			]
        }
    },
	methods:{
		goPush(){
			this.$router.push(`/admin/addnewemployee`)
		}
	}
}
</script>
<style lang="">
    
</style>