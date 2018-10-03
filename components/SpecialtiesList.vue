<template>
  <div class="specialties-list">
    <half-circle-spinner v-show="loading"/>
    <div v-for="faculty in faculties" :key="faculty.id">
      <div class="specialties-list__department">
        {{ faculty.title }}
      </div>
      <specialty-line v-for="specialty in faculty.specialties"
        :key="specialty.id"
        @click.native="openSpecialtyModal(specialty)"
        :title="specialty.title"
        :qualification="specialty.qualification"
        :term="specialty.specialtyFormat[0].term"
        :price="specialty.specialtyFormat[0].price"
        class="specialties-list__specialty"/>
    </div>
  </div>
</template>

<script>
  import SpecialtyLine from '~/components/SpecialtyLine.vue'
  import HalfCircleSpinner from '~/components/HalfCircleSpinner.vue'

  export default {
    props: {
      faculties: {
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
    methods: {
      openSpecialtyModal(specialty) {
        this.$store.dispatch('showModal', 'SpecialtyModal')
        this.$store.dispatch('activateSpecialty', specialty)
      },
      departmentSpecialties(department) {
        return this.specialties.filter(specialty => specialty.department == department);
      }
    }
  }
</script>
