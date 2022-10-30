<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <button @click="count++">현재 버튼은 {{ count }}번 클릭되었습니다.</button>
</template>