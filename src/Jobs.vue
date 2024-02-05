<script setup lang="ts">
import { ref } from 'vue';
import JobItem from './components/JobItem.vue';
import { getJobs } from './utils/getJobs';

const jobs = await getJobs()

const filterRequirements = ref<string[]>([])

const addTagToFilter = (tag: string) => {
    filterRequirements.value.push(tag)
}
</script>

<template>
    <header>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="156"><defs><path id="a" d="M0 0h1440v156H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use xlink:href="#a"/><g mask="url(#b)" fill="#63BABA"><path d="M495.73 563.419c-51.439-48.795-53.583-130.05-4.788-181.489a128.377 128.377 0 0 1 4.789-4.789l418.16-396.66c55.045-52.215 141.329-52.215 196.374 0 50.418 47.825 53.478 126.835 7.634 178.39l188.06-178.39c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.049 4.789 181.488a128.377 128.377 0 0 1-4.789 4.789l-418.158 396.658c-55.045 52.215-141.329 52.215-196.374 0-50.418-47.825-53.478-126.835-7.634-178.39L692.104 563.42c-55.045 52.215-141.328 52.215-196.373 0ZM360.464 45.523c-51.44-48.794-53.583-130.05-4.789-181.488a128.377 128.377 0 0 1 4.789-4.79l418.163-396.663c55.046-52.215 141.33-52.215 196.374 0 51.44 48.794 53.583 130.05 4.789 181.488a128.376 128.376 0 0 1-4.789 4.79L556.837 45.522c-55.045 52.215-141.328 52.215-196.373 0Zm-468.795 71.832c-51.439-48.795-53.583-130.05-4.789-181.489a128.377 128.377 0 0 1 4.79-4.788l418.16-396.661c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.05 4.79 181.488a128.378 128.378 0 0 1-4.79 4.789l-418.16 396.66c-55.045 52.216-141.329 52.216-196.374 0Z"/></g></g></svg>
    </header>
    <div class="content-container">
        <div class="filter">
            <div v-for="filterRequirement in filterRequirements">
                <span>{{ filterRequirement }}</span>
            </div>
        </div>
        <main>
            <ul>
                <li v-for="job in jobs">
                    <JobItem v-bind="job" :addTagToFilter="addTagToFilter"/>
                </li>
            </ul>
        </main>
    </div>
</template>

<style scoped>
header{
  background-color: hsl(180, 29%, 50%);
  width: 100%;
  height: 156px;
}

main{
  padding: 1rem;;
}

.content-container{
    position: relative;
}

.filter{
    display: flex;
    gap: .5rem;
    background-color: white;
    box-shadow: 7px 9px 16px -2px rgba(0,0,0,0.15);    
    border-radius: 5px;
    width: calc(85% - 1.50rem);
    padding: 1rem;
    margin-inline: auto;
}
</style>