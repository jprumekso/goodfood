<template>
  <div class="d-block d-lg-none container fixed-bottom bg-white">
    <div class="d-flex justify-content-between">
      <router-link
        v-for="menu in menus"
        :key="menu.id"
        :to="menu.route"
        class="btn link-secondary"
      >
        <i
          class="d-block"
          :class="menu.icon"
          style="font-size: 1.75rem; margin-bottom: -8px"
        ></i>
        <small style="font-size: 12px">{{ menu.title }}</small>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMobile',

  data() {
    return {
      menus: [
        {
          id: 1,
          title: 'Home',
          icon: 'bi bi-house-door',
          route: '/',
        },
        {
          id: 2,
          title: 'Promotions',
          icon: 'bi bi-award',
          route: '/promotions',
        },
        {
          id: 1,
          title: 'Home',
          icon: 'bi bi-list',
          route: '/faq',
        },
      ],
    };
  },
};
</script>

<style>
</style>
