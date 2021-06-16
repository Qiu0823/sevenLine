<template>
	<div class="container">
		<div class="chart">
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
		<p style="position: relative;left: -20px;">{{text}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				option: {
					series: [{
						type: 'gauge',
						data: [{
								name: 'MAX',
								value: 32,
								radius: '80%'
							},
							{
								name: 'MIN',
								value: 12,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}­°C',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						pointer: {
							valueIndex: 1,
							style: {
								scale: [.6, .6]
							}
						},
						details: {
							show: true,
							formatter: '{name}{value}°C',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left'
							}
						},
						min: 0,
						max: 90
					}]
				},
				text:'无线红外温度检测器1'
			}
		},

	}
</script>

<style scoped="scoped">
	.container {
		width: 100%;
		height: 100%;
	}

	.chart {
		height: 80%;
	}
</style>
