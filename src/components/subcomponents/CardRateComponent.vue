<template>
    <div class="mx-2 p-5 bg-my-white rounded-3 card-wrapper text-center ">
      <div>
            <h6 class="text-my-grey py-4">
                {{title}}
            </h6>
      </div>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'CardRateComponent',
    props: {
      rate:Number,
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

.card-wrapper {
    height: 400px;
    box-shadow:  0.3em 0.3em 1em rgba(58, 58, 58, 0.234);
    border-top: 6px solid $green;
    transform: translateY(-2rem);
}


</style>