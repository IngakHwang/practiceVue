<script setup>
defineProps(['title', 'isShow','content' ])

</script>

<template>
    <h4>{{ title }}</h4>
    <button v-show='isShow' @click="$emit('someEvent', 0.1)"> 글자 크기 버튼 </button>
    <p>{{content}}</p>
    <br/>
</template>