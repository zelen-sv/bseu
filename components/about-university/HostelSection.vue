<template>
  <div class="content-section" id="hostel-section">
    <div class="content-section__legend">{{ $t("pages.about-university.hostel-section.legend") }}</div>
    <p v-html="$t('pages.about-university.hostel-section.description_p1')"></p>
    <p>{{ $t("pages.about-university.hostel-section.description_p2") }}</p>
    <p>{{ $t("pages.about-university.hostel-section.description_p3") }}</p>
    <div v-viewer.static="" class="images-row hostel-viewer-images">
      <template v-for="{original, thumbnail} in images">
        <img :src="thumbnail" :data-source="original" class="images-row__item" alt="hostel image" :key="original.id">
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {
            thumbnail: require('@/assets/images/dormitory-1-min.jpg'),
            original: require('@/assets/images/dormitory-1.jpg')
          },
          {
            thumbnail: require('@/assets/images/dormitory-2-min.jpg'),
            original: require('@/assets/images/dormitory-2.jpg')
          },
          {
            thumbnail: require('@/assets/images/dormitory-3-min.jpg'),
            original: require('@/assets/images/dormitory-3.jpg')
          },
          {
            thumbnail: require('@/assets/images/dormitory-4-min.jpg'),
            original: require('@/assets/images/dormitory-4.jpg')
          },
        ]
      }
    }
  }
</script>
