
<script setup>

defineProps(['StudentName','StudentAge','StudentLocation']);
import StudentCompontent from './StudentCompontent.vue';

</script>

<template>
    <h1>School Element</h1>
    <StudentCompontent :StudentName="StudentName" :StudentAge="StudentAge" :StudentLocation="StudentLocation"></StudentCompontent>
    
</template>