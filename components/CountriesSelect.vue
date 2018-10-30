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
      this.getCountries()
    },
    methods: {
      async getCountries() {
        const countries = await this.$axios.$get('https://restcountries.eu/rest/v2/all')
        this.countries = countries.map((country) => { return country.name } )
      },
      updateCountry () {
        this.$emit('input', this.country)
      }
    }
  }
</script>
