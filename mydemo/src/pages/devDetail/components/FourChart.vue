<template>
  <div class="table-container">
    <div class="bc-chart-item">
      <div class="bcci-header">收口机主缸设定压力: {{option1.series[0].data[0].value}}</div>
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
      <div class="bcci-header">收口机主缸设定实际位移: {{option2.series[0].data[0].value}}</div>
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
    <div class="bc-chart-item">
      <div class="bcci-header">收口机主缸设定实际压力: {{option3.series[0].data[0].value}}</div>
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
      <div class="bcci-header">收口机主缸设定位移: {{option4.series[0].data[0].value}}</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      option1: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 32,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}P",
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
              formatter: "压力值：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 0,
            max: 100,
          },
        ],
      },
      option2: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 32,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}m",
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
              formatter: "位移值：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 10,
            max: 50,
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
                value: 32,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}P",
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
              formatter: "实际压力:{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 0,
            max: 100,
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
                value: 32,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}m",
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
              formatter: "实际位移：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 10,
            max: 50,
          },
        ],
      },
    };
  },
  watch: {
    "$store.state.WebsocketMessage.Data14"(newVal, oldVal) {
      console.log("收口机主缸设定压力" + newVal);
      this.option1.series[0].data[0].value = newVal;
      this.option1 = { ...this.option1 };
    },
     "$store.state.WebsocketMessage.Data15"(newVal, oldVal) {
      console.log("收口机主缸设定实际位移" + newVal);
      this.option2.series[0].data[0].value = newVal;
      this.option2 = { ...this.option2 };
    },
     "$store.state.WebsocketMessage.Data16"(newVal, oldVal) {
      console.log("收口机主缸设定实际压力" + newVal);
      this.option3.series[0].data[0].value = newVal;
      this.option3 = { ...this.option3 };
    },
     "$store.state.WebsocketMessage.Data17"(newVal, oldVal) {
      console.log("收口机主缸设定位移" + newVal);
      this.option4.series[0].data[0].value = newVal;
      this.option4 = { ...this.option4 };
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: space-around;
  padding-top: 3vh;
}
.bc-chart-item {
  flex: 1;
}
</style>