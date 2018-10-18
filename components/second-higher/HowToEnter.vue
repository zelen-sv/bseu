<template>
  <div class="how-to-enter-section" id="how-to-enter">
    <div class="how-to-enter-section__title content-section__legend">
      {{ $t("pages.second-higher.how-to-enter.legend") }}
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
        return this.$store.getters.secondHigherPageViseMode
      }
    }
  }
</script>
