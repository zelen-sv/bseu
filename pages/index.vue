<template>
  <div class="home-page">
    <home-header class="home-page__header"/>
    <div class="home-page__content">
      <bseu-section class="home-page__bseu-section"/>
      <specialties-section class="home-page__specialties"/>
    </div>
    <select-admission class="home-page__select-admission"/>
    <div class="home-page__content">
      <faq-component class="home-page__faq-component"/>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/home/index.scss";
</style>

<script>
  import HomeHeader from '~/components/home/HomeHeader.vue'
  import BseuSection from '~/components/home/BseuSection.vue'
  import SpecialtiesSection from '~/components/home/SpecialtiesSection.vue'
  import SelectAdmission from '~/components/home/SelectAdmission.vue'
  import FaqComponent from '~/components/home/FaqComponent.vue'

  export default {
    components: {
      HomeHeader, BseuSection, SpecialtiesSection, SelectAdmission, FaqComponent
    },
    head: {
      title: 'Университет БГЭУ | Главная страница',
      meta: [
        { hid: 'description', name: 'description', content: 'Обучение в университете БГЭУ. Первое и второе высшее образование, подготовка к поступлению в вуз для иностранных абитуриентов.' },
        { hid: 'keywords', name: 'keywords', content: 'университет бгэу, обучение для иностранцев, специальности бгэу' }
      ]
    },
  }
</script>
