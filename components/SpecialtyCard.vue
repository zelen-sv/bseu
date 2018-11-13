<template>
  <div class="specialty-card">
    <div class="specialty-card__image-conteiner">
      <img class="specialty-card__image" :src="specialty.image" alt="Specialty Link">
    </div>
    <div class="specialty-card__data">
      <div class="specialty-card__education-form">{{ $t('educationProgram.' + specialty.education_program) }}</div>
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
