<template>
  <aside class="vp-blog-info-wrapper">
    <div class="vp-blogger-info-inner">
      <BloggerInfo />
    </div>

    <div class="vp-blogger-info">
      <Heatmap />
    </div>

    <InfoList />
  </aside>
</template>

<script setup lang="ts">
import BloggerInfo from '@theme-hope/components/blog/BloggerInfo'
import InfoList from '@theme-hope/components/blog/InfoList'
import '@theme-hope/styles/blog/info-panel.scss'
import Heatmap from '../Heatmap/index.vue'
</script>

<style lang="scss" scoped>
.blog-clock-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vp-blogger-info-inner {
  position: relative;
}
</style>
