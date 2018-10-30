<template>
  <div id="bseu-application">
    <application-header />
    <image-separator />
    <nuxt/>
    <image-separator />
  </div>
</template>

<script type="text/javascript">
  import ApplicationHeader from '~/components/bseu-application/ApplicationHeader.vue'
  import ImageSeparator from '~/components/ImageSeparator.vue'

  export default {
    components: {
      ApplicationHeader, ImageSeparator
    }
  }
</script>

