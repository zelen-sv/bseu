<template>
  <div class="specialty-line specialty-line_hovered">
    <div class="specialty-line__data">
      <div class="specialty-line__title">{{ title }}</div>
      <div class="specialty-line__qualification">{{ qualification }}</div>
    </div>
    <div class="specialty-line__term">{{ term }}</div>
    <div class="specialty-line__cost">{{ cost }}</div>
  </div>
</template>


<script>
  export default {
    props: {
      title: String,
      qualification: String,
      term: String,
      cost: String
    }
  }
</script>
