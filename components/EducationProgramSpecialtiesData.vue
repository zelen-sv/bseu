<template>
    <specialties-list :loading="loading" :specialties="specialties"/>
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
    data () {
      return {
        loading: true
      }
    },
    mounted () {
      let payload = { education_program: this.education_program, locale: this.$i18n.locale }
      this.$store.dispatch('getSpecialtiesByEducationProgram', payload)
      this.loading = false
    },
    computed: {
      specialties () {
        let specialties = this.$store.getters.specialtiesByEducationProgram(this.education_program)
        return specialties.filter(specialty => specialty.education_form == this.education_form)
      }
    }
  }
</script>
