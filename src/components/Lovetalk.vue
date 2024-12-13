<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';  // 引入axios
import { nanoid } from 'nanoid';    // 引入nanoid
import { useLoveTalkStore } from '@/store/loveTalk'
const talkStore = useLoveTalkStore().loveTalk
let talkList = reactive([
    { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
    { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
    { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' },
]);

async function getLoveTalk() {
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua')
    talkList.push({
        id: nanoid(),
        title
    })
}
</script>

<style scoped>
.talk {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 8px;
    border-bottom: 1px solid #eee;
}

li:last-child {
    border-bottom: none;
}
</style>