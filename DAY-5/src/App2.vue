<script setup>

import MyReactiveCompoents from './components/MyReactiveCompoents.vue';
import SlotCompoent from './components/SlotCompoent.vue';
import FallBackcompontnet from './components/FallBackcompontnet.vue';
import NameSlotCompontent from './components/NameSlotCompontent.vue';

import SchoolComponent from './components/SchoolComponent.vue';
import StudentCompontent from './components/StudentCompontent.vue';
import PractiseComponent from './components/PractiseComponent.vue';

const StudentName="Anantha Narayanan";
const StudentAge=20;
const StudentLocation=['Chennai','India'];

import { provide } from 'vue';

provide('friends', ['Alex', 'Jordan', 'HuXn', 'John'])

// Using Provide With Object
provide('games', {
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  }
})

// Using Provide With Array Of Objects
provide('moreGames', [
  {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  }
]);

</script>

<template>
  <MyReactiveCompoents></MyReactiveCompoents>
  <SlotCompoent>
    <h2>Anantha Narayanan</h2>
  </SlotCompoent>
  <FallBackcompontnet>
    <h2>Changing Fallback component</h2>
  </FallBackcompontnet>

  <NameSlotCompontent>
    <template v-slot:one>
      <div>
        <h2>Slot number 1</h2>
        <p>I'm assigning the content to the slot 1</p>
      </div>
    </template>

    <template #two>
      <div>
        <h2>Slot number 2</h2>
        <p>I'm assigning the content to the Slot 2</p>
      </div>
    </template>
    <hr>
    <h1>Trying the properties</h1>
  </NameSlotCompontent>
  <hr>
  <SchoolComponent :StudentName="StudentName" :StudentAge="StudentAge" :StudentLocation="StudentLocation"></SchoolComponent>
  <hr>
  <PractiseComponent></PractiseComponent>

</template>

<style scoped>

</style>