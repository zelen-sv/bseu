<template>
  <div class="logo" :style="{ color: current_color }">
    <img src="@/assets/images/logo-bseu.png" class="logo__img"/>
    <div class="logo__text">бгэу</div>
  </div>
</template>

<script>
  export default {
    props: {
      current_color: {
        type: String,
        default: '#1405F8'
      }
    }
  }
</script>
