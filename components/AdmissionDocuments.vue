<template>
  <div class="documents-list content-section" id="admission-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("components.documents-list.admission-documents.legend") }}
    </div>
    <div class="documents-list__icon">
      <svgicon icon="notes" width="150" height="195" color="rgba(174,174,174,1)"></svgicon>
    </div>
    <div class="buttons-toggle">
      <div @click="setVisaMode(true)"
        :class="visa ? 'button_toggle_active' : ''"
        class="buttons-toggle__item buttons-toggle__item_hovered button">
        {{ $t("visaMode.with-visa") }}
      </div>
      <div @click="setVisaMode(false)"
        :class="visa ? '' : 'button_toggle_active'"
        class="buttons-toggle__item buttons-toggle__item_hovered  button">
        {{ $t("visaMode.visa-free") }}
      </div>
    </div>
    <visa-documents v-show="visa"/>
    <no-visa-documents v-show="!visa"/>
  </div>
</template>

<script>
  import '@/components/icons/notes.js'
  import visaDocuments from '~/components/visaDocuments.vue'
  import noVisaDocuments from '~/components/noVisaDocuments.vue'

  export default {
    props: {
      visaMode: {
        type: String,
        default: 'home'
      }
    },
    components: {
      visaDocuments, noVisaDocuments
    },
    computed: {
      visa () {
        let currentVisaMode = this.visaMode + 'ViseMode'
        return this.$store.getters[currentVisaMode]
      }
    },
    methods: {
      setVisaMode (state) {
        if (state) {
          this.$store.dispatch('setVisaMode', this.visaMode)
        } else {
          this.$store.dispatch('setVisaFreeMode', this.visaMode)
        }
      },
    }
  }
</script>
