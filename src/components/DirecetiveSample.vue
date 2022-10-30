<script setup>
import {ref, reactive} from 'vue'
import ButtonCounter from '../components/ButtonCounter.vue'

const label = ref('vuejs.org')
const linkId = ref('vue')
const link = reactive({
    to: "http://vuejs.org",
    title: "Vue 공식 사이트"
})

const btnDisable = ref(true);
const inputtAttr = reactive({
    type: 'number',
    value : 4,
    id : 'age'
})

const message = ref('')

function greet(event){
    alert(`${label.value}`)

    if(event){
        alert(event.target.tagName)
    }
}
</script>

<template>
    

    <div>
        <h1>v-bind</h1>
        <a v-bind:id = "linkId" v-bind:href = "link.to" :title="link.title">{{label}}</a>
        <br>
        <button :disabled="btnDisable">못 누릅니다.</button>
        <input v-bind="inputtAttr"/>
    </div>

    <div>
        <h1>v-model</h1>
        <p> 메시지 내용 : {{message}}</p>
        <input v-model="message" placeholder="메시지 입력"/>
    </div>

    <div>
        <h1>v-on</h1>
        <button v-on:click="greet">버튼클릭</button>
    </div>

    <div>
        <ButtonCounter/>
        <ButtonCounter/>
        <ButtonCounter/>
    </div>
</template>