<script setup>
import { ref } from 'vue'

const title = ref('Direcetive')

const vtextMsg = ref('v-text 메시지입니다.')
const vshowValue = ref(true)
const vifValue = ref('D')
const vforItem = ref([{message:'Foo'}, {message:'Bar'}])

</script>

<template>
    <div class="guide">
        <h1>{{title}}</h1>

        <p>direcetive : 지시, 지시하는</p>
        <br>
        <p>
            Vue에서 사용되는 특별한 속성이다.
            Vue의 기능들을 사용하기 위해서 HTML 태그 안에 들어가는 하나의 속성이다.
            여러 종류가 있고 `v-`시작한다.
        </p> 

        <br>

        <h2>v-text</h2>
        <div>
            <span v-text="vtextMsg"></span>
            <span>{{vtextMsg}}</span>
        </div>

        <br>

        <h2>v-show</h2>
        <p>표현식의 truthy 값을 기반으로 엘리먼트의 가시성을 전환한다.</p>
        <div>
            <span v-show="vshowValue"><b>vshowValue가 true 입니다.</b></span>
        </div>

        <br>

        <h2>v-if, v-else-if, v-else</h2>
        <p>표현식의 truthy 값을 기반으로 엘리먼트 또는 일부를 조건부로 렌더링한다.</p>

        <div>
            <span v-if="vifValue === 'A'">
                A
            </span>
            <span v-else-if="vifValue === 'B'">
                B
            </span>
            <span v-else-if="vifValue === 'C'">
                C
            </span>
            <span v-else>
                A/B/C 아님
            </span>
        </div>

        <br>

        <h2>v-for</h2>
        <p>소스 데이터를 기반으로 엘리먼트 또는 템플릿 블록을 여러 번 렌더링 한다.</p>

        <div v-for="item in vforItem" :key="item.id">
            {{item.message}}
        </div>
    </div>
</template>

<style scoped>
.guide{
    border : 1px solid blue;
}

</style>