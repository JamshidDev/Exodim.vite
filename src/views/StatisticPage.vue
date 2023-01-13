<template >
  <div class="grid px-3">
    <!-- header search dropdown -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Statistika', path: '/admin/statistic' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold">Statistika </span>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="grid py-2 px-2 border-round-md px-0">
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid px-0">
          <h6 class="mb-1 xl:text-base lg:text-base text-sm">
            Katta korxonalar -
            {{
              get_bigOrganizationList.length
                ? get_bigOrganizationList.length - 1
                : get_bigOrganizationList.length
            }}
          </h6>
          <Dropdown
            id="adressDistrict"
            v-model="get_bigOrgValue"
            :options="get_bigOrganizationList"
            optionLabel="name"
            :filter="true"
            placeholder="Tanlang"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
            @change="changeRailway"
          >
            <template #value="slotProps" class="custop_dropdown">
              <div class="max-w-100" v-if="slotProps.value">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="max-w-100">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-1 xl:text-base lg:text-base text-sm">
            Korxonalar -
            {{
              get_OrganizationList.length
                ? get_OrganizationList.length - 1
                : get_OrganizationList.length
            }}
          </h6>
          <Dropdown
            id="adressDistrict"
            v-model="get_orgValue"
            :options="get_OrganizationList"
            optionLabel="name"
            @change="changeOrganization"
            :filter="true"
            placeholder=" Tanlang"
            class="w-full"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value w-full"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item w-full">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-1 xl:text-base lg:text-base text-sm">
            Bo'limlar va bekatlar-
            {{
              get_DepartmentList.length
                ? get_DepartmentList.length - 1
                : get_DepartmentList.length
            }}
          </h6>
          <Dropdown
            id="adressDistrict"
            v-model="get_depValue"
            :options="get_DepartmentList"
            optionLabel="name"
            @change="changeDepartment"
            :filter="true"
            placeholder=" Tanlang"
            class="w-full"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value w-full"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item w-full">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 md:col-6 lg:col-3 xl:col-3 flex">
          <Button
            icon="pi pi-sync"
            label="Yangilash"
            class="p-button-success w-full mt-4"
            :loading="loading"
            @click="update_Statistic()"
          />
        </div>
      </div>
    </div>

    <div class="col-12" v-show="!loading">
      <div class="grid">
        <!-- Header statistic box -->
        <div class="col-12">
          <div class="grid">
            <!-- All users -->
            <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
              <div
                class="
                  card
                  all_cadry_card
                  shadow-1
                  p-4
                  relative
                  border-round-md
                "
              >
                <div class="absolute">
                </div>

                <h2
                  class="
                    text-center
                    xl:text-6xl
                    lg:text-3xl
                    md:text-5xl
                    sm:text-5xl
                    text-6xl text-white
                    font-bold
                    mb-0
                  "
                >
                  {{ allCadries }}
                </h2>
                <h6 class="text-center text-white mt-1">Barcha xodimlar</h6>
              </div>
            </div>

            <!-- All vakant -->
            <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
              <div
                class="shadow-1 all_vakant_card p-4 relative border-round-md"
              >
                <div class="absolute" @click="goList(1)">
                  <i
                    class="
                      pi pi-eye
                      text-2xl text-white
                      cursor-pointer
                      font-medium
                    "
                  ></i>
                </div>

                <h2
                  class="
                    text-center
                    xl:text-6xl
                    lg:text-3xl
                    md:text-5xl
                    sm:text-5xl
                    text-6xl text-white
                    font-bold
                    mb-0
                  "
                >
                  {{ allVakant }}
                </h2>
                <h6 class="text-center text-white mt-1">Bo'sh ish o'rinlari</h6>
              </div>
            </div>

            <!-- All sverx -->
            <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
              <div class="all_sverx_card shadow-1 p-4 relative border-round-md">
                <div class="absolute" @click="goList(3)">
                  <i
                    class="
                      pi pi-eye
                      text-2xl text-white
                      cursor-pointer
                      font-medium
                    "
                  ></i>
                </div>

                <h2
                  class="
                    text-center
                    xl:text-6xl
                    lg:text-3xl
                    md:text-5xl
                    sm:text-5xl
                    text-6xl text-white
                    font-bold
                    mb-0
                  "
                >
                  {{ allSverx }}
                </h2>
                <h6 class="text-center text-white mt-1">
                  Ortiqcha ish o'rinlari
                </h6>
              </div>
            </div>

            <!-- All position -->
            <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
              <div class="all_other_card shadow-1 p-4 relative border-round-md">
                <div class="absolute">
                  <!-- <i
                    class="
                      pi pi-eye
                      text-2xl text-white
                      cursor-pointer
                      font-medium
                    "
                  ></i> -->
                </div>

                <h2
                  class="
                    text-center
                    xl:text-6xl
                    lg:text-3xl
                    md:text-5xl
                    sm:text-5xl
                    text-6xl text-white
                    font-bold
                    mb-0
                  "
                >
                  {{ allPlan }}
                </h2>
                <h6 class="text-center text-white mt-1">Shtat birligi</h6>
              </div>
            </div>
          </div>
        </div>

        <!-- All cadry amount -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Erkak va Ayol</span
              >
            </div>
            <div class="col-2 flex justify-content-end">
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                pb-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Erkakalar -
                <span class="font-bold text-lg text-blue-500">{{
                  this.allManCadries
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                :value="`${allManChart}%`"
              ></Tag>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Ayollar -
                <span class="font-bold text-lg text-green-500">{{
                  this.allWomanCadries
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="success"
                :value="`${allWomanChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Pension cadry amount -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Nafaqa yoshidagilar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(4)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                pb-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Erkaklar -
                <span class="font-bold text-lg text-blue-500">{{
                  this.pensionsMan
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                :value="`${pensionsManChart}%`"
              ></Tag>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Ayollar -
                <span class="font-bold text-lg text-green-500">{{
                  this.pensionWoman
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="success"
                :value="`${pensionWomanChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

          <!-- Homemaker -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 uppercase text-sm font-semibold"
                >Kasanachilar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(7)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Kasanachi -
                <span class="font-bold text-lg text-blue-500">{{
                  allContract
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${allContractChart}%`"
              ></Tag>
            </div>
          </div>
        </div>
        <!-- Medical examination -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Tibbiy ko'rik</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(11)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                pb-0
                flex
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Muddati tugaganlar -
                <span class="font-bold text-lg text-yellow-500">{{
                  meds
                }}</span>
              </h6>
             
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Kiritilmaganlar -
                <span class="font-bold text-lg text-red-500">{{
                  mednotCount
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${mednotCountChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Cadry vacation -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Ta'tildagi xodimlar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(10)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                pb-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Mehnat ta'tili -
                <span class="font-bold text-lg text-yellow-500">{{
                  vacations
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="warning"
                :value="`${vacationsChart}%`"
              ></Tag>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Bola parvarish ta'tili -
                <span class="font-bold text-lg text-red-500">{{
                  vacations_Dec
                }}</span>
              </h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${vacations_DecChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Job description -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Lavozim yo'riqnimasi</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(13)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Kiritilmaganlar -
                <span class="font-bold text-lg text-blue-500">{{
                  not_staff_files
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${not_staff_filesChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Labor activity -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Mehnat faoliyat</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(9)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Kirirtilmaganlar -
                <span class="font-bold text-lg text-blue-500">{{
                  careersCount
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${careersCountChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Relative  -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Qarindoshliligi</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(8)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Kirirtilmaganlar -
                <span class="font-bold text-lg text-blue-500">{{
                  relativesCount
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${relativesCountChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Birthday -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Tu'gilgan kunlar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(2)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Xodimlar soni -
                <span class="font-bold text-lg text-blue-500">{{
                  allBirthdayCadries
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${allBirthdayCadriesChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- New cadry -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-green-500 text-sm uppercase font-semibold"
                >Yangi xodimlar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(5)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Xodimlar soni -
                <span class="font-bold text-lg text-blue-500">{{
                  allNewCadries
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${allNewCadriesChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Quit job -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-red-600 text-sm uppercase font-semibold"
                >Faoliyati yakunlanganlar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(6)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Xodimlar soni -
                <span class="font-bold text-lg text-blue-500">{{
                  allDeleteCadries
                }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${allDeleteCadriesChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Blacklist -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-600 text-sm uppercase font-semibold"
                >Qora ro'yxatdagilar</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(12)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Xodimlar soni -
                <span class="font-bold text-blue-500">{{ BlackList }}</span>
              </h6>
            </div>
            <div
              class="
                col-12
                pt-0
                flex
                justify-content-between
                align-items-center
              "
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">Umumiy</h6>
              <Tag
                class="px-2 text-sm"
                rounded
                severity="danger"
                :value="`${BlackListChart}%`"
              ></Tag>
            </div>
          </div>
        </div>

        <!-- Passport -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-green-500 text-sm uppercase font-semibold"
                >Pasport</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(14)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-2 mb-8  flex align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Yuklanmaganlar soni-
                <span class="font-bold text-lg text-blue-500">{{
                  not_passport_files
                }}</span>
              </h6>
            </div>
          
          </div>
        </div>

       
        
        <!-- Upgrade -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-blue-600 text-sm uppercase font-semibold"
                >Malaka oshirish (2023)</span
              >
            </div>
            <div class="col-2 flex justify-content-end" @click="goList(20)">
              <i
                class="
                  pi pi-eye
                  text-lg text-blue-600
                  cursor-pointer
                  font-medium
                "
              ></i>
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Rejalashtirilgan -
                <span class="font-bold text-blue-500">{{ upgrades_count }}</span>
              </h6>
            </div>
            <div
              class="col-12 pb-0 flex justify-content-between align-items-start mb-6"
            >
              <h6 class="uppercase xl:text-base my-2 font-semibold">
                Yotoqxona zar. yo'q -
                <span class="font-bold text-blue-500">{{ status_bedroom }}</span>
              </h6>
            </div>
            
          </div>
        </div>

          <!-- Education -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-green-500 text-sm uppercase font-semibold"
                >Ma'lumoti</span
              >
            </div>
            <div class="col-2 flex justify-content-end" >
              
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                mb-1
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-700  text-base  block">Oliy</span>
            <span class="text-blue-600  text-base  block">{{ alleducation_oliy}} </span>
            </div>

            <div
              class="
                col-12
                mb-1
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-700  text-base  block">O'rta maxsus</span>
            <span class="text-yellow-600  text-base  block">{{ alleducation_ortamaxsus}} </span>
            </div>


            <div
              class="
                col-12
                mb-3
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-700  text-base  block">O'rta</span>
            <span class="text-red-600  text-base  block">{{ alleducation_orta}} </span>
            </div>
          </div>
        </div>

        <!-- Cadry by age -->
        <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-3 p-3">
          <div class="grid card surface-0 shadow-6 px-2 pt-2 border-round-md">
            <div class="col-10">
              <span class="text-green-500 text-sm uppercase font-semibold"
                >Yoshi bo'yicha</span
              >
            </div>
            <div class="col-2 flex justify-content-end" >
              
            </div>
            <Divider class="mt-2 mb-1" />
            <div
              class="
                col-12
                mb-1
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-600  text-base  block">30 dan kichik</span>
            <span class="text-blue-600  text-base  block">{{ allCadry30}} </span>
            </div>

            <div
              class="
                col-12
                mb-1
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-600  text-base  block">30 va 45</span>
            <span class="text-yellow-600  text-base  block">{{allCadry3045}} </span>
            </div>


            <div
              class="
                col-12
                mb-3
                flex
                justify-content-between
                font-bold
                uppercase
                text-base
              "
            >
            <span class="text-600  text-base  block">45 dan katta</span>
            <span class="text-red-600  text-base  block">{{ allCadry45}} </span>
            </div>
          </div>
        </div>


        <div class="col-12 md:col-6 lg:col-6 xl:col-4">
          <Panel
              header="Xorijda ta'lim olganlar"
              class="card surface-0 shadow-1 border-round-md"
              :toggleable="true"
              :collapsed="true"
            >
            <Chart
              type="bar"
              :data="aducationForeign"
              :options="aducationForeignOption"
            />
             
            </Panel>
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-4">
          <Panel
              header="Davlat akademiyasi"
              class="card surface-0 shadow-1 border-round-md"
              :toggleable="true"
              :collapsed="true"
            >
            <Chart
              type="bar"
              :data="govermentAcademy"
              :options="govermentAcademyOption"
            />
             
            </Panel>
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-4">
          <Panel
              header="Oylik hisobot"
              class="card surface-0 shadow-1 border-round-md"
              :toggleable="true"
              :collapsed="true"
            >
            <Chart type="bar" :data="stackedData" :options="stackedOptions" />
             
            </Panel>
        </div>


      </div>
    </div>

    <div class="col-12" v-show="loading">
      <statistic-skeleton></statistic-skeleton>
    </div>
    <div class="col-12">
      <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import StatisticSkeleton from "../components/loaders/StatisticSkeleton.vue";
import organizationsService from "../service/servises/organizationsService";
import globalStatistic from "@/service/servises/globalStatistic";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { StatisticSkeleton, BreadCrumb },

  data() {
    return {
      loading: false,
      collapseds: false,

      bigOrganizationList: [],
      bigOrgValue: null, //fake
      organizations: [],
      orgValue: null, //fake
      departmentList: [],
      departmentValue: null, //fake

      organization: {
        railway_id: null,
        organization_id: null,
        department_id: null,
      },

      allCadries: 0,
      allVakant: 0,
      allSverx: 0,
      allPlan: 0,
      allContract: 0,
      allIronNote: 0,

      allManCadries: 0,
      allWomanCadries: 0,
      pensionsMan: 0,
      pensionWoman: 0,

      allNewCadries: 0,
      allDeleteCadries: 0,
      allBirthdayCadries: 0,

      allCadry30: 0,
      allCadry3045: 0,
      allCadry45: 0,
      alleducation_oliy: 0,
      alleducation_ortamaxsus: 0,
      alleducation_orta: 0,
      meds: 0,
      mednotCount: 0,
      vacations: 0,
      vacations_Dec: 0,
      vacationsChart: 0,
      vacations_DecChart: 0,
      BlackList: 0,
      not_staff_files: 0,
      not_staff_filesChart: 0,

      not_passport_files: 0,
      upgrades_count: 0,
      status_bedroom: 0,

      // Chart Details
      allManChart: 0,
      allWomanChart: 0,
      pensionsManChart: 0,
      pensionWomanChart: 0,
      allCadry30Chart: 0,
      allCadry3045Chart: 0,
      allCadry45Chart: 0,
      alleducation_oliyChart: 0,
      allContractChart: 0,
      medsChart: 0,
      mednotCountChart: 0,
      careersCountChart: 0,
      relativesCountChart: 0,
      allBirthdayCadriesChart: 0,
      allNewCadriesChart: 0,
      allDeleteCadriesChart: 0,
      BlackListChart: 0,
      careersCount: 0,
      relativesCount: 0,


      aducationForeignOption: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Xorijda ta'lim olganlar",
            color: "#42A5F5",
          },
          tooltip: {
            mode: "index",
            intersect: true,
          },
        },
        responsive: true,
      },
      aducationForeign: {
        labels: [
          "Xorijda grant asosida",
          "Jamiyat mablag’i hisobidan o’qiganlar",
          "El-yurt  umid fondi stipendiyasi",
          "O’z hisobidan",
        ],
        datasets: [
          {
            label: "Xodimlar soni",
            backgroundColor: ["#1c84ee", "#F59E0B", "#22C55E"],
            data: [1, 2, 22, 12],
          },
        ],
        borderWidth: 1,
      },
      govermentAcademyOption: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Davlat akademiyasida ta'lim olganlar",
            color: "#42A5F5",
          },
          tooltip: {
            mode: "index",
            intersect: true,
          },
        },
        responsive: true,
      },
      govermentAcademy: {
        labels: [
          "Davlat akademiyasi (1 yillik)",
          "Davlat akademiyasi (2 yillik)",
          "Davlat akademiyasi (3 yillik)",
          "Boshqarma akademiyasi",
          "Biznes va tadbirlkorlik akademiyasi",
        ],
        datasets: [
          {
            label: "Xodimlar soni",
            backgroundColor: ["#1c84ee", "#F59E0B", "#22C55E"],
            data: [3, 2, 22, 12, 6],
          },
        ],
        borderWidth: 1,
      },

      stackedData: {
        labels: [
          "Yanvar",
          "Fevral",
          "Mart",
          "Aprel",
          "May",
          "Iyun",
          "Iyul",
          "Avgust",
          "Sentyabr",
          "Oktyabr",
          "Noyabr",
          "Dekabr",
        ],
        datasets: [
          {
            type: "bar",
            label: "Ishga olinganlar",
            backgroundColor: "#22C55E",
            data: [50, 25, 12, 48, 90, 76, 42, 24, 75, 37, 65, 34],
          },
          {
            type: "bar",
            label: "Mehnat faoliyati yakunlanganlar",
            backgroundColor: "#EF4444",
            data: [21, 84, 24, 75, 37, 65, 34, 24, 75, 37, 65, 34],
          },
        ],
      },
      stackedOptions: {
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Xodimlarni ishga olish va bo'shatish oylar ko'rinishida",
            color: "#42A5F5",
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      "get_bigOrganizationList",
      "get_OrganizationList",
      "get_DepartmentList",
      "get_bigOrgValue",
      "get_orgValue",
      "get_depValue",
      "get_adminPermissions",
      "get_statistic",
    ]),
  },
  methods: {
    ...mapActions([
      "set_bigOrganization",
      "set_organization",
      "set_department",
      "set_bigOrgValue",
      "set_orgValue",
      "set_depValue",
      "set_statistic",
    ]),
    controlLoader(item) {
      this.loading = item;
    },

    get_Statistic(params) {
      if(this.get_statistic){
        this.cashe_statistic()
      }else{
       this.update_Statistic()
      }
     
    },

    update_Statistic(){
      this.organization.organization_id = this.get_orgValue
        ? this.get_orgValue.id
        : null;
      this.organization.railway_id = this.get_bigOrgValue
        ? this.get_bigOrgValue.id
        : null;
      this.organization.department_id = this.get_depValue
        ? this.get_depValue.id
        : null;

      this.controlLoader(true);
        globalStatistic
        .get_globalStatistic(this.organization)
        .then((res) => {

          this.set_statistic(res.data)
          this.cashe_statistic()
          this.controlLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Railway() {
      organizationsService
        .get_Railway()
        .then((res) => {
          if (res.data.length) {
            this.bigOrganizationList = res.data;
            this.bigOrganizationList.unshift({
              name: "Barchasi",
              id: null,
            });
            this.set_bigOrganization(this.bigOrganizationList);
          } else {
            this.bigOrganizationList = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Organization(id) {
      organizationsService
        .get_Organization({ railway_id: id })
        .then((res) => {
          if (res.data.length) {
            this.organizations = res.data;
            this.organizations.unshift({
              name: "Barchasi",
              id: null,
            });
            this.set_organization(this.organizations);
          } else {
            this.organizations = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Department(id) {
      organizationsService
        .getDepartment({ organization_id: id })
        .then((res) => {
          console.log(res.data);
          if (res.data.length) {
            this.departmentList = res.data;
            this.departmentList.unshift({
              name: "Barchasi",
              id: null,
            });
            this.set_department(this.departmentList);
          } else {
            this.departmentList = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changeRailway(event) {
      this.set_bigOrgValue(event.value);
      this.set_orgValue(null);
      this.set_depValue(null);
      this.update_Statistic()
      this.get_Organization(event.value.id);
      this.set_department([]);
    },

    changeOrganization(event) {
      this.set_orgValue(event.value);
      this.set_depValue(null);
      this.update_Statistic()
      this.get_Department(event.value.id);
    },

    changeDepartment(event) {
      this.set_depValue(event.value);
      this.update_Statistic()
    },

    goList(id) {
      let permission = "pereview_statistics";
      this.organization.railway_id = this.get_bigOrgValue? this.get_bigOrgValue.id : null;
      this.organization.organization_id = this.get_orgValue? this.get_orgValue.id : null;
      this.organization.department_id = this.get_depValue? this.get_depValue.id : null;
      let global = 1;
      if (id == 1 && this.get_adminPermissions(permission)) {
        // Vacancy page
        this.$router.push(
          `/admin/view/vacanc/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 2 && this.get_adminPermissions(permission)) {
        // Birthday page
        this.$router.push(
          `/admin/view/birthday/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 3 && this.get_adminPermissions(permission)) {
        // Sverx Page
        this.$router.push(
          `/admin/view/sverx/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 4 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/retired/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 5 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/newcadry/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 6 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/deletecadry/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 7 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/contractcadry/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 8 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/relativecadry/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 9 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/careercadry/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 10 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/vacation/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 11 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/med/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 12 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/blacklist/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } else if (id == 13 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/stuffs/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      }else if (id == 14 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$router.push(
          `/admin/view/passport/${this.organization.railway_id}/${this.organization.organization_id}/${this.organization.department_id}/${global}`
        );
      } 
      else if (id == 20 && this.get_adminPermissions(permission)) {
        // Retired Page
        this.$toast.add({
          severity: "warn",
          summary: "Tez orada",
          detail: "Bu funksiya tez orada ishga tushadi",
          life: 2000,
        });
      }
      
      else {
        this.$toast.add({
          severity: "warn",
          summary: "Ruhsat etilmagan",
          detail: "Sizda bunday huquq mavjud emas",
          life: 2000,
        });
      }
    },

    cashe_statistic(){
      this.allCadries = this.get_statistic.all_cadries_count;
          this.allVakant = this.get_statistic.vakant;
          this.allSverx = this.get_statistic.sverx;
          this.allPlan = this.get_statistic.plan;
          this.allContract = this.get_statistic.contract_cadries;
          this.allIronNote = 0;
          this.allManCadries = this.get_statistic.all_man_cadries;
          this.allWomanCadries =this.get_statistic.all_woman_cadries;
          this.pensionWoman = this.get_statistic.retired_WoMan;
          this.pensionsMan = this.get_statistic.retired_Man;
          this.allNewCadries = this.get_statistic.newcadries;
          this.allDeleteCadries = this.get_statistic.delete_cadries;
          this.allBirthdayCadries = this.get_statistic.birthdays;
          this.allCadry30 = this.get_statistic.cadry30;
          this.allCadry3045 = this.get_statistic.cadry3045;
          this.allCadry45 = this.get_statistic.cadry45;
          this.careersCount = this.get_statistic.careersCount;
          this.relativesCount = this.get_statistic.relativesCount;

          // careersCount: 0,
          // relativesCount:0,
          this.not_passport_files =this.get_statistic.not_passport_files;
          this.upgrades_count = this.get_statistic.upgrades_count;
          this.status_bedroom = this.get_statistic.status_bedroom;

          this.alleducation_oliy = this.get_statistic.highly_special_educations;
          this.alleducation_ortamaxsus = this.get_statistic.medium_special_cadries;
          this.alleducation_orta = this.get_statistic.secondary_special_cadries;
          this.aducationForeign.datasets[0].data[0] =this.get_statistic.abroads[0].count;
          this.aducationForeign.datasets[0].data[1] = this.get_statistic.abroads[1].count;
          this.aducationForeign.datasets[0].data[2] = this.get_statistic.abroads[2].count;
          this.aducationForeign.datasets[0].data[3] = this.get_statistic.abroads[3].count;

          this.govermentAcademy.datasets[0].data[0] =
          this.get_statistic.academics[0].count;
          this.govermentAcademy.datasets[0].data[1] =
          this.get_statistic.academics[1].count;
          this.govermentAcademy.datasets[0].data[2] =
          this.get_statistic.academics[2].count;
          this.govermentAcademy.datasets[0].data[3] =
          this.get_statistic.academics[3].count;
          this.govermentAcademy.datasets[0].data[4] =
          this.get_statistic.academics[4].count;

          this.stackedData.datasets[0].data[0] =
          this.get_statistic.new_caries_year[0].count;
          this.stackedData.datasets[0].data[1] =
          this.get_statistic.new_caries_year[1].count;
          this.stackedData.datasets[0].data[2] =
          this.get_statistic.new_caries_year[2].count;
          this.stackedData.datasets[0].data[3] =
          this.get_statistic.new_caries_year[3].count;
          this.stackedData.datasets[0].data[4] =
          this.get_statistic.new_caries_year[4].count;
          this.stackedData.datasets[0].data[5] =
          this.get_statistic.new_caries_year[5].count;
          this.stackedData.datasets[0].data[6] =
          this.get_statistic.new_caries_year[6].count;
          this.stackedData.datasets[0].data[7] =
          this.get_statistic.new_caries_year[7].count;
          this.stackedData.datasets[0].data[8] =
          this.get_statistic.new_caries_year[8].count;
          this.stackedData.datasets[0].data[9] =
          this.get_statistic.new_caries_year[9].count;
          this.stackedData.datasets[0].data[10] =
          this.get_statistic.new_caries_year[10].count;
          this.stackedData.datasets[0].data[11] =
          this.get_statistic.new_caries_year[11].count;

          this.stackedData.datasets[1].data[0] =
          this.get_statistic.delete_cadries_year[0].count;
          this.stackedData.datasets[1].data[1] =
          this.get_statistic.delete_cadries_year[1].count;
          this.stackedData.datasets[1].data[2] =
          this.get_statistic.delete_cadries_year[2].count;
          this.stackedData.datasets[1].data[3] =
          this.get_statistic.delete_cadries_year[3].count;
          this.stackedData.datasets[1].data[4] =
          this.get_statistic.delete_cadries_year[4].count;
          this.stackedData.datasets[1].data[5] =
          this.get_statistic.delete_cadries_year[5].count;
          this.stackedData.datasets[1].data[6] =
          this.get_statistic.delete_cadries_year[6].count;
          this.stackedData.datasets[1].data[7] =
          this.get_statistic.delete_cadries_year[7].count;
          this.stackedData.datasets[1].data[8] =
          this.get_statistic.delete_cadries_year[8].count;
          this.stackedData.datasets[1].data[9] =
          this.get_statistic.delete_cadries_year[9].count;
          this.stackedData.datasets[1].data[10] =
          this.get_statistic.delete_cadries_year[10].count;
          this.stackedData.datasets[1].data[11] =
          this.get_statistic.delete_cadries_year[11].count;

          this.meds = this.get_statistic.meds;
          this.mednotCount = this.get_statistic.mednotCount;
          this.not_staff_files = this.get_statistic.not_staff_files;
          this.not_staff_filesChart = Math.floor(
            (this.get_statistic.not_staff_files /this.get_statistic.all_cadries_count) * 100
          );

          this.medsChart = Math.floor(
            (this.get_statistic.meds / this.get_statistic.all_cadries_count) * 100
          );
          this.mednotCountChart = Math.floor(
            (this.get_statistic.mednotCount / this.get_statistic.all_cadries_count) * 100
          );

          this.careersCountChart = Math.floor(
            (this.get_statistic.careersCount / this.get_statistic.all_cadries_count) * 100
          );

          this.relativesCountChart = Math.floor(
            (this.get_statistic.relativesCount / this.get_statistic.all_cadries_count) * 100
          );

          this.allBirthdayCadriesChart = Math.floor(
            (this.get_statistic.birthdays / this.get_statistic.all_cadries_count) * 100
          );

          this.allNewCadriesChart = Math.floor(
            (this.get_statistic.newcadries /this.get_statistic.all_cadries_count) * 100
          );

          this.allDeleteCadriesChart = Math.floor(
            (this.get_statistic.delete_cadries / this.get_statistic.all_cadries_count) * 100
          );

          this.BlackListChart = Math.floor(
            (this.get_statistic.black_list_cadries / this.get_statistic.all_cadries_count) * 100
          );

          this.vacations = this.get_statistic.vacations;
          this.vacations_Dec = this.get_statistic.vacations_decret;

          this.vacationsChart = Math.floor(
            (this.get_statistic.vacations / this.get_statistic.all_cadries_count) * 100
          );

          this.vacations_DecChart = Math.floor(
            (this.get_statistic.vacations_decret / this.get_statistic.all_cadries_count) * 100
          );

          this.allContractChart = Math.floor(
            (this.get_statistic.contract_cadries / this.get_statistic.all_cadries_count) * 100
          );

          this.BlackList = this.get_statistic.black_list_cadries;

          this.allManChart = Math.floor(
            (this.get_statistic.all_man_cadries /this.get_statistic.all_cadries_count) * 100
          );
          this.allWomanChart = 100 - this.allManChart;
          this.pensionsManChart = Math.floor(
            (this.get_statistic.retired_Man / this.get_statistic.all_cadries_count) * 100
          );
          this.pensionWomanChart = Math.floor(
            (this.get_statistic.retired_WoMan / this.get_statistic.all_cadries_count) * 100
          );
         
    }
  },
  created() {
    this.controlLoader();
    this.get_Statistic(this.organization);
    if (this.get_bigOrgValue) {
    } else {
      this.get_Railway();
    }
  },
};
</script>
<style lang="scss" scoped>
.all_cadry_card {
  background-image: url("https://www.primefaces.org/avalon-vue/layout/images/dashboard/effect-1.svg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #0dcaf0 !important;
}

.all_vakant_card {
  background-image: url("https://www.primefaces.org/avalon-vue/layout/images/dashboard/effect-3.svg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #6f42c1 !important;
}
.all_sverx_card {
  background-image: url("https://www.primefaces.org/avalon-vue/layout/images/dashboard/effect-2.svg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fd7e14 !important;
}

.all_other_card {
  background-image: url("https://www.primefaces.org/avalon-vue/layout/images/dashboard/effect-4.svg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #adb5bd !important;
}
</style>