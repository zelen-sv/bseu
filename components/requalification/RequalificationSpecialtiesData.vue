<template>
  <div class="requalification-specialties-data content-section">
    <h1 class="requalification-specialties-data__title content-section__legend">
      {{ $t("pages.requalification.requalification-specialties-data.legend") }}
    </h1>
    <div class="buttons-toggle">
      <div class="buttons-toggle__item buttons-toggle__item_hovered button_toggle_active button">
        {{ $t('educationForm.zaochno') }}
      </div>
    </div>
    <div class="specialties-list">
      <specialty-line v-for="specialty in requalificationSpecialties"
        :key="specialty.id"
        v-bind="specialty"/>
    </div>
  </div>
</template>

<script>
  import SpecialtyLine from '~/components/SpecialtyLine.vue'

  export default {
    components: {
      SpecialtyLine
    },
    computed: {
      requalificationSpecialties () {
        return this.$t("pages.requalification.requalification-specialties-data.specialties")
      }
    }
  }
</script>
