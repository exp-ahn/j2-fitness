<template>
    <section class="text-center">
        <h3>오시는 길</h3>
        <p>
            개금역 2번 출구에서 도보로 단<strong>"3분"</strong>거리
        </p>
        <div class="d-flex flex-wrap justify-content-center">
            <naver-map :mapWidth="550" :mapHeight="450"/>
            <div>
                <div class="d-flex justify-content-center">
                    <div
                        class="map-button kakao-map-button"
                        @click="openNewTab('https://place.map.kakao.com/889644700')"
                    >
                        <img src="/imgs/map-icons/kakao/kakaomap_basic.png" alt="카카오 맵"/>
                        카카오 맵
                    </div>
                    <!-- 네이버 지도 링크가 폐업처리된 곳으로 나옴 이후 수정처리 필요함!! -->
                    <div
                        class="map-button naver-map-button"
                        @click="openNewTab('https://map.naver.com/p/entry/place/1108438557?c=14.63,0,0,0,dh')"
                    >
                        <img src="/imgs/map-icons/naver/Map_Service_Icon.png" alt="네이버 지도" />
                        <!-- <img src="./imgs/map-icons/naver/___Logotype________WH.png" alt="네이버 지도" /> -->
                        네이버 지도
                    </div>
                </div>
                <div class="detail-info">
                    <ul>
                        <h4>J2 FITNESS(제이투피트니스)</h4>
                        <li>
                            <p>부산 부산진구 가야대로 473 송원빌딩 B1F 제이투피트니스</p>
                        </li>
                        <h5>전화번호</h5>
                        <li>
                            <p>051-891-8766</p>
                        </li>
                        <h5>운영시간</h5>
                        <li>
                            <p>
                                매일 <strong>00:00 - 24:00 </strong> (연중무휴)
                            </p>
                        </li>
                        <h5>상담 가능 시간</h5>
                        <li>
                            <p>
                                월 ~ 금 <strong>10:00 - 21:00</strong>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang=ts>
import { Component, Vue } from 'vue-property-decorator';
import NaverMap from '../common/map/NaverMap.vue';


@Component({
    components: {
        NaverMap
    }
})
export default class Location extends Vue {
    public openNewTab(address: string) {
        window.open(address);
    };
}
</script>

<style lang="css" scoped>
/* .map-button > img {
    width: 200px;
    object-fit: contain;
} */

.map-button {
    margin-right: 10px;
    margin-left: 10px;
}

.kakao-map-button {
    padding-right: 15px;
    background-color: #fae100;
    width: 200px;
    height: 60px;
    border-radius: 7px;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
}

.naver-map-button {
    background-color: #03c75b;
    width: 200px;
    height: 60px;
    border-radius: 7px;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
}

.kakao-map-button > img {
    width: 150px;
    margin: 0 auto;
}

.kakao-map-button:hover,
.naver-map-button:hover {
    cursor: pointer;
}
.naver-map-button > img:first-child {
    width: 45px;
    height: 45px;
    object-fit: contain;
    margin-right: 10px;
}

.naver-map-button > img:last-child {
    width: 120px;
    height: 52px;
    object-fit: contain;
}

.detail-info {
    margin-top: 20px;
}

.detail-info p,
.detail-info strong {
    text-align: left;
}

.detail-info > ul > li {
    margin-left: 15px;
}

.detail-info > ul > h4 {
    font-weight: bold;
}

.detail-info > ul > h5 {
    text-align: left;
    line-height: 50px;
    margin-left: 5px;
    font-weight: bold;
}

</style>