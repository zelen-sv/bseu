<template>
  <scrollactive class="sidebar" active-class="sidebar__link_active" :offset="100" :duration="800">
    <a class="sidebar__link scrollactive-item" href="#bseu-section">
      <div class="sidebar__icon">
        <svgicon icon="library" width="21" height="16"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.about-university.sidebar.bseu-section") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#hostel-section">
      <div class="sidebar__icon">
        <svgicon icon="sidebar-hostel" width="21" height="17"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.about-university.sidebar.hostel-section") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#sport-center-section">
      <div class="sidebar__icon">
        <svgicon icon="sport" width="21" height="21"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.about-university.sidebar.sport-center-section") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#student-life-section">
      <div class="sidebar__icon">
        <svgicon icon="students-life" width="21" height="23"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.about-university.sidebar.student-life-section") }}
      </div>
    </a>
  </scrollactive>
</template>

<script>
  import '@/components/icons/library.js'
  import '@/components/icons/sidebar-hostel.js'
  import '@/components/icons/sport.js'
  import '@/components/icons/students-life.js'

  export default {}
</script>
