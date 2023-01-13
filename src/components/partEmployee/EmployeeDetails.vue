<template>
  <div>
    <Sidebar
      v-model:visible="visibleFull"
      :baseZIndex="10000"
      position="full"
      class="custom_sidebar"
    >
      <div class="grid flex justify-content-center">
        <div class="col-10 pt-2">
          <div
            class="
              grid
              shadow-1
              border-round-md
              mt-4
              border-1 border-300
              mb-4
              document_container
            "
          >
            <div class="col-2 p-0">
              <img
                class="resume_picture"
                src="https://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg"
                alt=""
              />
            </div>
            <div class="col-6 py-2">
              <h6 class="text-2xl text-800 my-2 uppercase font-bold">
                Raximov Jamshid Shuxrat o'g'li
              </h6>
              <h6 class="text-base text-800 my-3 font-bold">
                "O'zbekiston temir yo'llari" AJ boshqaruvi raisi xuzuridagi
                kotibiyat boshlig'ining o'rinbosari "O'zbekiston temir yo'llari"
                AJ boshqaruvi raisi xuzuridagi kotibiyat boshlig'ining
                o'rinbosari
              </h6>
              <h6 class="text-base text-800 my-3 font-bold flex">
                <span class="pr-3">3.2</span>
                <Rating :modelValue="3" :readonly="true" :stars="5" :cancel="false" />
              </h6>
              
              <Button label="Yuklash" class="p-button-raised p-button-info " />
           
            </div>
            <div class="col-4 py-4 pl-4">
              <h6 class="text-base text-900 my-2">
                <i class="pi pi-map-marker text-blue-500 font-bold pr-2 text-xl"></i>
                +998(99) 501-60-04
              </h6>
              <h6 class="text-base text-900 my-3">
                <i class="pi pi-calendar text-blue-500 font-bold pr-2 text-xl"></i>
                1988-03-24
              </h6>
              <h6 class="text-base text-900 my-3">
                <i class="pi pi-credit-card text-blue-500 font-bold pr-2 text-xl"></i>
                Oliy
              </h6>
              <h6 class="text-base text-900 my-2">
                <i class="pi pi-map-marker text-blue-500 font-bold pr-2 text-xl"></i>
                Sirdaryo viloyati, Mirobod tumani
              </h6>
              <h6 class="text-base text-900 my-3">
                <i class="pi pi-calendar text-blue-500 font-bold pr-2 text-xl"></i>
                1988-03-24
              </h6>
             
            </div>
          </div>
          <div class="grid">
            <div
              class="
                col-4
                pr-4
                
              "
            >
              <div class="grid 4 shadow-1
                border-round-md
                mt-3
                border-1 border-300
                document_container
                py-4
                px-4">
                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 text-sm font-bold text-left">
                    <i class="pi pi-exclamation-circle text-blue-500 font-bold pr-2 text-xl"></i>
                    Partiyaviyligi:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">Partiyasiz</h6>
                </div>

                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 font-bold text-sm text-left ">
                    <i class="pi pi-id-card text-blue-500 font-bold pr-2 text-xl"></i>
                    Mutaxassisligi:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">
                    Transport vositalarini ishlatish va tamirlash (bakalavr)
                  </h6>
                </div>

                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 font-bold text-left text-sm">
                    <i class="pi pi-credit-card text-blue-500 font-bold pr-2 text-xl"></i>
                    Ilmiy darajasi:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">Yo'q</h6>
                </div>

                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 font-bold text-left text-sm">
                    <i class="pi pi-bookmark text-blue-500 font-bold pr-2 text-xl"></i>
                    Ilmiy unvoni:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">Yo'q</h6>
                </div>

                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 font-bold text-left text-sm">
                    <i class="pi pi-globe text-blue-500 font-bold pr-2 text-xl"></i>
                    Chet tillari:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">Rus tili,Ingliz tili</h6>
                </div>

                <div class="col-6 py-2 flex align-items-center">
                  <h6 class="text-900 font-bold text-sm text-left">
                    <i class="pi pi-shield text-blue-500 font-bold pr-2 text-xl"></i>
                    Xarbiy unvoni:
                  </h6>
                </div>
                <div class="col-6 py-2">
                  <h6 class="text-700 text-left text-sm">Oddiy askar</h6>
                </div>

                <div class="col-6 py-0 flex align-items-center">
                  <h6 class="text-900 font-bold text-sm text-left">
                    <i class="pi pi-flag-fill text-blue-500 font-bold pr-2 text-xl"></i>
                    Davlat mukofotlari:
                  </h6>
                </div>
                <div class="col-6 py-2 pl-2">
                  <h6 class="text-700 text-left text-sm">Yo'q</h6>
                </div>

                <div class="col-6 py-0 flex align-items-center">
                  <h6 class="text-900 font-bold text-sm text-left">
                    <i class="pi pi-user text-blue-500 font-bold pr-2 text-xl"></i>
                    Deputatliligi:
                  </h6>
                </div>
                <div class="col-6 py-2 pl-2">
                  <h6 class="text-700 text-left text-sm">Yo'q</h6>
                </div>
              </div>
            </div>

            <div
              class="
                col-8 
                shadow-1
                border-round-md
                mt-4
                border-1 border-300
                document_container
                py-4
                px-2
              "
            >
              <div class="grid">
                <div class="col-12">
                  
<TabMenu :model="items" class="font-medium custom_tab" />
                </div>
                <div class="col-12 px-4 py-6" v-show="activeIndex == 0">
                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>
                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>

                  <div class="grid">
                    <div class="col-1">
                      <h6>2003-2003</h6>
                    </div>
                    <div class="col-11">
                      <h6>
                        - "O'zbekiston temir yo'llari" DAKT Harbiylashtirilgan
                        qo'riqlash boshqarmasi O'zbekiston statsionar
                        harbiylashtirilgan qo'riqlash otryadi "O'zbekiston "
                        o'qchilik komandasi o'qchisi
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-12 px-4 py-6" v-show="activeIndex == 1">
                  <div class="grid">
                    <div class="col-2 relative_border">
                      <h6 class="font-semibold text-blue-600 my-0">
                        Qarindoshliligi
                      </h6>
                    </div>
                    <div class="col-2 relative_border">
                      <h6 class="font-semibold text-blue-600 my-0">F.I.SH</h6>
                    </div>
                    <div class="col-3 relative_border">
                      <h6 class="font-semibold text-blue-600 my-0">
                        Tug'ilgan yili va joyi
                      </h6>
                    </div>
                    <div class="col-3 relative_border">
                      <h6 class="font-semibold text-blue-600 my-0">Ish joyi</h6>
                    </div>
                    <div class="col-2 relative_border">
                      <h6 class="font-semibold text-blue-600 my-0">
                        Yashash manzili
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>

                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">Otasi</h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Abdurazaqov Qo'chqor Berdibayevich
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        1956 yil Sirdaryo viloyati, Mirzaobod tumani
                      </h6>
                    </div>
                    <div
                      class="
                        col-3
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Pensiyada ("UZTRANSGAZ" AJ sirdaryo viloyati gaz
                        bo'yicha ta'minoti xududiy filiali haydovchisi)
                      </h6>
                    </div>
                    <div
                      class="
                        col-2
                        relative_border
                        flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h6 class="font-semibold text-900 my-0">
                        Sirdaryo viloyati, Mirzaobod tumani, Toshkent QFY,
                        Navro'z MFY Orzu ko'chasi, 5 uy
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-12 px-4 py-6" v-show="activeIndex == 2">
                  <div class="text-center text-500">Ma'lumot yo'q</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>
<script>
import EksportService from "../../service/servises/EksportService";
export default {
  data() {
    return {
      activeIndex: 0,
      visibleFull: false,
      cadry: {
        fullName: null,
        phote: null,
        birth_place: null,
        birth_date: null,
        post_name: null,
        post_date: null,
        carers: [],
        relatives: [],
        educations: [],
        lan: null,
        academec_degree: null,
        academec_title: null,
        deputy: null,
        military_rank: null,
        incentives: [],
        nationality: null,
        party: null,
        education: null,
      },
      items: [
                {label: 'Mehnat faoliyati', icon: 'pi pi-user',  command: (event) => {
            this.activeIndex = 0;
        }},
                {label: 'Yaqin qarindoshlari', icon: 'pi pi-user',
                command: (event) => {
            this.activeIndex = 1;
        }},
                {label: "Rag'batlantirish", icon: 'pi pi-user', command: (event) => {
            this.activeIndex = 2;
        }},
               
            ],
      active: 1,
    };
  },
  methods: {
    showResume(id) {
      console.log(id);
      EksportService.get_ResumeDetails({ id: id })
        .then((res) => {
          this.cadry.fullName = res.data.cadry.fullname;
          this.cadry.phote = res.data.cadry.photo;
          this.cadry.birth_place = res.data.cadry.birth_place;
          this.cadry.birth_date = res.data.cadry.birth_date;
          this.cadry.post_name = res.data.cadry.staff.staff_full;
          this.cadry.post_date = res.data.cadry.staff.staff_date;
          this.cadry.relatives = res.data.relatives;
          this.cadry.carers = res.data.carers;
          this.cadry.educations = res.data.educations;
          this.cadry.lan = res.data.lan;
          this.cadry.academec_degree = res.data.cadry.academec_degree;
          this.cadry.academec_title = res.data.cadry.academec_title;
          this.cadry.deputy = res.data.cadry.deputy;
          this.cadry.military_rank = res.data.cadry.military_rank;
          this.cadry.incentives = res.data.incentives;
          this.cadry.nationality = res.data.cadry.nationality;
          this.cadry.party = res.data.cadry.party;
          this.cadry.education = res.data.cadry.education;

          console.log(res.data);
          this.visibleFull = true;
          // setTimeout(()=>{
          //     this.visibleFull = true;
          // }, 500)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeTab(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped >
.document_container {
  background-color: #ffffff;
}
.resume_picture{
  width: 160px;
  min-height: 100% !important;
}
.resume_bg {
  position: absolute;
  top: 0px;
  right: 00px;
  width: 190px;
  height: 200px;
  background-color: #ecf7ff !important;
  z-index: 9;
}
.cutom_mr {
  margin-right: 200px !important;
}
.cutom_pr {
  padding-right: 200px !important;
}
.custom_sidebar {
  background: #f1f1f1 !important;
  backdrop-filter: blur(4px) !important;
}
.border_bottom {
  border-bottom: 1px solid #5fbbfd !important;
}


.relative_border {
  border: 1px solid #e4e4e4 !important;
}


</style>