<script setup lang="ts">
import IconRemove from "./icons/IconRemove.vue"
defineProps<{tag: string}>()
</script>

<template>
  <div class="tag-container">
    <div class="tag-name">
        {{ tag }}
    </div>
    <button>
        <IconRemove/>
    </button>
  </div>
</template>

<style scoped>
  .tag-container{
    display: flex;
    font-weight: 500;
    color: hsl(180, 29%, 50%);
  }

  .tag-name{
    display: flex;
    align-items: center;
    padding: .35rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: hsl(180, 52%, 96%);
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: hsl(180, 29%, 50%);
    color: white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: .45rem;
  }
</style>