<script setup>
import { reactive } from 'vue';

const data = reactive({ name: '', email: '', password: '' });
</script>

<template>
  <h1>Submit your Data!</h1>
  <form @submit.prevent="alert('Form Data')" class="form-container">
    <div class="input-group">
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your Name " v-model="data.name">
    </div>
    <div class="input-group">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter Your Email " v-model="data.email">
    </div>
    <div class="input-group">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your Password " v-model="data.password">
    </div>
    <button type="submit">Submit</button>
  </form>

  <div class="data-container">
    <p>{{ data.name }}</p>
    <p>{{ data.email }}</p>
    <p>{{ data.password }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.input-group label {
  min-width: 100px;
}

.data-container {
  margin: 20px;
}
</style>
