<template>
  <div class="documents-list content-section" id="admission-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("pages.first-higher.admission-documents.legend") }}
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    text_1="ТРЕБУЕТСЯ ВИЗА"
                    text_2="ВИЗА НЕ НУЖНА"
                    class="documents-list__buttons"
                    :current_state="current_state" />
    <visa-documents v-show="current_state"/>
    <no-visa-documents v-show="!current_state"/>
  </div>
</template>

<script>
  import ButtonsToggle from '~/components/ButtonsToggle.vue'
  import visaDocuments from '~/components/first-higher/visaDocuments.vue'
  import noVisaDocuments from '~/components/first-higher/noVisaDocuments.vue'

  export default {
    components: {
      ButtonsToggle, visaDocuments, noVisaDocuments
    },
    data () {
      return {
        current_state: true
      }
    },
    methods: {
      chageComponentState (state) {
        this.current_state = state
      }
    }
  }
</script>
