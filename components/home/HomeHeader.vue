<template>
  <div class="home-header">
    <div class="home-header__text-container">
      <div class="home-header__text">{{ $t("pages.home.home-header.title") }}</div>
      <application-button />
    </div>
  </div>
</template>


<script>
  import ApplicationButton from '@/components/ApplicationButton.vue'

  export default {
    components: {
      ApplicationButton
    }
  }
</script>
