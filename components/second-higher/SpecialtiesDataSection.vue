<template>
  <div class="specialties-data-section content-section" id="specialties-list">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.second-higher.specialties-data-section.legend") }}
    </div>
    <div class="buttons-toggle">
      <div @click="choseSpecialtiesForm('zaochno')"
        :class="specialtiesForm == 'zaochno' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered button">
        {{ $t('pages.second-higher.specialties-data-section.zaochno') }}
      </div>
      <div @click="choseSpecialtiesForm('remote')"
        :class="specialtiesForm == 'remote' ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered  button">
        {{ $t('pages.second-higher.specialties-data-section.remote') }}
      </div>
    </div>
    <div>
      <div v-show="specialtiesForm == 'zaochno'">
        <specialties-list :loading="$apollo.queries.zaochnoSpecialties.loading"
                          :specialties="zaochnoSpecialties"/>
      </div>
      <div v-show="specialtiesForm == 'remote'">
        <specialties-list :loading="$apollo.queries.remoteSpecialties.loading"
                          :specialties="remoteSpecialties"/>
      </div>
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
        specialtiesForm: 'zaochno',
        zaochnoSpecialties: [],
        remoteSpecialties: []
      }
    },
    apollo: {
      $loadingKey: 'loading',
      zaochnoSpecialties: {
        query: specialtiesByDataQuery,
        variables: {
          education_type: "Second",
          education_form: "Zaochno"
        },
        update (data) {
          return data.specialties
        }
      },
      remoteSpecialties: {
        query: specialtiesByDataQuery,
        variables: {
          education_type: "Second",
          education_form: "Remote"
        },
        update (data) {
          return data.specialties
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
