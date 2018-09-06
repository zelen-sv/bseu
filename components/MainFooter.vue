<template>
  <div class="footer">
    <div class="footer__column">
      <div class="footer__link footer__link_active">{{ $t("components.main-footer.link_main") }}</div>
      <div class="footer__link">{{ $t("components.main-footer.link_questions") }}</div>
      <div class="footer__link">{{ $t("components.main-footer.link_documents") }}</div>
      <div class="footer__link">{{ $t("components.main-footer.link_news") }}</div>
      <logo class="footer__logo" />
    </div>
    <div class="footer__column footer__column_right_align">
      <div class="footer__phone">8 017 280 87 16</div>
      <div class="footer__phone footer__phone_with_messangers">+375 29 509 10 17</div>
      <div class="footer__messangers">(Viber, Telegram, Whatsapp)</div>
      <div class="footer__mail">inter.bseu@yandex.ru</div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>
