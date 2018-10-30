<template>
  <div class="specialty-modal" id="specialty-modal">
    <div class="specialty-modal__header">
      <div class="specialty-modal__header-text">
        <div class="specialty-modal__header-title">{{ specialty.title }}</div>
        <div class="specialty-modal__header-department">{{ specialty.faculty.title }}</div>
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
        <div class="specialty-modal__icon-text">Срок обучения<br />(кол-во лет)<br />{{ specialty.term }}</div>
      </div>
      <div class="specialty-modal__icon-container">
        <div class="specialty-modal__icon-item">
          <svgicon icon="money" width="62" height="56" color="#5E77FF"></svgicon>
        </div>
        <div class="specialty-modal__icon-text">Стоимость<br />{{ specialty.price | usd }} в год</div>
      </div>
      <div class="specialty-modal__icon-container">
        <div class="specialty-modal__icon-item">
          <svgicon :icon="educationFormIcon" width="56" height="56" color="#5E77FF"></svgicon>
        </div>
        <div class="specialty-modal__icon-text">Обучение<br />{{ $t('educationForm.' + specialty.educationForm) }}</div>
      </div>
    </div>

    <div class="specialty-modal__description">
      <div class="specialty-modal__description-title">Чему вы научитесь</div>
      <div class="specialty-modal__description-text">
        <p v-html="specialty.description"></p>
      </div>
    </div>

    <div class="specialty-modal__footer">
      <div class="specialty-modal__footer-title">Кем вы станете</div>
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
        switch (this.specialty.educationForm) {
          case 'Ochno':
            return 'sun'
            break;
          case 'Remote':
            return 'remote'
            break;
          case 'Zaochno':
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
