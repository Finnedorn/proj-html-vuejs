<template>
    <div class="text-center mx-4 py-5 ">
      <div>
            <div class="img-wrapper overflow-hidden">
                <img :src="image" :alt="title">
            </div>
            <h4 class="text-my-green pt-3">
                {{title}}
            </h4>
            <div class="d-flex comment justify-content-center pb-3">
                <div class="text-my-blue">
                    February 7th, 2019 |
                </div>
                <div class="text-my-green">
                    0 Comments
                </div>
            </div>
            <h6 class="text-my-blue fw-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing
            </h6>
      </div>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'CardNewsComponent',
    props: {
      image: String,
      title: String
    },
    data() {
      return {
        store
      } 
    }
  }
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.img-wrapper {
  width: 550px;
  height: 330px;
}

.img-wrapper:hover img {
  transform: scale(1.2);
  opacity: 0.9;
  transition: all 1s;
}

.comment {
    font-size: 0.8rem;
}

</style>