
<script setup>

import { reactive } from 'vue';
import { ref } from 'vue';

const isVisible = ref(true);
</script>

<template>
    <h1>Company Hiring Details</h1>
    <div v-show="isVisible">
        <p>
            I am looking to hire four individuals to analyze my company's financial report for a particular annual year and 
            suggest future directions to maximize production. I am also seeking task descriptions for Financial Analyst and 
            Senior Accountant roles. Currently, I am learning coding and have ChatGPT as my coding instructor. 
            Additionally, I aim to hire a person to write and extract content exclusively from LinkedIn to create job application posts, 
            as well as someone to write a blog based on media mention content. With multiple companies in various sectors, 
            I am in need of a tech team for frontend application development consisting of four members.
        </p>
    </div>
    <button @click="isVisible=!isVisible">Show Details</button>
</template>