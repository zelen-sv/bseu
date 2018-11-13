<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.second-higher.specialties-data-section.legend") }}
    </div>
    <div class="buttons-toggle">
      <div @click="choseEducationForm('zaochno')"
        :class="educationForm == 'zaochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered button">
        {{ $t('educationForm.zaochno') }}
      </div>
      <div @click="choseEducationForm('remote')"
        :class="educationForm == 'remote' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered  button">
        {{ $t('educationForm.remote') }}
      </div>
    </div>
    <education-program-specialties-data education_program="second" :education_form="educationForm" />
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
        educationForm: 'zaochno'
      }
    },
    methods: {
      choseEducationForm (form) {
        this.educationForm = form
      }
    }
  }
</script>
