<template>
  <div id="data-view">
    <dv-full-screen-container v-title data-title="宝钢钢管7号线智能诊断系统">
      <div class="main-header">
        <top-header />
      </div>
      <div class="main-body">
        <div class="body-left">
          <sidebar-nav />
        </div>
        <div class="body-center">
          <el-row class="first-row">
            <el-col :span="6" class="common-info">
              <div class="table-info">
                <div
                  class="table-one"
                  style="font-size: 12px; cursor: pointer"
                  @click="goToThird"
                >
                  产线信息
                </div>
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
            </el-col>
            <el-col :span="18" class="shagnLiaoArea">
              <area-one-com :deviceListName="deviceList1Name" />
            </el-col>
          </el-row>
          <el-row class="second-row">
            <el-col :span="24" style="height: 100%">
              <line-device :lineNum="1"></line-device>
              <div class="carCom">
								<img src="../../assets/img/car.png" class="imgCar1" :style="{ left: left1 + 'px' }" />
              </div>
            </el-col>
          </el-row>
          <el-row class="third-row" type="“flex”">
            <el-col style="height: 100%; width: 19%">
              <!-- 返修区 -->
              <div class="" style="height: 100%">
                <area-one-com :deviceListName="deviceList9Name" />
              </div>
            </el-col>

            <!-- 车丝区域 -->

            <div class="car_area areaBorderStyle">
               <div class="doorOne">
              <i class="iconfont icon-mendoor13"></i>
            </div>
            <div class="doorTwo">
              <i class="iconfont icon-mendoor13"></i>
            </div>
              <div class="area_name">车丝区域</div>
              <el-col style="height: 100%; width: 11%">
                <fcl1 @linkDetail="linkDetail"></fcl1>
              </el-col>
              <el-col style="height: 100%; width: 18%">
                <fc @linkDetail="linkDetail"></fc>
              </el-col>
              <el-col style="height: 100%; width: 11%">
                <fcl2 @linkDetail="linkDetail"></fcl2>
              </el-col>

              <el-col style="height: 100%; width: 11%">
                <fcr1 @linkDetail="linkDetail"></fcr1>
              </el-col>
              <el-col style="height: 100%; width: 18%">
                <fc1 @linkDetail="linkDetail"></fc1>
              </el-col>
              <el-col style="height: 100%; width: 11%">
                <fcr2 @linkDetail="linkDetail"></fcr2>
              </el-col>
            </div>
          </el-row>
          <el-row class="fourth-row">
            <el-col :span="24" style="height: 100%">
              <line-device :lineNum="2"></line-device>
              <div class="carCom">
                <img src="../../assets/img/car.png" class="imgCar2" :style="{ left: left2 + 'px' }" />
              </div>
            </el-col>
          </el-row>
          <!-- 管拧区 -->
          <el-row class="fivth-row">
            <div
              style="width: 58%; height: 100%; border: 1px solid #203456"
            >
            <scroll-bar />
            </div>
            <div class="pip_area areaBorderStyle">
              <el-col style="height: 100%; width: 28%">
                <gnleft></gnleft>
              </el-col>
              <el-col style="height: 100%; width: 44%">
                <gncenter></gncenter>
              </el-col>
              <el-col style="height: 100%; width: 28%">
                <gnright></gnright>
              </el-col>
            </div>
          </el-row>
          <el-row class="six-row">
            <el-col :span="5" style="height:100%"></el-col>
            <el-col :span="19" style="height:100%">
              <div class="area-bottom">
                <areabottom></areabottom>
              </div>
            </el-col>
          </el-row>
          <div class="seven-row">
            <div class="seven-left">
              <dv-border-box-12>
              <div class="tempture">
                
                <div class="car-dataShow">
                  <div>
                    <span style="font-size: 14px">1#RGV电池电量及温度</span>
                  </div>
                  <div>
                    <dv-percent-pond
                      :config="config"
                      style="
                        width: 200px;
                        height: 50px;
                        margin: 2px auto;
                      "
                    />
                  </div>
                  <div>
                    <dv-percent-pond
                      :config="config3"
                      style="width: 200px; height: 50px; margin: 2px auto"
                    />
                  </div>
                </div>
               

                <div class="car-dataShow">
                  <span style="font-size: 14px">2#RGV电池电量及温度</span>
                  <div>
                    <dv-percent-pond
                      :config="config1"
                      style="width: 200px; height: 50px; margin: 2px auto"
                    />
                  </div>
                  <div>
                    <dv-percent-pond
                      :config="config4"
                      style="width: 200px; height: 50px; margin: 2px auto"
                    />
                  </div>
                </div>
                <div class="car-dataShow">
                  <span style="font-size: 14px">3#RGV电池电量及温度</span>
                  <div>
                    <dv-percent-pond
                      :config="config2"
                      style="width: 200px; height: 50px; margin: 2px auto;"
                    />
                  </div>
                  <div>
                    <dv-percent-pond
                      :config="config5"
                      style="width: 200px; height: 50px; margin: 2px auto"
                    />
                  </div>
                </div>
              </div>
               </dv-border-box-12>
            </div>
            <div class="seven-right">
              <el-row style="width: 100%; height: 75%">
                <el-col :span="9" style="height: 100%">
                  <detect-left></detect-left>
                </el-col>
                <el-col :span="15" style="height: 100%">
                  <detect-right></detect-right>
                </el-col>
              </el-row>
              <el-row style="width: 100%; height: 11%">
                   <el-col :span="24" style="height: 100%;">
              <line-device :lineNum="3"></line-device>
              <div class="carCom">
                <img src="../../assets/img/car.png" class="imgCar3" :style="{ left: left3 + 'px' }" />
              </div>
            </el-col>
              </el-row>
              <el-row style="width: 100%; height: 14%"> 
                            <el-col style="height: 100%; width: 95%" :span='24'>
              <!-- 打包区 -->
              <div class="bagBotDeviceArea areaBorderStyle">
                <div class="da-container">
                  <div class="square">出废区</div>
                  <div class="area-name">打包区域</div>
                  <div class="da-container-left">成型区</div>
                  <div
                    class="da-container-center"
                    @click="linkDetail1(34, '打捆机','T034')"
                    style="cursor: pointer"
                  >
                    <div class="dv-title">打捆机</div>
                    <div
                      class="LEDbtn greenBtn packPosition"
                      :style="{
                        backgroundColor:
                          this.$store.state.WebsocketMessage
                            .Data34,
                      }"
                    ></div>
                  </div>
                  <div class="da-container-right">成捆移送</div>
                </div>
              </div>
            </el-col>
              </el-row>
            </div>
          </div>
          <!-- <el-row class="eight-row">
            <el-col :span="4"></el-col>
            <el-col :span="20" style="height: 100%">
              <line-device :lineNum="3"></line-device>
              <div class="carCom">
                <img src="../../assets/img/car.png" class="imgCar3" :style="{ left: left3 + 'px' }" />
              </div>
            </el-col>
          </el-row> -->
          <!-- <el-row class="nine-row">
              <div class="doorThree">
              <i class="iconfont icon-mendoor13"></i>
            </div>
            <el-col style="height: 100%; width: 20%"></el-col>
            <el-col style="height: 100%; width: 80%">
              <div class="bagBotDeviceArea areaBorderStyle">
                <div class="da-container">
                  <div class="square">出废区</div>
                  <div class="area-name">打包区域</div>
                  <div class="da-container-left">成型区</div>
                  <div
                    class="da-container-center"
                    @click="linkDetail1(34, '打捆机')"
                    style="cursor: pointer"
                  >
                    <div class="dv-title">打捆机</div>
                    <div
                      class="LEDbtn greenBtn packPosition"
                      :style="{
                        backgroundColor:
                          this.$store.state.WebsocketMessage
                            .Data34,
                      }"
                    ></div>
                  </div>
                  <div class="da-container-right">成捆移送</div>
                </div>
              </div>
            </el-col>
          </el-row> -->
        </div>
        <div class="body-right">
          <div class="tableCon">
            <div class="rightBox">
              <dv-border-box-11 title="1#车丝机振动">
                <div class="dvHeader">
                  <div class="texts">主轴箱：</div>
                </div>
                <div class="dvGraph">
                  <div
                    class="main"
                    ref="chartRing1"
                    style="width: 310px; height: 140px"
                  ></div>
                </div>
								<div class="dvHeader" style="margin-top: 0px!important;">
								  <div class="stopTime">停机时间：</div>
								</div>
              </dv-border-box-11>
            </div>
            <div class="rightBox">
              <dv-border-box-11 title="2#车丝机振动">
                <div class="dvHeader">
                  <div class="texts">主轴箱：</div>
                </div>
                <div class="dvGraph">
                  <div
                    class="main"
                    ref="chartRing2"
                    style="width: 310px; height: 140px"
                  ></div>
                </div>
								<div class="dvHeader" style="margin-top: 0px!important;">
								  <div class="stopTime">停机时间：</div>
								</div>
              </dv-border-box-11>
            </div>
            <div class="rightBox">
              <dv-border-box-11 title="3#车丝机振动">
                <div class="dvHeader">
                  <div class="texts">主轴箱：</div>
                </div>
                <div class="dvGraph">
                  <div
                    class="main"
                    ref="chartRing3"
                    style="width: 310px; height: 140px"
                  ></div>
                </div>
								<div class="dvHeader" style="margin-top: 0px!important;">
								  <div class="stopTime">停机时间：</div>
								</div>
              </dv-border-box-11>
            </div>
            <div class="rightBox">
              <dv-border-box-11 title="4#车丝机振动">
                <div class="dvHeader">
                  <div class="texts">主轴箱：</div>
                </div>
                <div class="dvGraph">
                  <div
                    class="main"
                    ref="chartRing4"
                    style="width: 310px; height: 140px"
                  ></div>
                </div>
								<div class="dvHeader" style="margin-top: 0px!important;">
								  <div class="stopTime">停机时间：</div>
								</div>
              </dv-border-box-11>
            </div>

               <div class="rightBox last">
              <dv-border-box-13>
								<div class="dvHeader" style="margin-top: 0px!important;">
								  <div class="stopTime" style="margin-bottom:20px;margin-left:-50px">管拧机停机时间：</div>
								</div>
              </dv-border-box-13>
            </div>

          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script defer=true>
function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}
var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
import * as echarts from "echarts";
import store from "@/store/index.js";
import TopHeader from "./components/topHeader";
import AreaOneCom from "./components/AreaOneCom";
import lineDevice from "@/components/lineDevice";
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
import SidebarNav from "@/components/SideBarNav3";
// import SidebarNav from "@/components/sidebarNav";
import detectLeft from "./components/detectLeft";
import detectRight from "./components/detectRight";

import { indexScrollBar } from "@/api/detail.js";
import ScrollBar from '../../components/scrollBar.vue';
// import oneCell from "@/components/oneCell";
export default {
  name: "HelloWorld",
  props: {},
  watch: {
		"$store.state.WebsocketMessage.Data118"(newVal,oldVal){
			console.log("接收1号小车",newVal)
			let length1 = newVal
			if( length1 <= 2375){
				this.left1 = 620 - (length1/2375)*210
			}else if(2375<length1&&length1<=27924){
				this.left1 = 410 - (length1-2375)/25549*560
			}else if(length1>27924&&length1<=48385){
				this.left1 = -150 - (length1-27924)/20461*400
			}else{
				this.left1 = -600
			}
		},
		"$store.state.WebsocketMessage.Data119"(newVal,oldVal){
			console.log("接收2号小车",newVal)
			let length2 = newVal
			if( length2 <= 2035){
				this.left2 = 620 - (length2/2035)*210
			}else if(2035<length2&&length2<=27068){
				this.left2 = 410 - (length2-2035)/25033*560
			}else if(length2>27068&&length2<=47855){
				this.left2 = -150 - (length2-27068)/20787*400
			}else{
				this.left2 = -600
			}
		},
		"$store.state.WebsocketMessage.Data120"(newVal,oldVal){
			console.log("接收3号小车",newVal)
			let length3 = newVal
			if( length3 <= 2155){
				this.left3 = -480 + (length3/2155)*80
			}else if(2155<length3&&length3<18585){
				this.left3 = -400 + (length3 - 2155)/16430*400
			}else{
				this.left3 = 100
			}
		},
		"$store.state.WebsocketMessage.Data112"(newVal,oldVal){
				const { config } = this;
				this.config.value = newVal;
				this.config = { ...this.config };
		},
		"$store.state.WebsocketMessage.Data113"(newVal,oldVal){
				const { config3 } = this;
				this.config3.value = newVal;
				this.config3 = { ...this.config3 };
		},
		"$store.state.WebsocketMessage.Data114"(newVal,oldVal){
				const { config1 } = this;
				this.config1.value = newVal;
				this.config1 = { ...this.config1 };
		},
		"$store.state.WebsocketMessage.Data115"(newVal,oldVal){
				const { config4 } = this;
				this.config4.value = newVal;
				this.config4 = { ...this.config4 };
		},
		"$store.state.WebsocketMessage.Data116"(newVal,oldVal){
				const { config2 } = this;
				this.config2.value = newVal;
				this.config2 = { ...this.config2 };
		},
		"$store.state.WebsocketMessage.Data117"(newVal,oldVal){
				const { config5 } = this;
				this.config5.value = newVal;
				this.config5 = { ...this.config5 };
		},
  },
  data() {
    return {
			left1:600,
			left2:600,
			left3:-480,
      data: [],
      data1: [],
      data2: [],
      testValue: {},
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
      scrollBarMessage: [],
      config: {
        value: this.$store.state.WebsocketMessage.Data112,
      //  textSize: '12px'
      },
      config1: {
        value: this.$store.state.WebsocketMessage.Data113,
      },
      config2: {
        value: this.$store.state.WebsocketMessage.Data114,
        // borderRadius:10,
        // colors: ['#ff0000', '#ff0000']
      },
      config3: {
        value:
          this.$store.state.WebsocketMessage.Data115,
        formatter: "{value}­°C",
      },
      config4: {
        value:
          this.$store.state.WebsocketMessage.Data116,
        formatter: "{value}­°C",
      },
      config5: {
        value:
          this.$store.state.WebsocketMessage.Data117,
        formatter: "{value}­°C",
      },
      scrollChange: true,
      batteryChange: true,
      option6: {
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
          height: 160,
          width: 100,
        },
      },
      option7: {
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
          height: 160,
          width: 100,
        },
      },
      option8: {
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
          height: 160,
          width: 100,
        },
      },
      optionTime: {
        title: {
          text: "动态数据 + 时间坐标轴",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            // hoverAnimation: false,
            emphasis: {
              focus: "series",
            },
            data: this.data,
          },
        ],
      },
      // 右侧动态图表
      option: {
        // title: {
        //   text: "动态数据 + 时间坐标轴",
        // },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        yAxis: {
          type: "value",
          // min:0, //y轴的最小值
          // max:100, //y轴最大值
          // interval:20, //值之间的间隔
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        series: [
          {
            type: "line",
            showSymbol: false,
            stack: "总量",
            // hoverAnimation: false,
            emphasis: {
              focus: "series",
            },
            data: data,
          }
        ],
        grid: {
          x: 40,
          y: 30,
          x2: 30,
          y2: 30,
          width: "60%",
          height: '60%'
        },
      },
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      now: +new Date(1997, 9, 3),
      oneDay: 24 * 3600 * 1000,
      value: Math.random() * 1000,
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
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
          Math.round(value),
        ],
      };
    },
    //点击跳转传参
    linkDetail(id) {
      this.$router.push({
        path: "/index",
        query: { id: id },
      });
    },
    goToThird() {
      this.$router.push({
        path: "/thirdDetail",
      });
    },
    linkDetail1(id, name,str) {
      this.$router.push({
        path: "/index",
        query: { id: id, name: name,str },
      });
    },
    //首页滚动条获取数据
    async indexScrollBar() {
      await indexScrollBar().then((res) => {
        this.scrollChange = false;
        if (res.data.status === true) {
          this.scrollBarMessage = res.data.result;
        } else {
          this.scrollBarMessage[0] = ["", "", res.data.message];
        }
        this.$nextTick(() => {
          this.scrollChange = true;
        });
      });
    },
    showSideNavMeth() {
      this.showSideNav = !this.showSideNav;
    },
  },
  mounted() {
    console.log(this.$store.state.ws)
		var s = this.$store
    if(this.$store.state.ws.readyState == 1){
			s.state.ws.send('T001')
    }
		// setTimeout(() =>{
		// 	s.state.ws.send('T001')
		// },2000)

    setTimeout(() => {
      // this.myChart = echarts.init(document.getElementById("main"));
      this.myChart1 = echarts.init(this.$refs.chartRing1);
      this.myChart2 = echarts.init(this.$refs.chartRing2);
      this.myChart3 = echarts.init(this.$refs.chartRing3);
      this.myChart4 = echarts.init(this.$refs.chartRing4);
      this.myChart1.setOption(this.option);
      this.myChart2.setOption(this.option);
      this.myChart3.setOption(this.option);
      this.myChart4.setOption(this.option);
    }, 0);
    setInterval(() => {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data1.shift();
        this.data2.shift();
        this.data.push(randomData());
        this.data1.push(randomData());
        this.data2.push(randomData());
        // console.log("data",this.data);
        // console.log("data1",this.data1)
      }
      this.myChart1.setOption({
        series: [
          {
            data: this.data,
          },
        ],
      });
      this.myChart2.setOption({
        series: [
          {
            data: this.data,
          },
        ],
      });
      this.myChart3.setOption({
        series: [
          {
            data: this.data,
          },
        ],
      });
      this.myChart4.setOption({
        series: [
          {
            data: this.data,
          },
        ],
      });
    }, 5000);
  },
	created() {
		for (var i = 0; i < 1000; i++) {
		  this.data.push(randomData());
		  this.data1.push(randomData());
		  this.data2.push(randomData());
		}
	},
  components: {
    TopHeader,
    lineDevice,
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
    // detect,
    // oneCell,
    detectRight,
    detectLeft
  },
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  color: #fff;
  #dv-full-screen-container {
    .dv-percent-pond text{
      font-size: 14px!important;
    }
    .main-header {
      width: 100%;
      height: 8%;
    }
    .main-body {
      width: 100%;
      height: 92%;
      display: flex;
      .dv-percent-pond text{
      font-size: 14px!important;
      }
      .body-left {
        height: 100%;
        width: 11%;
        padding-right: 1%;
        box-sizing: border-box;
        padding-top: 50px;
        z-index:2021
      }
      .body-right {
        height: 95%;
        width: 16%;
        padding-top: 20px;
        .tableCon {
          width: 15%;
          height: 90%;
          margin-right: 1.5vh;
          margin-left: 1vh;
          box-sizing: border-box;
          position: absolute;
          top: 10%;
          right: 0;
          display: flex;
          flex-direction: column;
          .rightBox {
            // flex: 1;
              height: 22%;
            display: flex;
            flex-direction: column;
            &.last{
              height: 9%;
              margin-top: 2vh;
            }
            .border-box-content {
              margin-left: 5%;
              width: 90%;
              height: 100%;
              display: flex;
              flex-direction: column;
              .dvHeader {
                margin-top: 20%;
                flex: 1;
                display: flex;
                .texts {
                  flex: 1;
                }
                .stopTime{
                  position: absolute;
                  bottom: 1vh;
                  left: 35%;
                }
              }
              .dvGraph {
                flex: 4;
                position: absolute;
                top: 4.5vh;
                .main {
                  width: 50%;
                  box-sizing: border-box;
                  height: 100%;
                  div {
                    canvas {
                      width: 310px !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .body-center {
        height: 100%;
        width: 75%;
        .first-row {
          width: 100%;
          height: 5%;
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
        .second-row {
          width: 100%;
          height: 4%;
          position: relative;
          .carCom {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0vw;
            top: 0vh;
						.imgCar1{
							transform: scale(0.2);
							position: relative;
							top: -45px;
							left: 450px;
							transition: 1s;
						}
          }
        }
        .third-row {
          position: relative;
          height: 20%;
          width: 100%;
          .car_area {
            width: 100%;
            height: 100%;
            position: relative;
            .doorOne{
              position: absolute;
              left: 42vw;
              top: 0;
            }
               .doorTwo{
              position: absolute;
              left: 42vw;
              bottom: 0;
            }
            .area_name {
              position: absolute;
              top: 0;
              left: 19%;
              color: #2155ad;
            }
          }
        }
        .fourth-row {
          width: 100%;
          height: 4%;
          .carCom {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0vw;
            top: 0vh;
						.imgCar2{
							transform: scale(0.2);
							position: relative;
							top: -45px;
							left: 450px;
							transition: 1s;
						}
          }
        }
        .fivth-row {
          width: 100%;
          height: 20%;
          position: relative;
          display: flex;
          .pip_area {
            width: 42%;
            height: 100%;
          }
        }
        .six-row {
          width: 100%;
          height: 6%;
          .area-bottom {
            width: 100%;
            height: 100%;
          }
        }
        .seven-row {
          width: 100%;
          height: 39%;
          display: flex;
          .seven-left {
            width: 20%;
            height: 100%;
            margin-right: 10px;
            box-sizing: border-box;
            .tempture{
              padding-top: 2px;
              .car-dataShow{
                .dv-percent-pond text{
                font-size: 18px!important;
                }
              }
            }

          }
          .seven-right {
            width: 80%;
            height: 100%;
            .dry-area {
              width: 100%;
              height: 30%;
              box-sizing: border-box;
            }
              .carCom {
            width: 100%;
            height: 100%;
            position: absolute;
            // left: 18vw;
            top: 0vh;
						.imgCar3{
							transform: scale(0.2);
							position: relative;
							top: -45px;
							left: 130px;
							transition: 1s;
						}
          }
            .detect-area {
              width: 100%;
              height: 70%;
              box-sizing: border-box;
            }
                .da-container {
            display: flex;
            width: 100%;
            align-items: flex-start;
            height: 100%;
            position: relative;
            padding-top: 1vh;
            box-sizing: border-box;
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
              display: flex;
              justify-content: space-around;
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
          .bagBotDeviceArea {
            width: 100%;
            height: 100%;
            // margin-left: 44vh;
            // margin-right: 5vw;
            position: relative;
            box-sizing: border-box;
            .area-name {
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          }
        }
        .eight-row {
          width: 100%;
          height: 4%;
          .carCom {
            width: 55%;
            height: 100%;
            position: absolute;
            left: 18vw;
            top: 0vh;
						.imgCar3{
							transform: scale(0.2);
							position: relative;
							top: -45px;
							left: 130px;
							transition: 1s;
						}
          }
        }
        .nine-row {
          width: 100%;
          height: 6%;
          .doorThree{
            position: absolute;
            left: 37vw;
            top: -4vh;
          }
          .da-container {
            display: flex;
            width: 100%;
            align-items: flex-start;
            height: 100%;
            position: relative;
            padding-top: 1vh;
            box-sizing: border-box;
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
              display: flex;
              justify-content: space-around;
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
          .bagBotDeviceArea {
            width: 100%;
            height: 100%;
            // margin-left: 44vh;
            // margin-right: 5vw;
            position: relative;
            box-sizing: border-box;
            .area-name {
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
}
</style>