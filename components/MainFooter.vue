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
        <logo class="footer__logo" />
      </div>
      <div class="footer__column footer__column_right_align">
        <div class="footer__phone footer__phone_with_messangers">+375 25 691 10 35</div>
        <div class="footer__messangers">(Viber, Telegram, Whatsapp)</div>
        <div class="footer__mail">inter.bseu@yandex.ru</div>
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
