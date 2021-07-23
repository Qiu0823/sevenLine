<template>
  <div class="data-view">
    <div id="carCon" :style="{ left: comWidth  + 'px', top: 200 + 'px' }"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.moveTo();
    // setInterval(() => {
    //   this.left += 100
    // }, 1000);
  },
  data() {
    return {
      // left:500,
      // width:1200,
      duration: 100,
    };
  },
  methods: {
    moveTo() {
      this.left += this.comWidth;
    },
  },

  computed:{
     comWidth(){
        return this.width
     }
  },
  props: ["top", "width","left"],
};
</script>
<style scoped>
#carCon {
  width: 90px;
  height: 25px;
  position: absolute;
  /* top: 100px; */
  /* left: 0; */
  background: url("~@/assets/img/car.png");
  background-size: 100%;
  background-repeat: no-repeat;
  transition: 1s;
}
</style>