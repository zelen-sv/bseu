<template>
  <div class="training-profiles-list price-table">
    <div class="training-profiles-list__item training-profiles-list__item_hovered"
         v-for="profile in profiles"
         :key="profile.id">
      <div class="training-profiles-list__item-title">{{ profile.title }}</div>
      <div class="training-profiles-list__item-price">{{ profile.price | usd }}</div>
    </div>
  </div>
</template>


<script>
  export default {
    computed: {
      profiles () {
        return this.$t("pages.training-and-courses.training-cost-data.training-profiles")
      }
    }
  }
</script>
