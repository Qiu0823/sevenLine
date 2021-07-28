<template>
  <div class="table-container">
    <div class="bc-chart-item">
      <div class="bcci-header">实际液压油箱液位: {{config.data[0]}}</div>
      <!-- <dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" /> -->
      <dv-water-level-pond
        :config="config"
        style="width: 150px; height: 200px; margin: auto; margin-top: -30px"
        class="waterTable"
      />
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">实际液压油箱温度: {{comTher1}}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher1"
          :min="0"
          :max="100"
          :options="option1"
        />
      </div>
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">实际主轴箱油箱温度: {{comTher2}}</div>
      <div class="bcci-table">
        <vue-thermometer
          :value="comTher2"
          :min="0"
          :max="100"
          :options="option2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [66],
      },
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
      option2: {
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
      ther1: 0,
      ther2: 0,
    };
  },
  computed: {
    comTher1() {
      return this.ther1;
    },
    comTher2() {
      return this.ther2;
    },
  },

  watch: {
    "$store.state.WebsocketMessage.Data11"(newVal, oldVal) {
      console.log("实际液压油箱液位" + newVal);
    //   this.config.data.splice(0, 1, newVal);
      this.config.data[0] = newVal;
      this.config = {...this.config}
      console.log(this.config.data)
    },
    "$store.state.WebsocketMessage.Data12"(newVal, oldVal) {
      console.log("实际液压油箱温度" + newVal);
      this.ther1 = newVal;
    },
    "$store.state.WebsocketMessage.Data13"(newVal, oldVal) {
      console.log("实际主轴箱油箱温度" + newVal);
      this.ther2 = newVal;
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