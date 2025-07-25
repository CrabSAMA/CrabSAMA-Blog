<template>
  <div class="heatmap-layout">
    <CommonLayout>
      <section class="py-4 text-xl font-bold">
        {{ queryDate }}
      </section>
      <ArticleList :items="items" />
    </CommonLayout>
  </div>
</template>

<script lang="ts" setup>
import CommonLayout from '../CommonLayout/index.vue'
import ArticleList from '@theme-hope/components/blog/ArticleList'
import { useArticles } from '@theme-hope/composables/blog/useArticles'
import { usePageData } from '@vuepress/client'
import { watch } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const articles = useArticles()
const page = usePageData()
const queryDate = computed(() => route.query.date as string)
const items = computed(() => {
  if (!queryDate.value) return articles.value.items
  if (new Date(queryDate.value).toString() === 'Invalid Date') return []
  const queryYear = new Date(queryDate.value).getFullYear()
  const queryMonth = new Date(queryDate.value).getMonth()
  return articles.value.items.filter((item) => {
    const date = new Date(item.info.date!)
    return date.getFullYear() === queryYear && date.getMonth() === queryMonth
  })
})

watch(
  queryDate,
  () => {
    const description = page.value.frontmatter.description!
    page.value.title = queryDate.value
      ? `${description} ${queryDate.value}`
      : description
  },
  { immediate: true }
)
</script>

<style lang="scss">
.heatmap-layout {
  .vp-article-list {
    position: relative;
    .empty-icon {
      max-width: 50%;
      position: absolute;
      left: 50%;
      top: 20vh;
      transform: translateX(-50%);
    }
  }
}
</style>
