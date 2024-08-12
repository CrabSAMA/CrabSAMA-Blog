<template>
  <div :class="$style['timeline-block']">
    <i :class="$style['timeline-block-line']" />
    <div :class="$style['timeline-block-content']">
      <p :class="$style['title']">{{ year }}.{{ month }}</p>
      <TimelineBlockItem
        v-for="(item, index) in items"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TimelineBlockItem from './TimelineBlockItem.vue'; // 假设你有一个类似的子组件

interface EventData {
  // 根据你的实际数据结构定义
  title: string;
  description: string;
}

interface Props {
  date: string;
  items: EventData[];
}

const props = defineProps<Props>();

const year = computed(() => new Date(props.date).getFullYear());
const month = computed(() => String(new Date(props.date).getMonth() + 1).padStart(2, '0'));
</script>

<style lang="scss" module>
.timeline-block {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  &:first-child {
    .timeline-block-content {
      padding-top: 0 !important;
      margin-top: -0.5rem;
    }
  }
  .timeline-block-content {
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    width: 0;
    .title {
      line-height: 1.25;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--theme-color);
      position: relative;
      padding-top: 0 !important;
      margin-top: 0 !important;
      margin-bottom: 1rem;
      &::before {
        background-color: var(--theme-color);
        border-radius: 50%;
        content: " ";
        height: 1rem;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translate(-2.625rem, -50%) rotate(45deg);
        width: 1rem;
      }
    }
  }

  .timeline-block-line {
    background-color: var(--theme-color);
    flex-shrink: 0;
    width: .25rem;
    margin-right: 2rem;
  }
}

</style>
