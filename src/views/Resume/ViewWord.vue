<template>
    <div class="grid">
        <div class="col-12 flex justify-content-center">
            <div class="resume-word surface-card border-round-lg ">
                <div class="grid w-full">
                    <div class="col-12">
                        <h6 class="text-2xl text-center font-medium mb-1">Ma'lumotnoma</h6>
                        <h6 class="text-xl text-center font-medium mt-0">Raximov Jamshid Shuxrat o'g'li</h6>
                        <h6 class="text-base text-left font-normal m-0">2023-02-01 dan:</h6>
                        <h6 class="text-lg text-left font-medium mt-0 pr-200">O`zbekiston temir yo`llariAJ mexnat
                            muxofazasi,texnika va sanoat xavfsizligi boshqarmasining mexnat muxofazasi va texnika
                            xavfsizligi bo`limini xavfsizligi bosh mutaxasisi</h6>

                    </div>
                    <div class="col-6">
                        <h6 class="text-left m-0 font-medium text-lg">Tug'ilgan yili:</h6>
                        <h6 class="text-left m-0 pt-1 font-medium text-base">1979-07-24</h6>
                    </div>
                    <div class="col-6">
                        <h6 class="text-left m-0 font-medium text-lg text-800">Tug'ilgan joyi:</h6>
                        <h6 class="text-left m-0 pt-1 font-medium text-base ">Buxoro viloyati Kogon tumani</h6>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import EksportService from "../../service/servises/EksportService";
export default {
    data() {
        return {

        }
    },
    methods: {
        get_cadry_details() {
            EksportService.get_ResumeDetails({ id: '92020' }).then((res) => {
                console.log(res.data);
            })
        }
    },
    created() {
        this.get_cadry_details()
    }
}
</script>

<style lang="scss" scoped>
.resume-word {
    width: 900px;
    padding: 40px 50px 50px 50px;
    .pr-200{
        padding-right: 200px;
    }
}
</style>