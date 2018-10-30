<template>
  <div class="documents-list content-section" id="admission-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("components.documents-list.admission-documents.legend") }}
    </div>
    <div class="buttons-toggle">
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
    </div>
    <visa-documents v-show="visaMode"/>
    <no-visa-documents v-show="!visaMode"/>
  </div>
</template>

<script>
  import visaDocuments from '~/components/visaDocuments.vue'
  import noVisaDocuments from '~/components/noVisaDocuments.vue'

  export default {
    props: {
      page: {
        type: String,
        default: 'home'
      }
    },
    components: {
      visaDocuments, noVisaDocuments
    },
    computed: {
      visaMode () {
        let currentPageVisaMode = this.page + 'PageViseMode'
        return this.$store.getters[currentPageVisaMode]
      }
    },
    methods: {
      setVisaMode (state) {
        if (state) {
          this.$store.dispatch('setVisaMode', this.page)
        } else {
          this.$store.dispatch('setVisaFreeMode', this.page)
        }
      },
    }
  }
</script>
