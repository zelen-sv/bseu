<template>
  <div class="footer">
    <div class="footer__columns">
      <div class="footer__column">
        <nuxt-link :to="localePath('index')" tag="div" class="footer__link">
          {{ $t("components.main-footer.link_1") }}
        </nuxt-link>
        <nuxt-link :to="localePath('about-university')" tag="div" class="footer__link">
          {{ $t("components.main-footer.link_2") }}
        </nuxt-link>
        <nuxt-link :to="localePath('bseu-application')" tag="div" class="footer__link">
          {{ $t("components.main-footer.link_3") }}
        </nuxt-link>
        <a href="http://www.bseu.by" target="_blank" class="footer__logo-link"><logo class="footer__logo" /></a>
      </div>
      <div class="footer__column footer__column_right_align">
        <a href="tel:+375-25-691-10-35" class="footer__link footer__phone footer__phone_with_messangers">+375 25 691 10 35</a>
        <div class="footer__link footer__messangers">
          <a href="#" target="_blank"><img src="@/assets/images/viber-icon.png" class="footer__messanger-item" /></a>
          <a href="#" target="_blank"><img src="@/assets/images/telegram-icon.png" class="footer__messanger-item" /></a>
          <a href="#" target="_blank"><img src="@/assets/images/whatsapp-icon.png" class="footer__messanger-item" /></a>
        </div>
        <a href="mailto:inter.bseu@yandex.ru" class="footer__link footer__mail">inter.bseu@yandex.ru</a>
      </div>
    </div>
    <div class="footer__text footer__text_small">{{ $t("components.main-footer.development") }}</div>
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
