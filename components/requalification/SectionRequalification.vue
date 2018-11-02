<template>
  <div class="content-section" id="requalification">
    <div class="content-section__legend">{{ $t("pages.requalification.section-requalification.legend") }}</div>
    <p v-html="$t('pages.requalification.section-requalification.description_p1')"></p>
    <p>{{ $t("pages.requalification.section-requalification.description_p2") }}</p>
    <p>{{ $t("pages.requalification.section-requalification.description_p3") }}</p>
    <div class="row-icons section-requalification__icons">
      <div class="row-icons__icon-container">
        <img src="@/assets/images/student-cup.png" class="row-icons__icon">
        <div class="row-icons__icon-text">{{ $t("pages.requalification.section-requalification.icon-1") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/reward.png" class="row-icons__icon">
        <div class="row-icons__icon-text">{{ $t("pages.requalification.section-requalification.icon-2") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/training_time.png" class="row-icons__icon">
        <div class="row-icons__icon-text">{{ $t("pages.requalification.section-requalification.icon-3") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/zaochno-moon.png" class="row-icons__icon">
        <div class="row-icons__icon-text">{{ $t("pages.requalification.section-requalification.icon-4") }}</div>
      </div>
    </div>
  </div>
</template>
