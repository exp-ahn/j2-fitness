<template>
    <section>
        <h2 class="text-center">등록 문의</h2>
        <div class="d-flex justify-content-center">
            <div class="contact-way-card d-flex flex-column align-items-center">
                <div class="underline-box zoom-in">
                    <figure class="d-flex flex-column align-items-center hover" 
                            @click="openNewTab('https://pf.kakao.com/_xjxnnxhn')">
                        <img src="/imgs/contact/kakao.png"/>
                        <h4 class="text-center">오픈 카톡</h4>
                    </figure>
                </div>
                <div class="contact-way">
                    오픈 카톡 관련 설명 주저리 주저리오픈 카톡 관련 설명 주저리 주저리오픈 카톡 관련 설명 주저리
                    주저리오픈 카톡 관련 설명 주저리 주저리
                </div>
            </div>
            <div class="contact-way-card d-flex flex-column align-items-center">
                <div class="underline-box zoom-in">
                    <figure class="d-flex flex-column align-items-center hover"
                            @click="openNewTab('https://www.instagram.com/j2fitness_gaegeum/')">
                        <img src="/imgs/contact/instagram.png"/>
                        <h4 class="text-center">인스타그램</h4>
                    </figure>
                </div>
                <div class="contact-way">
                    인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리
                    주저리인스타그램 관련 설명 주저리 주저리인스타그램 관련 설명 주저리 주저리
                </div>
            </div>
            <div class="contact-way-card d-flex flex-column align-items-center">
                <div class="underline-box zoom-in">
                    <figure class="d-flex flex-column align-items-center hover"
                            @click="openNewTab('https://talk.naver.com/ct/wm1hb3i')">
                        <img class="d-flex align-items-center" src="/imgs/contact/naver-talk.png" />
                        <h4 class="text-center">네이버 톡톡</h4>
                    </figure>
                </div>
                <div class="contact-way">
                    네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명
                    주저리 주저리네이버 톡톡 관련 설명 주저리 주저리네이버 톡톡 관련 설명 주저리 주저리
                </div>
            </div>
            <div class="contact-way-card d-flex flex-column align-items-center">
                <div class="underline-box zoom-in">
                    <figure class="d-flex flex-column align-items-center hover"
                            @click="openNewTab('https://m.booking.naver.com/booking/6/bizes/1253810')">
                        <img class="d-flex align-items-center" src="/imgs/contact/naver-talk.png" />
                        <h4 class="text-center">네이버 예약</h4>
                    </figure>
                </div>
                <div class="contact-way">
                    네이버 예약 관련 설명 주저리 주저리 네이버 예약 관련 설명 주저리 주저리 네이버 예약 관련 설명 주저리 주저리 
                    네이버 예약 관련 설명 주저리 주저리 네이버 예약 관련 설명 주저리 주저리 
                </div>
            </div>
        </div>
    </section>
</template>

<script lang=ts>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class RegistrationInquiry extends Vue {
    public openNewTab(address: string) {
        window.open(address);
    };
}
</script>

<style lang="css" scoped>
figure.hover:hover {
    cursor: pointer;
}
.contact-way-card {
    margin: 20px;
    width: 220px;
}
.contact-way-card > div > figure > img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
}
.underline-box {
    width: 200px;
    border-bottom: 2px solid #dadada;
    margin-bottom: 15px;
}
.zoom-in figure img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}
.zoom-in figure:hover img {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
}

</style>