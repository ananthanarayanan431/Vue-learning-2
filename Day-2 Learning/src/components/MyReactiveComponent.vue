<script setup>
import { reactive } from 'vue';

const UserInfo = reactive({val: {Count: 0}, user:['Anantha','Narayanan']});

const ChangeValue=()=>{
    UserInfo.val.Count+=10;
};

const ChangeUsername=(name1,nam2)=>{
    UserInfo.user[0]=name1;
    UserInfo.user[1]=nam2;
}

const AddName=(name)=>{
    UserInfo.user.push(name)
}
</script>

<template>
    <div class="container">
        <h1>Count Value: {{ UserInfo.val.Count }}</h1>
        <h2>Number of users</h2>
        <ol>
            <li v-for="val in UserInfo.user" :key="val">{{ val }}</li>
        </ol>
        <div class="button-container">
            <h1>Button</h1>
            <button @click="ChangeValue">Add 10 Value</button>
            <button @click="ChangeUsername('Vishal','Kishore')">Change Name</button>
            <button @click="AddName('Anantha')">Append Name</button>
        </div>
    </div>
</template>

<style scoped>
.container {
  margin: 20px;
}

h1, h2 {
  margin: 20px 0;
}

h2 {
  width: 100%;
  display: block;
  padding: 10px;
  background-color: #f0f0f0;
  color: black;
}

ol {
  margin: 20px 0;
}

.button-container {
  margin-top: 20px;
}

button {
  margin-right: 10px; /* Adjust the value as needed */
}
</style>