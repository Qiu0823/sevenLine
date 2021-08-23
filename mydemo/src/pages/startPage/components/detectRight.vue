<template>
  <div class="house-con">
    <!-- <div class="house-top">
          <div class="house-one"></div>
          <div class="house-one"></div>

      </div> -->
    <div class="house">
      <div class="house-top">
        <p>2#电气室</p>
        <img
          style="position: relative; left: 20px"
          src="~@/assets/img/electHouse.png"
          alt=""
        />
      </div>
      <div class="house-bottom">
        <p>集控室</p>
        <img
          style="
            position: relative;
            left: -20px;
            top: -5px;
            display: inline-flex;
            width: 300px;
            height: 100px;
            transform: rotateX(50deg);
          "
          src="~@/assets/img/dianHouse2.png"
          alt=""
        />
        <div
          class="houseDev"
          @click="linkDetail1()"
          style="cursor: pointer"
        >
          <oneCell
            :device="dec"
            :color="this.$store.state.WebsocketMessage.Data169"
          ></oneCell>
        </div>
      </div>
    </div>
    <div class="load2">
      <span class="iconfont icon-lu" v-for="item in 37" :key="item"></span>
    </div>
    <div class="chufei">抽检台架</div>
  </div>
</template>

<script>
import oneCell from "@/components/oneCell";

export default {
  components: {
    oneCell,
  },
  data() {
    return {
      dec: {
        title: "全线急停盘",
        status: "nomal",
      },
    };
  },
  methods: {
          linkDetail1() {
      this.$router.push({
        path: "/pageHouse",
      });
    },
  },
};
</script>

<style lang='less'>
.house-con {
  width: 100%;
  height: 100%;
  position: relative;
  .houseDev {
    cursor: pointer;
    position: relative;
    top: -7vh;
    left: 5vh;
  }
  .house {
    width: 55%;
    height: 50%;
    position: absolute;
    // top: -12vh;
    // left: 16vh;
    left: 15vh;
    top: 3vh;
    display: flex;
    flex-direction: column;
    .house-top {
      height: 40%;
      border: 1px solid royalblue;
      border-bottom-color: transparent;
      text-align: center;
      line-height: 3vh;
      p {
        position: absolute;
        left: 0;
        top: 0vh;
      }
      img {
        width: 220px;
        height: 80px;
        position: absolute;
        top: -2vh;
        right: 5vh;
      }
    }
    .house-bottom {
      height: 60%;
      text-align: center;
      line-height: 8vh;
      border: 1px solid royalblue;
      background-size: 95% 100%;
      background-position: top right;
      position: relative;
      p {
        position: absolute;
        left: 0;
        top: -2.5vh;
      }
      img {
      }
    }
  }
  .load2 {
    display: flex;
    position: absolute;
    width: 3vh;
    height: 20vh;
    display: inline-block;
    right: 9vh;
    top: 10vh;
    transform: rotate(90deg);
    .iconfont {
      font-size: 16px;
      display: inline-block;
      color: grey;
      transform: scaleY(3) translateY(50%);
    }
  }
  .chufei {
    position: absolute;
    border: 1px solid #203456;
    width: 30%;
    height: 16%;
    text-align: center;
    line-height: 4vh;
    box-sizing: border-box;
    bottom: 1vh;
    left: 4vh;
  }
}
</style>