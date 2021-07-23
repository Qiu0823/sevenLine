<template>
  <div class="line-container" v-if="lineNum == 1">
    <div class="top">
      <div style="width: 15vh; margin-top: 5px"  @click="linkDetail1(162, '1#RGV','T040')">
        <one-cell :device="dv1"></one-cell>
      </div>
      <div style="margin-left: 450px; width: 15vh; margin-top: 5px"  @click="linkDetail1(160, '1#RGV','T038')">
        <one-cell :device="dv2"></one-cell>
      </div>
    </div>
    <div class="center">
      <dv-decoration-6 style="width: 70vw; height: 10px" />
    </div>
    <div class="one-cell-bottom" @click="linkDetail1(12, '1#RGV','T015')">
      <one-cell :device="dvCar1"></one-cell>
    </div>
  </div>
  <div class="line-container" v-else-if="lineNum == 2">
    <div class="top">
      <div style="width: 15vh; margin-top: 5px"  @click="linkDetail1(163, '1#RGV','T041')">
        <one-cell :device="dv5"></one-cell>
      </div>
      <div style="margin-left: 400px; width: 15vh; margin-top: 5px"  @click="linkDetail1(161, '1#RGV','T039')">
        <one-cell :device="dv6"></one-cell>
      </div>
    </div>
    <div class="center">
      <dv-decoration-6 style="width: 70vw; height: 10px" />
    </div>
    <div class="one-cell-bottom" @click="linkDetail1(13, '2#RGV','T016')">
      <one-cell :device="dvCar2"></one-cell>
    </div>
  </div>
  <div class="line-container" v-else-if="lineNum == 3">
    <div class="third">
          <div class="doorFive">
              <i class="iconfont icon-mendoor13"></i>
            </div>
      <div class="third-top">
        <dv-decoration-6 style="width: 40vw; height: 10px" />
      </div>
      <div class="one" @click="linkDetail1(165, '2#RGV','T043')">
        <one-cell :device="dv8"></one-cell>
      </div>
      <div class="two">
        <one-cell :device="dv9"  @click="linkDetail1(166, '2#RGV','T044')"></one-cell>
      </div>
      <div class="three" @click="linkDetail1(13, '2#RGV','T017')">
        <one-cell :device="dvCar3"></one-cell>
      </div>
    </div>
  </div>
</template>

<script>
import oneCell from "./oneCell";
export default {
  components: {
    oneCell,
  },
  props: ["lineNum"],
  data() {
    return {
      dvCar1: {
        title: "1#RGV",
        status: "nomal",
      },
      dvCar2: {
        title: "2#RGV",
        status: "nomal",
      },
      dvCar3: {
        title: "3#RGV",
        status: "nomal",
      },
      dv1: {
        title: "3#桁架",
        status: "nomal",
      },
      dv2: {
        title: "1#桁架",
        status: "nomal",
      },
      dv3: {
        title: "1#RGV",
        status: "nomal",
      },
      dv4: {
        title: "2#RGV",
        status: "nomal",
      },
      dv5: {
        title: "4#桁架",
        status: "nomal",
      },
      dv6: {
        title: "2#桁架",
        status: "nomal",
      },
      dv7: {
        title: "3#RGV",
        status: "nomal",
      },
      dv8: {
        title: "6#桁架",
        status: "nomal",
      },
      dv9: {
        title: "7#桁架",
        status: "nomal",
      },
      dv10: {
        title: "5#桁架",
        status: "nomal",
      },
    };
  },
  methods: {
    linkDetail1(id, name,str) {
      this.$router.push({
        path: "/index",
        query: { id: id, name: name,str },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.line-container {
  width: 100%;
  height: 100%;
  position: relative;
  .third {
  width: 100%;
    position: relative;
    height: 100%;
    .doorFive{
      position: absolute;
      left: 39vh;
    }
    .one {
      position: absolute;
      // left: 28vh;
      width: 15vh;
    }
    .two {
      position: absolute;
      left: 60vh;
      width: 15vh;
    }
    .three {
      position: absolute;
      right: 25vh;
      width: 15vh;
      top: 1vh;
    }
    .third-top {
      position: absolute;
      left: -20vh;
      top: 1vh;
    }
  }
  .top {
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 9vw;
    position: absolute;
    right: 6vh;
    top: 1vh;
    font-size: 16px;
    .line-text {
      position: absolute;
      left: -30vw;
      top: 0;
    }
  }
  .one-cell-bottom {
    width: 15vh;
    position: absolute;
    bottom: 0vh;
    right: -3vh;
    cursor: pointer;
  }
  .bottom {
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 55vw;
  }
  .center-top {
    height: 100%;
    position: absolute;
    left: -3vw;
    top: 1.5vh;
  }
  .center {
    height: 100%;
    position: absolute;
    left: -25vw;
    top: 1vh;
  }
}
</style>