<template>
  <div class="detect-container">
     
    <div class="dry-area areaBorderStyle">
      <div class="dev1">
        <oneCell :device="arb1"></oneCell>
      </div>
      <div class="dev2" @click="linkDetail1(32, '烘干机')" style="cursor: pointer" :color="this.$store.state.WebsocketMessage.Equipment32_FaultStatus">
        <oneCell :device="arb2"></oneCell>
      </div>
    </div>
    <div class="detect-area areaBorderStyle">
         <div class="area-name">
          测量区域
      </div>
      <div class="gulp"></div>
      <div class="detect-left">
        <div class="detect-left-top">
          <oneCell :device="dec1"></oneCell>
        </div>
        <div class="detect-left-bottom">
          <oneCell :device="dec2"></oneCell>
        </div>
      </div>
      <div class="detect-right">
             <!-- <div class="detect2"> -->
        <div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
          <span class="dv-title">{{ decArr[0].title }}</span>
        </div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[1].title }}</span>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[2].title }}</span>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[3].title }}</span>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[4].title }}</span>
				  <div class="LEDbtn greenBtn" :style="{backgroundColor:this.$store.state.WebsocketMessage.Equipment33_FaultStatus}"></div>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[5].title }}</span>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[6].title }}</span>
				</div>
				<div class="detect2-onecell" @click="linkDetail1(33,'测量点')">
				  <span class="dv-title">{{ decArr[7].title }}</span>
				</div>
      <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import oneCell from "@/components/oneCell.vue";
export default {
  components: {
    oneCell,
  },
  data() {
    return {
      arb1: {
        title: "烘干节距链",
        status: "nomal",
      },
      arb2: {
        title: "烘干机",
        status: "nomal",
      },
      dec1: {
        title: "测量点前步进梁",
        status: "nomal",
      },
      dec2: {
        title: "测量点步进梁",
        status: "nomal",
      },
      decArr: [
        {
          title: "接箍预热",
          status: "nomal",
          id: "01",
        },
        {
          title: "接箍涂漆",
          status: "nomal",
          id: "02",
        },
        {
          title: "接箍烘干",
          status: "nomal",
          id: "03",
        },
        {
          title: "色环",
          status: "nomal",
          id: "04",
        },
        {
          title: "测长称重",
          status: "nomal",
          id: "05",
        },
        {
          title: "针刻印",
          status: "nomal",
          id: "06",
        },
        {
          title: "管体喷标",
          status: "nomal",
          id: "07",
        },
        {
          title: "接箍喷印",
          status: "nomal",
          id: "08",
        },
      ],
    };
  },
  methods: {
       linkDetail1(id, name) {
      this.$router.push({
        path: "/index",
        query: { id: id, name: name },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.detect-container {
  width: 100%;
  height: 100%;
  position: relative;
  .area-name{
      position: absolute;
      left: 0;
      top: 0;
     color: #2155ad;
  }
  .dry-area {
    width: 100%;
    height: 30%;
    position: relative;
    .dev1 {
      position: absolute;
      width: 50%;
      bottom: 10%;
    }
    .dev2 {
      position: absolute;
      width: 50%;
      top: 10%;
      right: 5%;
    }
  }
  .detect-area {
    width: 100%;
    height: 70%;
    display: flex;
    position: relative;
    .gulp {
      width: 16%;
      border-right: 1px solid #203456;
    }
    .detect-left {
      width: 45%;
      .detect-left-top {
        height: 53%;
        border-bottom: 1px solid #203456;
        border-right: 1px solid #203456;
        padding-top: 3vh;
        box-sizing: border-box;
      }
      .detect-left-bottom {
        height: 47%;
        border-bottom: 1px solid #203456;
        border-right: 1px solid #203456;
        padding-top: 3vh;
        box-sizing: border-box;
      }
    }
    .detect-right {
      width: 45%;
      display: flex;
        cursor: pointer;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px !important;
  justify-content: space-between;
  z-index: 999;
  border-right: 1px solid #203456;
   .detect2-onecell {
		cursor: pointer;
    box-sizing: border-box;
    border-bottom: 1px solid #203456;
		flex: 1;
    display: flex;
    .LEDbtn {
      width: 13px !important;
      height: 13px !important;
    }
    .dv-title {
      width: 40%;
      text-align: right;
      padding-right: 2vh;
      padding-left: 4vh;
    }
  }
  div {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
    }
  }
}
</style>