<template>
  <div class="documents-section">
    <div class="documents-section__cards_list">
      <div v-for="document_item in current_documents" :key="document_item.id" class="documents-section__card">
        <div class="documents-section__card-title">{{ document_item.title }}</div>
        <document-file-link class="documents-section__card-link" text="Скачать" :link="document_item.document_link"/>
      </div>
    </div>
    <div class="documents-section__controls">
      <div v-for="(control, index) in document_pages"
           @click="setCurrentDocumentPage(index)"
           :key="control.id"
           class="documents-section__control-item dot"
           :class="[dotActive(index) ? 'dot_blue' : '']"></div>
    </div>
  </div>
</template>

<script>
  import '@/components/icons/document.js'
  import DocumentFileLink from '@/components/DocumentFileLink.vue'

  export default {
    components: {
      DocumentFileLink
    },
    data () {
      return {
        current_document_page: 0,
        document_pages: 1,
        current_documents: []
      }
    },
    computed: {
      documents () {
        return this.$t("pages.home.faq-component.documents")
      }
    },
    mounted () {
      this.getCurrentDocuments()
      this.countDocumentControls()
    },
    watch: {
      current_document_page () {
        this.getCurrentDocuments()
      }
    },
    methods: {
      setCurrentDocumentPage (index) {
        this.current_document_page = index
      },
      countDocumentControls () {
        this.document_pages = Math.ceil(this.documents.length / 4)
      },
      getCurrentDocuments () {
        let bottom_limit, top_limit;

        if (this.current_document_page == 0) {
          bottom_limit = 0
          top_limit = 4
        } else {
          bottom_limit = 4 * this.current_document_page
          top_limit = 4 * this.current_document_page + 4
        }
        this.current_documents = this.documents.slice(bottom_limit, top_limit)
      },
      dotActive (index) {
        return index == this.current_document_page
      }
    }
  }
</script>
