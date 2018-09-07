module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bseu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bseu university website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    ['nuxt-i18n', {
      vueI18n: {
        silentTranslationWarn: true
      },
      defaultLocale: 'ru',
      locales: [
        {
          code: 'en',
          name: 'EN',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          code: 'ru',
          name: 'RU',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
        {
          code: 'tm',
          name: 'TM',
          iso: 'tm-TM',
          file: 'tm-TM.js'
        }
      ],
      lazy: true,
      langDir: 'locales/'
    }]
    ],
  /*
  ** Build configuration
  */
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

