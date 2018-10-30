<template>
  <vue-tel-input @onInput="updatePhone"
                 class="phone-input"
                 :class="isPhoneValid"
                 :placeholder="placeholder"
                 :required="required"
                 :preferredCountries="['ru', 'by', 'tm', 'tk']" />
</template>

<script>
  export default {
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      modelValue: {
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        valid: true
      }
    },
    computed: {
      isPhoneValid () {
        if (!this.valid) { return 'phone-input_incorrect' }
      },
      placeholder () {
        return this.$t("components.phone-input.placeholder")
      }
    },
    methods: {
      updatePhone ({ number, isValid }) {
        this.valid = isValid
        if (isValid) {
          this.$emit('input', number)
        } else {
          this.$emit('input', '')
        }
      }
    }
  }
</script>
