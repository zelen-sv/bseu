<template>
  <div class="training-and-courses">
    <div class="training-and-courses__sidebar">
      <sidebar />
    </div>
    <div class="training-and-courses__content" id="training-and-courses">
      <images-header />
      <training-section />
      <training-cost-data />
      <admission-documents visaMode="trainingAndCourses" />
      <arriving-documents />
      <admission-process visaMode="trainingAndCourses" />
      <second-images-header />
      <courses-section />
      <courses-data-section />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/training-and-courses/index.scss";
</style>


<script>
  import ImagesHeader from '~/components/training-and-courses/ImagesHeader.vue'
  import Sidebar from '~/components/training-and-courses/Sidebar.vue'
  import TrainingSection from '~/components/training-and-courses/TrainingSection.vue'
  import TrainingCostData from '~/components/training-and-courses/TrainingCostData.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'
  import SecondImagesHeader from '~/components/training-and-courses/SecondImagesHeader.vue'
  import CoursesSection from '~/components/training-and-courses/CoursesSection.vue'
  import CoursesDataSection from '~/components/training-and-courses/CoursesDataSection.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      TrainingSection,
      TrainingCostData,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess,
      SecondImagesHeader,
      CoursesSection,
      CoursesDataSection
    }
  }
</script>
