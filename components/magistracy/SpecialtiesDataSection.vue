<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.magistracy.specialties-data-section.legend") }}
    </div>
    <div class="buttons-toggle">
      <div @click="choseEducationForm('ochno')"
        :class="educationForm == 'ochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered button">
        {{ $t('educationForm.ochno') }}
      </div>
      <div @click="choseEducationForm('zaochno')"
        :class="educationForm == 'zaochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered  button">
        {{ $t('educationForm.zaochno') }}
      </div>
    </div>
    <education-program-specialties-data education_program="magistracy" :education_form="educationForm" />
  </div>
</template>

<script>
  import EducationProgramSpecialtiesData from "@/components/EducationProgramSpecialtiesData.vue"

  export default {
    components: {
      EducationProgramSpecialtiesData
    },
    data () {
      return {
        educationForm: 'ochno'
      }
    },
    methods: {
      choseEducationForm (form) {
        this.educationForm = form
      }
    }
  }
</script>
