<template>
    <div>
        <h2>v-bind:class</h2>
        <div :class="{'text-red': hasError, 'active' : isActive}">클래스 바인딩</div>
        <div :class="{active : true}">Test</div>
        <div :class="class2">클래스 바인딩2</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return{
            sampleData: '',
            isActive: false,
            hasError: false,
            class2: ['active', 'hasError']
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
.active{
    background-color: greenyellow;
    font-weight: bold;
}

.text-red{
    color:red;
}
</style>