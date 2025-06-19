import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import { getThemeColor, addCssVarsToHtml } from '../../../utils/theme'
import { useDarkMode } from '@theme-hope/index'
import { useMutationObserver } from '@vueuse/core'

export default defineClientConfig({
  setup() {
    const { isDarkMode } = useDarkMode()
    const themeColor = ref('')
    const el = ref<HTMLHtmlElement | null>(null)
    const { stop } = useMutationObserver(
      el,
      (mutations) => {
        const mutation = mutations[0]
        if (mutation) {
          themeColor.value = getThemeColor()
        }
      },
      {
        attributes: true,
        attributeFilter: ['class']
      }
    )
    onMounted(() => {
      el.value = document.querySelector('html')
      nextTick(() => {
        themeColor.value = getThemeColor()
      })
      watch([themeColor, isDarkMode], () => {
        addCssVarsToHtml(themeColor.value, isDarkMode.value)
      })
    })
    onBeforeUnmount(() => {
      stop && stop()
    })
  }
})
