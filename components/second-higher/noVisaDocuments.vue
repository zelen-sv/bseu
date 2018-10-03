<template>
  <div class="visa-documents">
    <div class="documents-list__description">
      <p>{{ $t("pages.second-higher.admission-documents.description-p1") }}</p>
      <p v-html="$t('pages.second-higher.admission-documents.description-p2')"></p>
      <p v-html="$t('pages.second-higher.admission-documents.description-no-visa')"></p>
    </div>
    <div class="documents-list__sections">
      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.second-higher.admission-documents.online-application") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("pages.second-higher.admission-documents.application-details") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.application-document-1") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.application-document-2") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.application-document-3") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.application-document-4") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.application-document-5") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.second-higher.admission-documents.passport-copy") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("pages.second-higher.admission-documents.passport-info") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.passport-fullname") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.passport-number") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.passport-term") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.second-higher.admission-documents.passport-country") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("pages.second-higher.admission-documents.passport-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.second-higher.admission-documents.education-documents-copy") }}
          </div>
          <div class="documents-list__section-common">
            {{ $t("pages.second-higher.admission-documents.education-documents-info") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("pages.second-higher.admission-documents.education-documents-translate") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
