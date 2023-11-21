<template>
  <!--section-CTA-->
  <div class="container-fluid cta-wrapper">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 text-light py-3">
          <h2 class="fs-1">
            Start Learning Drive Today
          </h2>
          <h4>
            Give us a call to schedule your first driving lesson
          </h4>
        </div>
        <div class=" col-lg-6 col-md-12 text-lg-center text-light py-3">
          <i class="fa-solid fa-phone me-4 fs-3 "></i>
          <span class="fs-2">1-800-555-555</span>
        </div>
      </div>
    </div>
  </div>
  <!--section-courses-->
  <div class="container-fluid courses-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 p-5 rounded-3 text-center  bg-my-white course-card position-relative ">
          <div class="new-wrapper position-absolute overflow-hidden rounded-2">
            <img src="../assets/images/new-corner.jpg" alt="new-mark-logo">
          </div>
          <h2 class="fs-1 pb-3 text-my-dark-grey">
            Courses
          </h2>
          <p class="fs-6 py-4  text-my-blue">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugit corporis debitis eum doloremque similique repudiandae.
          </p>
          <BtnGreenComponent :content="'COURSE INFORMATION'" class="mb-3"/>
        </div>
        <div class="col-lg-8 d-flex">
          <MicroCardComponent v-for="(el,index) in store.coursesArr" :key="index" :image="el.picture" :title="el.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../assets/data/store';
  import BtnGreenComponent from './subcomponents/BtnGreenComponent.vue';
  import MicroCardComponent from './subcomponents/MicroCardComponent.vue';
  export default {
    name: 'MainComponent',
    components: {
      BtnGreenComponent,
      MicroCardComponent
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
.cta-wrapper {
  padding: 80px 0px;
  background-image: url(../assets/images/horizontal-cta-background.jpg);
  background-size: cover;
}

.courses-wrapper {
  padding: 15px 0px 60px;
  background-image: url(../assets/images/promise-background.jpg);
  background-size: cover;
  background-position: center;
}

.new-wrapper {
  width: 80px;
  top: 0px;
  left: 0px;
}
.course-card {
  box-shadow:  0.3em 0.3em 1em rgba(58, 58, 58, 0.234);
  transform: translateY(-3.5rem);
}

</style>