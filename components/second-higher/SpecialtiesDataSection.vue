<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.second-higher.specialties-data-section.legend") }}
    </div>
    <div class="buttons-toggle">
      <div class="buttons-toggle__item button button_toggle_active">
        {{ $t('pages.second-higher.specialties-data-section.zaochno') }}
      </div>
    </div>
    <div>
      <specialties-list :loading="$apollo.queries.specialties.loading"
                        :specialties="specialties"/>
    </div>
  </div>
</template>

<script>
  import SpecialtiesList from "@/components/SpecialtiesList.vue"
  import {specialtiesByDataQuery} from "@/queries/specialtiesByDataQuery.js"

  export default {
    components: {
      SpecialtiesList
    },
    data () {
      return {
        current_state: true,
        specialties: []
      }
    },
    apollo: {
      $loadingKey: 'loading',
      specialties: {
        query: specialtiesByDataQuery,
        variables: {
          education_type: "Second",
          education_form: "Zaochno"
        }
      }
    }
  }
</script>
