import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno, toEscapedSelector } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup(), transformerDirective()],

  rules: [
    [/^fv-hide$/, ([, _], { rawSelector }) => {
      const selector = toEscapedSelector(rawSelector)
      return `
${selector}:focus-visible  {
  outline-offset: 0;
  outline-width: 0;
}
`
    }],
  ],

  shortcuts: [
    // common most used components
    {
      // utils
      'flex-x': 'flex items-center',
      'flex-xy': 'flex items-center justify-center',
      'flex-y': 'flex flex-col',
    },
    [/^hfw:(.*)$/, ([, c]: string[]) => `hover:(${c}) focus-within:(${c}) fv-hide transition-all`], // hover focus-within class and hide default behavior
    [/^wh-(.*)$/, ([, c]: string[]) => `w-${c} h-${c} aspect-1`], // wh-5

    /**
     * @example hf-blue-stale
     *
     * @deprecated use hfw:bg-primary
     */
    [/^hf-(.*)$/, ([, cls]: string[]) => `focus-within:${cls} hover:${cls}`],

    /**
     * @example transition-common-500
     */
    [/^transition-common-(\d+)$/, ([, duration]: string[]) => `transition-all duration-${duration || 300}`],

  ],

  theme: {
    colors: {
      dark: {
        DEFAULT: '#171C22',
      },
      primary: {
        DEFAULT: '#2343CE',
      },
      secondary: {
        DEFAULT: '#757B8A',
      },
    },
  },
})
