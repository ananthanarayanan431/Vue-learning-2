
<template>
  <h1>Hello World</h1>
  <Header></Header>
  <div v-if="value">
    <!-- <pre>{{ JSON.stringify(value,null,2) }}</pre> -->
    <ol>
      <!-- <li v-for="item in value">
        <strong class="name">{{ item.full_name }}</strong>
        <img class="image" :src="item.image" :alt="item.full_name">
      </li> -->
      <li v-for="item in value">
        <ListItem :name="item.full_name" :src="item.image"></ListItem>
      </li>
    </ol>
  </div>
</template>

<script setup>

import { onMounted, reactive } from 'vue';
import { ref } from 'vue';

import ListItem from './components/ListItem.vue';
import Header from './components/Header.vue';

const value = ref(null);

const OFFICE="https://platform.buildwithhussain.dev/api/method/get-office"

onMounted(()=>{
  fetch(OFFICE).then((data)=>data.json()).then((data)=>{
  // console.log(data);
  value.value=data.data;
});
});

</script>

<style scoped>

.name {
  display: block;
}


</style>