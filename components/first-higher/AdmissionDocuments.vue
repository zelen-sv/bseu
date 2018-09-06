<template>
  <div class="admission-documents content-section">
    <div class="admission-documents__title content-section__legend">
      Документы необходимые для поступления
    </div>
    <buttons-toggle @change-state="chageComponentState"
                    text_1="ТРЕБУЕТСЯ ВИЗА"
                    text_2="ВИЗА НЕ НУЖНА"
                    :current_state="current_state" />
    <div class="admission-documents__description">
      <p>Документы необходимо выслать не позднее 15 сентября.</p>
      <p>
        Подавайте документы онлайн и после их рассмотрения<br />
        мы сообщим Вам, когда сможем выслать официальное приглашение!
      </p>
    </div>
    <div class="admission-documents__sections">
      <div class="admission-documents__section">
        <div class="admission-documents__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="admission-documents__section-data">
          <div class="admission-documents__section-title">Онлайн-заявление</div>
          <div class="admission-documents__section-common">, в котором обязательно указываете:</div>
          <div class="admission-documents__section-item">-факультет</div>
          <div class="admission-documents__section-item">-специальность</div>
          <div class="admission-documents__section-item">-форма обучения (очно, заочно)</div>
          <div class="admission-documents__section-item">-полный почтовый адрес</div>
          <div class="admission-documents__section-item">-адрес электронной почты или номер факса</div>
        </div>
      </div>

      <div class="admission-documents__section">
        <div class="admission-documents__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="admission-documents__section-data">
          <div class="admission-documents__section-title">Онлайн-заявление</div>
          <div class="admission-documents__section-common">, в котором обязательно указываете:</div>
          <div class="admission-documents__section-item">-факультет</div>
          <div class="admission-documents__section-item">-специальность</div>
          <div class="admission-documents__section-item">-форма обучения (очно, заочно)</div>
          <div class="admission-documents__section-item">-полный почтовый адрес</div>
          <div class="admission-documents__section-item">-адрес электронной почты или номер факса</div>
        </div>
      </div>

      <div class="admission-documents__section">
        <div class="admission-documents__section-icon">
          <div class="dot dot_blue"></div>
        </div>
        <div class="admission-documents__section-data">
          <div class="admission-documents__section-title">Онлайн-заявление</div>
          <div class="admission-documents__section-common">, в котором обязательно указываете:</div>
          <div class="admission-documents__section-item">-факультет</div>
          <div class="admission-documents__section-item">-специальность</div>
          <div class="admission-documents__section-item">-форма обучения (очно, заочно)</div>
          <div class="admission-documents__section-item">-полный почтовый адрес</div>
          <div class="admission-documents__section-item">-адрес электронной почты или номер факса</div>
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
