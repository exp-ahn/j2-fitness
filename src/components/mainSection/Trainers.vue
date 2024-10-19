<template>
    <section class="text-center">
        <h3>트레이너</h3>
        <div class="j2-trainers">
            <div v-for="(item, index) in trainerInfos" :key="index">
                <trainer-card-comp :trainerName="item.name" :imgAddress="item.imgAddress"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TrainerCardComp from './trainers/TrainerCardComp.vue';

interface TrainerInfo {
    name: string,
    imgAddress: string
    // detail: any
}

@Component({
    components: {
        TrainerCardComp,
    }
})
export default class Trainers extends Vue {
    private trainerInfos: Array<TrainerInfo> = [];

    mounted() {
        this.initTrainerInfos()
        console.log('trainers :: ', this.trainerInfos)
    }

    private initTrainerInfos() {
        this.trainerInfos = [
            {
                name: '김 성 주',
                imgAddress: '/imgs/trainers/Kim/trainer-kim.jpeg',
            },
            {
                name: '박 도 연',
                imgAddress: '/imgs/trainers/Park/trainer-park.jpeg',
            },
            {
                name: '백 인 호',
                imgAddress: '/imgs/trainers/Beak/trainer-beak.jpeg',
            },
        ]
    }

}
</script>

<style lang="css" scoped>
.j2-trainers {
    display: flex;
    justify-content: center;
}
.trainer-img-modal {
    width: 420px;
    height: 625px;
    object-fit: cover;
}

.trainer-detail {
    color: #ffcb09;
    margin: 30px 30px 0px 10px;
}

.award-list > li {
    text-align: left;
}

.modal-body {
    padding: 0;
}

.modal-content {
    border: none;
    border-radius: 0;
    background-color: #000;
    width: none;
}


</style>