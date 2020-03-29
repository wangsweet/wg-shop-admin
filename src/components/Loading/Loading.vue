<template>
  <div class="Loading jus-c ali-c" v-show="Loadingshow">
    <ul class="loadingbox">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Loadingshow: false
    };
  },
  methods: {
    show() {
      this.Loadingshow = true;
    },
    hide() {
      this.Loadingshow = false;
    }
  }
};
</script>

<style scoped>
.Loading {
 
}
.loadingbox {
  width: 200px;
   position: fixed;
   top: 50%;
  left: 50%;
  margin-left:-100px;
  margin-top:-25px;
  z-index:9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.loadingbox > li {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.loadingbox > li:nth-child(1) {
  background: #4695b8;
  animation: myfirst 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
.loadingbox > li:nth-child(1)::after {
  position: absolute;
  display: inline-block;
  content: "";
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scale(1);
}
.loadingbox > li:nth-child(2) {
  background: #67a142;
  animation: myfirst 1s;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
.loadingbox > li:nth-child(3) {
  background: #8fc0a7;
  animation: myfirst 1s;
  animation-delay: 0.4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes myfirst {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>