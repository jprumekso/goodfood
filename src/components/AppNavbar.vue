<template>
  <nav class="navbar navbar-light bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/elemes.png" class="d-inline-block align-text-top" />
      </a>
      <ul
        class="nav d-none d-lg-flex justify-content-center mb-md-0"
        style="column-gap: 2rem"
      >
        <li v-for="menu in menus" :key="menu.id">
          <router-link
            :to="menu.route"
            class="nav-link px-2 link-secondary"
            :class="{ 'position-relative': menu.isHot }"
          >
            {{ menu.title }}
            <span
              v-if="menu.isHot"
              class="
                position-absolute
                top-0
                translate-middle
                badge
                rounded-pill
                bg-danger
                text-uppercase
              "
              style="left: 90% !important"
            >
              <small>Hot</small>
            </span>
          </router-link>
        </li>
      </ul>
      <div class="menu-actions">
        <a
          v-for="action in menuActions"
          :key="action.id"
          href="#"
          class="btn d-none d-lg-inline-block"
          :class="{
            'btn-primary': action.isPrimary,
            'rounded-pill': action.isPrimary,
          }"
          >{{ action.title }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',

  data() {
    return {
      menus: [
        {
          id: 1,
          title: 'Home',
          route: '/',
          isHot: false,
        },
        {
          id: 2,
          title: 'About',
          route: '/about',
          isHot: false,
        },
        {
          id: 3,
          title: 'Promotions',
          route: '/promotions',
          isHot: true,
        },
        {
          id: 4,
          title: 'Blogs',
          route: '/blogs',
          isHot: false,
        },
        {
          id: 5,
          title: 'Contact Us',
          route: '/contact-us',
          isHot: false,
        },
      ],

      menuActions: [
        {
          id: 1,
          title: 'Masuk',
          isPrimary: false,
        },
        {
          id: 2,
          title: 'Daftar Sekarang',
          isPrimary: true,
        },
      ],
    };
  },
};
</script>

<style>
  .menu-actions:last-child {
    margin-left: 1.5rem;
  }
</style>
