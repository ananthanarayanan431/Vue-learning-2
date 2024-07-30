
<template>
    <header>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <input v-model="val" type="text" placeholder="Enter Something">
                <input v-model="document" type="text" placeholder="Nothing">
            </ul>
        </nav>
    </header>
</template>

<script setup>

import { ref } from 'vue';
import { watch } from 'vue';

const val = ref("Anantha")
const document = ref("nothing");

watch(val,()=>{
    console.log("Hello Anantha");
});

watch(document,(newValue,oldValue)=> {
    console.log("Changing ",oldValue,newValue);
});
</script>

<style scoped>
</style>