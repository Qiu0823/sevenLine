<template>
  <div class="device-info-con">
    <div class="device-info-title">
      <h5 class="firstTitle" style="text-align: left; margin-bottom: 5px">
        设备信息
      </h5>
      <p style="text-align: left; padding-left: 50px">
        设备名称：{{ $route.query.name }}
      </p>
    </div>
    <!-- <div class="device-status"> -->
    <!-- <h3>设备状态</h3> -->
    <div class="device-status-itemList">
      <!-- {{itemList[0].title  }} -->
      <div class="dsi-item" v-for="(item) in itemList" :key="item.title">
        <!-- {{item.title}} -->
        <dv-border-box-2>
          <div class="text">
            <h4
              class="firstTitle"
              v-if="item.title !== ''"
              style="margin-left: 1vh"
            >
              {{ item.title }}
            </h4>
            <span v-else>设备状态</span>
            <div
              v-for="(item1) in item.statusListVOS"
              :key="item1.data"
              style="display: flex; padding-left: 15px; margin-bottom: 5px"
            >
          <!-- <template v-if="!isNumber(WebsocketMessage[item1.data])" > -->
               <span style="width: 60%; text-align: center">{{ item1.name }}</span>
              <div v-if="WebsocketMessage[item1.data] && WebsocketMessage[item1.data].includes('#')" class="LEDbtn greenBtn" :style="{backgroundColor:$store.state.WebsocketMessage[item1.data],marginLeft: '5px'}" ></div>
              <div v-else style="color:green">{{ $store.state.WebsocketMessage[item1.data] }}</div>
          <!-- </template> -->
            </div>
          </div>
        </dv-border-box-2>
      </div>
    </div>
    <!-- </div> -->

    <!-- 乳化液 -->
    <div class="tableCom" v-if="str == 'T013'">
      <dv-border-box-2>
        <div class="title">电表展示</div>
        <div class="bc-chart-item table1">
          <div class="bcci-header">
            乳化液水箱液位: {{ option1.series[0].data[0].value }}
          </div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option1"
          />
        </div>
        <div class="bc-chart-item">
          <div class="bcci-header">
            乳化液浓度: {{ option2.series[0].data[0].value }}
          </div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option2"
          />
        </div>
      </dv-border-box-2>
    </div>

    <!-- 管体退磁 -->
    <div class="tableCom" v-else-if="str == 'T030'">
      <dv-border-box-2>
        <div class="title">电表展示</div>
        <div class="bc-chart-item table1">
          <div class="bcci-header">
            直流电流显示: {{ option3.series[0].data[0].value }}
          </div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option3"
          />
        </div>
        <div class="bc-chart-item">
          <div class="bcci-header">
            交流电流显示: {{ option4.series[0].data[0].value }}
          </div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option4"
          />
        </div>
      </dv-border-box-2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {getDeviceStatusList} from '@/api/detail.js'

export default {
  data() {
    return {
      // a:1,
      itemList: [],
      itemList1: [],
      str: "",
      pageIndex: [],
      arrItemLenghVal: [],
      tableHeaderTitle1: "",
      tableHeaderTitle2: "",
      option1: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 1234,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}转",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: -10,
            max: 10,
          },
        ],
      },
      //series[0].data[0].value
      option2: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 1234,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}转",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 0,
            max: 2000,
          },
        ],
      },
      option3: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 0,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 1,
            max: 20,
          },
        ],
      },
      option4: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 0,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 1,
            max: 20,
          },
        ],
      },
    };
  },

  created() {
    console.log(this.$route.query.name);
    this.str = this.$route.query.str;
    this.getSideBarList(this.$route.query.id);
    if (this.$store.state.ws.readyState == 1) {
      this.ws.send(this.str);
    }
  },
  computed: {
    ...mapState(["WebsocketMessage", "ws"]),
    devNameCom() {
      return this.devName;
    },
  },
  watch: {
    "$store.state.WebsocketMessage.Data9"(newVal, oldVal) {
      if (this.$route.query.name.includes("乳化液")) {
        console.log("液位值：" + newVal);
        this.option1.series[0].data[0].value = newVal;
        this.option1 = { ...this.option1 };
      }
    },
    "$store.state.WebsocketMessage.Data10"(newVal, oldVal) {
      if (this.$route.query.name.includes("乳化液")) {
        console.log("浓度值：" + newVal);
        this.option2.series[0].data[0].value = newVal;
        this.option2 = { ...this.option2 };
      }
    },

    "$store.state.WebsocketMessage.Data5"(newVal, oldVal) {
      if (this.$route.query.name.includes("退磁")) {
        console.log("直流电流显示" + newVal);
        this.option3.series[0].data[0].value = newVal;
        this.option3 = { ...this.option3 };
        console.log(this.option3.series[0].data[0].value, "option3Value");
      }
    },
    "$store.state.WebsocketMessage.Data6"(newVal, oldVal) {
      if (this.$route.query.name.includes("退磁")) {
        console.log("交流电流显示" + newVal);
        this.option4.series[0].data[0].value = newVal;
        this.option4 = { ...this.option4 };
        console.log(this.option4.series[0].data[0].value, "option4Value");
      }
    },
    "$route.query.name"(newVal, oldVal) {
      this.str = newVal;
      if (this.$store.state.ws.readyState == 1) {
        this.ws.send(this.str);
      }
      console.log(newVal, "www");
    },
  },
  props: ["devName"],
  methods: {
    async  getSideBarList(deviceId){
      var data = {
        deviceId,
      }
      await getDeviceStatusList(data).then(res=>{
        this.itemList = res.data.result;
        console.log(res,'ssss');
           this.arrItemLenghVal.push(this.itemList[0].statusListVOS.length);
    this.$nextTick(function () {
      document.getElementsByClassName("dsi-item")[0].style.flex =
        this.arrItemLenghVal[0];
      for (let i = 1; i < this.itemList.length; i++) {
        this.arrItemLenghVal.push(this.itemList[i].statusListVOS.length);
        document.getElementsByClassName("dsi-item")[i].style.flex =
          this.arrItemLenghVal[i];
        this.pageIndex[i - 1] = 0;
        for (let j = 0; j < i; j++) {
          this.pageIndex[i - 1] += this.itemList[j].statusListVOS.length;
        }
      }
      if (this.itemList.length == 1 && this.itemList[0].statusListVOS.length > 8) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "90%";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
      if (this.itemList.length == 1 && this.itemList[0].statusListVOS.length <= 8) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "40%";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.marginTop = "20px";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
      if (this.itemList.length == 1 && this.itemList[0].statusListVOS.length > 10) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "100%";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
    });
      })
    }
  },
};
</script>

<style lang='less'>
span {
  font-size: 15px;
}
p {
  margin: 0;
}
li {
  margin-bottom: 10px;
}
.tableCom {
  position: relative;
  .title {
    position: absolute;
    left: 1vh;
    top: 1vh;
  }
  .border-box-content {
    display: block !important;
  }
  .bc-chart-item {
    width: 100%;
    &.table1 {
      padding-top: 30px;
    }
  }
}
.device-info-con {
  // padding-left: 1vw;
  height: 80%;
  .device-info-title {
    width: 100%;
    h3,
    div {
      text-align: left;
    }
  }
  .device-status {
    height: 90%;
    box-sizing: border-box;
    h3 {
      text-align: left;
    }
  }
  .device-status-itemList {
    width: 326px;
    display: flex;
    height: 100%;
    flex-direction: column;
    // justify-content: space-around;
    ul,
    li {
      padding: 0;
      margin: 0;
    }
    // padding-left: 2vh;
    .dsi-item {
      display: flex;
      flex: 1;
      .text {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid royalblue;
        // border: 1px solid red;
      }
    }
  }
}
</style>