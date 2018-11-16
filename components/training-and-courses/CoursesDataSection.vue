<template>
  <div class="courses-data-section content-section">
    <h1 class="courses-data-section__title content-section__legend">
      {{ $t("pages.training-and-courses.courses-data-section.legend") }}
    </h1>
    <p class="courses-data-section__text">
      {{ $t("pages.training-and-courses.courses-data-section.text") }}
    </p>
    <courses-price-table />
  </div>
</template>

<script>
  import CoursesPriceTable from '~/components/training-and-courses/CoursesPriceTable.vue'

  export default {
    components: {
      CoursesPriceTable
    }
  }
</script>
