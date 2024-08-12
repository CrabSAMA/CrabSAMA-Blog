<template>
  <section>
    <div style="margin-top: 2rem;">
      <div class="container">
        <TimelineBlock
          v-for="date in sortedDates"
          :key="date"
          :date="date"
          :items="data?.events?.[date] || []"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import TimelineBlock from './TimelineBlock.vue';

type Event = {
  title: string;
  description: string;
  labels: string[];
};

type Events = {
  [date: string]: Event[];
};

type Data = {
  events: Events;
}

const props = defineProps<{
  data: Data;
}>()

const sortedDates = computed(() => {
  return Object.keys(props.data?.events || {})
    .slice()
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
});
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
