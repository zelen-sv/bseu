<template>
  <div class="specialties-section section">
    <h3 class="section__legend">{{ $t("pages.home.specialties-section.legend") }}</h3>
    <div class="specialties-section__list">
      <div class="specialties-section__row">
        <specialty-card v-for="(specialty, index, id) in specialtiesFirstRow"
                        class="specialties-section__item"
                        :key="id"
                        :specialty="specialty"/>
      </div>
      <div class="specialties-section__row">
        <specialty-card v-for="(specialty, index, id) in specialtiesSecondRow"
                        class="specialties-section__item"
                        :key="id"
                        :specialty="specialty"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SpecialtyCard from "@/components/SpecialtyCard.vue"
  import { POPULAR_SPECIALTIES_FIRST, POPULAR_SPECIALTIES_SECOND } from "@/store/store.js"

  export default {
    components: {
      SpecialtyCard
    },
    computed : {
      specialtiesFirstRow () {
        return POPULAR_SPECIALTIES_FIRST
      },
      specialtiesSecondRow () {
        return POPULAR_SPECIALTIES_SECOND
      }
    }
  }
</script>
