<template>
    <header class="header-property">
        <nav class="navbar mb-3 navbar-custom-property d-flex justify-content-center">
            <div class="navbar-content-wrapper">
                <!-- href 값 조정이 필요할 것으로 판단됨. (#을 빼고 /로 경로처럼 url 구성하기) -->
                <a class="navbar-brand" href="#">
                    <img src="/imgs/j2-logos/j2_main_logo_1.png" alt="J2 FITNESS" />
                    <img src="/imgs/j2-logos/j2_main_logo_2.png" alt="J2 FITNESS" />
                </a>
                <ul class="nav nav-pills align-items-center">
                    <li class="px-1">
                        <a class="nav-link fw-bold fs-5" href="#inquiry">
                            등록 문의
                        </a>
                    </li>
                    <li class="px-1">
                        <a class="nav-link fw-bold fs-5" href="#location">
                            오시는 길
                        </a>
                    </li>
                    <li class="px-1">
                        <a class="nav-link fw-bold fs-5" href="#trainers">
                            트레이너
                        </a>
                    </li>
                    <li class="px-1">
                        <a class="nav-link fw-bold fs-5" href="#interior">
                            내부시설
                        </a>
                    </li>
                    <li class="px-1">
                        <a class="nav-link fw-bold fs-5" href="#blog">
                            블로그
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeHeader extends Vue {

}
</script>

<style lang="css">
.header-property {
    background: rgba(0, 0, 0, 1);
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100px;
}
/* height 값에 대한 세부 기획이 추가로 필요함 */
.navbar-custom-property {
    position: fixed;
    width: 100%;
    height: 100px;
    z-index: 10000;
}
/* width 값에 대한 세부 조정이 추가로 필요함 */
.navbar-content-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    z-index: 98;
    width: 1200px;
    margin:0 auto;
}
/* 크기를 고정 픽셀이 아닌 값으로 새롭게 기획이 필요함 */
/* :nth child 없이 css 처리 해놓기 */
.navbar-brand > img:first-child {
    width: 60px;
    margin-left: 20px;
    margin-right: 20px;
}

.navbar-brand > img:last-child {
    height: 50px;
}
/* ************************************************ */
/* 하위 속성은 bootstrap 내부 속성으로 scope으로 적용 불가능  */
.nav-pills {
    --bs-nav-pills-link-active-color: #000 !important;
    --bs-nav-pills-link-active-bg: #ffcb09 !important;
}
.nav {
    --bs-nav-link-color: var(--bs-link-color) !important;
    --bs-nav-link-hover-color: var(--bs-link-hover-color) !important;
}
:root {
    --bs-link-color: #ffcb09 !important;
    --bs-link-hover-color: #ffcb09 !important;
}
/* a 태그에 hover시에 움찔움찍하는 내용 해결해야함 :: 1차적으로 잡긴 잡았음 - 다시 발생*/
.nav-link {
    display: inline-block;
}
.nav-pills .nav-link:hover,
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: var(--bs-nav-pills-link-active-bg) !important;
    background-color: black !important;
    border-bottom: 2px solid var(--bs-nav-pills-link-active-bg) !important;
    border-radius: 0px !important;
    box-sizing: border-box !important;
}
</style>