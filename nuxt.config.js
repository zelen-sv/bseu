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
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n']
  },
  plugins: ['~/plugins/i18n.js'],
  build: {
    /*
    ** Run ESLint on save
    */
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

