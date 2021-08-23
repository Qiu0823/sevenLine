<template>
  <div id="data-view">
    <dv-full-screen-container>
      <!--      <div class="main-header">
        <div class="mh-middle">设备故障诊断系统</div>
      </div> -->
      <top-header></top-header>
       <router-link to="/">
        <img src="~@/assets/img/home.png" class="img1" />
      </router-link>
      <!-- <el-button
        @click="goToThird"
        type="primary"
        style="position: absolute; top: 50px; left: 130px"
        >修改原因措施</el-button> -->
     
      <NavBar></NavBar>
      <dv-border-box-1 class="main-container">
        <div class="left-container">
          <dv-border-box-3 class="left-chart-container">
            <device-info
              style="width: 85%; margin: 30px auto"
              :devName="devName"
            ></device-info>
          </dv-border-box-3>
        </div>

        <div class="right-main-container">
          <div class="rmc-top-container" ref="rmcTop">
            <dv-border-box-13 class="rmctc-left-container">
              <el-tabs v-model="activeName" stretch>
                <el-tab-pane label="钢管实时状态" name="first">
                  <div class="rmctc-left-table1" :style="{height: table_height +'px'}">
                    <!-- <div style="width: 100%; height: 25px; text-align: center">
                      待处理故障
                    </div> -->
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data51}"></div>
												<div style="float: left;margin-top: 7px!important">	1#RGV小车</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data51==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data32}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data50}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位7</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data50==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data31}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data49}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位6</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data49==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data30}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data48}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位5</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data48==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data29}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data47}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位4</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data47==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data28}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data46}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位3</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data46==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data27}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data45}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位2</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data45==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data26}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data44}"></div>
												<div style="float: left;margin-top: 7px!important">	锯切废钢位1</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data44==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data25}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data43}"></div>
												<div style="float: left;margin-top: 7px!important">东端锯切工位</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data43==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data24}}</span>
											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data42}"></div>
												<div style="float: left;margin-top: 7px!important">东端锯切识别工位</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data42==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data23}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data41}"></div>
												<div style="float: left;margin-top: 7px!important">西端锯切工位</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data41==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data22}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data40}"></div>
												<div style="float: left;margin-top: 7px!important">西端锯切识别工位</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data40==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data21}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data39}"></div>
												<div style="float: left;margin-top: 7px!important">锯切对齐工位</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data39==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data20}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data38}"></div>
												<div style="float: left;margin-top: 7px!important">锯切前待料位4</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data38==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data19}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data37}"></div>
												<div style="float: left;margin-top: 7px!important">锯切前待料位3</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data37==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data18}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data36}"></div>
												<div style="float: left;margin-top: 7px!important">锯切前待料位2</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data36==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data17}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data35}"></div>
												<div style="float: left;margin-top: 7px!important">锯切前待料位1</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data35==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data16}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data34}"></div>
												<div style="float: left;margin-top: 7px!important">2#RGV小车</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data34==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data15}}</span>

											</div>
										</div>
										<div class="divBox">
											<div class="left">
												<div class="LEDbtn greenBtn add" :style="{backgroundColor:$store.state.WebsocketMessage.Data33}"></div>
												<div style="float: left;margin-top: 7px!important">返修台架</div>
											</div>
											<div class="center">
												<div class="pipe" v-if="$store.state.WebsocketMessage.Data33==='#0D6B0D'">
												</div>
											</div>
											<div class="right">
												<span style="float: left;margin-top: 6px;margin-left: 20px;">状态：{{$store.state.WebsocketMessage.Data14}}</span>

											</div>
										</div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="钢管历史信息" name="second">
                  <div class="rmctc-left-table2">
                    <!-- <div style="width: 100%; height: 25px; text-align: center">
                      已处理故障
                    </div> -->

                    <el-table
                      :data="tableData1"
                      :row-style="TableRowStyle"
                      :header-cell-style="{
                        'background-color': '#003B51',
                        color: 'white',
                        'text-align': 'center',
                      }"
                      :height="table_height"
                      style="width: 100%; height: 90%"
                      class="customer-no-border-table"
                    >
                      <el-table-column
                        prop="trussStatus"
                        label="桁架状态"
                        align="center"
                      >
                      </el-table-column>
											<el-table-column
											  prop="steelNumber"
											  label="管号"
											  align="center"
											>
											</el-table-column>
                      <el-table-column label="调运开始位" width="180" prop="transferStartPosition">
                      </el-table-column>
                      <el-table-column
                        prop="transferEndPosition"
                        align="center"
                        label="调运结束位"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="transferStartTime"
                        align="center"
                        label="开始时间"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="transferEndTime"
                        align="center"
                        label="结束时间"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="steelStatus"
                        align="center"
                        label="钢管状态"
                      >
                      </el-table-column>

                    </el-table>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </dv-border-box-13>
          </div>
          <!-- 
              <FourChart v-else-if="this.$route.query.name.includes('收口机')"></FourChart>
            <FiveChart v-else-if="this.$route.query.name.includes('测量点')"></FiveChart>
           -->
          <dv-border-box-4
            class="rmc-bottom-container"
             v-if="this.$route.query.name.includes('车丝机')">
            <ThereChart></ThereChart>
          </dv-border-box-4>
            <dv-border-box-4
            class="rmc-bottom-container"
             v-else-if="this.$route.query.name.includes('收口机')">
              <FourChart></FourChart>
          </dv-border-box-4>
              <dv-border-box-4
            class="rmc-bottom-container"
             v-else-if="this.$route.query.name.includes('测量点')">
              <FiveChart></FiveChart>
          </dv-border-box-4>
               <dv-border-box-4
            class="rmc-bottom-container"
             v-else-if="this.comStr">
             <SupMachChart></SupMachChart>
          </dv-border-box-4>
            <dv-border-box-4
            class="rmc-bottom-container"
             v-else-if="this.$route.query.name.includes('#RGV') && this.$route.query.name.length == 5">
             <RGVChart></RGVChart>
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>

  </div>
</template>

<script>
// import ThereChart from './components/SupMachChart.vue'
import topHeader from "./components/topHeader1.vue";
import ThereChart from '@/pages/devDetail/components/ThereChart.vue';
import deviceInfo from "./components/deviceInfo.vue";
import FourChart from "./components/FourChart.vue";
import FiveChart from "./components/FiveChart.vue";
import NavBar from "./components/NavBar.vue";
import SupMachChart from "./components/SupChart.vue";
import RGVChart from "./components/RGVChart.vue";

import {
getTrussInfo
} from "@/api/detail.js";
// import {getnews} from '../../api/test.js'
export default {
  name: "DataView",
  components: {
    topHeader,
    deviceInfo,
    ThereChart,
    FourChart,
    FiveChart,
    NavBar,
    SupMachChart,
    RGVChart
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 12) {
        return value.slice(0, 12) + "...";
      }
      return value;
    },
  },
  data() {
    return {
      activeName: "first",
      devName: "",
      tableData1: [],
      table_height: 0, //控制表格的高度自适应
    };
  },
  created() {
  },
  methods: {
		async getTrussInfo(){
			await getTrussInfo().then(res =>{
				let{state,message,result} = res.data
				if(state === true){
					this.tableData1 = result
				}else{
					this.$message({
						showClose: true,
						message: message,
						type: 'error'
					});
				}
			})
		},
      //设置表格奇数行和偶数行的背景色
  TableRowStyle({ row, rowIndex }) {
    let styleJson = {};
    if (rowIndex % 2 === 1) {
      styleJson = {
        "background-color": "#003B51",
        color: "white",
      };
    } else {
      styleJson = {
        "background-color": "#0A2732",
        color: "white",
      };
    }
    return styleJson;
  },
  },
  mounted() {
    console.log(this.$route.query)
    // this.queryPendingError(this.$route.query.id);
    // this.queryHandledError(this.$route.query.id);
    this.devName = this.$route.query.name;
		this.getTrussInfo()
    setTimeout(() => {
         this.table_height = this.$refs.rmcTop.offsetHeight - 130;

    }, 100);
    // alert(this.pendingError)
  },
  computed:{
    comStr(){
      var str = this.$route.query.str;
      return (str.substr(1) - 0 >= 120 && str.substr(1) - 0 <= 125) ||  (str.substr(1) - 0 >= 115 && str.substr(1) - 0 <= 119) || ( str.substr(1) - 0 >= 104 && str.substr(1) - 0 <= 113 ) || (str.substr(1) - 0 >= 96 && str.substr(1) - 0 <= 101) ||
      (str.substr(1) - 0 >= 85 && str.substr(1) - 0 <= 93) ||  (str.substr(1) - 0 >= 80 && str.substr(1) - 0 <= 83) ||  (str.substr(1) - 0 >= 62 && str.substr(1) - 0 <= 78) ||  
      (str.substr(1) - 0 >= 51 && str.substr(1) - 0 <= 60)  || str == 'T127' || str == "T049" || str == "T048" || str == "T061" || str == 'T079' ||  str == 'T050'
    }
  }
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("~@/assets/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);
      a:visited {
        color: rgb(1, 134, 187);
      }
    }
    .mh-middle {
      font-size: 30px;
      margin: auto;
    }
    .mh-left,
    .mh-right {
      width: 450px;
    }
  }
  .main-container {
    height: calc(~"100% - 80px");
    display: flex;
    .border-box-content {
      display: flex;
    }
    .left-container {
      flex: 1;
      .left-chart-container {
        box-sizing: border-box;
      }
    }
    .right-main-container {
      flex: 4;
      padding-left: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .rmc-top-container {
        .rmctc-left-table1 {
          width: 100%;
          height: 90%;
					display: flex;
					flex-direction: column;
					.divBox{
						flex: 1;
						display: flex;
						.left{
							flex: 1;
						}
						.center{
							flex: 4;
							.pipe{
								height: 80%;
								width: 100%;
								background: -webkit-linear-gradient(top,black,white,black);
								margin-top: .2rem;
							}
						}
						.right{
							flex: 1;
						}
					}
        }
        flex: 3;
        .rmctc-left-container {
          .el-tabs {
            margin-top: 1vh;
            .el-tabs__header {
              // left: 3vh;
              width: 50%;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 20px;
              .el-tabs__item {
                color: #fff !important;
                font-size: 16px !important;
              }
            }
          }
          .border-box-content {
            display: flex;
            flex-direction: column;
          }
          .rmctc-left-table1 {
            margin: auto;
            width: 95%;
            flex: 1;
          }
          .rmctc-left-table2 {
            margin: 0 auto;
            width: 95%;
            flex: 1;
          }
        }
      }
    }
  }
  .el-input.is-disabled .el-input__inner {
    text-align: center;
  }
  .rmc-bottom-container {
    flex: 1;
  }
  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
  .el-table .cell {
    white-space: pre-line;
  }
  table {
    border-collapse: collapse;
  }
  .tb2 {
    border-left: 0px;
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: block;
  }
  .img1 {
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 50px;
    top: 50px;
    left: 30px;
  }
  .el-dialog--center {
    width: 60% !important;
    height: 80%;
    // background-image: url(../assets/img/bg.png);
  }
  td {
    height: 45px;
  }
  .el-dialog .el-table,
  .el-table__expanded-cell {
    background-color: white !important;
  }
  .buttonGroupLeft {
    width: 100px;
    float: left;
  }
  .buttonGroupRight {
    width: 70%;
    float: left;
    display: flex;
  }
  .buttonGroupRightDIV {
    flex: 1;
    margin-left: 20px;
  }
	.add{
		display: inline-block;
		margin-top: 11px!important;
		float: left;
		margin-left: 50px;
	}
  // .eshover:hover{
  // 	background-color:yellow
  // }
  .dv-border-box-4 {
    height: 0;
  }
}
</style>