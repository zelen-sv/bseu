<template>
  <div class="date-picker">
    <div class="date-picker__field">
      <v-select :options="rangeDays"
                :required="required"
                v-model="day"
                placeholder="День"
                max-height="300px"
                @input="updateDate" />
    </div>
    <div class="date-picker__field">
      <v-select :options="rangeMonthes"
                :required="required"
                v-model="month"
                placeholder="Месяц"
                max-height="300px"
                @input="updateDate" />
    </div>
    <div class="date-picker__field">
      <v-select :options="rangeYears"
                :required="required"
                v-model="year"
                placeholder="Год"
                max-height="300px"
                @input="updateDate"/>
    </div>
  </div>
</template>

<script>
  import { pickerRange } from '~/utils/range.js'

  export default {
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      modelValue: {
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      year_range_start: {
        type: Number,
        default: 1970
      },
      year_range_end: {
        type: Number,
        default: 2050
      }
    },
    data () {
      return {
        day: null,
        month: null,
        year: null
      }
    },
    computed: {
      rangeDays () {
        return pickerRange(1,31)
      },
      rangeMonthes () {
        return this.$t("components.date-picker.monthes")
      },
      rangeYears () {
        return pickerRange(this.year_range_start, this.year_range_end)
      }
    },
    methods: {
      updateDate () {
        if (this.day && this.month && this.year) {
          let date = [this.day, this.month.value, this.year].join('/')
          this.$emit('input', date)
        } else {
          this.$emit('input', '')
        }
      }
    }
  }
</script>
