<template>
  <div class="specialty-line specialty-line_hovered">
    <div class="specialty-line__data">
      <div class="specialty-line__title">{{ title }}</div>
      <div class="specialty-line__qualification">{{ qualificationsList }}</div>
    </div>
    <div class="specialty-line__term">{{ term }}</div>
    <div class="specialty-line__cost">{{ price }}$</div>
  </div>
</template>


<script>
  export default {
    props: {
      title: String,
      qualification: String,
      term: String,
      price: String
    },
    mounted () {
      debugger
    },
    computed: {
      qualificationsList () {
        let filters = this.$options.filters
        return filters.toList(
          this.qualification.map(qualificationItem => filters.capitalize(qualificationItem))
        )
      }
    }
  }
</script>
