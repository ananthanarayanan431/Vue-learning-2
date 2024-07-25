
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';

let friends=reactive([ref('Anantha'),ref('Narayanan'),ref('R')]);

</script>

<template>
    <div class="friends-container">
        <h1>Make friends!</h1>
        <button @click="friends[0]='Done'">{{ friends[0] }}</button>
        <button @click="friends[1]='Done'">{{ friends[1] }}</button>
        <button @click="friends[2]='Done'">{{ friends[2] }}</button>
    </div>
</template>

<style scoped>

.friends-container {
    margin: 20px;
}

button {
    margin-right: 10px;
}
</style>