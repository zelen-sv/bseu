<template>
  <div class="navbar">
    <nuxt-link to="/" tag="div" class="navbar__logo-container">
      <logo />
    </nuxt-link>
    <div class="navbar__menu">
      <nuxt-link to="/courses" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.prepare-courses") }}
      </nuxt-link>
      <nuxt-link to="/first-higher" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.first-higher") }}
      </nuxt-link>
      <nuxt-link to="/second-higher" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.second-higher") }}
      </nuxt-link>
      <nuxt-link to="/magistracy" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.magistracy") }}
      </nuxt-link>
      <nuxt-link to="/requalification" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.requalification") }}
      </nuxt-link>
      <nuxt-link to="/about-university" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.about-university") }}
      </nuxt-link>
    </div>
    <div class="navbar__buttons">
      <div class="navbar__buttons-item navbar__buttons-item_blue">
        <div class="navbar__buttons-item_icon">
          <svgicon icon="envelope" width="21" height="16" color="#1405F8"></svgicon>
        </div>
        <div class="navbar__buttons-item-text">
          {{ $t("components.navbar.documents-button") }}
        </div>
      </div>
      <div class="navbar__buttons-item">
        <language-box />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LanguageBox from '~/components/LanguageBox.vue'
import '@/components/icons/envelope.js'

export default {
  components: {
    Logo, LanguageBox
  }
}
</script>
