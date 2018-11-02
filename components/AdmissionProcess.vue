<template>
  <div class="admission-process" id="admission-process">
    <div class="admission-process__title content-section__legend">
      {{ $t("pages.second-higher.how-to-enter.legend") }}
    </div>
    <visa-admission-scheme v-show="visa"/>
    <no-visa-admission-scheme v-show="!visa"/>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/common/admission-process.scss";
</style>

<script>
  import VisaAdmissionScheme from '@/components/VisaAdmissionScheme.vue'
  import NoVisaAdmissionScheme from '@/components/NoVisaAdmissionScheme.vue'

  export default {
    props: {
      visaMode: {
        type: String,
        default: 'home'
      }
    },
    components: {
      VisaAdmissionScheme, NoVisaAdmissionScheme
    },
    computed: {
      visa () {
        return this.$store.getters[`${this.visaMode}ViseMode`]
      }
    }
  }
</script>
