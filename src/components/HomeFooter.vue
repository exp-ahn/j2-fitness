<template>
    <footer>
        <div class="footer-wrap">
            <div class="footer-underline-box">
                <div class="footer-left">
                    <div class="footer-logo d-flex align-items-center mb-4">
                        <img src="/imgs/j2-logos/j2_main_logo_1.png" 
                             alt="J2 FITNESS"
                             class="me-2"
                             style="width: 50px;"
                        />
                        <img src="/imgs/j2-logos/j2_main_logo_2.png" 
                             alt="J2 FITNESS"
                             style="height: 50px;"/>
                    </div>
                    <div class="contents-small-circles d-flex">
                        <div
                            class="small-circle d-flex justify-content-center align-items-center pt-1 me-3"
                            @click="openNewTab('https://www.instagram.com/j2fitness_gaegeum/')"
                        >
                            <i class="bi bi-instagram" style="font-size: 1.5rem;"></i>
                        </div>
                        <div
                            class="small-circle d-flex justify-content-center"
                            @click="openNewTab('https://blog.naver.com/dmfmtm')"
                        >
                            <img class="footer-naver-blog" src="/imgs/contact/blog.png" />
                        </div>
                    </div>
                </div>
                <div style="width: 400px;">
                    <div class="d-flex mb-2">
                        <div class="pt-2 pe-5">
                            <p class="text-light fw-bold fs-6 mb-2">예약 / 상담 / 문의</p>
                            <p class="text-light fw-bold fs-5 mb-3">Tel. 051-895-4983</p>
                        </div>
                        <div class="contact-small-circles d-flex pt-3">
                            <div class="small-circle d-flex justify-content-center align-items-center pt-1 me-3"
                                 @click="handleCopyClipBoard">
                                <i class="bi bi-telephone-fill" style="font-size: 1.2rem;"></i>
                            </div>
                            <div class="small-circle d-flex justify-content-center me-3" 
                                 @click="openNewTab('https://pf.kakao.com/_xjxnnxhn')">
                                <img class="kakao-black" src="/imgs/contact/kakao-black.png"/>
                            </div>
                            <div class="small-circle  d-flex justify-content-center" 
                                 @click="openNewTaeb('https://talk.naver.com/ct/wm1hb3i')">
                                <img class="naver-talk-black" src="/imgs/contact/naver-talk-black.png"/>
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

    public handleCopyClipBoard() {
        navigator.clipboard.writeText('051-895-4983').then(() => alert("전화번호가 복사되었습니다."));
    }
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
img {
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
</style>