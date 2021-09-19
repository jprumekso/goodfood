<template>
  <div class="row" style="margin-bottom: 160px">
    <div class="mb-4">
      <h3 class="fw-bold">Browse Our Trending</h3>
      <h3 class="text-primary fw-bold">Receipt</h3>
    </div>
    <div class="row mb-5" style="row-gap: 1.5rem">
      <div v-for="recipe in recipes" :key="recipe.id" class="col-12 col-lg-3">
        <div
          class="card receipt-card shadow-sm border-0"
          style="border-radius: 17px"
          :style="{ 'background-color': recipe.color }"
        >
          <div class="card-background"></div>
          <div class="card-body">
            <img
              :src="getImgUrl(recipe.imgFile)"
              :alt="recipe.name"
              style="width: 118.15px; height: 120px"
              class="mb-4"
            />
            <h5 class="card-title fw-bold">{{ recipe.name }}</h5>
            <p class="card-text text-primary">{{ recipe.category }}</p>
            <div v-html="showStar(recipe.rating)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary rounded-pill">ALL Receipt</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',

  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },

  computed: {
    starRating() {
      const filledStar = [];

      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < 4; index++) {
        filledStar.push('<i class="bi bi-star-filled"');
      }

      return filledStar;
    },
  },

  methods: {
    getImgUrl(img) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`@/assets/${img}`);
    },

    showStar(rating) {
      const starsMarkup = [];

      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < rating; index++) {
        starsMarkup.push('<i class="bi bi-star-fill text-warning"></i>');
      }

      const unfilledStar = 5 - rating;
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < unfilledStar; index++) {
        starsMarkup.push('<i class="bi bi-star-fill blank-star"></i>');
      }

      const starString = starsMarkup.join('');

      return starString;
    },
  },
};
</script>

<style>
  .blank-star {
    color: #c9c9c9;
  }

  .receipt-card .card-background {
    position: "relative";
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .receipt-card .card-background::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.07;
    z-index: -1;
    background-image: url("../assets/background.png");
    background-size: contain;
  }

  .receipt-card:hover .card-background {
    opacity: 1;
  }
</style>
