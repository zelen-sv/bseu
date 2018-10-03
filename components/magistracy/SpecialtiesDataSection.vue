<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.magistracy.specialties-data-section.legend") }}
    </div>
    <!-- <specialties-list :loading="$apollo.queries.educationType.loading" :specialties="ochnoSpecialties"/> -->
  </div>
</template>

<script>
  import SpecialtiesList from "@/components/SpecialtiesList.vue"

  export default {
    components: {
      SpecialtiesList
    },
    data () {
      return {
        specialties: {}
      }
    },
  }
</script>
