<template>
  <div class="container">
    <div class="area-line">
      <div class="al-one">
        <div
          class="line-one"
        >
          <one-cell :device="arb3"></one-cell>
        </div>
        <div class="al-line-bottom"></div>
        <one-cell :device="arb6"></one-cell>
      </div>
      <div class="al-two areaBorderStyle">
        <!-- <one-cell
          class="tuceng"
          :device="arb4"
          :color="this.$store.state.WebsocketMessage.Equipment31_FaultStatus"
        ></one-cell> -->
        <div class="tuceng" @click="linkDetail1(31,'涂层','T031')" style="cursor:pointer;">
          <div class="dv-title">{{ arb4.title }}</div>
          <div
            class="LEDbtn greenBtn tuceng-deng"
            :style="{
              backgroundColor:
                this.$store.state.WebsocketMessage.Data31,
            }"
          ></div>
        </div>
      </div>
      <div class="al-three">
        <div class="areaBorderStyle al-three-area">
          <!-- <one-cell
            class="tuici"
            :device="arb5"
            :color="this.$store.state.WebsocketMessage.Equipment30_FaultStatus"
          ></one-cell> -->
          <div class="tuici" @click="linkDetail1(30,'退磁','T030')" style="cursor:pointer;">
            <div class="dv-title">{{ arb5.title }}</div>
            <div
              class="LEDbtn greenBtn"
              :style="{
                backgroundColor:
                  this.$store.state.WebsocketMessage.Data30,
              }"
            ></div>
          </div>
        </div>
        <div class="line-two">
          <one-cell :device="arb2"></one-cell>
        </div>
        <div class="al-line-bottom"></div>
      </div>
      <div class="al-four">
        <div class="line-one">
          <one-cell :device="arb1"></one-cell>
        </div>
        <div class="al-line-bottom"></div>
      </div>
         <div class="al-five">
           <div class="divided" @click="linkDetail1(29, '分钢仪')">分钢仪</div>
      </div>
    </div>
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
        title: "纵向链1",
        status: "nomal",
      },
      arb2: {
        title: "纵向链2",
        status: "nomal",
      },
      arb3: {
        title: "纵向链3",
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
    };
  },
  methods: {
    link(id) {
      this.$emit("linkDetail", id);
    },
    linkDetail1(id, name,str) {
      console.log(name);
      this.$router.push({
        path: "/index",
        query: { id: id, name: name,str },
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
      width: 30%;
      height: 100%;
      position: relative;
      .line-one {
        height: 66%;
        position: relative;
        left: -15vh;
      }
      .al-line-bottom::before {
        content: "";
        position: absolute;
        top: 40%;
        width: 100%;
        height: 1em;
        text-align: right;
        position: absolute;
        left: 0px;
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
      width: 7%;
      position: relative;

      .tuceng {
        position: relative;
        top: 30%;
        left: 40%;
        margin-left: -50%;
        box-sizing: border-box;
        display: flex;
        // padding-left: 10px;
        .dv-title {
          margin-right: 1vh;
          width: 40%;
          height: 2.5vh;
          box-sizing: border-box;
          z-index: 999;
          font-size: 14px;
          text-align: right;
        }
     
      }
    }
    .al-three {
      width: 28%;
      height: 100%;
      position: relative;
      margin-right: 15px;
      box-sizing: border-box;
      .line-two {
        position: absolute;
        width: 100%;
        left: -17vh;
        top: 0vh;
      }
      .al-three-area {
        height: 100%;
        width: 30%;
        margin: 0 auto;
        position: relative;
        .tuici {
          width: 100%;
          display: flex;
          .dv-title {
            margin-right: 1vh;
            width: 40%;
            height: 2.5vh;
            box-sizing: border-box;
            z-index: 999;
            font-size: 14px;
            text-align: right;
          }
        }
      }
    }

    .al-four {
      width: 29%;
      height: 100%;
      position: relative;
      .line-one {
        position: absolute;
        width: 50%;
        left: -5vh;
      }
    }
    .al-five{
      width: 100px;
      height: 28px;
      border: 1px solid #6591e2;
      position: absolute;
      right: 0;
      top: 0;
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
