<template>
  <div class="magistracy">
    <div class="magistracy__sidebar">
      <sidebar />
    </div>
    <div class="magistracy__content">
      <four-images-header page="magistracy" />
      <bseu-section />
      <specialties-data-section />
      <admission-documents visaMode="magistracy" />
      <arriving-documents />
      <admission-process visaMode="magistracy" />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/magistracy/index.scss";
</style>


<script>
  import FourImagesHeader from '~/components/FourImagesHeader.vue'
  import Sidebar from '~/components/magistracy/Sidebar.vue'
  import BseuSection from '~/components/magistracy/BseuSection.vue'
  import SpecialtiesDataSection from '~/components/magistracy/SpecialtiesDataSection.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'

  export default {
    components: {
      FourImagesHeader,
      Sidebar,
      BseuSection,
      SpecialtiesDataSection,
      AdmissionProcess,
      AdmissionDocuments,
      ArrivingDocuments
    },
    head: {
      title: 'Университет БГЭУ | Магистратура',
      meta: [
        { hid: 'description', name: 'description', content: 'Выбери для себя магистерскую программу для обучения в университете БГЭУ' },
        { hid: 'keywords', name: 'keywords', content: 'магистратура бгэу, бгэу магистратура специальности, бгэу магистратура иностранцы' }

      ]
    },
  }
</script>
