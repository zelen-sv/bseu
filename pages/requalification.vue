<template>
  <div class="requalification">
    <div class="requalification__sidebar">
      <sidebar />
    </div>
    <div class="requalification__content" id="requalification">
      <images-header />
      <section-requalification />
      <requalification-specialties-data />
      <admission-documents visaMode="requalification" />
      <arriving-documents />
      <admission-process visaMode="requalification" />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/requalification/index.scss";
</style>


<script>
  import ImagesHeader from '~/components/requalification/ImagesHeader.vue'
  import Sidebar from '~/components/requalification/Sidebar.vue'
  import SectionRequalification from '~/components/requalification/SectionRequalification.vue'
  import RequalificationSpecialtiesData from '~/components/requalification/RequalificationSpecialtiesData.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      SectionRequalification,
      RequalificationSpecialtiesData,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess
    }
  }
</script>
