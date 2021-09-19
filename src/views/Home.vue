/* eslint-disable global-require */
<template>
  <div class="container">
    <!-- Navigation Bar -->
    <app-navbar></app-navbar>
    <!-- End of Navigation bar -->

    <!-- Hero Header -->
    <header-hero></header-hero>
    <!-- End of Hero Header -->

    <!-- Category Section -->
    <category-card :categories="categories"></category-card>
    <!-- End of Category Section -->

    <!-- Recipe Section -->
    <recipe-card :recipes="recipes"></recipe-card>>
    <!-- End of Recipe Section -->
  </div>

  <!-- Desktop Footer -->
  <footer-desktop></footer-desktop>
  <!-- End of Desktop Footer -->

  <!-- Mobile Footer -->
  <footer-mobile></footer-mobile>
  <!-- End of Mobile Footer -->
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import HeaderHero from '@/components/HeaderHero.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import RecipeCard from '@/components/RecipeCard.vue';
import FooterDesktop from '@/components/FooterDesktop.vue';
import FooterMobile from '@/components/FooterMobile.vue';

export default {
  name: 'Home',

  components: {
    AppNavbar,
    HeaderHero,
    CategoryCard,
    RecipeCard,
    FooterDesktop,
    FooterMobile,
  },

  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Cupcake',
          qty: 22,
          imgFile: 'cupcake.png',
          color: '#F0FEEB',
        },
        {
          id: 2,
          name: 'Pizza',
          qty: 25,
          imgFile: 'pizza.png',
          color: '#EAEEFA',
        },
        {
          id: 3,
          name: 'Kebab',
          qty: 12,
          imgFile: 'kebab.png',
          color: '#EAEEFA',
        },
        {
          id: 4,
          name: 'Salmon',
          qty: 22,
          imgFile: 'salmon.png',
          color: '#F9EEF3',
        },
        {
          id: 5,
          name: 'Doughnut',
          qty: 11,
          imgFile: 'doughnut.png',
          color: '#F3F7D9',
        },
        {
          id: 6,
          name: 'Cupcake',
          qty: 11,
          imgFile: 'cupcake.png',
          color: '#F0FEEB',
        },
      ],
      recipes: [
        {
          id: 1,
          name: 'Pizza Paperoni',
          category: 'Pizza',
          rating: 4,
          imgFile: 'pizza-paperoni.png',
          color: '#E6F3F5',
        },
        {
          id: 2,
          name: 'Pizza Meat',
          category: 'Pizza',
          rating: 3,
          imgFile: 'pizza-meat.png',
          color: '#E6F3F5',
        },
        {
          id: 3,
          name: 'Doner Kebab',
          category: 'Kebab',
          rating: 5,
          imgFile: 'doner-kebab.png',
          color: '#EAEEFA',
        },
        {
          id: 4,
          name: 'Salmon Roll',
          category: 'Salmon',
          rating: 4,
          imgFile: 'salmon-roll.png',
          color: '#F9EEF3',
        },
        {
          id: 6,
          name: 'Cupcake Choco',
          category: 'Cupcake',
          rating: 4,
          imgFile: 'cupcake-choco.png',
          color: '#F0FEEB',
        },
        {
          id: 7,
          name: 'Doughnut Milk',
          category: 'Doughnut',
          rating: 5,
          imgFile: 'doughnut-milk.png',
          color: '#F3F7D9',
        },
        {
          id: 8,
          name: 'Doughnut Unicorn',
          category: 'Doughnut',
          rating: 4,
          imgFile: 'doughnut-unicorn.png',
          color: '#F3F7D9',
        },
        {
          id: 9,
          name: 'Kathi Kebab',
          category: 'Kebab',
          rating: 4,
          imgFile: 'kathi-kebab.png',
          color: '#EAEEFA',
        },
      ],
    };
  },

  methods: {
    getQtyLabel(name, count) {
      return count > 1 ? `${name}s` : name;
    },

    getImgUrl(img) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`@/assets/${img}`);
    },
  },
};
</script>

<style>
</style>
