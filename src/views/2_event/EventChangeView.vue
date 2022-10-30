<template>
    <div>
        <!-- select , checkbox, radio -->
        <select name="" id="" v-on:change="changeCity" v-model="selectedCity">
            <option value="">==도시선택==</option>
            <option :value="city.cityCode" v-for="city in cityList" :key="city.cityCode">
                {{city.title}}
            </option>
        </select>
        <select name="" id="">
            <option :value="dong.dongCode" v-for="dong in selectedDongList" :key="dong.dongCode">
                {{dong.dongTitle}}
            </option>
        </select>


        <!-- 함수 거치지 않고 실행 -->
        <select name="" id="">
            <option :value="dong.dongCode" v-for="dong in dongList.filter((dong)=> dong.cityCode === selectedCity)" :key="dong.dongCode">
                {{dong.dongTitle}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: '',
            cityList: [
                {cityCode: '02', title:'서울'},
                {cityCode: '051', title:'부산'},
                {cityCode: '064', title:'제주'},
            ],
            dongList:[
                {cityCode : '02', dongCode: '1', dongTitle:'서울 1동'},
                {cityCode : '02', dongCode: '2', dongTitle:'서울 2동'},
                {cityCode : '02', dongCode: '3', dongTitle:'서울 3동'},
                {cityCode : '02', dongCode: '4', dongTitle:'서울 4동'},
                {cityCode : '051', dongCode: '1', dongTitle:'부산 1동'},
                {cityCode : '051', dongCode: '2', dongTitle:'부산 2동'},
                {cityCode : '051', dongCode: '3', dongTitle:'부산 3동'},
                {cityCode : '064', dongCode: '1', dongTitle:'제주 1동'},
                {cityCode : '064', dongCode: '2', dongTitle:'제주 2동'},
            ],
            selectedDongList: []
        }
    },
    setip() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeCity(){
            this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
        }
    }
}
</script>

<style scoped>

</style>