<template>
  <div class="row mb-5 py-5">
    <div class="mb-4">
      <h3 class="fw-bold">Browse Our Category</h3>
      <h3 class="fw-bold text-primary">Receipt</h3>
    </div>
    <div
      class="row flex-nowrap mb-5 g-2"
      style="overflow-x: scroll; scrollbar-width: none; row-gap: 0.25rem"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="col"
        style="flex-basis: 230px"
      >
        <div
          class="card category-card border-0"
          style="max-width: 230px; height: 170px; border-radius: 8px"
          :style="{ 'background-color': category.color }"
        >
          <div class="card-background"></div>
          <div class="card-body text-center">
            <img
              :src="getImgUrl(category.imgFile)"
              :alt="category.name"
              style="width: 47px; height: 47px"
              class="mb-4"
            />
            <h5 class="card-title">{{ category.name }}</h5>
            <p class="card-text">
              <small class="text-muted"
                >{{ category.qty }}
                {{ getQtyLabel("item", category.qty) }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary rounded-pill text-uppercase me-3">
        <span
          class="d-inline-block rounded-circle text-success bg-white px-1 me-1"
        >
          <i class="bi bi-chevron-left"></i>
        </span>
        Prev
      </button>
      <button class="btn btn-primary rounded-pill text-uppercase">
        Next
        <span
          class="d-inline-block rounded-circle text-success bg-white px-1 ms-1"
        >
          <i class="bi bi-chevron-right"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',

  props: {
    categories: {
      type: Array,
      required: true,
    },
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
  .category-card > .card-background {
    opacity: 0;
    position: "relative";
    z-index: 1;
  }

  .category-card > .card-background::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: -1;
    background-image: url("../assets/background.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .category-card {
    transition: all 0.3s;
  }

  .category-card:hover {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    transform: scaleX(0.93);
    padding-bottom: 15px;
  }

  .category-card:hover .card-background {
    opacity: 1;
  }
</style>
