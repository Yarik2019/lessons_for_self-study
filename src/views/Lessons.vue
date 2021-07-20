<template>
<div>
  <sidebar-menu :menu="menu" />

  <router-view/>
</div>
</template>

<script>
import {SidebarMenu} from "vue-sidebar-menu";

export default {
  name: "Lessons",
  components:{
    SidebarMenu
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/lesson_zero',
          title: 'lesson_zero',
          icon: 'fa fa-user'
        },
        {
          href: '/lesson_one',
          title: 'lesson_one',
          icon: 'fa fa-chart-area',
          /* child: [
             {
               href: '/charts/sublink',
               title: 'Sub Link'
             }
           ]*/
        },

        {
          href: '/lesson_three',
          title: 'lesson_three',
          icon: 'fa fa-user'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>