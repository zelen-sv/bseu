<template>
  <div class="specialties-section section">
    <h3 class="section__legend">{{ $t("pages.home.specialties-section.legend") }}</h3>
    <div class="specialties-section__list">
      <specialty-card v-for="(specialty, index, id) in specialties.slice(0,6)"
                      class="specialties-section__item"
                      @click.native="openSpecialtyModal(specialty)"
                      :key="id"
                      :specialty="specialty"/>
      <specialty-card v-for="(specialty, index, id) in specialties.slice(6,8)"
                      class="specialties-section__item specialties-section__item_hidden"
                      @click.native="openSpecialtyModal(specialty)"
                      :key="id"
                      :specialty="specialty"/>
    </div>
  </div>
</template>

<script>
  import SpecialtyCard from "@/components/SpecialtyCard.vue"

  export default {
    components: {
      SpecialtyCard
    },
    computed : {
      specialties () {
        return this.$t("pages.home.specialties-section.specialties")
      }
    },
    methods: {
      openSpecialtyModal(specialty) {
        this.$store.dispatch('showModal', 'SpecialtyModal')
        this.$store.dispatch('setCurrentSpecialty', specialty)
      }
    }
  }
</script>
