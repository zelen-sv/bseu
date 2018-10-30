<template>
  <div class="form">
    <div class="form__line">
      <div class="form__item form__item_half-width">
        <label class="form__label">{{ $t("components.form.form-fields.second_name") }}:</label>
        <input v-model="bid.second_name" class="form__input">
      </div>
      <div class="form__item form__item_half-width">
        <label class="form__label">{{ $t("components.form.form-fields.first_name") }}:</label>
        <input v-model="bid.first_name" class="form__input">
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.gender.label") }}:</label>
        <div class="form__radio-buttons form__radio-buttons_inline">
          <radio-button v-model="bid.gender"
                        :value="1"
                        :label="$t('components.form.form-fields.gender.male')"
                        class="form__radio-button" />
          <radio-button v-model="bid.gender"
                        :value="2"
                        :label="$t('components.form.form-fields.gender.female')"
                        class="form__radio-button" />
        </div>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.birthday") }}:</label>
        <date-picker v-model="bid.birthday" class="form__date-picker" />
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.nationality") }}:</label>
        <countries-select v-model="bid.nationality" class="form__select" />
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.passport_id") }}:</label>
        <input v-model="bid.passport_id" class="form__input">
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.passport_starts_at") }}:</label>
        <date-picker v-model="bid.passport_starts_at" class="form__date-picker" :year_range_start="2000" :year_range_end="2050" />
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.passport_authority") }}:</label>
        <input v-model="bid.passport_authority" class="form__input">
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.passport_ends_at") }}:</label>
        <date-picker v-model="bid.passport_ends_at" class="form__date-picker" :year_range_start="2019" :year_range_end="2050"/>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.email") }}:</label>
        <input v-model="bid.email" type="email" class="form__input">
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.phone") }}:</label>
        <phone-input v-model="bid.phone" class="form__input" />
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.education_type.label") }}:</label>
        <div class="form__radio-buttons form__radio-buttons_column">
          <radio-button v-model="bid.education_type"
                        value="бакалавриат"
                        :label="$t('components.form.form-fields.education_type.bakalavr')"
                        class="form__radio-button" />
          <radio-button v-model="bid.education_type"
                        value="магистратура"
                        :label="$t('components.form.form-fields.education_type.magistracy')"
                        class="form__radio-button" />
          <radio-button v-model="bid.education_type"
                        value="второе высшее"
                        :label="$t('components.form.form-fields.education_type.second-higher')"
                        class="form__radio-button" />
          <radio-button v-model="bid.education_type"
                        value="подготовительное отделение"
                        :label="$t('components.form.form-fields.education_type.training')"
                        class="form__radio-button" />
          <radio-button v-model="bid.education_type"
                        value="курсы русского языка"
                        :label="$t('components.form.form-fields.education_type.courses')"
                        class="form__radio-button" />
        </div>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.education_form.label") }}:</label>
        <div class="form__radio-buttons form__radio-buttons_inline">
          <radio-button v-for="educatioForm in currentEducationForms"
                        :key="educatioForm.id"
                        v-model="bid.education_form"
                        :value="$t(`components.form.form-fields.education_form.${educatioForm}.value`)"
                        :label="$t(`components.form.form-fields.education_form.${educatioForm}.label`)"
                        class="form__radio-button" />
        </div>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.hostel.label") }}:</label>
        <div class="form__radio-buttons form__radio-buttons_inline">
          <radio-button v-model="bid.hostel"
                        :value="true"
                        :label="$t('components.form.form-fields.hostel.with')"
                        class="form__radio-button" />
          <radio-button v-model="bid.hostel"
                        :value="false"
                        :label="$t('components.form.form-fields.hostel.without')"
                        class="form__radio-button" />
        </div>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line">
      <div class="form__item form__item_full-width">
        <label class="form__label">{{ $t("components.form.form-fields.arrival_date.label") }}:</label>
        <date-picker v-model="bid.arrival_date" class="form__date-picker"  :year_range_start="2019" :year_range_end="2021"/>
        <span class="form__details">* {{ $t("components.form.form-fields.arrival_date.span") }}</span>
      </div>
    </div>
    <div class="form__separator"></div>
    <div class="form__line form__line_centered">
      <div id="form-error-message" class="form__error-message"></div>
      <button class="form__submit button_application button" @click="formSubmit" :class="isFormValid ? '' : 'button_application_disabled'">
        <svgicon icon="send-message" width="36" height="16" color="#fff" class="button_application__icon"></svgicon>
        {{ $t("components.form.button") }}
      </button>
    </div>
  </div>
</template>

<script>
  import '~/components/icons/send-message.js'
  import RadioButton from '~/components/RadioButton.vue'
  import DatePicker from '~/components/DatePicker.vue'
  import CountriesSelect from '~/components/CountriesSelect.vue'
  import PhoneInput from '~/components/PhoneInput.vue'

  export default {
    components: {
      RadioButton, DatePicker, CountriesSelect, PhoneInput
    },
    data () {
      return {
        bid: {
          first_name: '',
          second_name: '',
          gender: 1,
          birthday: '',
          nationality: '',
          passport_id: '',
          passport_starts_at: '',
          passport_authority: '',
          passport_ends_at: '',
          email: '',
          phone: '',
          education_type: 'бакалавриат',
          education_form: 'очно',
          arrival_date: '',
          hostel: true
        }
      }
    },
    computed: {
      currentEducationForms () {
        return this.educationForms()
      },
      isFormValid () {
        return Object.keys(this.bid).every(field => this.bid[field] || field == 'arrival_date');
      }
    },
    methods: {
      educationForms () {
        let forms = []
        switch (this.bid.education_type) {
          case 'бакалавриат':
            forms = ['ochno', 'zaochno']
            break;
          case 'магистратура':
            forms = ['ochno', 'zaochno']
            break;
          case 'второе высшее':
            forms = ['zaochno', 'remote']
            break;
          case 'подготовительное отделение':
            forms = ['ochno']
            break;
          case 'курсы русского языка':
            forms = ['ochno']
            break;
          default:
            forms = ['ochno', 'zaochno']
        }
        this.bid.education_form = this.$t(`components.form.form-fields.education_form.${forms[0]}.value`)
        return forms
      },
      async formSubmit() {
        if (this.isFormValid) {
          const response = await this.$axios.$post('/bids', this.bid)
          this.applicationSentModal()
        } else {
          this.showErrorMesage(this.$t("components.form.errors.all_fields_required"))
        }
      },
      showErrorMesage (message) {
        let element = document.getElementById('form-error-message')

        element.innerText = message
        element.classList.add('form__error-message_visible')
      },
      applicationSentModal() {
        this.$router.go(-1)
        this.$store.dispatch('showModal', 'ApplicationModal')
      }
    }
  }
</script>
