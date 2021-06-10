<template>
	<div class="container" >
		<div ref="chartRing" class="chart">		
		</div>
		<p style="position: relative;left: -20px;">{{text}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {
					xAxis: {
						type: 'category',
						data: ['CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [120, 200, 150, 80, 70,110],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)'
						}
					}],
				 grid: {
					x: 30,
					y: 30,
					x2: 30,
					y2: 30
				},
				},
				text:'无线接触式温度检测器1'
			}
		},
		methods: {
			//画柱形图
			drawBarChart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(this.$refs.chartRing)
				// 绘制图表
				myChart.setOption(this.option);
			}
		},
		mounted() {
			this.drawBarChart()
		}
	}
</script>

<style scoped="scoped">
	.container{
		width: 100%;
		height: 100%;
	}
	.chart{
		height: 80%;
	}

</style>
