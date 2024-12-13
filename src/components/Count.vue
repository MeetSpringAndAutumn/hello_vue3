<template>
    <div class="count">
        <h2>当前求和为: {{ useCountStore().sum }}</h2>
        <select v-model.number="selectedNumber">
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
        <button @click="add">add</button>
        <button @click="subtract">subtract</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref, watch } from 'vue';
import { useCountStore } from '@/store/count'

const options = ['1', '2', '3', '4', '5'];
const selectedNumber = ref('1')

// watch(selectedNumber, (newVal) => {
//     useCountStore().sum = parseInt(newVal)
// })

function add() {
    // useCountStore().sum += parseInt(selectedNumber.value)
    //
    // useCountStore().$patch({
    //     sum: useCountStore().sum + parseInt(selectedNumber.value)
    // })
    useCountStore().increment(parseInt(selectedNumber.value))
}
function subtract() {
    // useCountStore().sum -= parseInt(selectedNumber.value)
    useCountStore().$patch({
        sum: useCountStore().sum - parseInt(selectedNumber.value)
    })
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>