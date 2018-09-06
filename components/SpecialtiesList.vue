<template>
  <div class="specialties-list">
    <div class="specialties-list__department">
      Институт социально-гуманитарного образования
    </div>
    <specialty-line class="specialties-list__specialty"/>
    <specialty-line class="specialties-list__specialty"/>
    <div class="specialties-list__department">
      Учётно-экономический факультет
    </div>
    <specialty-line class="specialties-list__specialty"/>
    <specialty-line class="specialties-list__specialty"/>
  </div>
</template>

<script>
  import SpecialtyLine from '~/components/SpecialtyLine.vue'

  export default {
    components: {
      SpecialtyLine
    },
    mounted () {
      // this.$store.dispatch('getSpecialties')
    },
    computed: {
      // specialties () {
      //   return this.$store.getters.allSpecialties
      // },
    }
  }
</script>
