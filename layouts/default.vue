<template>
  <div id="app">
    <navbar/>
    <mobile-navbar/>
    <nuxt/>
    <main-footer/>
    <modal />
  </div>
</template>

<script type="text/javascript">
  import Navbar from '~/components/Navbar.vue'
  import MobileNavbar from '~/components/MobileNavbar.vue'
  import MainFooter from '~/components/MainFooter.vue'
  import Modal from '~/components/Modal.vue'

  export default {
    components: {
      Navbar, MainFooter, MobileNavbar, Modal
    }
  }
</script>
