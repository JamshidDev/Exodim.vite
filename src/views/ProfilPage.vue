<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Profile', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold">Shaxsiy kabinet</span>
        </div>
      </div>
    </div>
  <div class="col-12" v-if="user_Details">
    <div class="grid mr-0 flex xl:justify-content-evenly lg:justify-content-evenly md:justify-content-evenly sm:justify-content-center w-full pt-6 card">
      <div class="col-12 xl:col-5 lg:col-5 md:col-5 sm:col-8  surface-card  py-4 mb-4 border-round-lg shadow-2 animation-card-one">
        <div class="grid w-full">
          <div class="col-12">
            <div class="grid p-3">
              <div class="col-12">
                <h6 class="mb-2 mb-0 text-sm font-normal text-primary-900">Katta korxona</h6>
                <h6 class="text-base text-900 my-0 xl:text-2xl lg:text-2xl">
                  {{ user_Details.organization.railway.name }}
                </h6>
              </div>
              <div class="col-12">
                <h6 class=" mb-2 mt-2 text-sm font-normal text-primary-900">Korxona</h6>
                <h6 class="text-base my-0 text-900 xl:text-2xl lg:text-2xl">
                  {{ user_Details.organization.name }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 xl:col-5 lg:col-5 md:col-5 sm:col-8  card surface-0 py-4 mb-4 border-round-lg surface-card shadow-2 animation-card-two">
        <div class="grid w-full">
          <div class="col-12">
            <div class="flex justify-content-center pb-2 w-full">
              <Avatar
                :image="user.phote"
                size="xlarge"
                class="mr-2"
                shape="circle"
              />
            </div>
            <h6 class="text-center xl:text-lg font-medium mb-6">
              {{ get_Name() }}
            </h6>
          </div>
          <div class="col-12">
            <div class="grid xl:px-4">
              <div class="col-12">
                <h6 class="mb-1 pl-2 text-sm font-normal text-500">F.I.O</h6>
                <InputText
                  type="text"
                  class="w-full font-bold p-inputtext-sm"
                  placeholder="Kiriting"
                  v-model="user.fullName"
                />
              </div>
              <div class="col-6">
                <h6 class="mb-1 pl-2 text-sm font-normal text-500">Ishxona Telefon</h6>
                <InputText
                  type="text"
                  class="w-full font-bold p-inputtext-sm"
                  placeholder="Kiriting"
                  v-model="user.phone"
                />
              </div>
              <div class="col-6">
                <h6 class="mb-1 pl-2 text-sm font-normal text-500">Login</h6>
                <InputText
                  type="text"
                  class="w-full font-bold p-inputtext-sm"
                  placeholder="Kiriting"
                  v-model="user.login"
                  :disabled="true"
                />
              </div>
              <div class="col-6">
                <h6 class="mb-1 pl-2 text-sm font-normal text-500">Parol</h6>
                <InputText
                  type="text"
                  class="w-full font-bold p-inputtext-sm"
                  placeholder="Kiriting"
                  v-model="user.old_password"
                />
              </div>

              <div class="col-6">
                <h6 class="mb-1 pl-2 text-sm font-normal text-500">Yangi Parol</h6>
                <InputText
                  type="text"
                  class="w-full font-bold p-inputtext-sm"
                  placeholder="Kiriting"
                  v-model="user.new_password"
                />
              </div>
             
              <div class="col-12 flex justify-content-end">
                <Button label="Saqlash" class="p-button-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="col-12 sm:col-12 md:col-12 lg:col-8 xl:col-9"></div>
  </div>
</template>
<script>
import authService from "../service/servises/authService";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      user:{
        fullName:null,
        login:null,
        old_password:null,
        new_password:null,
        phone:null,
        phote:null,
      },
      user_Details:null,
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    admin_avatar() {
      return localStorage.getItem("admin_avatar")
        ? localStorage.getItem("admin_avatar")
        : "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg";
    },
    get_User_Info(){
      authService.get_AdminDetails().then((res) =>{
        this.user_Details = res.data;
        this.user.fullName = res.data.name;
        this.user.phote = res.data.photo;
        this.user.phone = res.data.phone;
        this.user.login = res.data.email;
      })
    },
    get_Name() {
      let profile = JSON.parse(localStorage.getItem("profil"));
      return profile.name;
    },
  },
  created(){
    this.get_User_Info()
  }
};
</script>
<style lang="scss" scoped>
.p-avatar-xl {
  width: 180px;
  height: 180px;
}
.animation-card-one{
  position: relative;
  animation: trans-y 0.3s ease-in 1 forwards;
}
.animation-card-two{
  position: relative;
  opacity: 0;
  animation: trans-y 0.3s ease-in 0.1s 1 forwards;
}
@keyframes trans-y {
  from{
    opacity: 0;
    transform: translateY(50px);
  }to{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>