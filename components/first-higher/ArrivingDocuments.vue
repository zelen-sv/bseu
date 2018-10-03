<template>
  <div class="documents-list content-section"  id="arriving-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("pages.first-higher.arriving-documents.legend") }}
    </div>
    <div class="documents-list__sections">
      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.original-invitation") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.original-education-document") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("pages.first-higher.arriving-documents.original-education-document-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.original-birth-certificate") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("pages.first-higher.arriving-documents.original-birth-certificate-copy") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.medical-certificate") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.first-higher.arriving-documents.medical-certificate-vich") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.first-higher.arriving-documents.medical-certificate-ebola") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("pages.first-higher.arriving-documents.medical-certificate-climat") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("pages.first-higher.arriving-documents.medical-certificate-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.passport-study-visa") }}
          </div>
        </div>
      </div>


      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("pages.first-higher.arriving-documents.fotos") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
