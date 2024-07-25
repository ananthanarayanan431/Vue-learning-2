
<script setup>

defineProps(['StudentName','StudentAge','StudentLocation']);

</script>

<template>
    <h1>Student Details</h1>
    <div>
        <p>{{ StudentName }}</p>
        <p>{{ StudentAge }}</p>
        <p>{{ StudentLocation }}</p>
    </div>
</template>