<template>
  <div class="specialty-modal" id="specialty-modal">
    <div class="specialty-modal__header">
      <div class="specialty-modal__header-text">
        <div class="specialty-modal__header-title">{{ specialty.title }}</div>
        <div class="specialty-modal__header-department">{{ specialty.faculty.title }}</div>
      </div>
      <div class="specialty-modal__header-buttons">
        <div class="specialty-modal__header-button circle-text-icon" @click="close">
          <svgicon icon="cross" width="19" height="19" color="#0018AB"></svgicon>
        </div>
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
      <button class="button_application button">
        <svgicon icon="envelope" width="21" height="16" color="#fff" class="button_application__icon"></svgicon>
        Подача документов онлайн
      </button>
    </div>
  </div>
</template>


<script>
  import '@/components/icons/money.js'
  import '@/components/icons/moon.js'
  import '@/components/icons/calendar.js'
  import '@/components/icons/sun.js'
  import '@/components/icons/envelope.js'
  import '@/components/icons/cross.js'
  import printElement from '@/utils/printElement.js'
  import modalStyles from '@/assets/scss/common/specialty-modal.scss'

  export default {
    computed: {
      specialty () {
        return this.$store.getters.currentSpecialty
      },
      educationFormIcon () {
        if (this.specialty.educationForm == 'Ochno') {
          return 'sun'
        } else {
          return 'moon'
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
