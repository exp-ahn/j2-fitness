<template>
    <div v-if="isVisible" class="modal fade show" tabindex="-1" style="display: block;">
        <div class="modal-dialog modal-lg modal-dialog-centered" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ detailInfo.name }}</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body detail-text text-start d-flex">
                    <div>
                        <img :src="trainerImg" alt="trainer_img" style="max-width: 400px; max-height: 550px">
                    </div>
                    <dir>{{ detailInfo.detail }}</dir>
                    
                </div>
            </div>
        </div>
        <div 
            class="modal-backdrop fade show" 
            style="position: inherit; z-index: -1;"
            @click="closeModal">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface TrainerInfo {
    name: string,
    imgAddress: string
    detail: any
}

@Component({})
export default class TrainerDetailModal extends Vue {
    @Prop({default: {}}) detailInfo!: TrainerInfo;
    @Prop({default: false}) isVisible!: boolean;

    private get trainerImg() {
        return this.detailInfo.imgAddress;
    }

    private closeModal() {
        this.$emit('close');
    }
}
</script>

<style lang="css" scoped>
.detail-text {
    white-space: pre-line;
}
</style>