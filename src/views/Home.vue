<template>
    <div>
        <home-header/>
        <main-sections/>
        <home-footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '../components/HomeHeader.vue';
import MainSections from '../components/MainSections.vue';
import HomeFooter from '../components/HomeFooter.vue';


@Component({
    components: {
        HomeHeader,
        MainSections,
        HomeFooter,
    }
})
export default class Home extends Vue {}
</script>