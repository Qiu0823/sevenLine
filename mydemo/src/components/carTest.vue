<template>
  <div class="data-view">
    <div id="carCon" :style="{ right: right + 'px', top: top + 'px' }"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.moveTo();
  },
  data() {
    return {
      //left:500,
      // width:1200,
      duration: 100,
    };
  },
  methods: {
    moveTo() {
      this.right += this.comWidth;
    },
  },

  computed:{
     comWidth(){
        return this.width
     }
  },
  props: ["right", "top", "width"],
};
</script>
<style scoped>
#carCon {
  width: 90px;
  height: 25px;
  position: absolute;
  top: 100px;
  background: url("~@/assets/img/car.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>