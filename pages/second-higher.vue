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
    },
    head: {
      title: 'Университет БГЭУ | Второе высшее',
      meta: [
        { hid: 'description', name: 'description', content: 'Выбери для себя образовательную программу второго высшего профессионального образования!' },
        { hid: 'keywords', name: 'keywords', content: 'бгэу второе высшее образование, бгэу 2 высшее образование, бгэу второе высшее образование 2018, бгэу второе высшее образование специальности' }
      ]
    },
  }
</script>
