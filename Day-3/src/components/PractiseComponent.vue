
<script setup>

import { inject } from 'vue';

const friendsList = inject('friends')
const games = inject('games')
const moreGames = inject('moreGames')

</script>

<template>
    <h1>Injecting Array Elements & Values</h1>
    <ul>
        <li v-for="(val,index) in friendsList" :key="val">{{ val }}</li>
    </ul>
    <hr>
    <h1>Injecting Games objects & Element</h1>
    <ol>
        <li v-for="(val,index) in games">{{ val }}</li>
    </ol>
    <hr>
    <h1>Injecting Array of Objects</h1>
    <ul v-for="({title,genre,platform,releaseDate},i) in moreGames">
        <li>{{ title }}</li>
        <li>{{ genre }}</li>
        <li>{{ platform }}</li>
        <li>{{ releaseDate }}</li>
    </ul>
</template>