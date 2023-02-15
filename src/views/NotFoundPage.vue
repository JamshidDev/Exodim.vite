<template >
    <div class=" w-full
      min-h-screen
      overflow-hidden
      flex
      justify-content-center
      align-items-center">
       <div class="grid">
        <div class="col-12 flex  flex-column">
            <h1 class="text-8xl text-red-500 font-bold mx-auto">4 <span class="animation_number ">0</span> 4</h1>
            <h2 class="uppercase text-red text-center">Sahifa topilmadi</h2>
        </div>
        <div class="col-12 flex  flex-column ">
              <Button label="Asosiy sahifaga qaytish" class="p-button-raised p-button-danger mx-auto" @click="goTo()" />
        </div>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(){
            this.$router.push({name:'admin'})
        }
    }
    
}
</script>
<style lang="scss">
.animation_number{
    
    position: relative;
     animation:  aanimation_zero 2s linear 0s infinite alternate;
     transform: translate(0, 20px);
     display: inline-block;
}
   @keyframes aanimation_zero{
    0%{
          transform: translateY(-40px);
    }
      50%{
          transform: translateY(0px);
    }
      100%{
          transform: translateY(40px);
    }
   } 
</style>