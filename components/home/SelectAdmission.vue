<template>
  <div class="select-admission section">
    <div class="section__legend">{{ $t("pages.home.select-admission.legend") }}</div>
    <div class="select-admission__button buttons-toggle">
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
    <visa-admission-scheme v-show="visaMode"/>
    <no-visa-admission-scheme v-show="!visaMode"/>
  </div>
</template>

<script>
  import VisaAdmissionScheme from '@/components/VisaAdmissionScheme.vue'
  import NoVisaAdmissionScheme from '@/components/NoVisaAdmissionScheme.vue'

  export default {
    components: {
      VisaAdmissionScheme, NoVisaAdmissionScheme
    },
    computed: {
      visaMode () {
        return this.$store.getters.homeViseMode
      }
    },
    methods: {
      setVisaMode (state) {
        if (state) {
          this.$store.dispatch('setVisaMode', 'home')
        } else {
          this.$store.dispatch('setVisaFreeMode', 'home')
        }
      },
    }
  }
</script>
