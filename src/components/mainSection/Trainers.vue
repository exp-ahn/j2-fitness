<template>
    <section class="text-center">
        <h3>트레이너</h3>
        <div class="j2-trainers">
            <div v-for="(item, index) in trainerInfos" :key="index">
                <trainer-card-comp 
                    :trainerName="item.name" 
                    :imgAddress="item.imgAddress" 
                    :posterImgAddress="item.posterImgAddress" 
                    @click="openModal(item)"
                />
            </div>
        </div>
        <trainer-detail-modal 
            v-if="isModalVisible"
            :detailInfo="detailInfo"
            :isVisible="isModalVisible"
            @close="isModalVisible = false"
        />
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TrainerCardComp from './trainers/TrainerCardComp.vue';
import TrainerDetailModal from './trainers/TrainerDetailModal.vue';
import TrainerData from './trainers/TrainersInfo.json';

interface TrainerInfo {
    name: string,
    imgAddress: string
    detail: any
}

@Component({
    components: {
        TrainerCardComp,
        TrainerDetailModal
    }
})
export default class Trainers extends Vue {
    private trainerInfos: Array<TrainerInfo> = [];
    private detailInfo: any = {}
    private isModalVisible: boolean = false;

    private mounted() {
        this.initTrainerInfos();
    }

    private initTrainerInfos() {
        this.trainerInfos = TrainerData.trainers;
    }

    private openModal(trainer: TrainerInfo) {
        this.detailInfo = trainer;
        this.isModalVisible = true;
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