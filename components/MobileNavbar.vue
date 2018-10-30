<template>
  <div class="mobile-navbar" v-scroll-lock="expanded_menu">
    <div class="mobile-navbar__header">
      <div class="mobile-navbar__logo-container">
        <nuxt-link v-on:click.native="closeMobileMenu()" :to="localePath('index')" tag="div" class="mobile-navbar__menu-item">
          <logo />
        </nuxt-link>
      </div>
      <div class="mobile-navbar__hamburger" @click="toggleMobileMenu()">
        <hamburger :active="expanded_menu" />
      </div>
    </div>
    <div v-show="expanded_menu" class="mobile-navbar__content">
      <div class="mobile-navbar__menu">
          <nuxt-link :to="localePath('training-and-courses')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.prepare-courses") }}
          </nuxt-link>
          <nuxt-link :to="localePath('first-higher')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.first-higher") }}
          </nuxt-link>
          <nuxt-link :to="localePath('second-higher')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.second-higher") }}
          </nuxt-link>
          <nuxt-link :to="localePath('magistracy')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.magistracy") }}
          </nuxt-link>
          <nuxt-link :to="localePath('graduate-school')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.prepare-courses") }}
          </nuxt-link>
          <nuxt-link :to="localePath('about-university')" v-on:click.native="toggleMobileMenu()" tag="div" class="mobile-navbar__menu-item">
            {{ $t("components.navbar.about-university") }}
          </nuxt-link>
      </div>
      <nuxt-link :to="localePath('bseu-application')" tag="div" class="mobile-navbar__bid">
        <div class="mobile-navbar__bid-icon">
          <svgicon icon="envelope" width="21" height="16" color="#1405F8"></svgicon>
        </div>
        <div class="mobile-navbar__bid-text">
          {{ $t("components.navbar.documents-button") }}
        </div>
      </nuxt-link>
      <div class="mobile-navbar__languages">
        <nuxt-link
          class="mobile-navbar__language-item circle-text-icon"
          v-on:click.native="toggleMobileMenu()"
          :class="locale.code == $i18n.locale ? 'mobile-navbar__language-item_active' : ''"
          v-for="locale in $i18n.locales"
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
  methods: {
    toggleMobileMenu () {
      this.expanded_menu = !this.expanded_menu
    },
    closeMobileMenu () {
      this.expanded_menu = false
    }
  }
}
</script>
