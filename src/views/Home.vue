<template>
    <div>
        <div>{{ AA }}</div>
        <div>{{ BB }}</div>
        <div>{{ CC }}</div>
        <div>{{ DD }}</div>
        <div>{{ EE }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class Home extends Vue {
    private AA: string = 'aaaa';
    private BB: string = 'bbbb'
    private CC: string = 'cccc'
    private DD: string = 'dddd'
    private EE: string = 'eeee'
}

</script>

<style lang="css" scoped>

</style>