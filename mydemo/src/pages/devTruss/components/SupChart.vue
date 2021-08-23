<template>
  <div class="table-container">
    <div class="bc-chart-item">
      <div class="bcci-header">给定频率（0_01HZ）: {{option1.series[0].data[0].value}}</div>
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
      <div class="bcci-header">电机电流（A）: {{option2.series[0].data[0].value}}</div>
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
      <div class="bcci-header">电机扭矩（N）: {{option3.series[0].data[0].value}}</div>
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
      <div class="bcci-header">实际频率（0_01HZ）: {{option4.series[0].data[0].value}}</div>
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
              formatter: "给定频率：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: -1200,
            max: 1500,
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
              formatter: "电流值：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 0,
            max: 10,
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
              formatter: "扭矩值：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: -6000,
            max: 3000,
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
              formatter: "实际频率：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: -1200,
            max: 1500,
          },
        ],
      },
    };
  },
  watch: {
    "$store.state.WebsocketMessage.Data6"(newVal, oldVal) {
      console.log("给定频率（0_01HZ）" + newVal);
      this.option1.series[0].data[0].value = newVal;
      this.option1 = { ...this.option1 };
    },
     "$store.state.WebsocketMessage.Data7"(newVal, oldVal) {
      console.log("电机电流（A）" + newVal);
      this.option2.series[0].data[0].value = newVal;
      this.option2 = { ...this.option2 };
    },
     "$store.state.WebsocketMessage.Data8"(newVal, oldVal) {
      console.log("电机扭矩（N）" + newVal);
      this.option3.series[0].data[0].value = newVal;
      this.option3 = { ...this.option3 };
    },
     "$store.state.WebsocketMessage.Data9"(newVal, oldVal) {
      console.log("实际频率（0_01HZ）" + newVal);
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