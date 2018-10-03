<template>
  <div class="first-higher">
    <div class="first-higher__sidebar">
      <sidebar />
    </div>
    <div class="first-higher__content">
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
  @import "@/assets/scss/pages/first-higher/index.scss";
</style>


<script>
  import ImagesHeader from '~/components/first-higher/ImagesHeader.vue'
  import Sidebar from '~/components/first-higher/Sidebar.vue'
  import BseuSection from '~/components/first-higher/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/first-higher/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/first-higher/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/first-higher/ArrivingDocuments.vue'
  import HowToEnter from '~/components/first-higher/HowToEnter.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      BseuSection,
      SpecialtiesDataSection,
      AdmissionDocuments,
      ArrivingDocuments,
      HowToEnter
    }
  }
</script>
