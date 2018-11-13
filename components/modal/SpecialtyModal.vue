<template>
  <div class="specialty-modal" id="specialty-modal">
    <div class="specialty-modal__header">
      <div class="specialty-modal__header-text">
        <div class="specialty-modal__header-title">{{ specialty.title }}</div>
        <div class="specialty-modal__header-department">{{ specialty.faculty }}</div>
      </div>
      <div class="specialty-modal__header-buttons">
        <circle-cross @click.native="close" />
      </div>
    </div>

    <div class="specialty-modal__icons">
      <div class="specialty-modal__icon-container">
        <div class="specialty-modal__icon-item">
          <svgicon icon="calendar" width="54" height="56" color="#5E77FF"></svgicon>
        </div>
        <div class="specialty-modal__icon-text">
          {{ $t('components.specialty-modal.term_text_1') }}<br />
          {{ $t('components.specialty-modal.term_text_2') }}<br />{{ specialty.term }}
        </div>
      </div>
      <div class="specialty-modal__icon-container">
        <div class="specialty-modal__icon-item">
          <svgicon icon="money" width="62" height="56" color="#5E77FF"></svgicon>
        </div>
        <div class="specialty-modal__icon-text">{{ $t('components.specialty-modal.price') }}<br />{{ specialty.price | usd }} {{ $t('components.specialty-modal.price_in_year') }}</div>
      </div>
      <div class="specialty-modal__icon-container">
        <div class="specialty-modal__icon-item">
          <svgicon :icon="educationFormIcon" width="56" height="56" color="#5E77FF"></svgicon>
        </div>
        <div class="specialty-modal__icon-text">{{ $t('components.specialty-modal.education_form_text') }}<br />{{ $t('educationForm.' + specialty.education_form) }}</div>
      </div>
    </div>

    <div class="specialty-modal__description">
      <div class="specialty-modal__description-title">{{ $t('components.specialty-modal.description_title') }}</div>
      <div class="specialty-modal__description-text">
        <p v-html="specialty.description"></p>
      </div>
    </div>

    <div class="specialty-modal__footer">
      <div class="specialty-modal__footer-title">{{ $t('components.specialty-modal.qualification_title') }}</div>
      <div class="specialty-modal__footer-qualifications">
        <div class="specialty-modal__footer-qualification"
             v-for="qualification in specialty.qualification"
             :key="qualification.id">
          <div class="specialty-modal__footer-qualification-text">{{ qualification | capitalize }}</div>
        </div>
      </div>
      <application-button />
    </div>
  </div>
</template>


<script>
  import '@/components/icons/money.js'
  import '@/components/icons/moon.js'
  import '@/components/icons/calendar.js'
  import '@/components/icons/sun.js'
  import '@/components/icons/remote.js'
  import '@/components/icons/envelope.js'
  import printElement from '@/utils/printElement.js'
  import modalStyles from '@/assets/scss/common/specialty-modal.scss'
  import ApplicationButton from '@/components/ApplicationButton.vue'
  import CircleCross from '@/components/CircleCross.vue'

  export default {
    components: {
      ApplicationButton, CircleCross
    },
    computed: {
      specialty () {
        return this.$store.getters.currentSpecialty
      },
      educationFormIcon () {
        switch (this.specialty.education_form) {
          case 'ochno':
            return 'sun'
            break;
          case 'remote':
            return 'remote'
            break;
          case 'zaochno':
            return 'moon'
            break;
          default:
            return 'sun'
        }
      }
    },
    methods: {
      close() {
        this.$store.dispatch('closeModal')
      }
    }
  }
</script>
