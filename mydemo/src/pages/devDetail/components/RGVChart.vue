<template>
  <div class="table-container">
    <div class="bc-chart-item">
      <div class="bcci-header">小车电池温度: {{ config1.value }}</div>
      <dv-percent-pond
        :config="config1"
        style="width: 300px; height: 120px; margin: 2px auto"
      />
    </div>
    <div class="bc-chart-item">
      <div class="bcci-header">小车实际剩余电量: {{ config2.value }}</div>
      <div class="bcci-table">
        <dv-percent-pond
          :config="config2"
          style="width: 300px; height: 120px; margin: 2px auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config1: {
        value: 0,
        formatter: "{value}­°C",
      },
      config2: {
        value: 0,
      },
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
    "$store.state.WebsocketMessage.Data18"(newVal) {
      console.log("小车电池温度" + newVal);
      this.config1.value = newVal;
      this.config1 = { ...this.config1 };
    },
    "$store.state.WebsocketMessage.Data19"(newVal) {
      console.log("小车实际剩余电量" + newVal);
        this.config2.value = newVal;
        this.config2 = { ...this.config2 };
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