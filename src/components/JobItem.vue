<script setup lang="ts">
import JobTag from './JobTag.vue';
import type { Job } from '@/utils/getJobs';
defineProps<Job & {addTagToFilter: (tag: string) => void}>()
</script>

<template>
  <article class="job-item-container">
    <div class="company-img">
        <img :src="logo" alt="company image">
    </div>
    <div class="job-info">
        <div class="company-name">
            <strong>{{ company }}</strong>
            <span v-if="new" class="new-job">NEW</span>
            <span v-if="featured" class="featured-job">FEATURED</span>
        </div>

        <div class="job-title">
            <h2>{{ position }}</h2>
        </div>

        <div class="job-extra-info">
            {{ postedAt }} ・ {{ contract }} ・ {{ location }}
        </div>
    </div>
    <div class="job-tags">
        <div v-for="requirement in [role, level, ...languages, ...tools]">
          <JobTag :tag="requirement" :addTagToFilter="addTagToFilter"/>
        </div>
    </div>
  </article>
</template>

<style scoped>
.job-item-container{
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 7px 9px 16px -2px rgba(0,0,0,0.15);
}

.company-img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 1rem;
  height: 100px;
  border-radius: 100%;
}

.company-name{
  display: flex;
  align-items: center;
  gap: .25rem;
}

.company-name strong{
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  margin-right: .5rem;
}

.job-extra-info{
  color: hsl(180, 8%, 52%);
  font-weight: 500;
}

.job-tags{
  display: flex;
  align-items: center;
  justify-content: end;
  gap: .5rem;
  flex: 1;
}

.job-title h2{
  color: hsl(180, 14%, 20%);
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: .75rem;
  margin-bottom: .75rem;
}

.new-job, .featured-job{
  display: flex;
  font-weight: 500;
  font-size: .85rem;
  align-items: center;
  border-radius: 100vh;
  color: white;
  padding: .2rem .5rem;
}

.new-job{
  background-color: hsl(180, 29%, 50%);
}
.featured-job{
  background-color: hsl(180, 14%, 20%);
}
</style>
