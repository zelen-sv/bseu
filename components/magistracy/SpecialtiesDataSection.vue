<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.magistracy.specialties-data-section.legend") }}
    </div>
    <div class="buttons-toggle">
      <div @click="choseSpecialtiesForm('ochno')"
        :class="specialtiesForm == 'ochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered button">
        {{ $t('pages.magistracy.specialties-data-section.ochno') }}
      </div>
      <div @click="choseSpecialtiesForm('zaochno')"
        :class="specialtiesForm == 'zaochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered  button">
        {{ $t('pages.magistracy.specialties-data-section.zaochno') }}
      </div>
    </div>
    <div v-show="specialtiesForm == 'ochno'">
      <specialties-list :loading="$apollo.queries.ochnoSpecialties.loading"
                        :specialties="ochnoSpecialties"/>
    </div>
    <div v-show="specialtiesForm == 'zaochno'">
      <specialties-list :loading="$apollo.queries.zaochnoSpecialties.loading"
                        :specialties="zaochnoSpecialties"/>
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
        specialtiesForm: 'ochno',
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
      choseSpecialtiesForm (form) {
        this.specialtiesForm = form
      }
    }
  }
</script>
