
<template>
    <div id="employee-table">
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="employee in data.emp" :key="employee.Id">
                    <td>{{ employee.Id }}</td>
                    <td>{{ employee.Name }}</td>
                    <td>{{ employee.Email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { inject } from 'vue';

const data = inject('FunData');

// console.log(data);
</script>


<style>
</style>