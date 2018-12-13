<template>
  <div class="language-box" @mouseover="show" @mouseleave="hide">
    <div class="language-box__icon circle-text-icon"
        :class="visible ? 'language-box__icon_active' : ''">
      <div class="circle-text-icon__text">{{ $i18n.locale }}</div>
    </div>
    <div v-show="visible" class="language-box__select-container">
      <div class="language-box__select">
        <div class="language-box__select-item" v-for="locale in $i18n.locales" :key="locale.id">
          <div class="language-box__select-icon">
            <img v-show="currentLocale(locale)" src="@/assets/images/ok.png" alt="selected">
          </div>
          <nuxt-link :to="switchLocalePath(locale.code)"
                     class="language-box__select-link"
                     :class="currentLocale(locale) ? 'language-box__select-link_active': ''">
            {{ locale.fullname }}
          </nuxt-link>
        </div>
        <div class="language-box__select-item">
          <div class="language-box__select-icon">
          </div>
          <a href="http://bseu.by/belarusian/" class="language-box__select-link" target="_blank">Belarus</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    methods: {
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
      },
      currentLocale (locale) {
        return locale.code == this.$i18n.locale
      }
    }
  }
</script>
