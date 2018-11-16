<template>
  <div class="training-and-courses">
    <div class="training-and-courses__sidebar">
      <sidebar />
    </div>
    <div class="training-and-courses__content">
      <div id="training-and-courses">
        <four-images-header page="trainingAndCourses" />
        <training-section />
        <training-cost-data />
        <admission-documents visaMode="trainingAndCourses" />
        <arriving-documents />
        <admission-process visaMode="trainingAndCourses" />
      </div>
      <div id="courses-russian">
        <four-images-header page="coursesRussian" />
        <courses-section />
        <courses-data-section />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/training-and-courses/index.scss";
</style>


<script>
  import FourImagesHeader from '~/components/FourImagesHeader.vue'
  import Sidebar from '~/components/training-and-courses/Sidebar.vue'
  import TrainingSection from '~/components/training-and-courses/TrainingSection.vue'
  import TrainingCostData from '~/components/training-and-courses/TrainingCostData.vue'
  import AdmissionDocuments from '~/components/AdmissionDocuments.vue'
  import ArrivingDocuments from '~/components/ArrivingDocuments.vue'
  import AdmissionProcess from '~/components/AdmissionProcess.vue'
  import CoursesSection from '~/components/training-and-courses/CoursesSection.vue'
  import CoursesDataSection from '~/components/training-and-courses/CoursesDataSection.vue'

  export default {
    components: {
      FourImagesHeader,
      Sidebar,
      TrainingSection,
      TrainingCostData,
      AdmissionDocuments,
      ArrivingDocuments,
      AdmissionProcess,
      CoursesSection,
      CoursesDataSection
    },
    head: {
      title: 'Университет БГЭУ | Подготовка и курсы',
      meta: [
        { hid: 'description', name: 'description', content: 'На подготовительном отделении обучаются иностранные граждане, желающие в дальнейшем получить высшее образование в БГЭУ или других университетах на русском языке.' },
        { hid: 'keywords', name: 'keywords', content: 'подготовительное отделение бгэу, курсы русского языка, подготовительное отделение университета, подготовительное отделение для иностранцев, курсы русского языка бгэу, русский язык подготовительные курсы иностранцам' }
      ]
    },
  }
</script>
