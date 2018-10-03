<template>
  <div class="buttons-toggle">
    <div @click="$emit('change-state', true)"
         class="buttons-toggle__item button" :class="isActive(true)">{{ text_1 }}</div>
    <div @click="$emit('change-state', false)"
         class="buttons-toggle__item  button" :class="isActive(false)">{{ text_2 }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      text_1: {
        type: String,
        default: ''
      },
      text_2: {
        type: String,
        default: ''
      },
      current_state: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      isActive (current) {
        if (this.current_state == current) {
          return 'button_toggle_active'
        } else {
          return 'button_toggle_in-active'
        }
      }
    }
  }
</script>
