<template>
  <div class="about-university">
    <div class="about-university__sidebar">
      <sidebar />
    </div>
    <div class="about-university__content">
      <tinted-header />
      <bseu-section />
      <hostel-section />
      <sport-center-section />
      <student-life-section />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/about-university/index.scss";
</style>

<script>
  import TintedHeader from '~/components/about-university/TintedHeader.vue'
  import Sidebar from '~/components/about-university/Sidebar.vue'
  import BseuSection from '~/components/about-university/BseuSection.vue'
  import HostelSection from '~/components/about-university/HostelSection.vue'
  import SportCenterSection from '~/components/about-university/SportCenterSection.vue'
  import StudentLifeSection from '~/components/about-university/StudentLifeSection.vue'

  export default {
    components: {
      TintedHeader,
      Sidebar,
      BseuSection,
      HostelSection,
      SportCenterSection,
      StudentLifeSection
    },
    head: {
      title: 'Университет БГЭУ | Об университете',
      meta: [
        { hid: 'description', name: 'description', content: 'Изучите информацию об университете БГЭУ.  Преимущества обучения, общежитие, спорткомплекс, студенческий досуг в ведущем вузе страны.' },
        { hid: 'keywords', name: 'keywords', content: 'университет бгэу, условия обучения, наличие общежития, спорткомплекс, студенческий досуг' }
      ]
    },
  }
</script>
