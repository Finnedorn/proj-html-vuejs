<template>
  <!--CTA-->
  <div class="container-fluid cta-wrapper">
    <div class="container">
      <div class="row align-items-center">
        <!--text right-->
        <div class="col-lg-6 col-md-12 text-light py-3 text-CTA-right fadeInLeft" ref="CTA-right">
          <h2 class="fs-1">
            Start Learning Drive Today
          </h2>
          <h4>
            Give us a call to schedule your first driving lesson
          </h4>
        </div>
        <!--text left-->
        <div class=" col-lg-6 col-md-12 text-lg-center text-light py-3 text-CTA-left fadeInRight">
          <i class="fa-solid fa-phone me-4 fs-3 "></i>
          <span class="fs-2">1-800-555-555</span>
        </div>
      </div>
    </div>
  </div>
  <!--courses-->
  <div class="container-fluid courses-wrapper">
    <div class="container">
      <div class="row flex-grow-0 ">
        <!--courses card-->
        <div class="col-lg-4 col-sm-12 p-5 rounded-3 text-center  bg-my-white course-card position-relative flex-grow-0  fadeInTopper">
          <div class="new-wrapper position-absolute overflow-hidden rounded-2">
            <img src="../assets/images/new-corner.jpg" alt="new-mark-logo">
          </div>
          <h2 class="fs-1 pb-3 text-my-dark-grey">
            Courses
          </h2>
          <p class="fs-6 py-4  text-my-blue course-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugit corporis debitis eum doloremque similique repudiandae.
          </p>
          <BtnGreenComponent :content="'COURSE INFORMATION'" class="mb-3"/>
        </div>
        <!--courses micro card offers-->
        <div class="col-lg-8 px-5 d-flex flex-wrap justify-content-center micro-card-wrapper">
          <MicroCardComponent v-for="(el,index) in store.coursesArr" :key="index" :image="el.picture" :title="el.title" class="micro-card fadeInLeft" />
        </div>
      </div>
    </div>
  </div>
  <!--rate-->
  <div class="container-fluid rate-wrapper">
    <div class="container">
      <div class="row justify-content-center rate-wrapper">
        <CardRateComponent v-for="(el,index) in store.valueArr" :value="el.value" :title="el.title" class="col-lg-3 fadeInTop rate-card"/>
      </div>
    </div>
  </div>
  <!--instructor-->
  <div class="container-fluid">
    <div class="container pt-5">
      <div class="row align-items-center py-1">
        <div class="col-lg-7 your-instructor-wrapper">
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
      <PortraitCardComponent v-for="(el,index) in store.instructorArr" :key="index" :portrait="el.portrait" :name="el.name" class="instructor-card fadeInBot"/>
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
    <div class="news">
      <div class="container bg-my-white m-auto py-4 top-news">
        <h2 class="fs-1 text-my-dark-grey text-center pt-5 pb-3 ">
          Latest News
        </h2>
        <div class="d-flex justify-content-center flex-wrap">
          <CardNewsComponent v-for="(el, index) in store.newsArr" :key="index" :title="el.title" :image="el.picture" class="card-news fadeInTop"/>
        </div>
        <div class="d-flex justify-content-center pt-4">
          <BtnGreenComponent :content="'MORE FROM THE BLOG'" class="fadeInTop"/>
        </div>
      </div>
      <div class="container bottom-news">
      </div>
    </div>
  </div>
  <!--news CTA-->
  <div class="container-fluid news-cta-wrapper">
    <div class="container py-5 text-center">
      <h2 class="fs-2 text-my-dark-grey pb-4 pt-2">
        Sign up to our NewsLetter
      </h2>
      <div class="d-flex justify-content-center  flex-nowrap ">
        <input class="form-control form-control-lg w-50" type="text" aria-label=".form-control-lg example">
      </div>
      <div class="py-4">
        <BtnGreenComponent :content="'SUBSCRIBE'" class="subscribe-btn"/>
      </div>
      <h6 class="text-center text-my-blue fw-light pb-3">
        (We do not share your data with anybody, and only use it for its intended purpose)
      </h6>
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
    },
    methods: {
      // PopUpScroll() {
      //   IntersectionObserver(() => {
      //     if(this.$refs.) {
      //       this.$refs['CTA-right'].style.add('fadeInLeft');
      //     }
      //   })
      // }
    },
    // mounted() {
    //   this.PopUpScroll()
    // }
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
  z-index: 0;
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
  padding-bottom: 30px;
  background-image: url(../assets/images/testimonial-background.jpg);
  background-size: cover;
}

.news-wrapper {
  background-image: url(../assets/images/latestnews-background.jpg);
  background-size: cover;
}

.news {
  transform: translateY(-2.5rem);
}
.top-news {
  border-radius: 10px 10px 0px 0px;
  border-top: 5px solid $grey;
}

.bottom-news {
  height: 120px;
  background-image: url(../assets/images/latestnews-bottom.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.news-cta-wrapper {
  background-image: url(../assets/images/newsletter_background.jpg);
  background-size: cover;
}
.subscribe-btn {
  padding-left: 22% !important;
  padding-right: 22% !important;
}

@media screen and (max-width: 1399.98px) {
  .instructor-card {
    width: 350px;
  }

  .micro-card {
    margin: 0px;
    overflow: hidden;
  }
  
  .micro-card-wrapper {
    flex-wrap: nowrap;
  }

  .course-card {
    height: 500px;
  }

}

@media screen and (max-width: 1199.98px) {
  .instructor-card {
    width: 400px;
    margin-top: 20px;
  }
}



@media screen and (max-width: 991.98px) {
  .text-CTA-right {
    text-align: center;
    padding: 0px 20px 20px 20px;
  }
  .text-CTA-left {
    text-align: center;
    margin-bottom: 30px;
  }

  .course-card {
    width: 450px;
    height: 400px;
    margin: 0 auto;
  }

  div.course-card>p {
    text-align: center;
    width: 300px;
    margin: 0 auto;
  }
  
  .rate-card {
    width: 400px;
    margin: 30px 0px 30px 0px;

  }
  .rate-wrapper {
    margin-bottom: 1000px;
  }

  .your-instructor-wrapper {
    text-align: center;
  }

  .instructor-card {
    margin: 30px 0px 30px 0px;
  }

  .card-news {
    width: 400px;
    overflow: hidden;
  }

  .news {
    width: 500px;
    margin: 0 auto;
  }
}


//animation//

//left

.fadeInLeft {
  -webkit-animation: fadeInLeft 1.2s both;
  -moz-animation: fadeInLeft 1.2s both;
  -o-animation: fadeInLeft 1.2s both;
  animation: fadeInLeft 1.2s both;
}

@-webkit-keyframes fadeInLeft {

  0% {
    opacity: 0;
    -webkit-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes fadeInLeft {
  
  0% {
    opacity: 0;
    -moz-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

@-o-keyframes fadeInLeft {

  0% {
    opacity: 0;
    -o-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
} 

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

//top

.fadeInTop {
  -webkit-animation: fadeInTop 1.2s both;
  -moz-animation: fadeInTop 1.2s both;
  -o-animation: fadeInTop 1.2s both;
  animation: fadeInTop 1.2s both;
}

@-webkit-keyframes fadeInTop {

0% {
  opacity: 0;
  -webkit-transform: translateY(50px);
}
100% {
  opacity: 1;
  -webkit-transform: translateY(0);
}
}

@-moz-keyframes fadeInTop {

0% {
  opacity: 0;
  -moz-transform: translateY(50px);
}
100% {
  opacity: 1;
  -moz-transform: translateY(0);
}
}

@-o-keyframes fadeInTop {

0% {
  opacity: 0;
  -o-transform: translateY(50px);
}
100% {
  opacity: 1;
  -o-transform: translateY(0);
}
} 

@keyframes fadeInTop {
0% {
  opacity: 0;
  transform: translateY(50px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
}

//topper 

.fadeInTopper {
  -webkit-animation: fadeInTopper 1.2s both;
  -moz-animation: fadeInTopper 1.2s both;
  -o-animation: fadeInTopper 1.2s both;
  animation: fadeInTopper 1.2s both;
}

@-webkit-keyframes fadeInTopper {

0% {
  opacity: 0;
  -webkit-transform: translateY(0);
}
100% {
  opacity: 1;
  -webkit-transform: translateY(-3.5rem);
}
}

@-moz-keyframes fadeInTopper {

0% {
  opacity: 0;
  -moz-transform: translateY(0);
}
100% {
  opacity: 1;
  -moz-transform: translateY(-3.5rem);
}
}

@-o-keyframes fadeInTopper {

0% {
  opacity: 0;
  -o-transform: translateY(0);
}
100% {
  opacity: 1;
  -o-transform: translateY(-3.5rem);
}
} 

@keyframes fadeInTopper {
0% {
  opacity: 0;
  transform: translateY(0);
}
100% {
  opacity: 1;
  transform: translateY(-3.5rem);
}
}

//right

.fadeInRight {
  -webkit-animation: fadeInRight 1.2s both;
  -moz-animation: fadeInRight 1.2s both;
  -o-animation: fadeInRight 1.2s both;
  animation: fadeInRight 1.2s both;
}

@-webkit-keyframes fadeInRight {

  0% {
    opacity: 0;
    -webkit-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes fadeInRight {
  
  0% {
    opacity: 0;
    -moz-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

@-o-keyframes fadeInRight {

  0% {
    opacity: 0;
    -o-transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
} 

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

//bottom 

.fadeInBot {
  -webkit-animation: fadeInBot 1.2s both;
  -moz-animation: fadeInBot 1.2s both;
  -o-animation: fadeInBot 1.2s both;
  animation: fadeInBot 1.2s both;
}

@-webkit-keyframes fadeInBot {

0% {
  opacity: 0;
  -webkit-transform: translateY(0);
}
100% {
  opacity: 1;
  -webkit-transform: translateY(80px);
}
}

@-moz-keyframes fadeInBot {

0% {
  opacity: 0;
  -moz-transform: translateY(0);
}
100% {
  opacity: 1;
  -moz-transform: translateY(80px);
}
}

@-o-keyframes fadeInBot {

0% {
  opacity: 0;
  -o-transform: translateY(0);
}
100% {
  opacity: 1;
  -o-transform: translateY(80px);
}
} 

@keyframes fadeInBot {
0% {
  opacity: 0;
  transform: translateY(0);
}
100% {
  opacity: 1;
  transform: translateY(80px);
}
}

</style>