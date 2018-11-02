<template>
  <div class="second-higher">
    <div class="second-higher__sidebar">
      <sidebar />
    </div>
    <div class="second-higher__content">
      <four-images-header page="secondHigher" />
      <bseu-section />
      <specialties-data-section />
      <admission-documents visaMode="secondHigher" />
      <arriving-documents />
      <admission-process visaMode="secondHigher"/>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/second-higher/index.scss";
</style>


<script>
  import FourImagesHeader from '~/components/FourImagesHeader.vue'
  import Sidebar from '~/components/second-higher/Sidebar.vue'
  import BseuSection from '~/components/second-higher/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/second-higher/SpecialtiesDataSection.vue'
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
    }
  }
</script>
