<template>
  <div class="home-header">
    <div class="home-header__text-container">
      <div class="home-header__text">{{ $t("pages.home.home-header.title") }}</div>
      <button class="button_application button">
        <svgicon icon="envelope" width="21" height="16" color="#fff" class="button_application__icon"></svgicon>
        Подача документов онлайн
      </button>
    </div>
  </div>
</template>


<script>
  import '@/components/icons/envelope.js'
</script>
