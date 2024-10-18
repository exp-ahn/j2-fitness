<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/imgs/carousel-imgs/carousel-img1.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/imgs/carousel-imgs/carousel-img2.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/imgs/carousel-imgs/carousel-img3.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/imgs/carousel-imgs/carousel-img4.jpeg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CarouselImgs extends Vue {}
</script>

<style lang="css" scoped>
/* 이미지가 아닌 main-section wrapper에 일괄적으로 적용시켜야할 듯 */
.carousel-item > img {
    /* height 설정에서 header 높이 값 추가 수정 필요함 */
    height: calc(100vh - 100px);
    object-fit: cover;
}
</style>
