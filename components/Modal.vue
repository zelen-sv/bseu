<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal__backdrop" @click.self.prevent="close" aria-label="Close modal">
      <div class="modal"
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
    data() {
      return {
        component: null,
      };
    },
    computed: {
      visible () {
        return this.$store.getters['modalState']
      },
      modalComponent () {
        return this.$store.getters['modalComponent']
      }
    },
    watch: {
      modalComponent (name) {
        if (!name) return;

        Vue.component(name, () => import(`@/components/modal/${name}`))
        this.component = name
      },
      visible (state) {
        let bodyClassList = document.body.classList
        state ? bodyClassList.add('modal-open') : bodyClassList.remove('modal-open')
      }
    },
    methods: {
      close() {
        this.$store.dispatch('closeModal')
      },
    },
  };
</script>
