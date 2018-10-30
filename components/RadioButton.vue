<template>
  <label class="radio-button">
    <input type="radio" :checked="checked" :value="value" @change="updateInput" class="radio-button__input">
    <span class="radio-button__circle"
          :class="checked ? 'radio-button__circle_checked' : ''">
    </span>
    <span class="radio-button__text">{{ label }}</span>
  </label>
</template>

<script>
  export default {
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      value: {},
      modelValue: {
        default: ""
      },
      label: {
        type: String,
        required: true
      },
    },
    computed: {
      checked() {
        return this.modelValue == this.value
      }
    },
    methods: {
      updateInput() {
        this.$emit('change', this.value)
      }
    }
  }
</script>
