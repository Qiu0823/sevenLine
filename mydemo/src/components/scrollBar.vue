<template>
  <div class="scroll-bar">
    <dv-scroll-board :config="config" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: ['时间',"设备", "重故障"],
        data: this.$store.state.WebsocketMessage.Data127,
        // index: true,
        columnWidth: [160,150, 320],
        align: ["center"],
        headerBGC: "#213454",
        oddRowBGC: "#266090",
        evenRowBGC: "#0096D6",
        rowNum: 5,
      },
			test:[]
    };
  },
	watch:{
		'$store.state.WebsocketMessage.Data127'(newVal,oldVal){
			const { config } = this
			this.config.data = newVal
			this.config = { ...this.config }
		}
	},
	mounted() {
	}
};
</script>
<style scoped lang='less'>
.dv-scroll-board {
  height: 18.5vh;
  width: 100%;
}
.scroll-bar {
  width: 100%;
  // padding: 0 1vw;
  height: 100%;
  margin-right: 1vh;
  overflow: hidden;
  box-sizing: border-box;
}
</style>