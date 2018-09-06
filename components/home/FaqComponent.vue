<template>
  <div class="faq-component section">
    <questions-section class="faq-component__questions-section" :questions="faq_questions"/>
    <documents-section class="faq-component__documents-section" :documents="faq_documents"/>
  </div>
</template>

<script>
  import { FAQ_QUESTIONS, FAQ_DOCUMENTS } from "@/store/store.js"
  import QuestionsSection from "@/components/home/QuestionsSection.vue"
  import DocumentsSection from "@/components/home/DocumentsSection.vue"

  export default {
    components: {
      QuestionsSection, DocumentsSection
    },
    data () {
      return {
        faq_questions: FAQ_QUESTIONS,
        faq_documents: FAQ_DOCUMENTS
      }
    }
  }
</script>

