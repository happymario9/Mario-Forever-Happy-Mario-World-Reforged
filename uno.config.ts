import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  theme: {
    colors: { ink: '#173044', sky: '#2d90cf', grass: '#62b34a', tomato: '#ef5547', gold: '#f8c849', cream: '#fff8df', paper: '#fffdf2' },
    fontFamily: { sans: '"Trebuchet MS", "Microsoft YaHei", sans-serif', pixel: '"Courier New", "Microsoft YaHei", monospace' },
  },
})
