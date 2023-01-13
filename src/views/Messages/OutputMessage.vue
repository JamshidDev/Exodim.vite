<template >
    <div class="grid px-3">
        <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Chiquvchi xatlar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Chiquvchi xatlar

          </span>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.vue';
export default {
    components:{
        BreadCrumb
    }
    
}
</script>
<style lang="">
    
</style>