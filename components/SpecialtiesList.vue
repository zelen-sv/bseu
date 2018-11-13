<template>
  <div class="specialties-list">
    <half-circle-spinner v-show="loading" class="specialties-list__spinner"/>
    <div v-show="!loading" v-for="faculty in faculties" :key="faculty.id">
      <div class="specialties-list__department">
        {{ faculty }}
      </div>
      <specialty-line v-for="specialty in facultySpecialties(faculty)"
        :key="specialty.id"
        @click.native="openSpecialtyModal(specialty)"
        v-bind="specialty"/>
    </div>
  </div>
</template>

<script>
  import SpecialtyLine from '~/components/SpecialtyLine.vue'
  import HalfCircleSpinner from '~/components/HalfCircleSpinner.vue'

  export default {
    props: {
      specialties: {
        type: Array
      },
      loading: {
        type: Boolean,
        default: true
      }
    },
    components: {
      SpecialtyLine, HalfCircleSpinner
    },
    computed: {
      faculties () {
        let specialtyFaculties = this.specialties.map(specialty => { return specialty.faculty })

        return  [...new Set(specialtyFaculties)]
      }
    },
    methods: {
      openSpecialtyModal(specialty) {
        this.$store.dispatch('showModal', 'SpecialtyModal')
        this.$store.dispatch('activateSpecialty', specialty)
      },
      facultySpecialties (faculty) {
        return this.specialties.filter(specialty => { return specialty.faculty == faculty })
      }
    }
  }
</script>
