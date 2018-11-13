<template>
  <div class="content-section" id="student-life-section">
    <div class="content-section__legend">{{ $t("pages.about-university.student-life-section.legend") }}</div>
    <p v-html="$t('pages.about-university.student-life-section.description_p1')"></p>
    <p>{{ $t("pages.about-university.student-life-section.description_p2") }}</p>
    <p>{{ $t("pages.about-university.student-life-section.description_p3") }}</p>
    <p>{{ $t("pages.about-university.student-life-section.description_p4") }}</p>
    <div v-viewer.static="" class="images-row hostel-viewer-images">
      <template v-for="{original, thumbnail} in images">
        <img :src="thumbnail" :data-source="original" class="images-row__item" :key="original.id">
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
            thumbnail: require('@/assets/images/student-life-1-min.jpg'),
            original: require('@/assets/images/student-life-1.jpeg')
          },
          {
            thumbnail: require('@/assets/images/student-life-2-min.jpg'),
            original: require('@/assets/images/student-life-2.jpeg')
          },
          {
            thumbnail: require('@/assets/images/student-life-3-min.jpg'),
            original: require('@/assets/images/student-life-3.jpeg')
          },
          {
            thumbnail: require('@/assets/images/student-life-4-min.jpg'),
            original: require('@/assets/images/student-life-4.jpeg')
          },
        ]
      }
    }
  }
</script>
