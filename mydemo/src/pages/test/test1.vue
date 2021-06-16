
<template>
	<div class="contain">
		<div class="header">			
		</div>
		<div class="body">
			<div class="divBox">
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
			</div>
			<div class="divBox">
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
				<div class="chartbox">
					<barchart></barchart>
				</div>
			</div>
			<div class="divBox">
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
			</div>
			<div class="divBox">
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
				<div class="chartbox">
					<dashBoard></dashBoard>
				</div>
			</div>
			<div class="divBox">
				<div class="chartbox">
					<threeDashBoard></threeDashBoard>
				</div>
				<div class="chartbox">
					<threeDashBoard></threeDashBoard>>
				</div>
				<div class="chartbox">
					<threeDashBoard></threeDashBoard>
				</div>
				<div class="chartbox">
					<threeDashBoard></threeDashBoard>
				</div>
				<div class="chartbox">
					<threeDashBoard></threeDashBoard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import barchart from './component/barChart'
	import dashBoard from './component/dashBoard'
	import threeDashBoard from './component/threeDashBoard'
	export default{
		components:{
			barchart,
			dashBoard,
			threeDashBoard
		},
		data(){
			return{				
			}
		},
		methods:{
		},
		mounted() {
			
		}
	}
</script>

<style>
	.contain{
		width: 100%;
		height: 100%;
		border: 1px solid black;
	}
	.header{
		width: 100%;
		height: 15%;
	}
	.body{
		width: 100%;
		height: 160%;
		display: flex;
		flex-direction: column;
		border: 1px solid black;
	}
	.divBox{
		flex: 1;
		display: flex;
	}
	.chartbox{
		flex: 1;
	}
</style>
