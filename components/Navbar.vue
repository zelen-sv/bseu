<template>
  <div class="navbar">
    <nuxt-link to="/" tag="div" class="navbar__logo-container">
      <logo />
    </nuxt-link>
    <div class="navbar__menu">
      <nuxt-link to="/first-higher" tag="div" class="navbar__menu-item">
        {{ $t("components.navbar.prepare_courses") }}
      </nuxt-link>
      <div class="navbar__menu-item">{{ $t("components.navbar.first_higher") }}</div>
      <div class="navbar__menu-item">{{ $t("components.navbar.second_higher") }}</div>
      <div class="navbar__menu-item">{{ $t("components.navbar.magistracy") }}</div>
      <div class="navbar__menu-item">{{ $t("components.navbar.graduate_school") }}</div>
      <div class="navbar__menu-item">{{ $t("components.navbar.about_university") }}</div>
    </div>
    <div class="navbar__buttons">
      <div class="navbar__buttons-item navbar__buttons-item_blue navbar__buttons-item_icon">
      <div class="navbar__buttons-item-text">{{ $t("components.navbar.documents_button") }}</div>
      </div>
      <div class="navbar__buttons-item">
        <div v-for="locale in locales" :key="locale.id" class="navbar__buttons-language circle-text-icon ">
          <div @click="switchLocale(locale)" class="circle-text-icon__text">{{ locale }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    locales () {
      return this.$store.getters.allLocales
    },
  },
  methods: {
    switchLocale (locale) {
      this.$store.dispatch('setLocale', locale)
    }
  }
}
</script>
