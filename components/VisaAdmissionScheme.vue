<template>
  <div class="admission-scheme">
    <div class="admission-scheme__step-container">
      <div class="admission-scheme__step">
        <img src="@/assets/images/online-bid.png" class="admission-scheme__step-picture" alt="online bid">
        <div class="admission-scheme__step-number">
          1
        </div>
        <div class="admission-scheme__step-text">
          {{ $t("components.visa-admission-scheme.first-step") }}
        </div>
      </div>
      <div class="admission-scheme__step">
        <img src="@/assets/images/documents.png" class="admission-scheme__step-picture" alt="online bid">
        <div class="admission-scheme__step-number">
          2
        </div>
        <div class="admission-scheme__step-text">
          {{ $t("components.visa-admission-scheme.second-step") }}
        </div>
      </div>
      <div class="admission-scheme__step">
        <img src="@/assets/images/invitation.png" class="admission-scheme__step-picture" alt="online bid">
        <div class="admission-scheme__step-number">
          3
        </div>
        <div class="admission-scheme__step-text">
          {{ $t("components.visa-admission-scheme.third-step") }}
        </div>
      </div>
      <div class="admission-scheme__step">
        <img src="@/assets/images/scheme-tickets.png" class="admission-scheme__step-picture" alt="online bid">
        <div class="admission-scheme__step-number">
          4
        </div>
        <div class="admission-scheme__step-text">
          {{ $t("components.visa-admission-scheme.fourth-step") }}
        </div>
      </div>
    </div>
    <div class="admission-scheme__details">
      {{ $t("components.visa-admission-scheme.details") }}
    </div>
  </div>
</template>
