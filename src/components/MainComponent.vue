<template>
  <!--section-CTA-->
  <div class="container-fluid cta-wrapper">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 text-light py-3">
          <h2 class="fs-1">
            Start Learning Drive Today
          </h2>
          <h4>
            Give us a call to schedule your first driving lesson
          </h4>
        </div>
        <div class=" col-lg-6 col-md-12 text-lg-center text-light py-3">
          <i class="fa-solid fa-phone me-4 fs-3 "></i>
          <span class="fs-2">1-800-555-555</span>
        </div>
      </div>
    </div>
  </div>
  <!--section-courses-->
  <div class="container-fluid courses-wrapper">

  </div>
</template>

<script>
  export default {
    name: 'MainComponent',
    data() {
      return {
      } 
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
.cta-wrapper {
  padding: 80px 0px;
  background-image: url(../assets/images/horizontal-cta-background.jpg);
  background-size: cover;
}

.courses-wrapper {
  padding: 100px 0px;
  background-image: url();
}
</style>