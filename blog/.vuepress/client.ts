import { defineClientConfig } from 'vuepress/client'
import 'uno.css'
import HeatmapLayout from './layout/HeatmapLayout/index.vue'

export default defineClientConfig({
  layouts: {
    HeatmapLayout
  }
})