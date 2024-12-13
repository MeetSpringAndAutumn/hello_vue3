<template>
    <div class="Person">
        <div class="Person__name">{{ name }}</div>
        <div class="Person__age">{{ age }}</div>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <h1>car</h1>
        <div>{{ car }}</div>
        <button @click="changeCarPrice"> 更改价格</button>
        <h1>games</h1>
        <ul>
            <li v-for="game in games" :key="game.name">{{ game.name }}</li>
        </ul>
        <button @click="changeCar">更改Car</button>
        <button @click="changeFirstGameName">更改第一个游戏名字</button>
        <input type="text" v-model="first">
        <input type="text" v-model="last">
        {{ fullName }}
        {{ people1 }}
    </div>
</template>

<script lang="ts" setup name="Person111">
import { reactive, ref, computed } from 'vue';
import { type Person } from '@/types';

let people = reactive<Person[]>([
    { name: 'James', age: 18, gender: 'male' },
    { name: 'Lily', age: 16, gender: 'female' },
    { name: 'Lucy', age: 19, gender: 'female' }
]);
let people1: Person[] = [
    { name: 'James', age: 18, gender: 'male' },
    { name: 'Lily', age: 16, gender: 'female' },
    { name: 'Lucy', age: 19, gender: 'female' }
];

//数据
let name = ref('James');
let age = ref(18);

let car = reactive({ brand: 'BMW', model: 'X5', price: 10 })
let games = reactive([
    { name: 'LOL', price: 100 },
    { name: 'CSGO', price: 200 },
    { name: 'DNF', price: 300 }
])

let first = ref('Jack');
let last = ref('Brown');
let fullName = computed({
    get() {
        return first.value + ' ' + last.value;
    },
    set(value) {
        let names = value.split(' ');
        first.value = names[0];
        last.value = names[1];
    }
})
//方法
const changeName = () => {
    name.value = 'Jack';
}
const changeAge = () => {
    age.value = age.value + 1;

}

function changeCarPrice() {
    car.price += 10;
}

function changeCar() {
    Object.assign(car, { brand: 'Audi', model: 'A6', price: 20 })
}
function changeFirstGameName() {
    games[0].name = '王者荣耀';
}
</script>