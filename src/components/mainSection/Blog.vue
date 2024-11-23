<template>
    <section class="text-center">
        <h3>블로그</h3>

    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebCrawler from '../common/crawling/Crawler';

@Component({
    components: {}
})
export default class Blog extends Vue {
    public mounted() {
        WebCrawler.scrapeWithCheerio();
    }
}
</script>