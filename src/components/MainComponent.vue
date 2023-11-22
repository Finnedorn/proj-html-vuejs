<template>
  <!--CTA-->
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
        <div class="col-lg-8 px-5 d-flex flex-wrap justify-content-center ">
          <MicroCardComponent v-for="(el,index) in store.coursesArr" :key="index" :image="el.picture" :title="el.title" />
        </div>
      </div>
    </div>
  </div>
  <!--rate-->
  <div class="container-fluid rate-wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <CardRateComponent v-for="(el,index) in store.rateArr" :key="index" :title="el" class="col-3"/>
      </div>
    </div>
  </div>
  <!--instructor-->
  <div class="container-fluid">
    <div class="container pt-5">
      <div class="row align-items-center py-1">
        <div class="col-lg-7">
          <h2 class="fs-1 pb-4 text-my-dark-grey">
            Your Instructors
          </h2>
          <p class="fs-4 text-my-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non corporis corrupti deserunt, cum eum ipsam ex, soluta eos iste fuga dolores.
          </p>
        </div>
        <div class="col-lg-5 pt-5 text-center">
          <BtnGreenComponent :content="'MORE ABOUT US'" class="more" />
        </div>
      </div>
    </div>
  </div>
  <!--instructor cards-->
  <div class="container-fluid">
    <div class="container d-flex flex-wrap flex-grow-0 justify-content-center align-items-center instructor">
      <PortraitCardComponent v-for="(el,index) in store.instructorArr" :key="index" :portrait="el.portrait" :name="el.name" />
    </div>
  </div>
  <!--carousel-->
  <div class="container-fluid testimonials-wrapper">
    <div class="py-5">
      <CarouselComponent/>
    </div>
  </div>
  <!--latest news-->
  <div class="container-fluid news-wrapper">
    <div class="bg-my-white news m-auto">
      <h2 class="fs-1 text-my-dark-grey text-center ">
        Latest News
      </h2>
      <div class="d-flex justify-content-center ">
        <CardNewsComponent v-for="(el, index) in store.newsArr" :key="index" :title="el.title" :image="el.picture"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../assets/data/store';
  import BtnGreenComponent from './subcomponents/BtnGreenComponent.vue';
  import MicroCardComponent from './subcomponents/MicroCardComponent.vue';
  import CardRateComponent from './subcomponents/CardRateComponent.vue';
  import PortraitCardComponent from './subcomponents/PortraitCardComponent.vue';
  import CarouselComponent from './subcomponents/CarouselComponent.vue';
  import CardNewsComponent from './subcomponents/CardNewsComponent.vue';
  export default {
    name: 'MainComponent',
    components: {
      BtnGreenComponent,
      MicroCardComponent,
      CardRateComponent,
      PortraitCardComponent,
      CarouselComponent,
      CardNewsComponent
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

.rate-wrapper {
  position: relative;
  height: 400px;
}

.rate-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
	top: 0;
	width: 100%;
	height: 100%;
  background-image: url(../assets/images/latestnews-bottom.png);
  filter: invert(1%) sepia(10%) saturate(76%) hue-rotate(175deg) brightness(98%) contrast(92%);
  background-size: contain;
  background-repeat: no-repeat;
}

.more {
  padding: 8px 100px !important;
}

div.instructor:nth-child(2) {
  padding-bottom: 60px;
}

.testimonials-wrapper {
  padding-top: 80px;
  background-image: url(../assets/images/testimonial-background.jpg);
  background-size: cover;
}

.news {
  max-width: 50%;
}

</style>