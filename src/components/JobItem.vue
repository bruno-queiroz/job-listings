<script setup lang="ts">
import JobTag from './JobTag.vue';
</script>

<template>
  <article class="job-item-container">
    <div class="company-img">
        <img src="" alt="company image">
    </div>
    <div class="job-info">
        <div class="company-name">
            <strong>Photosnap</strong>
            <span class="new-job">NEW</span>
            <span class="featured-job">FEATURED</span>
        </div>

        <div class="job-title">
            <h2>Senior Frontend Developer</h2>
        </div>

        <div class="job-extra-info">
            1d ago ・ full time ・ USA only
        </div>
    </div>
    <div class="job-tags">
        <JobTag tag="Frontend"/>
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
  width: 100px;
  height: 100px;
  background-color: aquamarine;
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
