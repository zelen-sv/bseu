<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.first-higher.specialties-data-section.legend") }}
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    :text_1="$t('pages.first-higher.specialties-data-section.ochno')"
                    :text_2="$t('pages.first-higher.specialties-data-section.zaochno')"
                    :current_state="current_state"/>
    <div v-show="current_state == true">
      <specialties-list v-if="!$apollo.queries.ochnoFaculties.loading"
                        :loading="$apollo.queries.zaochnoFaculties.loading"
                        :faculties="ochnoFaculties"/>
    </div>
<!--     <div v-show="current_state == false">
      <specialties-list v-if="!$apollo.queries.zaochnoSpecialties.loading"
                        :loading="$apollo.queries.zaochnoSpecialties.loading"
                        :specialties="zaochnoSpecialties"/>
    </div> -->
  </div>
</template>

<script>
  import ButtonsToggle from "@/components/ButtonsToggle.vue"
  import SpecialtiesList from "@/components/SpecialtiesList.vue"
  import {specialtiesByTypeQuery} from "@/queries/specialtiesByTypeQuery.js"

  export default {
    components: {
      ButtonsToggle, SpecialtiesList
    },
    data () {
      return {
        current_state: true,
        ochnoFaculties: [],
        zaochnoFaculties: []
      }
    },
    apollo: {
      $loadingKey: 'loading',
      ochnoFaculties: {
        query: specialtiesByTypeQuery,
        variables: {
          education_type: "First",
          education_form: "Ochno"
        },
        result (result) {
          this.ochnoFaculties = result.data.faculties
        }
      },
      zaochnoFaculties: {
        query: specialtiesByTypeQuery,
        variables: {
          education_type: "First",
          education_form: "Zaochno"
        },
        result (result) {
          this.zaochnoFaculties = result.data.faculties
        }
      }
    },
    methods: {
      chageComponentState (state) {
        this.current_state = state
      }
    }
  }
</script>
