<script setup lang="ts">

defineProps<{
    tag: string
    addTagToFilter: (tag: string) => void;
}>()
</script>

<template>
    <button class="tag" @click="addTagToFilter(tag)">
        {{tag}}
    </button>
</template>

<style scoped>
.tag{
    padding: .5rem;
    border-radius: 5px;
    color: hsl(180, 29%, 50%);
    background-color: hsl(180, 52%, 96%);
    border: none;
    cursor: pointer;
}

.tag:hover{
    background-color: hsl(180, 29%, 50%);
    color: white;
}
</style>