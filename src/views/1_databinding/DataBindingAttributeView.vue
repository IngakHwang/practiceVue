<template>
    <div>
        <input type="text" name="" id="" v-bind:value="userId" readonly>
        <input type="text" name="" id="" :value="userId" readonly>
        <br>
        <img :src="imgSrc" alt="" style="width:100px; hegith:auto;">
        <br>
        <input type="search" v-model="txt1">
        <button :disabled="txt1 === ''"> 조회 </button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return{
            userId: 'Test',
            imgSrc: 'data:image/png;base64,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',   
            txt1: ''
        }
    },        
    setup() {},
    created() {},
    mounted() {}, 
    unmounted() {},
    methods: {
    }
}
</script>

<style scoped>

</style>