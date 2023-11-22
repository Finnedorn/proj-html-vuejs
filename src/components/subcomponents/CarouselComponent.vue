<template>
    <div class=" p-3 py-4 carousel-wrapper" :key="activeIndex">
        <h2 class="fs-1 text-my-dark-grey text-center ">
            Testimonials
        </h2>
        <h4 class="text-my-blue text-center pt-2 pb-5  fw-normal">
            Here's what our happy drivers had to say about our services:
        </h4>
        <div class="portrait-wrapper overflow-hidden m-auto my-4">
            <img :src="store.carouselArr[activeIndex].portrait" :alt="store.carouselArr[activeIndex].name">
        </div>
        <p class="fs-5 fst-italic  text-my-blue text-center py-3 px-5 ">
            Avada Driving School really helped building my confidence behind the wheel and with driving in general, and they got me a first time pass!
            Higly recommended.
        </p>
        <h5 class="text-my-blue text-center pt-2 pb-4 ">
            {{ store.carouselArr[activeIndex].name }}
        </h5>
        <div class="d-flex justify-content-center ">
            <div v-for="(el,index) in store.carouselArr" class="mx-1" :class="[this.activeIndex === index ? 'carousel-point active':'carousel-point']" @click="syncIndex(index)"></div>
        </div>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'CarouselComponent',
    data() {
      return {
        store,
        activeIndex: 0
      } 
    },
    methods: {
        slider() {
            if(this.activeIndex === this.store.carouselArr.length -1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        startAutoplay() {
            setInterval(this.slider, 3500);
        },
        syncIndex(indice) {
            this.activeIndex = indice;
        }
    },
    mounted() {
        this.startAutoplay();
    }
  }
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;


.portrait-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

p {
    max-width: 700px;
    margin: auto;
}

.carousel-point {
    width: 12px;
    height: 12px;
    border: 1px solid $light-blue;
    border-radius: 50%;
}

.carousel-point.active {
    background-color: $light-blue;
}

.carousel-point:hover {
    background-color: $light-blue;
    transition: all 0.8s;
}

</style>