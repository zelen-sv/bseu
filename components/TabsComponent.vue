<template>
  <div class="tabs-component">
    <div class="tabs-component__nav">
      <div v-for="tabsComponent in tabsComponents"
          @click="setCurrentComponent(tabsComponent.component_name)"
          class="tabs-component__nav-item"
          :key="tabsComponent.id"
          :class="[isActive(tabsComponent) ? 'tabs-component__nav_active' : '']">
        {{ tabsComponent.title }}
        <div v-if="isActive(tabsComponent)" class="tabs-component__nav-arrow triangle triangle_dark-blue"></div>
      </div>
    </div>
    <div class="tabs-component__content">
      <component :is="active_component"></component>
    </div>
  </div>
</template>

<script>
  import BachelorAdmission from "@/components/home/BachelorAdmission"
  import SecondBachelorAdmission from "@/components/home/SecondBachelorAdmission"
  import MagistracyAdmission from "@/components/home/MagistracyAdmission"
  import FellowshipAdmission from "@/components/home/FellowshipAdmission"
  import TransferAdmission from "@/components/home/TransferAdmission"

  export default {
    components: {
      BachelorAdmission,
      SecondBachelorAdmission,
      MagistracyAdmission,
      FellowshipAdmission,
      TransferAdmission
    },
    props: {
      defaultComponent: String,
      tabsComponents: Array
    },
    data () {
      return {
        active_component: ""
      }
    },
    mounted () {
      this.active_component = this.defaultComponent
    },
    methods: {
      setCurrentComponent (component_name) {
        this.active_component = component_name
      },
      isActive (tabsComponent) {
        return tabsComponent.component_name == this.active_component
      }
    }
  }
</script>
