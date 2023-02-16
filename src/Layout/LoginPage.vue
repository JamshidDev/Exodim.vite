<template >
  <div class=" login_container">

    <div class="page-walper">
      <div class="logo-box">
        <img class="logo-picture" src="https://railway.uz/local/templates/main_v2/img/logo.webp" alt="" />
      </div>
      <div class="animation_text">
        <div class="logo_title mt-2  btn-shine font-bold uppercase text-5xl ">
          O'zbekiston temir yo'llari
        </div>
        <div class="logo_subtitle  btn-shine2  mt-6 font-bold uppercase text-3xl ">
          Aksiyadorlik jamiyati
        </div>

      </div>
    </div>
    <div class="page-form">
      <form class="box-form">
        <div class="mobile-logo">
          <img class="logo-picture" src="https://railway.uz/local/templates/main_v2/img/logo.webp" alt="" />
        </div>
        <h3 class="login-title">Tizimga kirish</h3>
        <h3 class="login-subtitle">Tizimga korxonaga ma'sul xodim sifatida kirish</h3>
        <div class="input-box">
          <InputText type="text" class="w-full text-input" v-model.trim="user.email" placeholder="Login"
            @keyup.enter="login()" />
        </div>
        <div class="input-box">
          <Password v-model="user.password" placeholder="Parol" class="w-full mb-3 " inputClass="w-full font-normal"
            toggleMask :feedback="false" @keyup.enter="login()"></Password>
        </div>
        <div class="btn-box">
          <div class="login-btn" @click="login()"><span>Kirish</span>   <Icon class="fluid_icon" :icon="loading ? 'svg-spinners:bars-rotate-fade' : 'mdi:chevron-right'"
                        width="20" color="#ffffff" /> </div>

        </div>
      </form>

    </div>
    <div class="footer-effect">
    </div>
    <Toast />
</div>
</template>
<script>
import authService from "../service/servises/authService";
import { Icon } from "@iconify/vue"
import { mapActions } from "vuex";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      loading: false,
    };
  },
  methods: {
    ...mapActions(["set_adminPermissions"]),
    login() {
      this.controlLoader(true);
      authService
        .loginAdmin(this.user)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("token_created_date", res.data.created_at);


          authService
            .get_AdminDetails()
            .then((res) => {
              console.log(res.data);
              let permissions = [];
              if (
                res.data.roles.permissions &&
                res.data.roles.permissions.length
              ) {
                res.data.roles.permissions.forEach((item) => {
                  permissions.push(item.name);
                });
              }
              this.set_adminPermissions(permissions);
              localStorage.setItem(
                "admin_avatar",
                res.data.photo
              );

              localStorage.setItem(
                "organization",
                JSON.stringify(res.data.organization)
              );
              localStorage.setItem(
                "profil",
                JSON.stringify(res.data)
              );

              localStorage.setItem(
                "Adminpermissions",
                JSON.stringify(permissions)
              );

              this.$router.push("/");

              this.controlLoader(false);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          this.controlLoader(false);
          console.log(error.response.status);
          if(error.response.status == 404){
            this.$toast.add({
            severity: "error",
            summary: "Xatolik",
            detail: "Login yoki parol noto'g'ri",
            life: 3000,
          });
          }else if (error.response.status>=500){
            this.$toast.add({
            severity: "warn",
            summary: "Server xatosi",
            detail: "Server bilan bog'lanish yo'q",
            life: 3000,
          });
          }else{
            this.$toast.add({
            severity: "error",
            summary: "Tarmoq xatosi",
            detail: "Xatolik yuz berdi",
            life: 3000,
          });
          }
        });
    },
    controlLoader(item) {
      this.loading = item;
    },
  },
};
</script>
<style scoped lang="scss">
@media (min-width: 1000px) {
  .login_container {
  width: 100%;
  max-width: 100vw !important;
  min-height: 100vh !important;
  background: #1e293b !important;
  position: relative !important;
  display: flex;


  .page-form {
    width: 500px;
    min-height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;

    .box-form {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      .mobile-logo{
        display: none;
      }
      .login-title {
        font-size: 24px;
        text-align: center;
        color: #ffffff;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0px;
      }

      .login-subtitle {
        font-size: 13px;
        text-align: center;
        color: #ffffff;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0px;
        margin-bottom: 20px;
      }

      .input-box {
        width: 100%;
        margin-top: 20px;
      }

      .btn-box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;

        .login-btn {
          padding: 10px 30px;
          background-color: #3B82F6;
          color: #ffffff;
          text-transform: uppercase;
          border: 1px solid #3B82F6;
          border-radius: 6px;
          display: flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          &:active{
            transform: scale(0.96);
          }
        }
      }

    }
  }



  .page-walper {
    width: calc(100% - 500px);
    min-height: 100% !important;
    display: flex;
    flex-direction: column;

    .logo-box {
      display: flex;
      justify-content: center;
      padding-top: 100px;

      .logo-picture {
        width: 120px;
      }
    }

    .animation_text {
      margin: 0px auto;
      margin-top: 30px;
    }
  }


  .footer-effect {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
    background-image: url("https://vacancy.argos.uz/_nuxt/img/intro-bottom.252c7df.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

  }
}
}
@media (max-width: 999.9px){
  .login_container {
  width: 100%;
  max-width: 100vw !important;
  min-height: 100vh !important;
  background: #1e293b !important;
  position: relative !important;
  display: flex;


  .page-form {
    width: 100%;
    min-height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;

    .box-form {
      width: 100%;
      max-width: 400px;
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
      .mobile-logo{
        display: flex;
        justify-content: center;
        .logo-picture{
          width: 80px;
          animation: logo-animation 0.6s linear infinite;
        }
      }
      .login-title {
        font-size: 24px;
        text-align: center;
        color: #ffffff;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0px;
      }

      .login-subtitle {
        font-size: 13px;
        text-align: center;
        color: #ffffff;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0px;
        margin-bottom: 20px;
      }

      .input-box {
        width: 100%;
        margin-top: 20px;
      }

      .btn-box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;

        .login-btn {
          padding: 10px 30px;
          background-color: #3B82F6;
          color: #ffffff;
          text-transform: uppercase;
          border: 1px solid #3B82F6;
          border-radius: 6px;
          display: flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          &:active{
            transform: scale(0.96);
          }
        }
      }

    }
  }



  .page-walper {
    display: none !important;
   
  }


  .footer-effect {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background-image: url("https://vacancy.argos.uz/_nuxt/img/intro-bottom.252c7df.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

  }
}
}



::v-deep(.p-password input) {
  width: 15rem;
}

.animation_text {
  position: relative;
}

.btn-shine {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
}

.btn-shine2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine2 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: 0;
  }

  25% {
    background-position: 150px;
  }

  50% {
    background-position: 300px;
  }

  75% {
    background-position: 450px;
  }

  100% {
    background-position: 600px;
  }
}

@keyframes shine2 {
  0% {
    background-position: 0;
  }

  25% {
    background-position: 100px;
  }

  50% {
    background-position: 200px;
  }

  75% {
    background-position: 300px;
  }

  100% {
    background-position: 400px;
  }
}

@keyframes logo-animation {
  0% {
    transform: scale(0.98);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.98);
  }
  
}


</style>







