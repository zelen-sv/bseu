<template>
  <div class="mobile-navbar">
    <div class="mobile-navbar__header">
      <div class="mobile-navbar__logo-container">
        <logo />
      </div>
      <div class="mobile-navbar__hamburger" @click="toggleMobileMenu()">
        <hamburger :active="expanded_menu" />
      </div>
    </div>
    <div v-show="expanded_menu" class="mobile-navbar__content">
      <div class="mobile-navbar__menu">
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.prepare_courses") }}</div>
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.first_higher") }}</div>
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.second_higher") }}</div>
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.magistracy") }}</div>
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.graduate_school") }}</div>
        <div class="mobile-navbar__menu-item">{{ $t("components.navbar.about_university") }}</div>
      </div>
      <button class="mobile-navbar__bid button button_bordered">{{ $t("components.navbar.documents_button") }}</button>
      <div class="mobile-navbar__languages">
        <nuxt-link
          class="mobile-navbar__language-item circle-text-icon circle-text-icon_bordered"
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">
            <div class="circle-text-icon__text">{{ locale.name }}</div>
          </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from '~/components/Hamburger.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Hamburger, Logo
  },
  data () {
    return {
      expanded_menu: false
    }
  },
  watch: {
    expanded_menu (state) {
      let bodyClassList = document.body.classList
      state ? bodyClassList.add('modal-open') : bodyClassList.remove('modal-open')
    }
  },
  methods: {
    toggleMobileMenu () {
      this.expanded_menu = !this.expanded_menu
    }
  }
}
</script>
