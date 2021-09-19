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
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style>
</style>
