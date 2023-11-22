<template>
  <!--pre-header-->
  <div class="container-fluid bg-my-dark-grey">
    <div class="container py-3 d-flex  justify-content-between">
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
          <BtnGreenComponent :content="'BOOK NOW'"/>
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
  <!--first section-->
  <div class="container-fluid">
    <div class="container">
      <div class="row py-2">
        <div class="col-lg-6 col-md-12 text-wrapper">
          <h2 class="text-my-dark-grey fs-1 pb-4">
            Get Behind the Wheel
          </h2>
          <p class=" fs-4 pb-4 text-my-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit architecto officia, assumenda molestiae recusandae quisquam eveniet sed. Consequuntur.
          </p>
          <p class="fs-6 text-my-blue">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit recusandae laborum dolores, dolorem et excepturi maxime asperiores nemo eaque reiciendis, iure accusamus aspernatur architecto placeat ipsam. Quae quisquam labore asperiores repellat, dignissimos officia ipsa cumque quo aut dolorem maiores totam nihil magnam ea excepturi nisi dolore. Ex, omnis
          </p>
        </div>
        <div class="col-lg-6 col-md-12 px-5">
          <div class="p-5 form-wrapper rounded-3 text-center bg-my-white">
            <h2 class="pb-3 text-my-green">
              First Lesson Free!
            </h2>
            <p class="fs-5 py-3 text-my-blue">
              When u make a block booking with us your first lesson is included free.
            </p>
            <input v-for="(el, index) in store.formPlaceHolderArr" class="form-control my-4 py-3 bg-my-light-grey" type="text" :placeholder="el" aria-label="default input example" :key="index">
            <BtnGreenComponent :content="'REQUEST A CALLBACK'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../assets/data/store';
  import BtnGreenComponent from './subcomponents/BtnGreenComponent.vue';
  export default {
    name: 'HeaderComponent',
    components: {
      BtnGreenComponent
    },
    data() {
      return {
        store
      } 
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.pre-header {
  font-size: 0.8rem;
}

.hero-wrapper {
  background-image: url(../assets/images/homepage-hero-background.jpg);
  background-size: cover;
}

.hero-title {
  padding: 20% 0%;
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

.text-wrapper {
  padding: 80px 80px 0px 0px;
}

.form-wrapper {
  box-shadow:  0.3em 0.3em 1em rgba(58, 58, 58, 0.234);
  transform: translateY(-3rem);
}

.form-control {
  font-size: 0.9rem !important;
  color: $light-blue !important;
}

</style>