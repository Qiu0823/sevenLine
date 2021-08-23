<template>
  <div class="table-container">
    <div class="bc-chart-item">
      <div class="bcci-header">预热炉当前温度: {{ comTher1 }}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher1"
           :min="-10"
          :max="200"
          :options="option1"
        />
      </div>
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">预热炉设定温度: {{ comTher2 }}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher2"
            :min="-10"
          :max="200"
          :options="option3"
        />
      </div>
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">烘干炉当前温度: {{ comTher3 }}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher3"
          :min="-10"
          :max="200"
          :options="option4"
        />
      </div>
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">烘干炉设定温度: {{ comTher4 }}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher4"
          :min="-10"
          :max="200"
          :options="option5"
        />
      </div>
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">
        称重仪表当前重量: {{ option2.series[0].data[0].value }}
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      option1: {
        text: {
          color: "white",
          fontSize: 8,
          textAdjustmentY: 2,
          fontFamily: "Arial",
          textEnabled: true,
        },
        thermo: {
          color: "#FF0000",
          backgroundColor: "#fcf9f9",
          frameColor: "white",
          ticks: 5,
          ticksEnabled: true,
          tickColor: "white",
          tickWidth: "1",
        },
        layout: {
          height: 170,
          width: 100,
        },
      },
	     option3: {
        text: {
          color: "white",
          fontSize: 8,
          textAdjustmentY: 2,
          fontFamily: "Arial",
          textEnabled: true,
        },
        thermo: {
          color: "#FF0000",
          backgroundColor: "#fcf9f9",
          frameColor: "white",
          ticks: 5,
          ticksEnabled: true,
          tickColor: "white",
          tickWidth: "1",
        },
        layout: {
          height: 170,
          width: 100,
        },
      },
	     option4: {
        text: {
          color: "white",
          fontSize: 8,
          textAdjustmentY: 2,
          fontFamily: "Arial",
          textEnabled: true,
        },
        thermo: {
          color: "#FF0000",
          backgroundColor: "#fcf9f9",
          frameColor: "white",
          ticks: 5,
          ticksEnabled: true,
          tickColor: "white",
          tickWidth: "1",
        },
        layout: {
          height: 170,
          width: 100,
        },
      },
	     option5: {
        text: {
          color: "white",
          fontSize: 8,
          textAdjustmentY: 2,
          fontFamily: "Arial",
          textEnabled: true,
        },
        thermo: {
          color: "#FF0000",
          backgroundColor: "#fcf9f9",
          frameColor: "white",
          ticks: 5,
          ticksEnabled: true,
          tickColor: "white",
          tickWidth: "1",
        },
        layout: {
          height: 170,
          width: 100,
        },
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
              formatter: "称重仪重量：{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 0,
            max: 1200,
          },
        ],
      },
      ther1: 0,
      ther2: 0,
      ther3: 0,
      ther4: 0,
    };
  },
  computed: {
    comTher1() {
      return this.ther1;
    },
    comTher2() {
      return this.ther2;
    },
    comTher3() {
      return this.ther3;
    },
    comTher4() {
      return this.ther4;
    },
  },

  watch: {
    "$store.state.WebsocketMessage.Data12"(newVal) {
      console.log("预热炉当前温度" + newVal);
      this.ther1 = newVal;
    },
    "$store.state.WebsocketMessage.Data13"(newVal) {
      console.log("预热炉设定温度" + newVal);
      this.ther2 = newVal;
    },
    "$store.state.WebsocketMessage.Data14"(newVal) {
      console.log("烘干炉当前温度" + newVal);
      this.ther3 = newVal;
    },
    "$store.state.WebsocketMessage.Data15"(newVal) {
      console.log("烘干炉设定温度" + newVal);
      this.ther4 = newVal;
    },
    "$store.state.WebsocketMessage.Data16"(newVal) {
      console.log("称重仪表当前重量" + newVal);
      this.option2.series[0].data[0].value = newVal;
      this.option2 = { ...this.option2 };
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
  box-sizing: border-box;
}
.bc-chart-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bcci-header {
  height: 18%;
}
.bcci-table {
  height: 75%;
  margin: 0 auto;
}
.waterTable {
  transform: scale(0.8);
}
</style>