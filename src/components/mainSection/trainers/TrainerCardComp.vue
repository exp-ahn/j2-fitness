<template>
    <div class="trainers zoom-in" @click="$emit('click')">
        <figure>
            <img class="trainer-img" :src=imgAddress />
            <h4>{{ trainerName }}</h4>
        </figure>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TrainerCardComp extends Vue {
    @Prop({default:'홍 길 동'}) trainerName!: string;
    @Prop({default:'/imgs/trainers/default-img'}) imgAddress!: string;
}
</script>

<style lang="css" scoped>
.trainers {
    width: 250px;
    height: 350px;
    margin: 15px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.trainer-img {
    width: 250px;
    height: 300px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 15px;
}

/* Zoom In #1 */

/* .zoom-in figure h4, */
.zoom-in figure img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}
/* .zoom-in figure:hover h4, */
.zoom-in figure:hover img {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
}
</style>
