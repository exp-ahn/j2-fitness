<template>
    <header>
        <nav id="navbar-example2" class="navbar px-3 mb-3">
            <a class="navbar-brand" href="#">
                <img src="/imgs/j2-logos/j2_main_logo_1.png" alt="J2 FITNESS" />
                <img src="/imgs/j2-logos/j2_main_logo_2.png" alt="J2 FITNESS" />
            </a>
            <ul class="nav nav-pills ">
                <li class="nav-item ">
                    <a class="nav-link" href="#scrollspyHeading1">
                        등록 문의
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading2">
                        오시는 길
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading3">
                        트레이너
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading4">
                        내부시설
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading5">
                        블로그
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class HomeHeader extends Vue {
}
</script>

<style lang="css" scoped>
#navbar-example2 {
    background: rgba(0, 0, 0, 1);
    position: fixed;
    width: 100%;
    z-index: 99;
}
.navbar-brand > img:first-child {
    width: 60px;
    margin-left: 20px;
    margin-right: 20px;
}

.navbar-brand > img:last-child {
    height: 50px;
}

.nav-pills {
    --bs-nav-pills-link-active-color: #000;
    --bs-nav-pills-link-active-bg: #ffcb09;
}

.nav {
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
}

:root {
    --bs-link-color: #ffcb09;
    --bs-link-hover-color: #ffcb09;
}

.nav-item {
    margin-right: 10px;
}

.nav-link {
    font-weight: bold;
    font-size: 1.2em;
}

.nav-pills .nav-link:hover,
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: var(--bs-nav-pills-link-active-bg);
    background-color: black;
    border-bottom: 2px solid var(--bs-nav-pills-link-active-bg);
    border-radius: 0px;
    box-sizing: border-box;
}

</style>