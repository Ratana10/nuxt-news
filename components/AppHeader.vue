<template>
  <div class="container-fluid bg-light p-3 align-items-center">
    <div class="row">
      <div class="col-lg-3">
        <!-- Logo -->
        <div class="ml-3">
          <div class="text-white d-flex justify-content-center align-items-center"
            style="width: 52px; height: 37px; border-radius: 8px">
            <a href="../index.html">
              <img src="/logo/news.png" alt="" style="width: 55px; height: 55px" />
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 d-flex justify-content-center align-items-center">
        <!-- Search -->
        <div class="d-flex justify-content-center align-items-center">
          <form class="">
            <input class="form-control me-2" style="
                        border-radius: 10px;
                        width: 240px;
                        height: 32px;
                        font-size: 12px;
                     " type="text" placeholder="Search..." disabled />
          </form>
        </div>
      </div>

      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="col-md-12 d-flex justify-content-between align-items-center custom-text">
          <a class="nav-link text-secondary" href="../index.html">Home</a>
          <NuxtLink to="/technology" class="nav-link text-active">Technology</NuxtLink>
          <NuxtLink to="/sport" class="nav-link text-active">Sport</NuxtLink>
          <NuxtLink to="/aboutus" class="nav-link text-active">Aboutus</NuxtLink>
          <a class="nav-link text-secondary text-light " >National</a>
          <a class="nav-link text-secondary text-light " >International</a>
          <a class="nav-link text-secondary text-light " >Entertainment</a>
          <a class="nav-link text-secondary text-light " >Software</a>
          <a class="nav-link text-secondary text-light " >About Us</a>
        </div>
      </div>
    </div>
  </div>
</template>
