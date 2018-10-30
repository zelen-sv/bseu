<template>
  <div class="application-modal">
    <div class="application-modal__icon">
      <svgicon icon="ok" width="60" height="48" class="button_application__icon"></svgicon>
    </div>
    <div class="application-modal__text application-modal__text_bold">
      {{ $t('components.form.application-modal.thanks') }}
    </div>
    <div class="application-modal__text">
      {{ $t('components.form.application-modal.manager') }}
    </div>
  </div>
</template>


<script>
  import '@/components/icons/ok.js'

  export default {}
</script>
