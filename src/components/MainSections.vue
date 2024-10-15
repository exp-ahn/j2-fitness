<template>
    <section>
        <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            class="scrollspy-example rounded-2"
            tabindex="0"
        >
            <div style="height: 100vh;">
                <naver-map/>
                <!-- <MainImgs /> -->
            </div>
            <div id="scrollspyHeading1" class="main_section">
                <!-- <Inquiry openNewTab={openNewTab} /> -->
            </div>
            <div id="scrollspyHeading2" class="main_section">
                <!-- <Directions openNewTab={openNewTab} /> -->
            </div>
            <div id="scrollspyHeading3" class="main_section">
                <!-- <Trainers /> -->
            </div>
            <div id="scrollspyHeading4" class="main_section">
                <!-- <Interior /> -->
            </div>
            <div id="scrollspyHeading5" class="main_section">
                <!-- <Blog openNewTab={openNewTab} /> -->
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NaverMap from './common/map/NaverMap.vue';

@Component({
    components: {
        NaverMap
    }
})
export default class MainSections extends Vue {
}
</script>

<style lang="css" scoped>
.main_section {
    padding-top: 110px;
    height: 100vh;
}
</style>