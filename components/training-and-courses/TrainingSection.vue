<template>
  <div class="training-section content-section" id="training">
    <h1 class="content-section__legend">{{ $t("pages.training-and-courses.training-section.legend") }}</h1>
    <p>{{ $t('pages.training-and-courses.training-section.description_p1') }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p2") }}</p>
    <p class="content-section__list-text">{{ $t("pages.training-and-courses.training-section.dot_text_1") }}</p>
    <p class="content-section__list-text">{{ $t("pages.training-and-courses.training-section.dot_text_2") }}</p>
    <p class="content-section__list-text">{{ $t("pages.training-and-courses.training-section.dot_text_3") }}</p>
    <p class="content-section__list-text">{{ $t("pages.training-and-courses.training-section.dot_text_4") }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p3") }}</p>
    <p>{{ $t("pages.training-and-courses.training-section.description_p4") }}</p>
    <div class="row-icons training-section__icons">
      <div class="row-icons__icon-container">
        <img src="@/assets/images/exams-free.png" class="row-icons__icon" alt="section training-section icon">
        <div class="row-icons__icon-text">{{ $t("pages.training-and-courses.training-section.icon-1") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/training_group.png" class="row-icons__icon" alt="section training-section icon">
        <div class="row-icons__icon-text">{{ $t("pages.training-and-courses.training-section.icon-2") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/training_time.png" class="row-icons__icon" alt="section training-section icon">
        <div class="row-icons__icon-text">{{ $t("pages.training-and-courses.training-section.icon-3") }}</div>
      </div>
      <div class="row-icons__icon-container">
        <img src="@/assets/images/hostel.png" class="row-icons__icon" alt="section training-section icon">
        <div class="row-icons__icon-text">{{ $t("pages.training-and-courses.training-section.icon-4") }}</div>
      </div>
    </div>
    <div class="training-section__additionally">
      {{ $t("pages.training-and-courses.training-section.additionally") }}
    </div>
  </div>
</template>
