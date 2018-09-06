<template>
  <div class="select-admission section">
    <div class="section__legend">{{ $t("pages.home.select-admission.legend") }}</div>
    <tabs-component :tabs-components="admission_tabs_components"
                     default-component="BachelorAdmission"
                     class="select-admission__content" />
  </div>
</template>

<script>
  import TabsComponent from "@/components/TabsComponent"
  import { ADMISSION_TABS_DATA } from "@/store/store.js"

  export default {
    components: {
      TabsComponent
    },
    data () {
      return {
        admission_tabs_components: ADMISSION_TABS_DATA
      }
    }
  }
</script>
