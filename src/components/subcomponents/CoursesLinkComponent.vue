<template>
    <div class="wrapper d-flex align-items-center py-3">
      <i class="fa-regular fa-circle-right text-my-green me-1"></i>
      <div class="fs-6 fw-bold">
        <a href="#" class="text-my-blue">{{ title }}</a>
      </div>
    </div>
</template>

<script>
  import {store} from '../../assets/data/store';
  export default {
    name: 'CoursesLinkComponent',
    props: {
      title: String,
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

i {
  font-size: 1rem;
}

.wrapper:hover i {
  color: $white;
  transition: all 0.8s;
}

.wrapper:hover a {
  color: $green;
  transition: all 0.8;
}

a {
  text-decoration: none;
}
</style>