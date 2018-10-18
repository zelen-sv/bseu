<template>
  <div class="training-cost-data content-section">
    <div class="training-cost-data__title content-section__legend">
      {{ $t("pages.training-and-courses.training-cost-data.legend") }}
    </div>
    <p class="training-cost-data__text">
      {{ $t("pages.training-and-courses.training-cost-data.form-text") }}
    </p>
    <div class="training-cost-data__text">
      {{ $t("pages.training-and-courses.training-cost-data.stage-1") }}
    </div>
    <div class="training-cost-data__text">
      {{ $t("pages.training-and-courses.training-cost-data.stage-2") }}
    </div>
    <training-profiles-list />
  </div>
</template>

<script>
  import TrainingProfilesList from "~/components/training-and-courses/TrainingProfilesList.vue"

  export default {
    components: {
      TrainingProfilesList
    }
  }
</script>
