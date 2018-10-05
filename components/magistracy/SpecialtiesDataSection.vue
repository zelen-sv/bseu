<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.magistracy.specialties-data-section.legend") }}
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    :text_1="$t('pages.magistracy.specialties-data-section.ochno')"
                    :text_2="$t('pages.magistracy.specialties-data-section.zaochno')"
                    :current_state="current_state"/>
    <div v-show="current_state == true">
      <specialties-list :loading="$apollo.queries.ochnoSpecialties.loading"
                        :specialties="ochnoSpecialties"/>
    </div>
    <div v-show="current_state == false">
      <specialties-list :loading="$apollo.queries.zaochnoSpecialties.loading"
                        :specialties="zaochnoSpecialties"/>
    </div>
  </div>
</template>

<script>
  import ButtonsToggle from "@/components/ButtonsToggle.vue"
  import SpecialtiesList from "@/components/SpecialtiesList.vue"
  import {specialtiesByDataQuery} from "@/queries/specialtiesByDataQuery.js"

  export default {
    components: {
      ButtonsToggle, SpecialtiesList
    },
    data () {
      return {
        current_state: true,
        ochnoSpecialties: [],
        zaochnoSpecialties: []
      }
    },
    apollo: {
      $loadingKey: 'loading',
      ochnoSpecialties: {
        query: specialtiesByDataQuery,
        variables: {
          education_type: "Magistracy",
          education_form: "Ochno"
        },
        result (result) {
          this.ochnoSpecialties = result.data.specialties
        }
      },
      zaochnoSpecialties: {
        query: specialtiesByDataQuery,
        variables: {
          education_type: "Magistracy",
          education_form: "Zaochno"
        },
        result (result) {
          this.zaochnoSpecialties = result.data.specialties
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
