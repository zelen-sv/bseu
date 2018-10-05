<template>
  <a :href="link" target="_blank" class="document-file-link">
    <svgicon icon="document" width="22" height="25" color="#1405F8"></svgicon>
    <span class="document-file-link__text">{{ this.text }}</span>
  </a>
</template>

<script>
  import '@/components/icons/document.js'

  export default {
    props: {
      link: {
        type: String,
        default: '#'
      },
      text: {
        type: String,
        default: ''
      }
    }
  }

</script>
