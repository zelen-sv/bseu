const nodeExternals = require('webpack-node-externals');
require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Университет БГЭУ | Главная страница',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:title', content: 'Университет БГЭУ' },
      { name: 'og:description', content: 'Обучение в университете БГЭУ. Первое и второе высшее образование, подготовка к поступлению в вуз для иностранных абитуриентов.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://inter.bseu.by' },
      { name: 'og:image', content: 'https://inter.bseu.by/og-logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//code.tidio.co/n5ooho9tb2vi2jp1e4no2myjvswjag0k.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['nuxt-sass-resources-loader', [
        '@/assets/scss/variables/index.scss',
        '@/assets/scss/common/index.scss',
    ]],
    '@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/sitemap',
    ['@nuxtjs/yandex-metrika',
      {
        id: '51568322',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-131004298-1'
    }],
    ['nuxt-i18n', {
      vueI18n: {
        silentTranslationWarn: true
      },
      defaultLocale: 'ru',
      locales: [
        {
          code: 'en',
          name: 'EN',
          fullname: 'English',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          code: 'ru',
          name: 'RU',
          fullname: 'Русский',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
        {
          code: 'tm',
          name: 'TM',
          fullname: 'Türkmen',
          iso: 'tm-TM',
          file: 'tm-TM.js'
        }
      ],
      lazy: true,
      langDir: 'locales/'
    }]
  ],
  plugins: [
    '~plugins/vue-scrollto', '~plugins/vue-svgicon', '~plugins/filters.js',
    { src: '~plugins/v-viewer.js', ssr: false },
    { src: '~plugins/vue-tel-input.js', ssr: false },
    { src: '~plugins/v-select.js', ssr: false },
    { src: '~plugins/v-scroll-lock.js', ssr: false },
    { src: '~plugins/vue-scrollactive.js', ssr: false },
    { src: '~plugins/tidio.js', ssr: false },
  ],
  axios: {
    baseURL: process.env.API_LINK ? process.env.API_LINK : '/api'
  },
  sitemap: {
    generate: true,
    exclude: [
      '/admin/**'
    ]
  },
  generate: {
      fallback: "404.html"
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

