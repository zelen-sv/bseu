<template>
  <div class="countries-select">
    <v-select :options="countries"
              v-model="country"
              placeholder="Выберите страну"
              max-height="200px"
              @input="updateCountry" />
  </div>
</template>

<script>
  import { countryNames } from '~/utils/countriesDataList.js'

  export default {
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      modelValue: {
        default: ''
      }
    },
    data () {
      return {
        countries: [],
        country: null
      }
    },
    mounted () {
      this.countries = countryNames
    },
    methods: {
      updateCountry () {
        this.$emit('input', this.country)
      }
    }
  }
</script>
