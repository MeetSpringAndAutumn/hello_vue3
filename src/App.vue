<template>
    <!-- <div>
        <h3 class="App">你好</h3>
    </div>
    <div class="navigation">
        <router-link to="/home" class="box" active-class="active" exact-active-class="exact-active">home</router-link>
        <router-link to="/news" class="box" active-class="active" exact-active-class="exact-active">news</router-link>
        <router-link to="/about" class="box" active-class="active" exact-active-class="exact-active">about</router-link>
    </div>
    <div class="show">
        <router-view></router-view>
    </div> -->
    <!-- <person /> -->
    <Count />
    <Lovetalk />
</template>
<script lang="ts">
import Person from './components/Person.vue'
import { RouterLink, RouterView } from 'vue-router'
import type { routes } from 'vue-router/auto-routes';
import Count from './components/Count.vue';
import Lovetalk from './components/Lovetalk.vue';
export default {
    name: 'App',
    components: {
        Person,
        Count,
        Lovetalk
    }
}
</script>

<style scoped>
.App {
    color: #ddd;
    box-shadow: 0 0 10px #ddd;
    border-radius: 10px;
    padding: 10px
}

.active {
    color: blue;
    text-decoration: underline;
}

.exact-active {
    font-weight: bold;
}

.box {
    background-color: #ddd;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>