import { defineConfig, presetUno } from 'unocss'
import { getThemeColors } from './utils'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(vue|ts)($|\?)/]
    }
  },
  presets: [
    presetUno()
  ],
  theme: {
    colors: {
      ...getThemeColors()
    }
  },
  safelist: [...Array.from({ length: 10 }, (_, i) => `bg-primary-${i + 1}`)]
})
