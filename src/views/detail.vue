<template>
    <div>
        <img src="https://th.bing.com/th/id/OIP.ZWKw0wH7U1op_mEaLGD03gHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7" alt="">
        <p>{{ title }}</p>
    </div>
</template>

<script setup lang="ts" name="Detail">
// import { toRefs } from 'vue'
// import { useRoute } from 'vue-router'
// const route = useRoute()
// const { query } = toRefs(route)
defineProps(['title'])
</script>