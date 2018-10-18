<template>
  <div class="training-and-courses">
    <div class="training-and-courses__sidebar">
      <sidebar />
    </div>
    <div class="training-and-courses__content">
      <images-header />
      <training-section />
      <training-cost-data />
      <admission-documents />
      <arriving-documents />
      <how-to-enter />
      <second-images-header />
      <courses-section />
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
  import AdmissionDocuments from '~/components/training-and-courses/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/training-and-courses/ArrivingDocuments.vue'
  import HowToEnter from '~/components/training-and-courses/HowToEnter.vue'
  import SecondImagesHeader from '~/components/training-and-courses/SecondImagesHeader.vue'
  import CoursesSection from '~/components/training-and-courses/CoursesSection.vue'

  export default {
    components: {
      ImagesHeader,
      Sidebar,
      TrainingSection,
      TrainingCostData,
      AdmissionDocuments,
      ArrivingDocuments,
      HowToEnter,
      SecondImagesHeader,
      CoursesSection
    }
  }
</script>
