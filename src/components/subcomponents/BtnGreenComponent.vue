<template>
    <button class="p-2 px-4 rounded-5 border-0 bg-my-green green-btn">
      <a class="nav-link active text-light fw-bold" aria-current="page" href="#">{{ content }}</a>
    </button>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'BtnGreenComponent',
    props: {
      content:String,
    },
    data() {
      return {
        store,
      } 
    }
  }
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;
.green-btn:hover {
  background-color: $dark-green;
  transition: all 0.8s;
}

</style>