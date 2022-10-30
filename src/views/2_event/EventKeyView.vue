<template>
    <div>
        <input type="search" name="" id="" v-model="searchText" @keyup="checkEnter($event)">
        <input type="search" name="" id="" v-model="searchText" @keyup.enter="doSearch">
        <!-- 
            .enter 
            .tab
            .delete
            .esc
            .space
            .up down left right ~~~
            .stop - event.stopPropagtion()
            .prevent - event.preventDefault()
        -->
        <button @click="doSearch">조회</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
    setip() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        doSearch(){
            console.log(this.searchText)
            alert(this.searchText)
        },
        checkEnter(event){
            if(event.keyCode === 13){
                this.doSearch()
            }
        }
    }
}
</script>

<style scoped>

</style>