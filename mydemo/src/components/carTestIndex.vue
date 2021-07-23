<template>
  <div>
    <p>小车测试画面</p>
    <cart-test :left="left" :top="top" :width="width" />
  </div>
</template>

<script>
import cartTest from "./carTest.vue";
export default {
  components: {
    cartTest,
  },
  data() {
    return {
      left: 800,
      width: 100,
      top: 200,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.width = this.getRandom(-100, 100);
    // }, 1000);
    var ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (res) => {
      var res = JSON.parse(res.data);
      console.log(res);
      this.width = res.left
      this.$store.state.testValue = JSON.parse(res.data);
    };
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>

<style>
</style>