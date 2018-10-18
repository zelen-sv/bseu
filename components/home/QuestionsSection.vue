<template>
  <div class="questions-section">
    <div class="questions-section__header section__side-legend">
      {{ $t("pages.home.questions-section.legend") }}
    </div>
    <div class="questions-section__list questions-section__list">
      <div v-show="!show_all_questions" v-for="(quiestion, index) in lastQuestions()"
           class="questions-section__item"
           :key="quiestion.id"
           @click="toggleQuestion(index)">
        <div class="questions-section__item-icon">
          <span class="arrow" :class="[quiestion.active ? 'bottom-filled-arrow' : 'right-filled-arrow']"></span>
        </div>
        <div class="questions-section__item-content">
          <div class="questions-section__item-title">{{ quiestion.title }}</div>
          <div v-show="quiestion.active" class="questions-section__item-description">{{ quiestion.description }}</div>
        </div>
      </div>
      <div v-show="show_all_questions" v-for="(quiestion, index) in questions"
           class="questions-section__item"
           :key="quiestion.id"
           @click="toggleQuestion(index)">
        <div class="questions-section__item-icon">
          <span class="arrow" :class="[quiestion.active ? 'bottom-filled-arrow' : 'right-filled-arrow']"></span>
        </div>
        <div class="questions-section__item-content">
          <div class="questions-section__item-title">{{ quiestion.title }}</div>
          <div v-show="quiestion.active" class="questions-section__item-description">{{ quiestion.description }}</div>
        </div>
      </div>

    </div>
    <div class="questions-section__show-all" @click="toggleQuestions()">
      <svgicon icon="questions" width="20" height="19" color="#1405F8"></svgicon>
      {{ this.questionsState() }}
    </div>
  </div>
</template>

<script>
  import '@/components/icons/questions.js'

  export default {
    data () {
      return {
        show_all_questions: false
      }
    },
    computed: {
      questions () {
        return this.$t("pages.home.faq-component.questions")
      }
    },
    methods: {
      toggleQuestion (index) {
        let question = this.questions[index]
        question.active = !question.active
      },
      toggleQuestions () {
        this.show_all_questions = !this.show_all_questions
      },
      questionsState () {
        if (this.show_all_questions) {
          return "Скрыть часть вопросов <"
        } else {
          return "Посмотреть все вопросы >"
        }
      },
      lastQuestions () {
        return this.questions.slice(0, 4)
      }
    }
  }
</script>
