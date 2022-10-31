<script setup>
import { ref, reactive, provide } from 'vue'

import BlogPost from '../components/BlogPost.vue';
import AlertBox from '../components/AlertBox.vue';
import DirecetiveSample from '../components/DirecetiveSample.vue';
import ComponentEvent from '../components/ComponentEvent.vue';
import FancyButton from '../components/FancyButton.vue';
import AwesomeIcon from '../components/AwesomeIcon.vue';
import Child from '../components/Child.vue';

const title = ref('Component')

const posts = ref([
    {id:1, title:'게시물1', content: '게시물1의 내용물은 어쩌고저쩌고'},
    {id:2, title:'게시물2', content: '게시물2의 내용물은 어쩌고저쩌고'},
    {id:3, title:'게시물3', content: '게시물3의 내용물은 어쩌고저쩌고'},
])

const postFontSize = ref(1)
const blogTitle = ref('Antman')

const first = ref('이름')
const last = ref('성')

const grandParentMessage = ref('엣헴')
provide('message', grandParentMessage)

</script>

<template>
    <div class="guide">
        <h1>{{title}}</h1>
        
        <h2>컴포넌트 이벤트 - props, emit</h2>
        <div :style="{ fontSize : postFontSize + 'em'}">
            <BlogPost 
                :title="blogTitle"
                :is-show="true"
                content="글자 버튼 누르면 글씨가 커짐" 
                @some-event="(n) => postFontSize += n"
            />
        </div>

        <div>
            <h2>컴포넌트 v-for</h2>
            <BlogPost
                v-for="post in posts"
                v-bind:key="post.id"
                :title="post.title"
                :is-show="false"
                :content="post.content"
            />
        </div>

        <div>
            <h2>컴포넌트 slot</h2>
            <AlertBox>
                slot 내 문자열

                <BlogPost 
                    title="slot 내 컴포넌트 제목" 
                    content="slot 내 컴포넌트 내용" 
                    :is-show="false"
                />
            </AlertBox>
            <FancyButton>
                클릭하기!
            </FancyButton>
            <FancyButton>
                <span style="color:cyan">클릭하기!</span>
                <AwesomeIcon/>
            </FancyButton>
        </div>
        
        <div>
            <h2>컴포넌트 이벤트</h2>
            <ComponentEvent
                v-model:first-name="first"
                v-model:last-name="last"
            />
        </div>

        <div>
            <h2>컴포넌트 provide / inject</h2>
            <input v-model="grandParentMessage"/>
            <Child/>
        </div>
    </div>
</template>

<style scoped>

</style>