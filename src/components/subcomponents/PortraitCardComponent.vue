<template>
    <div class="p-1 mx-2 py-5 bg-my-white rounded-3 card-wrapper text-center ">
      <div>
            <div class="portrait-wrapper m-auto">
                <img :src="portrait" :alt="name">
            </div>
            <h4 class="text-my-dark-grey pt-4 pb-2">
                {{name}}
            </h4>
            <div>
                <i class="fa-brands fa-facebook-f mx-2 "></i>
                <i class="fa-brands fa-x-twitter mx-2 "></i>
                <i class="fa-brands fa-instagram mx-2"></i>
            </div>
      </div>
      <p class="text-center w-50 m-auto ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'PortraitCardComponent',
    props: {
        portrait: String,
        name: String
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

.card-wrapper {
    box-shadow:  0.3em 0.3em 1em rgba(58, 58, 58, 0.336);
    border-top: 6px solid $green;
    transform: translateY(5rem);
}

.portrait-wrapper {
    width: 300px;
}

.portrait-wrapper:hover {
    box-shadow:  0.3em 0.3em 1em rgba(58, 58, 58, 0.234);
    transform: scale(1.1);
    transition: all 0.5s;
}

i {
    color: $light-blue;
    font-size: 1.2rem;
}

</style>