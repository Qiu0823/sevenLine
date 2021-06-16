<template>
  <div class="scroll-bar">
    <dv-scroll-board :config="config" style="width: 22vw; height: 18vh" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: ['时间',"设备", "重故障"],
        data: this.scrollBarMessage,
        // index: true,
        columnWidth: [160,80, 200],
        align: ["center"],
        headerBGC: "#213454",
        oddRowBGC: "#266090",
        evenRowBGC: "#0096D6",
        rowNum: 5,
      },
			test:[]
    };
  },
	props:['scrollBarMessage'],
	mounted() {
	}
};
</script>
<style scoped lang='less'>
.dv-scroll-board {
  height: 18.5vh !important;
  width: 28vw !important;
}
.scroll-bar {
  width: 100%;
  padding: 0 1vw;
  height: 100%;
  margin-left: 10.5vw;
  overflow: hidden;
  box-sizing: border-box;
}
</style>