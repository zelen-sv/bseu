<template>
  <div class="buttons-toggle">
    <div @click="$emit('change-state', 0)"
         class="buttons-toggle__item button" :class="isActive(0)">{{ text_1 }}</div>
    <div @click="$emit('change-state', 1)"
         class="buttons-toggle__item  button" :class="isActive(1)">{{ text_2 }}</div>
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
        type: Number,
        default: 0
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
