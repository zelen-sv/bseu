<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal__backdrop" @click.self.prevent="close" aria-label="Close modal">
      <div class="modal"
           v-scroll-lock="visible"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription">
        <component :is="component"></component>
      </div>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue';

  export default {
    computed: {
      visible () {
        return this.$store.getters['modalState']
      },
      component () {
        let componentName = this.$store.getters['modalComponent']
        if (componentName) {
          Vue.component(componentName, () => import(`@/components/modal/${componentName}`))

          return componentName
        }
      }
    },
    methods: {
      close() {
        this.$store.dispatch('closeModal')
      },
    },
  };
</script>
