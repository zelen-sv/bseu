<template>
  <div class="bseu-application">
    <no-ssr>
      <application-form />
    </no-ssr>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/pages/bseu-application/index.scss";
</style>

<script>
  import ApplicationForm from '~/components/bseu-application/ApplicationForm.vue'
  import scrollToTop from '~/utils/scrollToTop.js'
  export default {
    layout: 'application',
    mounted(){
      scrollToTop(this)
    },
    components: {
      ApplicationForm
    },
    head: {
      title: 'Университет БГЭУ | Форма заявления',
      meta: [
        { hid: 'description', name: 'description', content: 'Онлайн приглашение на учебу.' }
      ]
    },
  }
</script>
