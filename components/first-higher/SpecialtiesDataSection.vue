<template>
  <div class="specialties-data-section content-section">
    <div class="specialties-data-section__title content-section__legend">
      {{ $t("pages.first-higher.specialties-data-section.legend") }}
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    :text_1="$t('pages.first-higher.specialties-data-section.ochno')"
                    :text_2="$t('pages.first-higher.specialties-data-section.zaochno')"
                    :current_state="current_state" />
    <div v-show="current_state == 0">
      <specialties-list />
    </div>
    <div v-show="current_state == 1">
      <specialties-list />
    </div>
  </div>
</template>

<script>
  import ButtonsToggle from "@/components/ButtonsToggle.vue"
  import SpecialtiesList from "@/components/SpecialtiesList.vue"

  export default {
    components: {
      ButtonsToggle, SpecialtiesList
    },
    data () {
      return {
        current_state: 0
      }
    },
    methods: {
      chageComponentState (state) {
        this.current_state = state
      }
    }
  }
</script>
