<template>
    <section style="padding-top: 100px;">
        <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            class="scrollspy-example rounded-2"
            tabindex="0"
        >        
            <carousel-imgs style="height: 100vh;"/>
            <registration-inquiry id="inquiry" class="main_section"/>
            <location id="location" class="main_section"/>
            <trainers id="trainers" class="main_section"/>
            <interior id="interior" class="main_section"/>
            <blog id="blog" style="padding-top: 50px;"/>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarouselImgs from './mainSection/CarouselImgs.vue';
import RegistrationInquiry from './mainSection/RegistrationInquiry.vue';
import Location from './mainSection/Location.vue';
import Trainers from './mainSection/Trainers.vue';
import Interior from './mainSection/Interior.vue';
import Blog from './mainSection/Blog.vue';

@Component({
    components: {
        CarouselImgs,
        RegistrationInquiry,
        Location,
        Trainers,
        Interior,
        Blog,
    }
})
export default class MainSections extends Vue {
}
</script>

<style lang="css" scoped>
.main_section {
    padding-top: 50px;
    height: 100vh;
}
</style>