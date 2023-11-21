<template>
    <div class="text-center mx-4 py-5">
      <div>
        <div class="img-wrapper overflow-hidden">
          <img :src="image" :alt="title">
        </div>
        <h4 class="text-my-grey pt-3">
          {{title}}
        </h4>
      </div>
      <button class="p-2 px-4 rounded-5">
        <a class="text-my-grey fw-bold" href="#">LEARN MORE</a>
      </button>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'MicroCardComponent',
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
  width: 200px;
  height: 200px;
}

.img-wrapper:hover img{
  transform: scale(1.2);
  opacity: 0.9;
  transition: all 1s;
}

button {
  background-color: none !important;
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

</style>