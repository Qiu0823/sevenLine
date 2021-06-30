<template>
	<div id="data-view">
		<dv-full-screen-container v-title data-title="宝钢钢管7号线智能诊断系统">
		  <div class="main-header">
		    <top-header />
		  </div>
		  <div class="data-view">
		    <div class="my-nav">
		      <sidebar-nav />
		    </div>
		    <div class="topDeviceArea">
		      <div class="tda-left">
		        <div class="table-info">
		          <div class="table-one" style="font-size: 12px; cursor: pointer;" @click="goToThird">产线信息</div>
		          <div class="table-two">
		            <div style="margin-right: 1vw">时间：</div>
		            <div style="margin-right: 1vw">合同号：</div>
		            <div>班次：</div>
		          </div>
		          <div class="table-three">
		            <div style="margin-right: 1vw">规格：</div>
		            <div style="margin-right: 1vw">钢级：</div>
		            <div>厚度：</div>
		          </div>
		        </div>
		      </div>
		      <div class="tda-right">
		        <!-- 上料区 -->
		        <div class="shagnLiaoArea arrowBottom1">
		          <area-one-com :deviceListName="deviceList1Name"/>
		        </div>
		      </div>
		    </div>
		    <div class="lineDevice">
		      <line-device :lineNum="1"></line-device>
		      <div class="carCom">
		        <roll-car :carNum="1" :left="1200"></roll-car>
		      </div>
		    </div>
		    <div class="second-container">
		      <!-- 返修区 -->
		      <div class="second-container-left areaBorderStyle">
		        <area-one-com :deviceListName="deviceList9Name" />
		      </div>
		      <!-- 车丝区 -->
		      <div class="second-container-right areaBorderStyle">
		        <div class="doorOne">
		          <!-- <img src="@/assets/img/door.png" alt="" /> -->
		          <i class="iconfont icon-mendoor13"></i>
		        </div>
		        <div class="doorTwo">
		          <!-- <img src="@/assets/img/door.png" alt="" /> -->
		          <i class="iconfont icon-mendoor13"></i>
		        </div>
		        <div class="area-name">车丝区域</div>
		        <div class="scr-left">
		          <fcl1 @linkDetail="linkDetail" style="width: 27%"></fcl1>
		          <fc @linkDetail="linkDetail" style="width: 45%"></fc>
		          <fcl2 @linkDetail="linkDetail" style="width: 28%">></fcl2>
		        </div>
		        <div class="scr-right">
		          <fcr1 @linkDetail="linkDetail" style="width: 27%"></fcr1>
		          <fc1 @linkDetail="linkDetail" style="width: 46%"></fc1>
		          <fcr2 @linkDetail="linkDetail" style="width: 28%"></fcr2>
		        </div>
		      </div>
		    </div>
		    <div class="lineDevice">
		      <line-device :lineNum="2"></line-device>
		      <div class="carCom">
		        <roll-car :carNum="2" :left="1200"></roll-car>
		      </div>
		    </div>
		    <div class="third-container">
		      <div class="third-container-left">
		        <ScrollBar></ScrollBar>
		      </div>
		      <!-- 管拧区 -->
		      <div class="third-container-right areaBorderStyle arrowBottom3">
		        <div class="area-name">管拧区域</div>
						<div class="square" @click="linkDetail1(29,'分钢仪')" >分钢仪</div>
		        <div class="tcr-left">
		          <gnleft @linkDetail="linkDetail"></gnleft>
		        </div>
		        <div class="tcr-center">
		          <gncenter @linkDetail="linkDetail"></gncenter>
		        </div>
		        <div class="tcr-right">
		          <gnright @linkDetail="linkDetail"></gnright>
		        </div>
		      </div>
		    </div>
		    <div class="area-com-container">
		      <div class="area-bottom">
		        <areabottom @linkDetail="linkDetail"></areabottom>
		      </div>
		    </div>
		    <div class="detect">
		      <!-- <div class="one">
		
		      </div> -->
		       <div class="area-dry" style="width:40%;height:36.7%;margin-left:16vh">
		    <div class="dryMachine areaBorderStyle">
		      <one-cell :device="arb7"></one-cell>
		      <div @click="linkDetail1(32, '烘干机')" style="cursor: pointer">
		        <one-cell
		          :device="arb8"
		          :color="this.$store.state.WebsocketMessage.Equipment32_FaultStatus"
		          class="dry-two"
		        ></one-cell>
		      </div>
		    </div>
		  </div>
		      <div class="two" style="height:63%">
		      <detect @linkDetail="linkDetail"></detect>
		      </div>
		
		    </div>
		    <div class="lineDevice" style="margin-left: 28vh">
		      <line-device :lineNum="3"></line-device>
		      <div class="carCom last">
		        <roll-car :carNum="3" :left="400"></roll-car>
		      </div>
		    </div>
		    <!-- 打包区 -->
		    <div class="bagBotDeviceArea areaBorderStyle">
		      <!-- <area-one-com :deviceListName="deviceList8Name"> </area-one-com> -->
		      <div class="da-container">
		        <div class="square">出废区</div>
		        <div class="area-name">打包区域</div>
		        <div class="da-container-left">成型区</div>
		        <div class="da-container-center" @click="linkDetail1(34,'打捆机')" style="cursor:pointer">
		          <div class="dv-title">打捆机</div>
		          <div
		            class="LEDbtn greenBtn packPosition"
		            :style="{backgroundColor:this.$store.state.WebsocketMessage.Equipment34_FaultStatus}"
		          ></div>
		        </div>
		        <div class="da-container-right">成捆移送</div>
		      </div>
		    </div>
		  </div>
			<!-- <div style="position: relative;top: -510px;left: 190px;width: 100px;">
				<p style="font-size: 14px;">1#RGV小车温度{{$store.state.WebsocketMessage.Equipment12_BatteryTemperature}}­°C</p>
				<vue-thermometer :value="$store.state.WebsocketMessage.Equipment12_BatteryTemperature" :min="0" :max="100" :options="option6" />
			</div>
			<div style="position: relative;top: -736px;left: 280px;width: 100px;">
				<p style="font-size: 14px;">2#RGV小车温度{{$store.state.WebsocketMessage.Equipment13_BatteryTemperature}}­°C</p>
			<vue-thermometer :value="$store.state.WebsocketMessage.Equipment13_BatteryTemperature" :min="0" :max="100" :options="option7" />
			</div>
			<div style="position: relative;top: -963px;left: 370px;width: 100px;">
				<p style="font-size: 14px;">3#RGV小车温度{{$store.state.WebsocketMessage.Equipment14_BatteryTemperature}}­°C</p>
			<vue-thermometer :value="$store.state.WebsocketMessage.Equipment14_BatteryTemperature" :min="0" :max="100" :options="option8" />
			</div>
					<div style="position: relative;top: -970px;left: -650px;">
						<div><span style="font-size: 14px;">1#RGV小车电量</span></div>
						<div>
						<dv-percent-pond :config="config"
							style="width:200px;height:40px;margin: auto;" /></div>
					</div>
					<div style="position: relative;top: -970px;left: -650px;">
						<span style="font-size: 14px;">2#RGV小车电量</span>
						<dv-percent-pond :config="config1"
							style="width:200px;height:40px;margin: auto;" />
					</div>
					<div style="position: relative;top: -970px;left: -650px;">
						<span style="font-size: 14px;">3#RGV小车电量</span>
						<dv-percent-pond :config="config2"
							style="width:200px;height:40px;margin: auto;" />
					</div> -->
			<div class="tempture">
			  <div class="car-dataShow">
			    <div><span style="font-size: 14px">1#RGV电池电量及温度</span></div>
			    <div>
			      <dv-percent-pond
			        :config="config"
			        style="width: 200px; height: 40px; margin: auto;font-size:24px"
			      />
			    </div>
			    <div>
			      <dv-percent-pond
			        :config="config3"
			        style="width: 200px; height: 40px; margin: auto"
			      />
			    </div>
			  </div>
			  <div class="car-dataShow">
			    <span style="font-size: 14px">2#RGV电池电量及温度</span>
			     <div>
			      <dv-percent-pond
			        :config="config1"
			        style="width: 200px; height: 40px; margin: auto"
			      />
			    </div>
			    <div>
			      <dv-percent-pond
			        :config="config4"
			        style="width: 200px; height: 40px; margin: auto"
			      />
			    </div>
			  </div>
			  <div class="car-dataShow">
			    <span style="font-size: 14px">3#RGV电池电量及温度</span>
			     <div>
			      <dv-percent-pond
			        :config="config2"
			        style="width: 200px; height: 40px; margin: auto"
			      />
			    </div>
			    <div>
			      <dv-percent-pond
			        :config="config5"
			        style="width: 200px; height: 40px; margin: auto"
			      />
			    </div>
			  </div>
			</div>
		  <div class="tableCon">
				<div class="rightBox">
					<dv-border-box-11 title="1#车丝机振动">
						<div class="dvHeader">
							<div class="texts">X轴：</div>
							<div class="texts">Y轴：</div>
							<div class="texts">Z轴：</div>
						</div>
						<div class="dvGraph" ref="chartRing">
							
						</div>
					</dv-border-box-11>
				</div>
				<div class="rightBox">
					<dv-border-box-11 title="2#车丝机振动">
						<div class="dvHeader">
							<div class="texts">X轴：</div>
							<div class="texts">Y轴：</div>
							<div class="texts">Z轴：</div>
						</div>
						<div class="dvGraph">
							
						</div>
					</dv-border-box-11>
				</div>
				<div class="rightBox">
					<dv-border-box-11 title="3#车丝机振动">
						<div class="dvHeader">
							<div class="texts">X轴：</div>
							<div class="texts">Y轴：</div>
							<div class="texts">Z轴：</div>
						</div>
						<div class="dvGraph">
							
						</div>
					</dv-border-box-11>
				</div>
				<div class="rightBox">
					<dv-border-box-11 title="4#车丝机振动">
						<div class="dvHeader">
							<div class="texts">X轴：</div>
							<div class="texts">Y轴：</div>
							<div class="texts">Z轴：</div>
						</div>
						<div class="dvGraph">
							
						</div>
					</dv-border-box-11>
				</div>
		  </div>
		</dv-full-screen-container>
	</div>

</template>

<script>
import store from '@/store/index.js'
import TopHeader from "@/components/topHeader";
import AreaOneCom from "./components/AreaOneCom";
import lineDevice from "@/components/lineDevice";
import RollCar from "@/components/rollCar";
import fc from "./components/fc";
import fc1 from "./components/fc1";
import fcl1 from "./components/fcl1";
import fcr1 from "./components/fcr1";
import fcl2 from "./components/fcl2";
import fcr2 from "./components/fcr2";
import gnleft from "./components/gnleft";
import gncenter from "./components/gncenter";
import gnright from "./components/gnright";
import areabottom from "./components/areabottom";
import detect from "./components/detect";
import ScrollBar from "@/components/scrollBar";
import SidebarNav from "@/components/sidebarNav";
import {indexScrollBar} from '@/api/detail.js'
import carTest from "@/components/carTest"
import oneCell from "@/components/oneCell";


export default {
  name: "HelloWorld",
  props: {
  },
	watch:{
		'$store.state.WebsocketMessage'(newVal,oldVal){
			const { config } = this
			this.config.value = newVal.Equipment12_DumpEnergy
			
			this.config = { ...this.config }

			const { config1 } = this
			this.config1.value = newVal.Equipment13_DumpEnergy
			this.config1 = { ...this.config1 }
			
			const { config2 } = this
			this.config2.value = newVal.Equipment14_DumpEnergy
			this.config2 = { ...this.config2 }
			
			const { config3 } = this
			this.config3.value = newVal.Equipment12_BatteryTemperature
			this.config3 = { ...this.config3 }
			
			const { config4 } = this
			this.config4.value = newVal.Equipment13_BatteryTemperature
			this.config4 = { ...this.config4 }
			
			const { config5 } = this
			this.config5.value = newVal.Equipment14_BatteryTemperature
			this.config5 = { ...this.config5 }
		}
	},
  data() {
    return {
        arb7: {
        title: "烘干节距链",
        status: "nomal",
      },
      arb8: {
        title: "烘干机",
        status: "nomal",
      },
      showSideNav: false,
      timer: null,
      deviceList1Name: "上料区域",
      deviceList8Name: "打包区域",
      deviceList9Name: "返修区域",
			scrollBarMessage:[],
			config:{
					value: this.$store.state.WebsocketMessage.Equipment12_DumpEnergy
			},
			config1:{
					value: this.$store.state.WebsocketMessage.Equipment13_DumpEnergy
			},
			config2:{
					value: this.$store.state.WebsocketMessage.Equipment14_DumpEnergy
			},
			config3:{
					value: this.$store.state.WebsocketMessage.Equipment12_BatteryTemperature,
					formatter:'{value}­°C',
					
			},
			config4:{
					value: this.$store.state.WebsocketMessage.Equipment13_BatteryTemperature,
					formatter:'{value}­°C'
			},
			config5:{
					value: this.$store.state.WebsocketMessage.Equipment14_BatteryTemperature,
					formatter:'{value}­°C'
			},
			scrollChange:true,
			batteryChange:true,
			option6: {
				text: {
					color: 'white',
					fontSize: 8,
					textAdjustmentY: 2,
					fontFamily: 'Arial',
					textEnabled: true
				},
				thermo: {
					color: '#FF0000',
					backgroundColor: '#fcf9f9',
					frameColor: 'white',
					ticks: 5,
					ticksEnabled: true,
					tickColor: 'white',
					tickWidth: '1'
				},
				layout: {
					height: 160,
					width: 100
				}
			},
			option7: {
				text: {
					color: 'white',
					fontSize: 8,
					textAdjustmentY: 2,
					fontFamily: 'Arial',
					textEnabled: true
				},
				thermo: {
					color: '#FF0000',
					backgroundColor: '#fcf9f9',
					frameColor: 'white',
					ticks: 5,
					ticksEnabled: true,
					tickColor: 'white',
					tickWidth: '1'
				},
				layout: {
					height: 160,
					width: 100
				}
			},
			option8: {
				text: {
					color: 'white',
					fontSize: 8,
					textAdjustmentY: 2,
					fontFamily: 'Arial',
					textEnabled: true
				},
				thermo: {
					color: '#FF0000',
					backgroundColor: '#fcf9f9',
					frameColor: 'white',
					ticks: 5,
					ticksEnabled: true,
					tickColor: 'white',
					tickWidth: '1'
				},
				layout: {
					height: 160,
					width: 100
				}
			},
			optionTime:{
			    title: {
			        text: '动态数据 + 时间坐标轴'
			    },
			    tooltip: {
			        trigger: 'axis',
			        formatter: function (params) {
			            params = params[0];
			            var date = new Date(params.name);
			            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			        },
			        axisPointer: {
			            animation: false
			        }
			    },
			    xAxis: {
			        type: 'time',
			        splitLine: {
			            show: false
			        }
			    },
			    yAxis: {
			        type: 'value',
			        boundaryGap: [0, '100%'],
			        splitLine: {
			            show: false
			        }
			    },
			    series: [{
			        name: '模拟数据',
			        type: 'line',
			        showSymbol: false,
			        hoverAnimation: false,
			        data: this.data
			    }]
			},
			
			data:[],
			now:+new Date(1997, 9, 3),
			oneDay:24 * 3600 * 1000,
			value:Math.random() * 1000,
			
    };
  },
  methods: {
		//模拟数据
		randomData() {
		    var now = new Date(+this.now + this.oneDay);
		    var value = this.value + Math.random() * 21 - 10;
		    return {
		        name: now.toString(),
		        value: [
		            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
		            Math.round(value)
		        ]
		    };
		},
		//点击跳转传参
		linkDetail(id) {
		  this.$router.push({
		    path: "/index",
		    query: { id: id},
		  });
		},
    goToThird(){
      this.$router.push({
        path: '/thirdDetail'
      })
    },
     linkDetail1(id, name) {
      this.$router.push({
        path: "/index",
        query: { id: id, name: name },
      });
    },
		//首页滚动条获取数据
		async indexScrollBar(){
			await indexScrollBar().then(res =>{
				this.scrollChange = false
				if(res.data.status ===true){
					this.scrollBarMessage = res.data.result
				}else{
					this.scrollBarMessage[0] = ['','',res.data.message]
				}
				this.$nextTick(()=>{
				this.scrollChange = true
				})
			})
		},
    
    showSideNavMeth() {
      this.showSideNav = !this.showSideNav;
    },
  },
  components: {
    TopHeader,
    lineDevice,
    RollCar,
    fcl1,
    fcl2,
    fcr1,
    fcr2,
    fc,
    gnleft,
    gncenter,
    gnright,
    fc1,
    ScrollBar,
    AreaOneCom,
    SidebarNav,
    areabottom,
    detect,
    oneCell

    // oneCell
  },

  beforeDestroy() {

    // clearInterval(this.timer)
  },
	created() {
	},
	mounted() {
		for (var i = 0; i < 1000; i++) {
		    this.data.push(this.randomData());
		}
		
		this.$nextTick(()=>{		
		    let myChart = this.$echarts.init(this.$refs.chartRing)		
				setInterval(function () {
				
				    for (var i = 0; i < 5; i++) {
				        this.data.shift();
				        this.data.push(this.randomData());
				    }
						console.log("22222",this.data)
				
				    myChart.setOption({
				        series: [{
				            data: this.data
				        }]
				    });
				}, 1000);
		});
	}
};
</script>

<style lang='less'>
	#data-view {
		width: 100%;
		height: 100%;
		background-color: #030409;
		color: #fff;

		#dv-full-screen-container {
			background-image: url('~@/assets/img/bg.png');
			background-size: 100% 100%;
			box-shadow: 0 0 3px blue;
			display: flex;
			flex-direction: column;
			.data-view {
			  color: #fff;
			  width: 80%;
			  height: 100%;
			  overflow: visible;
			  .dryMachine {
			  position: relative;
			  height: 78%;
			  padding-top: 2vh;
			  .dry-two {
			    position: absolute;
			    top: 5vh;
			    left: -16vh;
			  }
			}
			  .da-container {
			    display: flex;
			    width: 100%;
			    align-items: flex-start;
			    height: 100%;
			    position: relative;
			    .square {
			      width: 26%;
			      height: 50%;
			      left: 50%;
			      transform: translateX(-40%);
			      top: -2vh;
			      position: absolute;
						z-index: 2;
			      border: 1px solid #203456;
			
			    }
			    .da-container-left,
			    .da-container-right {
			      flex: 2;
			      height: 100%;
			      text-align: center;
			      border-right: 1px solid #203456;
			    }
			    .da-container-center {
			      flex: 1;
			      height: 100%;
			      border-right: 1px solid #203456;
			    }
			    .da-container-right {
			      flex: 1;
			      height: 100%;
			      text-align: center;
			    }
			    .area-name {
			      position: absolute;
			      top: -1vh;
			      color: #2155ad;
			    }
			  }
			  .my-nav {
			    width: 7vw;
			    height: 70vh;
			    position: absolute;
			    left: 1.5vw;
			    top: 9vh;
					z-index: 10;
			  }
			  .my-top {
			    position: relative;
			    width: 50%;
			    box-sizing: border-box;
			    display: flex;
			    height: 20%;
			    justify-content: space-around;
			    align-items: center;
			    margin-bottom: 3vh;
			    margin-left: 15vw;
			  }
			  .topDeviceArea {
			    width: 96%;
			    height: 5%;
			    display: flex;
			    margin-left: 20vh;
			    box-sizing: border-box;
			    .tda-left {
			      width: 25%;
			      height: 100%;
			      border: 1px solid #203456;
			      display: flex;
			      flex-direction: column;
			      border: 1px solid #203456;
			      .table-info {
			        position: relative;
			        width: 100%;
			        height: 100%;
			        background-color: steelblue;
			        background-color: rgb(6, 63, 110);
			        box-sizing: border-box;
			        color: #fff;
			        font-size: 12px;
			        display: flex;
			        flex-direction: column;
			        justify-content: space-around;
			        .table-one {
			          background-color: cornflowerblue;
			          width: 100%;
			          font-size: 18px;
			          font-weight: bold;
			        }
			        div {
			          display: flex;
			          justify-content: space-around;
			        }
			      }
			    }
			    .tda-right {
			      height: 100%;
			      width: 80%;
			      box-sizing: border-box;
			      padding-right: 4vw;
			      .shagnLiaoArea {
			        position: relative;
			        width: 100%;
			        height: 100%;
			        box-sizing: border-box;
			      }
			    }
			  }
			  .lineDevice {
			    height: 3%;
			    margin-bottom: 1vh;
			  }
			  .second-container {
			    width: 90.6%;
			    height: 23%;
			    display: flex;
			    margin-left: 20vh;
			    .second-container-left {
			      width: 20%;
			      height: 100%;
			      box-sizing: border-box;
			    }
			    .second-container-right {
			      width: 82%;
			      height: 100%;
			      box-sizing: border-box;
			      display: flex;
			      position: relative;
			      .doorOne {
			        position: absolute;
			        left: 28vw;
			        bottom: -1.5vh;
			        width: 2vw;
			        height: 1.5vw;
			        img {
			          width: 100%;
			          height: 100%;
			        }
			      }
			      .doorTwo {
			        position: absolute;
			        left: 28vw;
			        top: -1vh;
			        width: 2vw;
			        height: 1.5vw;
			        img {
			          width: 100%;
			          height: 100%;
			        }
			      }
			      .area-name {
			        position: absolute;
			        color: #2155ad;
			      }
			      .scr-left {
			        flex: 1;
			        height: 100%;
			        display: flex;
			        justify-content: space-between;
			      }
			      .scr-right {
			        flex: 1;
			        height: 100%;
			        display: flex;
			      }
			    }
			  }
			  .third-container {
			    height: 28%;
			    width: 100%;
					margin-left: 6.5vh;
			    .third-container-left {
			      width: 62%;
			      height: 100%;
			      float: left;
			      display: flex;
			      .tcl-left {
			        flex: 1;
			        height: 100%;
			      }
			      .tcl-right {
			        flex: 1;
			      }
			    }
			    .third-container-right {
			      float: right;
			      width: 37%;
			      height: 100%;
			      display: flex;
			      padding-top: 1vh;
			      position: relative;
			      .square {
			        width: 2.5vw;
			        height: 3vh;
			        border: 1px solid #203456;
			        position: absolute;
			        right: 0;
			        bottom: -3vh;
			        line-height: 3vh;
							z-index: 2;
							cursor:pointer;
			      }
			      .area-name {
			        position: absolute;
			        color: #2155ad;
			        bottom: 0;
			      }
			      .tcr-left {
			        width: 28%;
			      }
			      .tcr-center {
			        width: 44%;
			        font-size: 12px !important;
			      }
			      .tcr-right {
			        width: 28%;
			      }
			    }
			  }
			  .area-com-container {
			    margin-top: 1vh;
			    width: 100%;
			    position: relative;
			    height: 6.4%;
			    width: 89%;
			    margin-left: 20.5vh;
			    .area-bottom {
			      height: 100%;
			      width: 82.5%;
			      position: absolute;
			      top: 0;
			      right: 0;
			    }
			     ::after{
			     content: "";
			        display: block;
			        height: 0;
			        clear:both;
			        visibility: hidden;
			  }
			  }
			  .detect {
			    width: 65%;
			    height: 30%;
			    margin-left: 28.5vh;
			    position: relative;
			  }
			  .lineDevice {
			    width: 90%;
			    height: 3%;
			    position: relative;
			    .carCom {
			      width: 100%;
			      height: 100%;
			      position: absolute;
			      left: 9vw;
			      top: 0vh;
			      &.last {
			        width: 60%;
			      }
			    }
			    .carcom3 {
			      position: relative;
			      top: -3vh;
			    }
			  }
			  .lineDeviceContainer {
			    width: 90%;
			    height: 2%;
			    position: relative;
			    .carCom {
			      width: 100%;
			      height: 100%;
			      position: absolute;
			      left: 9vw;
			      top: 1vh;
			      .carcom3 {
			        position: relative;
			        top: -3vh;
			      }
			    }
			  }
			  .bagBotDeviceArea {
			    width: 73%;
			    height: 5%;
			    margin-left: 44vh;
			    margin-right: 5vw;
			    position: relative;
			    box-sizing: border-box;
			    .area-name {
			      position: absolute;
			      left: 0;
			      top: 0;
			    }
			  }
			}
			.tableCon {
			  width: 17%;
			  height: 90%;
			  position: absolute;
			  top: 10%;
			  right: 0;
				display: flex;
				flex-direction: column;
				.rightBox{
					flex: 1;
					display: flex;
					flex-direction: column;
					.border-box-content{
						margin-left: 5%;
						width: 90%;
						height: 96%;
						display: flex;
						flex-direction: column;
						.dvHeader{
							margin-top: 18%;
							flex: 1;
/* 							border: 1px solid red; */
							display: flex;
							.texts{
								flex: 1;
							}
						}
						.dvGraph{
							flex: 4;
/* 							border: 1px solid yellow; */
						}
					}	
				}
			}		
			.packPosition{
				position: relative; right: -20vh; top: -2vh;
			}
			.tempture {
			  position: relative;
			  top: -25vh;
			  width: 25vh;
			  height: 34vh;
			  left: 16vh;
			  padding-top: 1vh;
			  .car-dataShow{
			    margin-bottom: 2vh;
			  }
				.dv-percent-pond text{
					font-size: 15px;
				}
		}
		}
}
</style>
