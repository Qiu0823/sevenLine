<template>
  <div class="table-container">
     	<div class="bc-chart-item">
			<div class="bcci-header">电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
        	<div class="bc-chart-item">
			<div class="bcci-header">电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
       	<div class="bc-chart-item">
			<div class="bcci-header">电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
           	<div class="bc-chart-item">
			<div class="bcci-header">电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
         	<div class="bc-chart-item">
			<div class="bcci-header">电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>
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
								name: '1#电机',
								value: 32,
								radius: '80%'
							},
							{
								name: '2#电机',
								value: 12,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}A',
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
							formatter: '{name}{value}A',
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
        }
    },
}
</script>

<style scoped>
    .table-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-content: space-around;
        padding-top: 3vh;
    }
    .bc-chart-item{
        flex: 1;
    }
</style>