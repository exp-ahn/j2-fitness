<template>
    <section class="text-center" style="margin: 0 auto; width: 800px;">
        <h3>블로그</h3>
        <div>

        </div>
        <div v-for="(item, index) in cleanApiData" :key="index" 
             class="d-flex text-start"
             style="margin-top: 20px;">
            <div >
                <div @click="moveBlog(index)" style="cursor: pointer;">{{ item.title }}</div>
                <div @click="moveBlog(index)" style="cursor: pointer;">{{ item.description }}</div>
                <div>{{ item.postdate }}</div>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { NaverSearchAPI } from '../common/Interfaces';

@Component({
    components: {}
})
export default class Blog extends Vue {
    private apiData: Array<NaverSearchAPI> = [];
    private cleanApiData: Array<{title: string, description: string, postdate: string}> = [];

    private async created() {
        await this.getSearchAPI();
        this.cleanData();
    }

    // 태그를 제거하고 필요한 데이터만 남기기
    private cleanData() {
        this.cleanApiData = this.apiData.slice(0, 7).map(item => ({
            title: this.removeHtmlTags(item.title),
            description: this.removeHtmlTags(item.description),
            postdate: this.formatDate(item.postdate)
        }));
    }

    // HTML 태그 제거
    private removeHtmlTags(text: string): string {
        const div = document.createElement('div');
        div.innerHTML = text;
        return div.textContent || div.innerText || '';
    }

    // 날짜 형식 변경 (예: 20241224 -> 2024-12-24)
    private formatDate(date: string): string {
        return `${date.slice(0, 4)}. ${date.slice(4, 6)}. ${date.slice(6)}`;
    }

    private async getSearchAPI() {
        try {
            const query = 'J2 FITNESS';
            const res = await axios.get('/api/proxy', {
                params: {
                    query: query,
                    display: 100,
                    start: 1,
                    sort: 'date',
                },
                withCredentials: false,
            });
            this.apiData = JSON.parse(JSON.stringify(res.data.items)).filter((item) => item.bloggername === 'J2 FITNESS');

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    private moveBlog(index: number): void {
        window.open(this.apiData[index].link);
    }
}
</script>