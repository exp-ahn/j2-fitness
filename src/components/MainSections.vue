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
            <registration-inquiry id="scrollspyHeading1" class="main_section"/>
            <location id="scrollspyHeading2" class="main_section"/>
            <trainers id="scrollspyHeading3" class="main_section"/>
            <div id="scrollspyHeading4" class="main_section">
                <!-- <Interior /> -->
            </div>
            <div id="scrollspyHeading5" class="main_section">
                <!-- <Blog/> -->
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarouselImgs from './mainSection/CarouselImgs.vue';
import RegistrationInquiry from './mainSection/RegistrationInquiry.vue';
import Location from './mainSection/Location.vue';
import Trainers from './mainSection/Trainers.vue';

@Component({
    components: {
        CarouselImgs,
        RegistrationInquiry,
        Location,
        Trainers
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