<template>
  <div class="sidebar">
    <div class="sidebar__link"
        :class="addActiveStatus('bseu-education')"
        @click="setActive('bseu-education')"
        v-scroll-to="'#bseu-education'">
      <div class="sidebar__icon"></div>
      <div class="sidebar__text">
        {{ $t("pages.first-higher.sidebar.bseu-education") }}
      </div>
    </div>
    <div class="sidebar__link"
        :class="addActiveStatus('specialties-list')"
        @click="setActive('specialties-list')"
         v-scroll-to="'#specialties-list'">
      <div class="sidebar__icon"></div>
      <div class="sidebar__text">
        {{ $t("pages.first-higher.sidebar.specialties-list") }}
      </div>
    </div>
    <div class="sidebar__link"
        :class="addActiveStatus('admission-documents')"
        @click="setActive('admission-documents')"
        v-scroll-to="'#admission-documents'">
      <div class="sidebar__icon"></div>
      <div class="sidebar__text">
        {{ $t("pages.first-higher.sidebar.admission-documents") }}
      </div>
    </div>
    <div class="sidebar__link"
        :class="addActiveStatus('arriving-documents')"
        @click="setActive('arriving-documents')"
        v-scroll-to="'#arriving-documents'">
      <div class="sidebar__icon"></div>
      <div class="sidebar__text">
        {{ $t("pages.first-higher.sidebar.local-documents") }}
      </div>
    </div>
    <div class="sidebar__link"
        :class="addActiveStatus('how-to-enter')"
        @click="setActive('how-to-enter')"
        v-scroll-to="'#how-to-enter'">
      <div class="sidebar__icon"></div>
      <div class="sidebar__text">
        {{ $t("pages.first-higher.sidebar.admission") }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 'bseu-education'
      }
    },
    methods: {
      setActive (link) {
        this.active = link
      },
      isActive (link) {
        return this.active == link
      },
      addActiveStatus (link) {
        if (this.isActive(link)) {
          return 'sidebar__link_active'
        } else {
          return ''
        }
      }
    }
  }
</script>
