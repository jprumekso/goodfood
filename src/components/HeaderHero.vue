<template>
  <div class="hero row align-items-center g-5 py-5">
    <div class="col-12 col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3 text-primary">
        Good Food Us <br />
        Good Mood
      </h1>
      <div class="d-flex justify-content-center d-lg-none py-5">
        <div
          class="p-4 rounded-circle"
          style="width: 300px; height: 300px; background-color: #f4f4f4"
        >
          <img
            src="../assets/hero.png"
            class="hero-image d-block mx-lg-auto img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <p class="lead text-muted">
        I would think that conserving our natural resources should be a
        conservative position. Not to waste food, and not to throw away a lot of
        the food that we buy.
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
      <div
        class="p-5 rounded-circle d-flex justify-content-center"
        style="width: 450px; height: 450px; background-color: #f4f4f4"
      >
        <img
          src="../assets/hero.png"
          class="hero-image d-block mx-lg-auto img-fluid"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHero',
};
</script>

<style>
  .hero {
    position: "relative";
    z-index: 1;
  }

  .hero::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
    opacity: 0.03;
    z-index: -1;
    background-image: url("../assets/background.png");
    background-size: auto;
    background-repeat: no-repeat;
  }
</style>
