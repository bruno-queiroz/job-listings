<script setup lang="ts">
defineProps<{
    tag: string
}>()
</script>

<template>
    <div class="tag">
        {{tag}}
    </div>
</template>

<style scoped>
.tag{
    padding: .5rem;
    border-radius: 5px;
    color: hsl(180, 29%, 50%);
    background-color: hsl(180, 52%, 96%);
}
</style>