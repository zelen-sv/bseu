<template>
  <div class="admission-documents content-section">
    <div class="admission-documents__title content-section__legend">
      {{ $t("pages.first-higher.admission-documents.legend") }}
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    text_1="ТРЕБУЕТСЯ ВИЗА"
                    text_2="ВИЗА НЕ НУЖНА"
                    :current_state="current_state" />
    <div class="admission-documents__description">
      <p>{{ $t("pages.first-higher.admission-documents.description-p1") }}</p>
      <p v-html="$t('pages.first-higher.admission-documents.description-p2')"></p>
    </div>
    <div class="admission-documents__sections">
      <div v-for="index in 3" :key="index" class="admission-documents__section">
        <div class="admission-documents__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="admission-documents__section-data">
          <div class="admission-documents__section-title">
            {{ $t("pages.first-higher.admission-documents.online-application") }}
          </div>
          <div class="admission-documents__section-common">
            {{ $t("pages.first-higher.admission-documents.application-details") }}
          </div>
          <div class="admission-documents__section-item">
            -{{ $t("pages.first-higher.admission-documents.application-document-1") }}
          </div>
          <div class="admission-documents__section-item">
            -{{ $t("pages.first-higher.admission-documents.application-document-2") }}
          </div>
          <div class="admission-documents__section-item">
            -{{ $t("pages.first-higher.admission-documents.application-document-3") }}
          </div>
          <div class="admission-documents__section-item">
            -{{ $t("pages.first-higher.admission-documents.application-document-4") }}
          </div>
          <div class="admission-documents__section-item">
            -{{ $t("pages.first-higher.admission-documents.application-document-5") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonsToggle from '~/components/ButtonsToggle.vue'

  export default {
    components: {
      ButtonsToggle
    },
    data () {
      return {
        current_state: 0
      }
    },
    methods: {
      chageComponentState (state) {
        this.current_state = state
      }
    }
  }
</script>
