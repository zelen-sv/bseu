<template>
  <div class="specialty-card">
    <div class="specialty-card__image-conteiner">
      <img class="specialty-card__image" src="@/assets/images/specialty-card.jpeg" alt="Specialty Link">
    </div>
    <div class="specialty-card__data">
      <div class="specialty-card__education-form">{{ $t('educationType.' + specialty.educationType) }}</div>
      <div class="specialty-card__title">{{ specialty.title }}</div>
      <div class="specialty-card__price">{{ specialty.price | usd }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      specialty: Object
    }
  }
</script>
