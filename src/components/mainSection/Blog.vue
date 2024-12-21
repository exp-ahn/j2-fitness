<template>
    <section class="text-center">
        <h3>블로그</h3>

        <button type="button" class="btn btn-primary" @click="() => getSearchAPI()">Primary</button>

    </section>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class Blog extends Vue {
    private data!: any;

    private created() {
        // this.getSearchAPI();
    }

    private async getSearchAPI() {
        const url = '/.netlify/functions/naverSearchAPI'; // 배포버전
        const query = 'J2 FITNESS';
        const encodedQuery = encodeURIComponent(query);

        try {
            const res = await axios.get(url, {
                params: {
                    query: encodedQuery,
                    display: 100,
                    start: 1,
                    sort: 'sim'
                }
            });
            console.log('res :: ', res.data);
        } catch (error) {
            console.error(error)
        }
    }
}
</script>