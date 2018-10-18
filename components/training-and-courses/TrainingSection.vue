<template>
  <div class="training-section content-section" id="training">
    <div class="content-section__legend">{{ $t("pages.training-and-courses.training-section.legend") }}</div>
    <p>{{ $t('pages.training-and-courses.training-section.description_p1') }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p2") }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p3") }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p4") }}</p>
    <div class="training-section__icons">
      <div class="training-section__icon-container">
        <img src="@/assets/images/exams-free.png" class="training-section__icon">
        <div class="training-section__icon-text">{{ $t("pages.training-and-courses.training-section.icon-1") }}</div>
      </div>
      <div class="training-section__icon-container">
        <img src="@/assets/images/training_group.png" class="training-section__icon">
        <div class="training-section__icon-text">{{ $t("pages.training-and-courses.training-section.icon-2") }}</div>
      </div>
      <div class="training-section__icon-container">
        <img src="@/assets/images/training_time.png" class="training-section__icon">
        <div class="training-section__icon-text">{{ $t("pages.training-and-courses.training-section.icon-3") }}</div>
      </div>
      <div class="training-section__icon-container">
        <img src="@/assets/images/hostel.png" class="training-section__icon">
        <div class="training-section__icon-text">{{ $t("pages.training-and-courses.training-section.icon-4") }}</div>
      </div>
    </div>
    <div class="training-section__additionally">
      {{ $t("pages.training-and-courses.training-section.additionally") }}
    </div>
  </div>
</template>
