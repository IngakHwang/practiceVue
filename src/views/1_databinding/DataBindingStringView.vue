<template>
    <div>
        <h1>{{message}} {{ userName }}</h1>
        <p>{{message + userName}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "Ingak",
            message: 'Welcome',
            arr: [],
            obj: {}
        }
    }
}
</script>

<style scoped>

</style>