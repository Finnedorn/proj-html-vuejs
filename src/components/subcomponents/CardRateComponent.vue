<template>
    <div @click="progress(value)" class="mx-2 bg-my-white rounded-3 card-wrapper overflow-hidden g-0 d-flex flex-column   align-items-center ">
      <div class="percentage-wrapper position-relative">
        <div class="card-container">
          <div class="perc-outer" ref="progress" :style="{background: `conic-gradient( #7abc64 ${this.progressValue * 3.6}deg, #f6f6f6 ${this.progressValue * 3.6}deg )`}">
            <div class="value-wrapper text-my-blue">
              {{ this.progressValue }}%
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 class="text-my-blue py-4">
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
      value: Number,
      title: String,
    },
    data() {
      return {
        store,
        progressValue: 0,
        speed: 10,
      } 
    },
    methods: {
      progress(indice) {
        setInterval(()=> {
          if(this.progressValue === indice) {
            clearInterval;
          } else {
            this.progressValue++;
          }

        }, this.speed)
      },
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

.percentage-wrapper {
  background: linear-gradient(#ffffff 50%,#7abc64 50%);
  height: 300px;
  width: 300px;
}

.card-container {
  height: 300px;
  width: 300px;
  background-color: $white;
  position: absolute;
  display: grid;
  place-items: center;
}

.perc-outer {
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.perc-outer::before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: $white;
  border-radius: 50%;
}

.value-wrapper {
  position: relative;
  font-size: 2.5rem;
  
}
</style>