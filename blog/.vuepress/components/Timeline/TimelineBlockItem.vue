<template>
  <div class="card" :class="$style['timeline-block-content-item']">
    <div class="card__header">
      <h4>{{ data.title }}</h4>
    </div>
    <div class="card__body">
      <p>{{ data.description }}</p>
    </div>
    <div v-if="data.labels?.length" class="card__footer" :class="$style['icon-label-list']">
      <IconLabelItem
        v-for="label in data.labels"
        :key="label"
        :label="label"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLabelItem from './IconLabelItem.vue'; // 假设你有一个类似的子组件

interface EventData {
  title: string;
  description: string;
  labels?: string[];
}

interface Props {
  data: EventData;
}

defineProps<Props>();
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: calc(0.4rem * 2);
  box-shadow: 0 1px 2px 0 #0000001a;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.card {
  background-color: #fff;;
  border-radius: calc(0.4rem * 2);
  box-shadow: 0 1px 2px 0 #0000001a;
  display: flex;
  flex-direction: column;
  overflow: hidden
}

.card__body,.card__footer,.card__header {
  padding: 1rem 1rem
}

.card__body:not(:last-child),.card__footer:not(:last-child),.card__header:not(:last-child) {
    padding-bottom: 0
}

.card__body>:last-child,.card__footer>:last-child,.card__header>:last-child {
    margin-bottom: 0
}

.card__footer {
    margin-top: auto
}
</style>

<style module>
.timeline-block-content-item {
  margin-top: 1rem;
}

.icon-label-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.icon-label-list > .icon-label-item {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
}
.icon-label-list > .icon-label-item > .divider {
  height: 50%;
  width: 0;
  border-right: 1px solid gray;
}
.icon-label-list > .icon-label-item > span {
  text-transform: capitalize;
}
</style>
