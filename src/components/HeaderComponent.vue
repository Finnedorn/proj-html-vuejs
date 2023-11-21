<template>
  <!--pre-header-->
  <div class="container-fluid bg-my-dark-grey">
    <div class="container py-2 d-flex  justify-content-between">
      <div class="pre-header text-my-blue">
        We have a 95% Succesfull Pass Rate!
      </div>
      <div class="pre-header text-my-blue d-none d-md-block">
        <i class="fa-solid fa-phone text-my-blue me-1"></i>
        Give us a call to book your tuition! 1-800-555-555
      </div>
    </div>
  </div>
  <div class="container-fluid hero-wrapper position-relative g-0 ">
    <!--navbar-->
    <div class="container-fluid navbar-wrapper py-4">
      <nav class="container navbar navbar-expand-lg d-flex  justify-content-between ">
        <div class="nav-logo-wrapper ms-2">
          <img src="../assets/images/avada-drivers-logo-2x-400x77.png" alt="avada_drivers_logo">
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0 " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(el,index) in store.navArr" :key="index">
              <a class="nav-link active text-light fw-bold px-4" aria-current="page" href="#">{{ el }}</a>
              <div class="greenbar"></div>
            </li>
          </ul>
          <button class="p-2 px-4 rounded-5 border-0 bg-my-green green-btn">
            <a class="nav-link active text-light fw-bold" aria-current="page" href="#">BOOK NOW</a>
          </button>
        </div>
      </nav>
    </div>
    <!--hero-title-->
    <div class="container">
      <div class="hero-title text-light ">
        <h1 class="hero-title-font">
          Drive with Avada
        </h1>
        <h4 class="fw-light">
          We offer finest driving tuition money can buy
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../assets/data/store' 
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        store
      } 
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.pre-header {
  font-size: 0.8rem;
}

.hero-wrapper {
  height: 750px;
  background-image: url(../assets/images/homepage-hero-background.jpg);
  background-size: cover;
}

.hero-title {
  padding-top: 250px;
  animation: move-right 0.5s forwards;
}

@keyframes move-right {
  0% {
    transform: translateX(-3rem);
  }
  100% {
    transform: translateX(0rem);
  }
}

.hero-title-font {
  font-size: 3.5rem;
}
.navbar-wrapper {
  background-color: #33333385;
}

.nav-logo-wrapper {
  width: 250px;
}

.greenbar {
  background-color: $green;
  border-radius: 50px;
  height: 2px;
  width: 0%;
  opacity: 0;
  margin: 0 auto;
}

.nav-item:hover .nav-link {
  color: $green !important;
}

.nav-item:hover .greenbar {
  animation: greenbar 0.3s forwards;
  display: block;
}

@keyframes greenbar {

  0% {
    opacity: 0;
    width: 0%;
  }

  100% {
    opacity: 1;
    width: 60%;
  }
}
</style>