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
        <div class="mobile-navbar__menu-item">Подготовка и курсы</div>
        <div class="mobile-navbar__menu-item">Первое высшее</div>
        <div class="mobile-navbar__menu-item">Второе высшее</div>
        <div class="mobile-navbar__menu-item">Магистратура</div>
        <div class="mobile-navbar__menu-item">Аспирантура</div>
        <div class="mobile-navbar__menu-item">Об университете</div>
      </div>
      <button class="mobile-navbar__bid button button_bordered">Подача документов</button>
      <div class="mobile-navbar__languages">
        <div class="mobile-navbar__language-item circle-text-icon circle-text-icon_bordered">
          <div class="circle-text-icon__text">RU</div>
        </div>
        <div class="mobile-navbar__language-item circle-text-icon circle-text-icon_bordered">
          <div class="circle-text-icon__text">EN</div>
        </div>
        <div class="mobile-navbar__language-item circle-text-icon circle-text-icon_bordered">
          <div class="circle-text-icon__text">TK</div>
        </div>
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
    }
  }
}
</script>
