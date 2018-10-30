<template>
  <div class="application-header">
    <div class="application-header__container">
      <div class="application-header__top">
        <img src="@/assets/images/logo-bseu-white.png" class="application-header__logo" alt="Logo">
        <div class="application-header__cross">
          <circle-cross @click.native="back"/>
        </div>
      </div>
      <div class="application-header__title">{{ $t("pages.bseu-application.application-header.title") }}</div>
      <div class="application-header__text">
        {{ $t("pages.bseu-application.application-header.text") }}
      </div>
      <div class="application-header__text application-header__text_warning">
        {{ $t("pages.bseu-application.application-header.warning") }}
      </div>
    </div>
  </div>
</template>

<script>
  import CircleCross from '~/components/CircleCross.vue'

  export default {
    components: {
      CircleCross
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
