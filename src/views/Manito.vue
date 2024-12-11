<template>
    <div class="test" style="margin-top: 350px; width: 260px">
        <span class="mb-4 text-center">이름을 입력해주세요.</span>
        <span class="mb-4 text-center">입력예시처럼 이름 2글자만 쓰세요</span>
        <input class="mb-4" type="text" placeholder="입력예시 : 지수" v-model="inputText">
        <button type="button" class="btn btn-primary" @click="getManito">마니또 뽑기</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({})
export default class Manito extends Vue {
    private memberList: Array<string> = ['우진', '지수', '민정', '주형', '채원', '재호'];
    private inputText:string = ''

    private getManito() {
        const random = (Math.floor(Math.random()*1000))%6
        if (this.memberList.length === 6) {
            const inputStringIndex = this.memberList.indexOf(this.inputText);
            this.memberList.splice(inputStringIndex, 1)
            alert(`선택된 마니또는 '${this.memberList[random]}' 입니다.`);
        } else {
            alert('이미 참여하셨습니다.');
        }
    }
}
</script>

<style scoped>
.test {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
</style>