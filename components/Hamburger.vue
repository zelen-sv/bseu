<template>
  <a class="hamburger" id="hamburger" href="#" title="Menu">
    <span class="hamburger__line hamburger__line_1"></span>
    <span class="hamburger__line hamburger__line_2"></span>
    <span class="hamburger__line hamburger__line_3"></span>
  </a>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      active () {
        let hamburger = document.getElementById('hamburger')
        if (this.active) {
          hamburger.classList.add("hamburger_active")
        } else {
          hamburger.classList.remove("hamburger_active")
        }
      }
    }
  }
</script>
