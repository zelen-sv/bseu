<template>
  <div class="bseu-section section">
    <div class="bseu-section__text">
      <h1 class="section__side-legend">{{ $t("pages.home.bseu-section.legend") }}</h1>
      <div class="bseu-section__description">
        <p v-html="$t('pages.home.bseu-section.description_p1')"></p>
        <p>{{ $t("pages.home.bseu-section.description_p2") }}</p>
        <p>{{ $t("pages.home.bseu-section.description_p3") }}</p>
      </div>
      <nuxt-link :to="localePath('about-university')" tag="p" class="bseu-section__details">
        <svgicon icon="univer" width="20" height="20" color="#1405F8"></svgicon>
        {{ $t("pages.home.bseu-section.details") }} <span class="bseu-section__details-arrow">></span>
      </nuxt-link>
    </div>
    <div class="bseu-section__image"></div>
  </div>
</template>

<script>
  import '@/components/icons/univer.js'

  export default {}
</script>
