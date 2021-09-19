<template>
  <div class="d-none d-lg-block">
    <div class="p-5" style="background-color: #f9fff6">
      <div
        class="d-flex justify-content-between mx-auto p-4"
        style="max-width: 1140px; font-size: 14px"
      >
        <div>
          <img src="../assets/elemes.png" class="mb-4" />
          <p v-html="address" class="text-muted"></p>
          <div class="d-flex">
            <button
              v-for="button in contact1"
              :key="button.id"
              class="
                btn btn-outline-primary
                border-0
                rounded-circle
                text-success
                me-2
              "
              style="width: 40px; height: 40px"
            >
              <i :class="button.icon"></i>
            </button>
          </div>
        </div>

        <div>
          <p class="fw-bold">Categories</p>
          <ul class="nav d-none d-lg-block">
            <li v-for="link in categories" :key="link.id">
              <router-link
                :to="link.route"
                class="nav-link link-dark px-0 text-muted"
                >{{ link.title }}</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="fw-bold">About Us</p>
          <ul class="nav d-none d-lg-block">
            <li v-for="link in about" :key="link.id">
              <router-link
                :to="link.route"
                class="nav-link link-dark px-0 text-muted"
                >{{ link.title }}</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="fw-bold">Newsletter</p>
          <p class="text-muted" v-html="newsLetter"></p>
          <div class="input-group mb-3" style="width: 250px">
            <input
              type="text"
              class="form-control"
              placeholder="Your email address"
            />
            <button class="btn btn-primary" type="button">Button</button>
          </div>

          <div>
            <ul class="nav flex-column">
              <li v-for="detail in contact2" :key="detail.id">
                <a href="#" class="nav-link link-dark px-0">
                  <i :class="detail.icon" class="text-primary"></i>
                  {{ detail.content }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex bg-white justify-content-center py-4">
      <p class="mb-0 text-muted">
        <small>{{ copyRight }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterDesktop',

  data() {
    return {
      address: 'Jl. Prof. DR. Satrio No.7 RT.3/RW.3, Karet Kuningan, <br />Kecamatan Setiabudi, Kota Jakarta Selatan, <br /> Daerah Khusus Ibukota Jakarta 12950',

      contact1: [
        {
          id: 1,
          icon: 'bi bi-envelope',
        },
        {
          id: 2,
          icon: 'bi bi-telephone',
        },
        {
          id: 3,
          icon: 'bi bi-instagram',
        },
      ],

      categories: [
        {
          id: 1,
          title: 'Home',
          route: '/',
        },
        {
          id: 2,
          title: 'About',
          route: '/about',
        },
        {
          id: 3,
          title: 'Blogs',
          route: '/blogs',
        },
        {
          id: 4,
          title: 'Contact Us',
          route: '/contact-us',
        },
      ],

      about: [
        {
          id: 1,
          title: 'About Us',
          route: '/about',
        },
        {
          id: 2,
          title: 'FAQ',
          route: '/faq',
        },
        {
          id: 3,
          title: 'Report Problem',
          route: '/report-problem',
        },
      ],

      newsLetter: 'Get now free 50% discount for all<br />products on your first order',

      contact2: [
        {
          id: 1,
          icon: 'bi bi-envelope',
          content: 'elemesid@gmail.com',
        },
        {
          id: 2,
          icon: 'bi bi-telephone',
          content: '0888 1111 2222',
        },
      ],
    };
  },

  computed: {
    copyRight() {
      return `@ ${new Date().getFullYear()} ELEMES ID . ALL RIGHTS RESERVED`;
    },
  },
};
</script>

<style>
</style>
