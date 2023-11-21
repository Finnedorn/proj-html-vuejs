<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script>
  import {store} from './assets/data/store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
    },
    data() {
      return {
        store,
        
      } 
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>

</style>
