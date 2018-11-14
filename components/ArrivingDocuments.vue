<template>
  <div class="documents-list content-section" id="arriving-documents">
    <div class="documents-list__title content-section__legend">
      {{ $t("components.documents-list.arriving-documents.legend") }}
    </div>
    <div class="documents-list__icon">
      <svgicon icon="departures" width="200" height="156" color="rgba(179,179,179,1)"></svgicon>
    </div>
    <div class="documents-list__sections">
      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.arriving-documents.original-education-document") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("components.documents-list.arriving-documents.original-education-document-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.arriving-documents.original-birth-certificate") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("components.documents-list.arriving-documents.original-birth-certificate-copy") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.arriving-documents.medical-certificate") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.arriving-documents.medical-certificate-vich") }}
          </div>
          <div class="documents-list__section-item">
            -{{ $t("components.documents-list.arriving-documents.medical-certificate-climat") }}
          </div>
          <div class="documents-list__section-item documents-list__section-item_selected">
            + {{ $t("components.documents-list.arriving-documents.medical-certificate-translate") }}
          </div>
        </div>
      </div>

      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.arriving-documents.passport-study-visa") }}
          </div>
        </div>
      </div>


      <div class="documents-list__section">
        <div class="documents-list__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="documents-list__section-data">
          <div class="documents-list__section-title">
            {{ $t("components.documents-list.arriving-documents.fotos") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/components/icons/departures.js'

  export default {}
</script>
