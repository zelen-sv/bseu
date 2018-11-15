<template>
  <div id="app">
    <navbar/>
    <mobile-navbar/>
    <nuxt/>
    <main-footer/>
    <modal />
    <image-separator />
  </div>
</template>

<script type="text/javascript">
  import Navbar from '~/components/Navbar.vue'
  import MobileNavbar from '~/components/MobileNavbar.vue'
  import MainFooter from '~/components/MainFooter.vue'
  import Modal from '~/components/Modal.vue'
  import ImageSeparator from '~/components/ImageSeparator.vue'

  export default {
    components: {
      Navbar, MainFooter, MobileNavbar, Modal, ImageSeparator
    },
    head: {
      meta: [
        { name: 'og:image', content: 'https://inter.bseu.by' + require('~/assets/images/logo-bseu.png') }
      ]
    }
  }
</script>
