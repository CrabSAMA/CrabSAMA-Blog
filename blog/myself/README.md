---
sidebar: false
pageInfo: false
comment: false
editLink: false
contributors: false
breadcrumb: false
lastUpdated: false
photoswipe: false
toc: false
containerClass: myself-container
---

<Timeline :data="timelineData" />

<script setup>
import Timeline from "@source/.vuepress/components/Timeline/Timeline.vue";
import timelineData from "@source/myself/data.json"
</script>
