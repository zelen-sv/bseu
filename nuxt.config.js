const nodeExternals = require('webpack-node-externals');

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
    }],

    ['@nuxtjs/apollo']
  ],
  plugins: [
    '~plugins/vue-scrollto', '~plugins/vue-svgicon', '~plugins/filters.js'
  ],
  apollo: {
    clientConfigs: {
      default: '~/plugins/default-apollo-config.js'
    }
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

