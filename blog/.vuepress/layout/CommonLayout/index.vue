<template>
  <BlogMainLayout>
    <div class="vp-page vp-blog">
      <div class="blog-page-wrapper">
        <main class="vp-blog-main" id="main-content">
          <slot></slot>
        </main>
        <InfoPanel />
      </div>
    </div>
  </BlogMainLayout>
</template>

<script lang="ts" setup>
import BlogMainLayout from '@theme-hope/components/blog/BlogMainLayout'
import InfoPanel from '@theme-hope/components/blog/InfoPanel'
</script>
