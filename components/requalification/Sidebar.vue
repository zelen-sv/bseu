<template>
  <scrollactive class="sidebar" active-class="sidebar__link_active" :offset="100" :duration="800">
    <a class="sidebar__link scrollactive-item" href="#requalification">
      <div class="sidebar__icon">
        <svgicon icon="retraining" width="14" height="16"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.requalification.sidebar.requalification") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#training">
      <div class="sidebar__icon">
        <svgicon icon="rising-bar-arrow" width="21" height="21"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.requalification.sidebar.training") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#internship">
      <div class="sidebar__icon">
        <svgicon icon="handshake" width="21" height="21"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.requalification.sidebar.internship") }}
      </div>
    </a>
  </scrollactive>
</template>

<script>
  import '@/components/icons/retraining.js'
  import '@/components/icons/handshake.js'
  import '@/components/icons/rising-bar-arrow.js'

  export default {}
</script>
