<template>
  <!--top footer-->
  <div class="container-fluid top-footer-wrapper">
    <div class="container">
      <div class="row py-5 align-items-start  justify-content-center">
        <div class="col-lg-3 py-3">
          <div class="logo-wrapper pb-4">
            <img src="../assets/images/avada-drivers-logo-1x.png" alt="avada_drivers_logo">
          </div>
          <p class="fs-6 pb-3 text-my-blue pe-4">
            Avada Driving School is the right choice for experienced drivers looking for a refresher course,
            or the brand new driver wanting to pass the first time.
          </p>
          <button class="p-2 px-4 rounded-5 more">
            <a class="text-my-grey fw-bold" href="#">MORE ABOUT US</a>
          </button>
        </div>
        <div class="col-lg-3 py-3">
          <h4 class="text-light pb-2">
            Driving Courses
          </h4>
          <CoursesLinkComponent v-for="(el,index) in store.footerLinkArr" :key="index" :title="el" />
        </div>
        <div class="col-lg-3 py-3">
          <h4 class="text-light pb-3">
            Contact Details
          </h4>
          <InfoListComponent v-for="(el,index) in store.footerInfoArr" :key="index" :iconclass="el.icon" :title="el.info" />
        </div>
        <div class="col-lg-3 py-3">
          <h4 class="text-light pb-4">
            Book Free Class
          </h4>
          <div class="demo-wrapper pt-3 pb-4">
            <img src="../assets/images/driving_preview-400x300.jpg" alt="free_class_demo">
          </div>
          <BtnGreenComponent :content="'BOOK NOW'"/>
        </div>
      </div>
    </div>
  </div>
  <!--bottom footer-->
  <div class="container-fluid bg-my-dark-grey py-5">
    <div class="container d-flex flex-wrap justify-content-between  align-items-center">
      <div class="prefooter text-my-blue py-2 text-center">
        © Copyright 2012 - 2023 | Avada Theme by  
        <div class="prefooter text-my-green mx-1 d-inline-block ">
          ThemeFusion
        </div>
        | All Rights Reserved | Powered by 
        <div class="prefooter text-my-green mx-1 d-inline-block ">
          WordPress
        </div>
      </div>
      <div class="text-my-grey d-flex align-items-center fs-6 m-auto py-2">
        <i class="fa-brands fa-facebook-f ms-3 "><a href="#"></a></i>
        <i class="fa-brands fa-x-twitter ms-3"><a href="#"></a></i>
        <i class="fa-brands fa-youtube ms-3"><a href="#"></a></i>
        <i class="fa-brands fa-instagram ms-3"><a href="#"></a></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../assets/data/store';
  import CoursesLinkComponent from './subcomponents/CoursesLinkComponent.vue';
  import InfoListComponent from './subcomponents/InfoListComponent.vue';
  import BtnGreenComponent from './subcomponents/BtnGreenComponent.vue';
  export default {
    name: 'FooterComponent',
    components: {
      CoursesLinkComponent,
      InfoListComponent,
      BtnGreenComponent
    },
    data() {
      return {
        store,
      } 
    },
  }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.top-footer-wrapper {
  padding: 30px 0px;
  background-image: url(../assets/images/footer-background-color.jpg);
  background-size: cover;
}

.logo-wrapper {
  width: 240px;
}

button.more {
  background: none !important;
  border: 2px solid $grey !important;  
}

button:hover {
  border: 2px solid $green !important;
}

button:hover a {
  color: $green !important;
}

a {
  text-decoration: none;
  font-size: 0.9rem;
}

.demo-wrapper {
  width: 200px;
}

.prefooter {
  font-size: 0.8rem;
}
</style>