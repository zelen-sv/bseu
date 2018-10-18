<template>
  <div class="sidebar">
    <div class="sidebar__link"
        :class="addActiveStatus('training')"
        @click="setActive('training')"
        v-scroll-to="'#training'">
      <div class="sidebar__icon">
        <svgicon icon="library" width="21" height="16"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.training-and-courses.sidebar.training") }}
      </div>
    </div>
    <div class="sidebar__link"
        :class="addActiveStatus('courses-russian')"
        @click="setActive('courses-russian')"
         v-scroll-to="'#courses-russian'">
      <div class="sidebar__icon">
        <svgicon icon="student" width="18" height="22"></svgicon>
      </div>
      <div class="sidebar__text">
        {{ $t("pages.training-and-courses.sidebar.courses-russian") }}
      </div>
    </div>
  </div>
</template>

<script>
  import '@/components/icons/library.js'
  import '@/components/icons/student.js'

  export default {
    data () {
      return {
        active: 'training'
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
