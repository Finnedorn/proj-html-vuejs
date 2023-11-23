<template>
    <div class="scroll-wrapper position-fixed text-center" @click="$emit('scroll')">
        <i class="fa-solid fa-angle-up text-light fs-5 pt-2 "></i>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'ScrollComponent',
    data() {
      return {
        store,
      } 
    }
  }
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.scroll-wrapper {
    width: 55px;
    height: 65px;
    background-color: $dark-grey;
    bottom: -30px;
    right: 100px;
    border-radius: 5px 5px 0px 0px;
    z-index: 5000;
}

.scroll-wrapper:hover {
    background-color: $green;
    transform: translateY(-1rem);
    transition: all 0.5s;
}

</style>