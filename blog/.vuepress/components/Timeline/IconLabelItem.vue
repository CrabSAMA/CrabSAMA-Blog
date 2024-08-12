<template>
  <Badge :class="$style['icon-label-item']" type="note">
    <template v-if="hasIcon">
      <img
        height="16"
        width="16"
        style="cursor:none; pointer-events: none;"
        :src="`https://cdn.simpleicons.org/${label.replace(/\s/g, '').toLowerCase()}`"
      />
      <i style="margin: .25rem" :class="$style['divider']" />
    </template>
    <span>{{ text }}</span>
  </Badge>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string;
}

const props = defineProps<Props>();

const hasIcon = computed(() => !props.label.match(/^\!/));
const text = computed(() => hasIcon.value ? props.label : props.label.slice(1));
</script>

<style lang="scss" module>
.icon-label-item {
  margin: .25rem;
  background-color: #ebedf0 !important;
  color: #000;
  font-weight: bold;
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  height: 24px;
  span {
    text-transform: capitalize;
  }
}

.divider {
  border-right: 1px solid gray;
  height: 50%;
  width: 0;
}
</style>
