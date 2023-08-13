// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/global.css'],
  modules: [
    '@nuxt/image',
  ],
  devtools: {
    enabled: true
  },
  typescript: {
    strict: true
  },
  image: {
    quality: 80,
    format: ['webp'],
  },
  alias: {
    assets: "/<rootDir>/assets",
  }
})
