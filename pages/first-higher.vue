<template>
  <div class="first-higher">
    <div class="first-higher__sidebar">
      <sidebar />
    </div>
    <div class="first-higher__content">
      <four-images-header page="firstHigher" />
      <bseu-section />
      <specialties-data-section />
      <admission-documents visaMode="firstHigher" />
      <arriving-documents />
      <admission-process visaMode="firstHigher" />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/first-higher/index.scss";
</style>


<script>
  import FourImagesHeader from '~/components/FourImagesHeader.vue'
  import Sidebar from '~/components/first-higher/Sidebar.vue'
  import BseuSection from '~/components/first-higher/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/first-higher/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'

  export default {
    components: {
      FourImagesHeader,
      Sidebar,
      BseuSection,
      SpecialtiesDataSection,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess
    },
    head: {
      title: 'Университет БГЭУ | Первое высшее',
      meta: [
        { hid: 'description', name: 'description', content: 'Выбери для себя образовательную программу высшего профессионального образования!' },
        { hid: 'keywords', name: 'keywords', content: 'поступить в бгэу, бгэу платное, экономика бгэу, специальности бгэу' }
      ]
    },
  }
</script>
