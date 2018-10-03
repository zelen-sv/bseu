<template>
  <div class="second-higher">
    <div class="second-higher__sidebar">
      <sidebar />
    </div>
    <div class="second-higher__content">
      <images-header />
      <bseu-section />
      <specialties-data-section />
      <admission-documents />
      <arriving-documents />
      <how-to-enter />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/second-higher/index.scss";
</style>


<script>
  import ImagesHeader from '~/components/second-higher/ImagesHeader.vue'
  import Sidebar from '~/components/second-higher/Sidebar.vue'
  import BseuSection from '~/components/second-higher/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/second-higher/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/second-higher/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/second-higher/ArrivingDocuments.vue'
  import HowToEnter from '~/components/second-higher/HowToEnter.vue'

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
