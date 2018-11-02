<template>
  <div class="first-higher">
    <div class="first-higher__sidebar">
      <sidebar />
    </div>
    <div class="first-higher__content">
      <images-header />
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
  import ImagesHeader from '~/components/first-higher/ImagesHeader.vue'
  import Sidebar from '~/components/first-higher/Sidebar.vue'
  import BseuSection from '~/components/first-higher/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/first-higher/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      BseuSection,
      SpecialtiesDataSection,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess
    }
  }
</script>
