/* eslint-disable global-require */
<template>
  <div class="container">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/elemes.png"
            class="d-inline-block align-text-top"
          />
        </a>
        <ul
          class="nav d-none d-lg-flex justify-content-center mb-md-0"
          style="column-gap: 2rem"
        >
          <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
          <li>
            <a href="#" class="nav-link px-2 link-dark position-relative">
              Promotions
              <span
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
            </a>
          </li>
          <li><a href="#" class="nav-link px-2 link-dark">Blogs</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Contact Us</a></li>
        </ul>
        <div>
          <a href="#" class="btn d-none d-lg-inline-block me-2">Masuk</a>
          <a href="#" class="btn btn-primary rounded-pill">Daftar Sekarang</a>
        </div>
      </div>
    </nav>
    <!-- End of Navigation bar -->

    <!-- Hero Header -->
    <div class="row align-items-center g-5 py-5">
      <div class="col-12 col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-primary">
          Good Food Us <br />
          Good Mood
        </h1>
        <img
          src="../assets/hero.png"
          class="d-block d-lg-none mx-lg-auto py-5"
          loading="lazy"
          style="width: 230px"
        />
        <p class="lead">
          I would think that conserving our natural resources should be a
          conservative position. Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div class="d-flex">
          <button
            type="button"
            class="btn btn-primary btn-lg rounded-pill px-4 me-4 shadow"
          >
            Daftar Sekarang
          </button>
          <button type="button" class="btn btn-light btn-lg rounded-pill px-4">
            About Us
          </button>
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-6">
        <img
          src="../assets/hero.png"
          class="d-block mx-lg-auto img-fluid"
          loading="lazy"
        />
      </div>
    </div>
    <!-- End of Hero Header -->

    <!-- Category Section -->
    <div class="row mb-5 py-5">
      <h3>Browse Our Category</h3>
      <h3 class="text-primary">Receipt</h3>
      <div
        class="row flex-nowrap mb-4 g-2"
        style="overflow-x: scroll; scrollbar-width: none"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          class="col"
          style="flex-basis: 230px"
        >
          <div
            class="card"
            style="max-width: 230px; height: 170px; border-radius: 8px"
            :style="{ 'background-color': category.color }"
          >
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
            class="
              d-inline-block
              rounded-circle
              text-success
              bg-white
              px-1
              me-1
            "
          >
            <i class="bi bi-chevron-left"></i>
          </span>
          Prev
        </button>
        <button class="btn btn-primary rounded-pill text-uppercase">
          Next
          <span
            class="
              d-inline-block
              rounded-circle
              text-success
              bg-white
              px-1
              ms-1
            "
          >
            <i class="bi bi-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
    <!-- End of Category Section -->

    <!-- Receipt Section -->
    <div class="row" style="margin-bottom: 160px">
      <h3>Browse Our Trending</h3>
      <h3 class="text-primary">Receipt</h3>
      <div class="row mb-5" style="row-gap: 1.5rem">
        <div v-for="recipe in recipes" :key="recipe.id" class="col-12 col-lg-3">
          <div
            class="card shadow-sm"
            style="border-radius: 17px"
            :style="{ 'background-color': recipe.color }"
          >
            <div class="card-body">
              <img
                :src="getImgUrl(recipe.imgFile)"
                :alt="recipe.name"
                style="width: 118.15px; height: 120px"
                class="mb-4"
              />
              <h5 class="card-title">{{ recipe.name }}</h5>
              <p class="card-text text-primary">{{ recipe.category }}</p>
              <div class="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary rounded-pill">ALL Receipt</button>
      </div>
    </div>
    <!-- End of Receipt Section -->
  </div>

  <!-- Desktop Footer -->
  <div class="d-none d-lg-block">
    <div class="p-5" style="background-color: #f9fff6">
      <div
        class="d-flex justify-content-between mx-auto p-4"
        style="max-width: 1140px; font-size: 14px"
      >
        <div>
          <img src="../assets/elemes.png" class="mb-4" />
          <p class="text-muted">
            Jl. Prof. DR. Satrio No.7 RT.3/RW.3, Karet Kuningan, <br />
            Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
            Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div class="d-flex">
            <button
              class="btn rounded-circle text-success me-2"
              style="width: 40px; height: 40px"
            >
              <i class="bi bi-envelope"></i>
            </button>
            <button
              class="btn rounded-circle text-success me-2"
              style="width: 40px; height: 40px"
            >
              <i class="bi bi-telephone"></i>
            </button>
            <button
              class="btn rounded-circle text-success me-2"
              style="width: 40px; height: 40px"
            >
              <i class="bi bi-instagram"></i>
            </button>
          </div>
        </div>

        <div>
          <p class="fw-bold">Categories</p>
          <ul class="nav d-none d-lg-block">
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted">Home</a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted">About</a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted">Blogs</a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="fw-bold">About Us</p>
          <ul class="nav d-none d-lg-block">
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted"
                >About Us</a
              >
            </li>
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted">FAQ</a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark px-0 text-muted"
                >Report Problem</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="fw-bold">Newsletter</p>
          <p class="text-muted">
            Get now free 50% discount for all<br />products on your first order
          </p>
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
              <li>
                <a href="#" class="nav-link link-dark px-0"
                  ><i class="bi bi-envelope text-primary"></i>
                  elemesid@gmail.com</a
                >
              </li>
              <li>
                <a href="#" class="nav-link link-dark px-0"
                  ><i class="bi bi-envelope text-primary"></i> 0888 1111 2222</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex bg-white justify-content-center py-4">
      <p class="mb-0 text-muted">
        <small>@ 2021 ELEMES ID . ALL RIGHTS SERVED</small>
      </p>
    </div>
  </div>

  <!-- Mobile Footer -->
  <div class="d-block d-lg-none container">
    <div class="d-flex justify-content-between">
      <button class="btn text-muted">
        <i
          class="bi bi-house-door d-block"
          style="font-size: 1.75rem; margin-bottom: -8px"
        ></i>
        <small style="font-size: 12px">Home</small>
      </button>
      <button class="btn text-muted">
        <i
          class="bi bi-award d-block"
          style="font-size: 1.75rem; margin-bottom: -8px"
        ></i>
        <small style="font-size: 12px">Promotions</small>
      </button>
      <button class="btn text-muted">
        <i
          class="bi bi-list d-block"
          style="font-size: 1.75rem; margin-bottom: -8px"
        ></i>
        <small style="font-size: 12px">Others</small>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

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
          color: '',
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
