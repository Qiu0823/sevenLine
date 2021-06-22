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
								name: 'X轴振动',
								value: 77,
								radius: '80%'
							},
							{
								name: 'Y轴振动',
								value: 12,
								radius: '60%'
							},
							{
								name: 'Z轴振动',
								value: 12,
								radius: '100%'
							}
						],
						axisLabel: {
							formatter: '{value}­次',
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
							formatter: '{name}{value}次',
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
		watch:{
		'$store.state.app.dataData'(newValue,oldValue){
			console.log("ds3")
		  const { option } = this
		  this.option.series[0].data[0].value = this.MDX.value
		  this.option.series[0].data[1].value = this.MDY.value
			this.option.series[0].data[2].value = this.MDZ.value
		  console.log(this.option)
		  this.option = { ...this.option }
		}
		},	
		props:['MDX','MDY','MDZ'],
		mounted() {
		}

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
