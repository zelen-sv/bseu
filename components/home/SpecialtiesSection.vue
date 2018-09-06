<template>
  <div class="specialties-section section">
    <h3 class="section__legend">{{ $t("pages.home.specialties-section.legend") }}</h3>
    <div class="specialties-section__list">
      <specialty-card v-for="(specialty, index, id) in specialties"
                      class="specialties-section__item"
                      :key="id"
                      :specialty="specialty"/>
    </div>
  </div>
</template>

<script>
  import SpecialtyCard from "@/components/SpecialtyCard.vue"
  import { POPULAR_SPECIALTIES } from "@/store/store.js"

  export default {
    components: {
      SpecialtyCard
    },
    data () {
      return {
        specialties: POPULAR_SPECIALTIES
      }
    }
  }
</script>
