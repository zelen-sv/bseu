<template>
  <div class="requalification">
    <div class="requalification__sidebar">
      <sidebar />
    </div>
    <div class="requalification__content" id="requalification">
      <div id="requalification">
        <four-images-header page="requalification" />
        <section-requalification />
        <requalification-specialties-data />
        <admission-documents visaMode="requalification" />
        <arriving-documents />
        <admission-process visaMode="requalification" />
      </div>
      <div id="refresher-training">
        <four-images-header page="refresherTraining" />
        <section-refresher-training />
      </div>
      <div id="internship">
        <four-images-header page="internship" />
        <section-internship />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/requalification/index.scss";
</style>


<script>
  import FourImagesHeader from '~/components/FourImagesHeader.vue'
  import Sidebar from '~/components/requalification/Sidebar.vue'
  import SectionRequalification from '~/components/requalification/SectionRequalification.vue'
  import RequalificationSpecialtiesData from '~/components/requalification/RequalificationSpecialtiesData.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'
  import SectionRefresherTraining from '~/components/requalification/SectionRefresherTraining.vue'
  import SectionInternship from '~/components/requalification/SectionInternship.vue'

  export default {
    components: {
      FourImagesHeader,
      Sidebar,
      SectionRequalification,
      RequalificationSpecialtiesData,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess,
      SectionRefresherTraining,
      SectionInternship
    },
    head: {
      title: 'Университет БГЭУ | Переподготовка',
      meta: [
        { hid: 'description', name: 'description', content: 'Выбери для себя программу по переподготовке для обучения в университете БГЭУ' }
      ]
    },
  }
</script>
