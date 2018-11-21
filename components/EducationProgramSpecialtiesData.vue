<template>
    <specialties-list :loading="educationProgramState.loading" :specialties="specialtiesByEducationForm"/>
</template>

<script>
  import SpecialtiesList from "@/components/SpecialtiesList.vue"

  export default {
    components: {
      SpecialtiesList
    },
    props: {
      education_program: {
        type: String,
        default: 'first'
      },
      education_form: {
        type: String,
        default: 'ochno'
      }
    },
    mounted () {
      this.$store.dispatch('getSpecialties', this.education_program)
    },
    computed: {
      educationProgramState () {
        return this.$store.state.specialties[this.education_program]
      },
      specialtiesByEducationForm () {
        return this.educationProgramState.specialtiesList.filter(specialty => specialty.education_form == this.education_form)
      }
    }
  }
</script>
