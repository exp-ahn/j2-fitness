<template>
  <div>
    <div id="map" :style="{ width: mapWidth + 'px', height: mapHeight + 'px' }"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

declare global {
  interface Window { naver: any; }
}

@Component
export default class NaverMap extends Vue {
  // 현재 map area 지정을 위해 받는 숫자값은 px단위로 지정됩니다.
  @Prop({default: 550}) mapWidth!:number
  @Prop({default: 450}) mapHeight!:number

  private map: any = null;
  private marker:any = null;

  private async mounted() {
    try {
      await this.loadNaverMapScript();
      this.initializeMap();
    } catch (error) {
      console.error(error);
    }
  }

  private loadNaverMapScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById('naver-map-script');
      if (existingScript) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'naver-map-script';
      script.src = process.env.VUE_APP_API_URL;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.naver && window.naver.maps) {
          resolve();
        } else {
          reject(new Error('네이버 지도 API 로드 실패'));
        }
      };
      script.onerror = () => reject(new Error('네이버 지도 API 로드 실패'));
      document.head.appendChild(script);
    });
  }

  private initializeMap(): void {
    const mapOptions = {
      center: new window.naver.maps.LatLng(35.1534898, 129.0235399), // 초기 중심 좌표
      zoom: 16, // 초기 줌 레벨
    };
    this.map = new window.naver.maps.Map('map', mapOptions);
    this.initializeMapMaker();
  }

  private initializeMapMaker(): void {
    this.marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(35.1534898, 129.0235399),
      map: this.map
      // 마커 이미지 커스텀을 위한 property
     // url: HOME_PATH +'/img/example/sally.png',
      //   size: new naver.maps.Size(50, 52),
      //   origin: new naver.maps.Point(0, 0),
      //   anchor: new naver.maps.Point(25, 26)
    });
  }
}
</script>