<template>
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
              class="
                btn btn-outline-primary
                border-0
                rounded-circle
                text-success
                me-2
              "
              style="width: 40px; height: 40px"
            >
              <i class="bi bi-envelope"></i>
            </button>
            <button
              class="
                btn btn-outline-primary
                border-0
                rounded-circle
                text-success
                me-2
              "
              style="width: 40px; height: 40px"
            >
              <i class="bi bi-telephone"></i>
            </button>
            <button
              class="
                btn btn-outline-primary
                border-0
                rounded-circle
                text-success
                me-2
              "
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
</template>

<script>
export default {
  name: 'FooterDesktop',
};
</script>

<style>
</style>
