<template>
  <div class="faq-component section">
    <questions-section class="faq-component__questions-section"/>
    <documents-section class="faq-component__documents-section"/>
  </div>
</template>

<script>
  import QuestionsSection from "@/components/home/QuestionsSection.vue"
  import DocumentsSection from "@/components/home/DocumentsSection.vue"

  export default {
    components: {
      QuestionsSection, DocumentsSection
    }
  }
</script>

