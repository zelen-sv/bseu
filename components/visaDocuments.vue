<template>
  <div class="visa-documents">
    <div class="documents-list__description">
      <p>{{ $t("components.documents-list.admission-documents.description-p1") }}</p>
      <p v-html="$t('components.documents-list.admission-documents.description-p2')"></p>
    </div>
    <div class="documents-list__sections">
      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.admission-documents.online-application") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("components.documents-list.admission-documents.application-details") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.application-document-1") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.application-document-2") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.application-document-3") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.application-document-4") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.application-document-5") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.admission-documents.passport-copy") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("components.documents-list.admission-documents.passport-info") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.passport-fullname") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.passport-number") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.passport-term") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.admission-documents.passport-country") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("components.documents-list.admission-documents.passport-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.admission-documents.education-documents-copy") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("components.documents-list.admission-documents.education-documents-info") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("components.documents-list.admission-documents.education-documents-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__application">
          <application-button />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import DocumentFileLink from '@/components/DocumentFileLink.vue'
    import ApplicationButton from '@/components/ApplicationButton.vue'

    export default {
      components: {
        DocumentFileLink, ApplicationButton
      }
    }
</script>
