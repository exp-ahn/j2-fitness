<template>
  <div class="map-container">
    <div id="map" style="width: 400px; height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare global {
  interface Window { naver: any; }
}

@Component
export default class NaverMap extends Vue {
  private map: any = null;

  // 네이버 지도 API 스크립트 로드 함수
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

  // 네이버 지도 생성 함수
  private initializeMap(): void {
    const mapOptions = {
      center: new window.naver.maps.LatLng(35.1534898, 129.0235399), // 초기 중심 좌표
      zoom: 17, // 초기 줌 레벨
    };
    this.map = new window.naver.maps.Map('map', mapOptions);
  }

  // Vue 라이프사이클 훅: 컴포넌트가 마운트되면 지도 로드
  private async mounted() {
    try {
      await this.loadNaverMapScript();
      this.initializeMap();
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>