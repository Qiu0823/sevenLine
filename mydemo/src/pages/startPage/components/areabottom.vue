<template>
  <div class="container">
    <div class="area-line">
      <div class="al-one">
        <one-cell :device="arb1"></one-cell>
        <div class="al-line-bottom"></div>
      </div>
      <div class="al-two areaBorderStyle">
        <div class="dv-title">涂层区域</div>
        <div class="al-line-bottom"></div>
        <one-cell
          class="tuceng"
          :device="arb4"
          :color="this.$store.state.WebsocketMessage.Equipment31_FaultStatus"
        ></one-cell>
      </div>
      <div class="al-three">
        <one-cell :device="arb2"></one-cell>
        <div class="al-line-bottom"></div>
      </div>
      <div class="al-four areaBorderStyle">
        <div class="dv-title">退磁区域</div>
        <one-cell
          class="tuici"
          :device="arb5"
          :color="this.$store.state.WebsocketMessage.Equipment30_FaultStatus"
        ></one-cell>
        <div class="al-line-bottom"></div>
      </div>
      <div class="al-five">
        <one-cell :device="arb3"></one-cell>
        <div class="al-line-bottom"></div>
      </div>
    </div>
    <!-- <div class="area-dry">
      <div class="dryMachine areaBorderStyle">
        <one-cell :device="arb7"></one-cell>
        <div @click="linkDetail1(32, '烘干机')" style="cursor: pointer">
          <one-cell
            :device="arb8"
            :color="this.$store.state.WebsocketMessage.Equipment32_FaultStatus"
            class="dry-two"
          ></one-cell>
        </div>
      </div>
    </div> -->
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
      arb1: {
        title: "涂油线纵向链1",
        status: "nomal",
      },
      arb2: {
        title: "涂油线纵向链2",
        status: "nomal",
      },
      arb3: {
        title: "涂油线纵向链3",
        status: "nomal",
      },
      arb4: {
        title: "涂层",
        status: "nomal",
      },
      arb5: {
        title: "退磁",
        status: "nomal",
      },
      arb6: {
        title: "斯惠顿",
        status: "nomal",
      },
      // arb7: {
      //   title: "烘干节距链",
      //   status: "nomal",
      // },
      // arb8: {
      //   title: "烘干机",
      //   status: "nomal",
      // },
    };
  },
  methods: {
    link(id) {
      this.$emit("linkDetail", id);
    },
    linkDetail1(id, name) {
      console.log(name);
      this.$router.push({
        path: "/index",
        query: { id: id, name: name },
      });
    },
  },
};
</script>

<style scoped="scoped" lang='less'>
.container {
  width: 100%;
  height: 100%;
  .area-line {
    width: 100%;
    // height: 40%;
    height: 100%;
    display: flex;
    .al-line-bottom::before {
      content: "";
      position: absolute;
      left: 0vh;
      top: 40%;
      width: 100%;
      height: 1em;
      background: linear-gradient(
          135deg,
          transparent,
          transparent 45%,
          #6591e2,
          transparent 55%,
          transparent 100%
        ),
        linear-gradient(
          45deg,
          transparent,
          transparent 45%,
          #7964e0,
          transparent 55%,
          transparent 100%
        );
      background-size: 1em 1em;
      background-repeat: repeat-x, repeat-x;
    }
    .al-one {
      width: 37%;
      height: 100%;
      position: relative;
      .al-line-bottom::before {
        content: "";
        position: absolute;
        left: 0vh;
        top: 40%;
        width: 75%;
        height: 1em;
        text-align: right;
        position: absolute;
        left: 105px;
        background: linear-gradient(
            135deg,
            transparent,
            transparent 45%,
            #6591e2,
            transparent 55%,
            transparent 100%
          ),
          linear-gradient(
            45deg,
            transparent,
            transparent 45%,
            #7964e0,
            transparent 55%,
            transparent 100%
          );
        background-size: 1em 1em;
        background-repeat: repeat-x, repeat-x;
      }
    }
    .al-two {
      width: 14.5%;
      position: relative;
      .dv-title {
        position: absolute;
        left: 0;
        top: 0vh;
        color: #1b5ccc;
      }
      .tuceng {
        position: absolute;
        top: 60%;
        left: 50%;
        margin-left: -50%;
      }
    }
    .al-three {
      width: 18%;
      height: 100%;
      position: relative;
    }
    .al-four {
      width: 12%;
      position: relative;
      .dv-title {
        position: absolute;
        left: 0;
        top: 0vh;
        color: #1b5ccc;
      }
      .tuici {
        position: absolute;
        top: 60%;
        left: 50%;
        margin-left: -50%;
      }
    }
    .al-five {
      width: 18%;
      height: 100%;
      position: relative;
    }
  }
}
.dryMachine {
  position: relative;
  height: 78%;
  padding-top: 2vh;
  .dry-two {
    position: absolute;
    top: 5vh;
    left: -16vh;
  }
}
</style>
