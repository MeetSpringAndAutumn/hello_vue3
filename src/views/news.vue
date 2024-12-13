<template>
    <div>

        <p> here is news</p>

        <div v-for="(item) in newsList" :key="item.id">
            <router-link to="/news/detail">{{ item.title }}</router-link>
        </div>

    </div>

    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
const newsList = reactive([
    { id: 1, title: 'news1' },
    { id: 2, title: 'news2' },
    { id: 3, title: 'news3' },
    { id: 4, title: 'news4' }
])
</script>
