<template>
    <section class="text-center">
        <h3>내부시설</h3>
        <div class="interior-imgs">
            <div class="my-2">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
            </div>
            <div class="my-2">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
            </div>
            <div class="my-2">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
                <img class="mx-1" src="/imgs/test_img.png" alt="test_img">
            </div>
        </div>
        <div class="temp d-flex justify-content-around">
            <div class="mt-3">
                <img src="/imgs/interior/wifi.png" alt="wifi">
                <p class="mt-1 fs-5">Wi-Fi</p>
            </div>
            <div class="mt-3">
                <img src="/imgs/interior/inbody.png" alt="inbody">
                <p class="mt-1 fs-5">인바디 측정</p>
            </div>
            <div class="mt-3">
                <img src="/imgs/interior/locker.png" alt="locker">
                <p class="mt-1 fs-5">개인 락커</p>
            </div>
            <div class="mt-3">
                <img src="/imgs/interior/parking.png" alt="parking">
                <p class="mt-1 fs-5">주차 가능</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class Interior extends Vue {

}
</script>

<style lang="css" scoped>
.interior-imgs > div > img {
    width: 150px;
    height: 150px;
}

.temp {
    margin: 0 auto;
    width: 760px;
    height: 190px;
    border: 2px solid #000;
}

.temp > div > img {
    width: 120px;
    height: 120px;
}
</style>