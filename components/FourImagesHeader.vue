<template>
  <div class="four-images-header">
    <img v-for="image in images"
         :key="image.id"
         :src="require(`@/assets/images/header-images/${image}`)"
         alt='header image'
         :class="image == mainImage ? 'four-images-header__picture_mobile': ''"
         class="four-images-header__picture">
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/common/four-images-header.scss";
</style>

<script>
  import { headerImages } from '~/store/store.js'

  export default {
    props: {
      page: {
        type: String
      }
    },
    computed: {
      images () {
        return headerImages[`${this.page}`].images
      },
      mainImage () {
        return headerImages[`${this.page}`].mainImage
      }
    }
  }
</script>
