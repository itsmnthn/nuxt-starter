import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [presetUno()],

    shortcuts: {
      // common most used components
    },

    theme: {
        colors: {
            dark: {
                DEFAULT: '#171C22'
            },
            primary: {
                DEFAULT: '#2343CE',
                500: '#2343CE',
                600: '#0209A4'
            },
            secondary: {
                DEFAULT: '#757B8A'
            }
        }
    }
})
