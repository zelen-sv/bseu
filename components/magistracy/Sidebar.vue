<template>
  <scrollactive class="sidebar" active-class="sidebar__link_active" :offset="100" :duration="800">
    <a class="sidebar__link scrollactive-item" href="#bseu-education">
      <div class="sidebar__icon">
        <svgicon icon="library" width="21" height="16"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.magistracy.sidebar.bseu-education") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#specialties-list">
      <div class="sidebar__icon">
        <svgicon icon="student" width="18" height="22"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.magistracy.sidebar.specialties-list") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#admission-documents">
      <div class="sidebar__icon">
        <svgicon icon="cw" width="18" height="22"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.magistracy.sidebar.admission-documents") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#arriving-documents">
      <div class="sidebar__icon">
        <svgicon icon="plain" width="21" height="14"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.magistracy.sidebar.local-documents") }}
      </div>
    </a>
    <a class="sidebar__link scrollactive-item" href="#how-to-enter">
      <div class="sidebar__icon">
        <svgicon icon="question" width="20" height="20"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.magistracy.sidebar.admission") }}
      </div>
    </a>
  </scrollactive>
</template>

<script>
  import '@/components/icons/library.js'
  import '@/components/icons/student.js'
  import '@/components/icons/cw.js'
  import '@/components/icons/plain.js'
  import '@/components/icons/question.js'

  export default {}
</script>
