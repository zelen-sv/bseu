<template>
  <scrollactive class="sidebar" active-class="sidebar__link_active" :offset="100" :duration="800">
    <a class="sidebar__link scrollactive-item" href="#training">
      <div class="sidebar__icon">
        <svgicon icon="library" width="21" height="16"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.training-and-courses.sidebar.training") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#courses-russian">
      <div class="sidebar__icon">
        <svgicon icon="student" width="18" height="22"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.training-and-courses.sidebar.courses-russian") }}
      </div>
    </a>
  </scrollactive>
</template>

<script>
  import '@/components/icons/library.js'
  import '@/components/icons/student.js'

  export default {}
</script>
