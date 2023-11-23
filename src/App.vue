<template>
  <ScrollComponent @scroll="scrollToTop()"/>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script>
  import {store} from './assets/data/store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import ScrollComponent from './components/subcomponents/ScrollComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
      ScrollComponent
    },
    data() {
      return {
        store
      } 
    },
    methods: {
      scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
