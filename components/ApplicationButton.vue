<template>
  <nuxt-link :to="localePath('bseu-application')" tag="button" class="button_application button button_application_hovered">
    <svgicon icon="envelope" width="21" height="16" color="#fff" class="button_application__icon"></svgicon>
    {{ $t('components.application_button') }}
  </nuxt-link>
</template>

<script>
  import '@/components/icons/envelope.js'

  export default {}
</script>
