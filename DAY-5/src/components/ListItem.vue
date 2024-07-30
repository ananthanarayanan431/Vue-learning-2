

<template>
    <h2>{{ name }}</h2>
    <img class="image" :src="src" :alt="name">
</template>

<script setup>

const props=defineProps({
    name:String,
    src:String,
});
</script>

<style scoped>

.image {
  display: block;
  height: 200px;
  padding-bottom: 20px;
  padding-top: 10px;
}
</style>
