<template>
  <div class="content-section" id="sport-center-section">
    <div class="content-section__legend">{{ $t("pages.about-university.sport-center-section.legend") }}</div>
    <p v-html="$t('pages.about-university.sport-center-section.description_p1')"></p>
    <p>{{ $t("pages.about-university.sport-center-section.description_p2") }}</p>
    <p class="content-section__list-text">{{ $t("pages.about-university.sport-center-section.dot_text_1") }}</p>
    <p class="content-section__list-text">{{ $t("pages.about-university.sport-center-section.dot_text_2") }}</p>
    <p class="content-section__list-text">{{ $t("pages.about-university.sport-center-section.dot_text_3") }}</p>
    <p class="content-section__list-text">{{ $t("pages.about-university.sport-center-section.dot_text_4") }}</p>
    <p>{{ $t("pages.about-university.sport-center-section.description_p3") }}</p>
    <div v-viewer.static="" class="images-row hostel-viewer-images">
      <template v-for="{original, thumbnail} in images">
        <img :src="thumbnail" :data-source="original" class="images-row__item" alt="sport center image" :key="original.id">
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
            thumbnail: require('@/assets/images/sport-center-1-min.jpg'),
            original: require('@/assets/images/sport-center-1.jpeg')
          },
          {
            thumbnail: require('@/assets/images/sport-center-2-min.jpg'),
            original: require('@/assets/images/sport-center-2.jpeg')
          },
          {
            thumbnail: require('@/assets/images/sport-center-3-min.jpg'),
            original: require('@/assets/images/sport-center-3.jpeg')
          },
          {
            thumbnail: require('@/assets/images/sport-center-4-min.jpg'),
            original: require('@/assets/images/sport-center-4.jpeg')
          },
        ]
      }
    }
  }
</script>
