<template>
    <div>

        <p> here is news</p>
        <ul>
            <li v-for="(item) in newsList" :key="item.id">
                <button @click="showNews(item)">点我看详情</button>
                <router-link :to="{
                    // path: '/news/detail',
                    name: 'detail',
                    query: { title: item.title }
                }
                    ">
                    {{ item.title }}</router-link>
            </li>
        </ul>


    </div>

    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
// import router from '@/router';
import { reactive } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router';
const newsList = reactive([
    { id: 1, title: 'news1' },
    { id: 2, title: 'news2' },
    { id: 3, title: 'news3' },
    { id: 4, title: 'news4' }
])
const router = useRouter();
interface news {
    id: number;
    title: string;
}
const showNews = (news: news) => {
    router.replace({
        name: 'detail',
        query: {
            id: news.id,
            title: news.title
        }
    })
}
</script>
