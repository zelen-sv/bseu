<template>
  <div class="documents-list content-section" id="admission-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("pages.magistracy.admission-documents.legend") }}
    </div>
    <div @click="setVisaMode(true)"
      :class="visaMode ? 'button_toggle_active' : ''"
      class="buttons-toggle__item buttons-toggle__item_hovered button">
      {{ $t("visaMode.with-visa") }}
    </div>
    <div @click="setVisaMode(false)"
      :class="visaMode ? '' : 'button_toggle_active'"
      class="buttons-toggle__item buttons-toggle__item_hovered  button">
      {{ $t("visaMode.visa-free") }}
    </div>
    <visa-documents v-show="visaMode"/>
    <no-visa-documents v-show="!visaMode"/>
  </div>
</template>

<script>
  import visaDocuments from '~/components/magistracy/visaDocuments.vue'
  import noVisaDocuments from '~/components/magistracy/noVisaDocuments.vue'

  export default {
    components: {
      visaDocuments, noVisaDocuments
    },
    computed: {
      visaMode () {
        return this.$store.getters.magistracyPageViseMode
      }
    },
    methods: {
      setVisaMode (state) {
        if (state) {
          this.$store.dispatch('setVisaMode', 'magistracy')
        } else {
          this.$store.dispatch('setVisaFreeMode', 'magistracy')
        }
      },
    }
  }
</script>
