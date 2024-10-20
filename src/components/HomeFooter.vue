<template>
    <footer>
        <div class="footer-wrap">
            <div class="footer-underline-box">
                <div class="footer-left">
                    <div class="footer-logo">
                        <img src="/imgs/j2-logos/j2_main_logo_1.png" alt="J2 FITNESS" />
                        <img src="/imgs/j2-logos/j2_main_logo_2.png" alt="J2 FITNESS" />
                    </div>
                    <div class="contents-small-circles d-flex">
                        <div
                            class="small-circle d-flex justify-content-center"
                            @click="openNewTab('https://www.instagram.com/j2fitness_gaegeum/')"
                        >
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <!-- <div
                            class="small-circle"
                            @click="openNewTab('https://www.youtube.com/watch?v=iIrF75Kk6uQ')"
                        >
                            <i class="fa-brands fa-youtube"></i>
                        </div> -->
                        <div
                            class="small-circle d-flex justify-content-center"
                            @click="openNewTab('https://blog.naver.com/dmfmtm')"
                        >
                            <img class="footer-naver-blog" src="/imgs/contact/blog.png" />
                        </div>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="d-flex mb-2">
                        <div class="footer-info-wrap">
                            <p class="text-light fw-bold fs-6 mb-2">예약 / 상담 / 문의</p>
                            <p class="text-light fw-bold fs-5 mb-3">Tel. 051-891-8766</p>
                        </div>
                        <div class="contact-small-circles d-flex pt-3">
                            <div class="small-circle d-flex justify-content-center">
                                <i
                                    class="fa-solid fa-phone"
                                    ></i>
                                    <!-- onClick={() => handleCopyClipBoard('051-891-8766')} -->
                            </div>
                            <div class="small-circle d-flex justify-content-center">
                                <img
                                    class="kakao-black"
                                    src="/imgs/contact/kakao-black.png"
                                    @click="openNewTab('https://open.kakao.com/o/s0OcyAhb')"
                                />
                            </div>
                            <div class="small-circle  d-flex justify-content-center">
                                <img
                                    class="naver-talk-black"
                                    src="/imgs/contact/naver-talk-black.png"
                                    @click="openNewTab('https://talk.naver.com/ct/wc2kmy?frm=mnmb&frm=nmb_detail')"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="text-light">
                        <p class="fs-6 mb-2">상담 가능 시간</p>
                        <p class="fw-bold mb-3 fs-5">평일 9:00 ~ 22:00</p>
                    </div>
                </div>
            </div>
            <div class="text-light">
                <p>대표 : 김성주</p>
                <p>주소 : 부산 부산진구 가야대로 473 송원빌딩 B1F 제이투피트니스</p>
                <p style="padding-bottom: 20px !important; margin-bottom: 0px !important;">
                    Copyright© 2024 J2 FITNESS. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeFooter extends Vue {
    public openNewTab(address: string) {
        window.open(address);
    };
}
</script>

<style lang="css" scoped>
footer {
    background-color: #000;
}
.small-circle {
    background-color: #fff;
    border-radius: 100%;
    width: 40px;
    height: 40px;
}

.small-circle:hover {
    background-color: #dadada;
}

.small-circle > i {
    line-height: 40px;
    margin: 0 auto;
}

.small-circle > img {
    object-fit: contain;
}

.footer-naver-blog {
    width: 30px;
    height: 30px;
    margin: 5px auto;
}

.kakao-black {
    width: 25px;
    height: 25px;
    margin: 8px auto;
}

.naver-talk-black {
    width: 33px;
    height: 33px;
    margin: 3.5px auto;
}
.fa-phone {
    font-size: 1.2em;
}
.fa-youtube {
    font-size: 1.5em;
}
.fa-instagram {
    font-size: 1.7em;
}
.footer-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
}
.footer-underline-box {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ffcb09;
    padding-bottom: 20px;
    margin-bottom: 15px;
}
.footer-logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.footer-logo > img:first-child {
    width: 50px;
    object-fit: contain;
    margin-right: 10px;
}
.footer-logo > img:last-child {
    height: 50px;
    object-fit: contain;
}
.contents-small-circles > div,
.contact-small-circles > div {
    margin-right: 20px;
}
.footer-right {
    width: 400px;
}
.available-time > p:last-child {
    font-weight: bold;
    font-size: 1.1em;
}
.footer-info-wrap {
    padding-top: 5px;
    padding-right: 25px;
}

</style>