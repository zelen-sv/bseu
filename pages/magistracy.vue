<template>
  <div class="magistracy">
    <div class="magistracy__sidebar">
      <sidebar />
    </div>
    <div class="magistracy__content">
      <images-header />
      <bseu-section />
      <specialties-data-section />
      <admission-documents page="magistracy" />
      <arriving-documents />
      <how-to-enter />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/magistracy/index.scss";
</style>


<script>
  import ImagesHeader from '~/components/magistracy/ImagesHeader.vue'
  import Sidebar from '~/components/magistracy/Sidebar.vue'
  import BseuSection from '~/components/magistracy/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/magistracy/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import HowToEnter from '~/components/magistracy/HowToEnter.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      BseuSection,
      SpecialtiesDataSection,
      HowToEnter,
      AdmissionDocuments,
      ArrivingDocuments
    }
  }
</script>
