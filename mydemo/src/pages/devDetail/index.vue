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
              <el-tabs v-model="activeName" @tab-click="handleTabClick" stretch>
                <el-tab-pane label="待处理故障" name="first">
                  <div class="rmctc-left-table1">
                    <!-- <div style="width: 100%; height: 25px; text-align: center">
                      待处理故障
                    </div> -->
                    <el-table
                      :data="pendingError"
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
                        prop="fault"
                        label="故障名称"
                        align="center"
                      >
                      </el-table-column>
                      <el-table-column label="故障原因" width="180">
                        <template slot-scope="scope">
                          <p
                            v-for="(item, i) in pendingError[scope.$index]
                              .reasonVOList"
                            v-bind:key="i"
                          >
                            {{ i + 1 }}: {{ item.reason }}
                          </p>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="faultType"
                        align="center"
                        label="故障级别"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="occurTime"
                        align="center"
                        label="故障发生时间"
                      >
                      </el-table-column>
                      <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                          <el-button
                            @click="showDialog3"
                            type="text"
                            size="small"
                            >查看电机信息</el-button
                          >
                          <br />
                          <el-button
                            @click="showDialog4(scope.row, scope.$index)"
                            type="text"
                            size="small"
                            >查看措施</el-button
                          >
                          <br />
                          <el-button
                            @click="showDialog6(scope.$index)"
                            type="text"
                            size="small"
                            >查看历史故障</el-button
                          >
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已处理故障" name="second">
                  <div class="rmctc-left-table2">
                    <!-- <div style="width: 100%; height: 25px; text-align: center">
                      已处理故障
                    </div> -->

                    <el-table
                      :data="handledError"
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
                        prop="fault"
                        label="故障名称"
                        align="center"
                      >
                      </el-table-column>

                      <el-table-column label="故障原因" width="180">
                        <template slot-scope="scope">
                          <p
                            v-for="(item, i) in handledError[scope.$index]
                              .reasonVOList"
                            v-bind:key="i"
                          >
                            {{ i + 1 }}: {{ item.reason }}
                          </p>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="faultType"
                        align="center"
                        label="故障措施"
                      >
                        <template slot-scope="scope">
                          <p
                            v-for="(item, i) in handledError[scope.$index]
                              .reasonVOList"
                            v-bind:key="i"
                          >
                            <span
                              v-for="(item1, j) in item.measuresVOList"
                              v-bind:key="j"
                              >{{ item1.measures }}</span
                            >
                          </p>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="remark"
                        align="center"
                        label="备注"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="faultType"
                        align="center"
                        label="故障级别"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="occurTime"
                        align="center"
                        label="故障发生时间"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="solveTime"
                        align="center"
                        label="故障处理时间"
                      >
                      </el-table-column>
                      <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                          <el-button
                            @click="showDialog5(scope.$index)"
                            type="text"
                            size="small"
                            >处理结果
                          </el-button>
                        </template>
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
             v-else-if="this.$route.query.name.includes('#RGV') || this.$route.query.name.length == 5">
             <RGVChart></RGVChart>
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>

    <!-- 		添加故障原因与措施dialog -->
    <el-dialog
      title="添加故障原因与措施"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div style="width: 70%; margin: auto">
        <span>故障名称:</span>
        <el-input
          :disabled="true"
          style="width: 250px; margin-left: 20px"
          v-model="input"
          placeholder="请输入内容"
        >
        </el-input>
      </div>
      <div style="width: 70%; margin: auto; margin-top: 10px !important">
        <span>原因:</span>
        <el-input
          style="width: 250px; margin-left: 47px"
          type="textarea"
          autosize
          placeholder="请输入故障原因"
          v-model="textarea1"
        ></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">提交</el-button>
      </span>
    </el-dialog>

    <!-- 		查看故障原因与措施dialog -->
    <el-dialog
      title="查看故障原因与措施"
      :visible.sync="centerDialogVisible1"
      width="30%"
      center
    >
      <el-table
        ref="multipleTable"
        :data="tableData1"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="measure" label="措施"> </el-table-column>
      </el-table>
      <div style="width: 100%">
        <el-button
          style="
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: 15px;
          "
          @click="addmeasure"
        >
          新增措施</el-button
        >
      </div>
    </el-dialog>

    <!-- 		新增措施dialog -->
    <el-dialog
      title="新增措施"
      :visible.sync="centerDialogVisible2"
      width="30%"
      center
    >
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea3"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAddMeasure">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 		查看电机信息dialog -->
    <el-dialog
      title="电机信息"
      :visible.sync="centerDialogVisible3"
      width="70%"
      center
    >
      <div
        class=""
        style="width: 100%; display: flex; justify-content: space-between"
      >
        <div style="width: 50%; text-align: center">
          <table width="100%" border="1">
            <tr>
              <td class="black_title">电机名称</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">电机位号</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">电气室</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">柜号</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">器件代号</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">电机开关箱</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">变频器型号</td>
            </tr>
            <tr>
              <td class="left_title bottom_border">操作台</td>
            </tr>
          </table>
        </div>
        <div style="width: 50%; text-align: center">
          <table width="100%" border="1" class="tb2">
            <tr>
              <td class="black_title"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
            <tr>
              <td class="left_title bottom_border"></td>
            </tr>
          </table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible3 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="查看措施"
      :visible.sync="centerDialogVisible4"
      width="60%"
      center
    >
      <el-tabs style="height: 450px" type="border-card" v-model="tabpanIndex">
        <el-tab-pane
          :name="i + 1 + ''"
          v-for="(item, i) in frmMessage.reasonVOList"
          v-bind:key="i"
          :label="'原因' + (i + 1)"
        >
          <div style="width: 70%; margin: auto; height: 80px; margin-top: 30px">
            <span style="display: inline-block; line-height: 40px"
              >故障名称:</span
            >
            <el-input
              :disabled="true"
              style="width: 68%; margin-left: 20px"
              v-model="frmMessage.fault"
              placeholder="请输入内容"
            >
            </el-input>
          </div>
          <div style="width: 70%; margin: auto; height: 80px">
            <span>故障原因:</span>
            <el-input
              :disabled="true"
              :value="item.reason"
              style="width: 68%; margin-left: 20px"
              placeholder="请输入内容"
            >
            </el-input>
          </div>
          <div style="width: 70%; margin: auto; height: 200px">
            <span style="position: relative; top: -15px">故障措施：</span>
            <el-table
              :show-header="false"
              ref="multipleTable"
              :data="item.measuresVOList"
              style="width: 68%; display: inline-block; margin-left: 20px"
            >
              <el-table-column prop="measures"></el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirmAddMeasure"
              >确 定</el-button
            >
          </span>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible4 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 处理结果dialog -->
    <el-dialog :visible.sync="centerDialogVisible5" width="40%" center>
      <div style="width: 80%; margin: auto; margin-top: 50px">
        <span>故障名称:</span>
        <el-input
          :disabled="true"
          type="text"
          style="width: 75%; margin-left: 20px"
          v-model="resultMessage.fault"
          placeholder="请输入内容"
        >
        </el-input>
      </div>
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <div style="width: 80%; margin: auto; display: flex; margin-top: 70px">
          <div class="buttonGroupLeft">
            <p>选择故障原因：</p>
            <p>选择故障措施：</p>
          </div>
          <div class="buttonGroupRight">
            <div
              v-for="(item, i) in resultMessage.resultVOList"
              @change="changeStatus1(i)"
              v-bind:key="i"
              class="buttonGroupRightDIV"
            >
              <el-checkbox
                v-model="form.reasons[i]"
                :true-label="item.reasonId"
                :title="item.reason"
                :checked="item.checked"
                >{{ item.reason | ellipsis }}</el-checkbox
              >
              <hr />
              <el-checkbox-group
                :disabled="!form.reasons[i]"
                v-model="form.checkboxGroup1[i]"
                size="small"
              >
                <el-checkbox
                  v-for="(item1, j) in item.measuresResultVOList"
                  v-bind:key="j"
                  :label="item1.measuresId"
                  :title="item1.measures"
                  >{{ item1.measures | ellipsis }}</el-checkbox
                >
              </el-checkbox-group>
            </div>
          </div>
        </div>
        <div
          style="width: 80%; margin: auto; margin-top: 70px"
          class="clearfix"
        >
          <div style="float: left; line-height: 40px">备注：</div>
          <el-form-item>
            <el-input
              type="textarea"
              v-model="form.resultNote"
              style="width: 75%; margin-left: 35px; float: left"
              :rows="5"
              placeholder="请输入内容"
            >
            </el-input>
          </el-form-item>
        </div>
        <div style="width: 100%; margin: auto">
          <el-button
            style="
              margin: auto;
              display: block;
              margin-top: 40px;
              position: relative;
              left: -80px;
            "
            type="submit"
            @click="closeDialog5"
            >提交处理结果</el-button
          >
        </div>
      </el-form>
    </el-dialog>

    <!-- 查看历史故障dialog -->
    <el-dialog :visible.sync="centerDialogVisible6" width="40%" center>
      <div class="block" style="margin-bottom: 20px">
        <span class="demonstration">月</span>
        <el-date-picker
          v-model="selectMonth"
          type="month"
          placeholder="选择月"
          @change="monthHandle"
        >
        </el-date-picker>
      </div>
      <el-table :data="ErrorMessage" border height="190" style="width: 100%">
        <el-table-column prop="reason" label="故障原因" width="180">
        </el-table-column>
        <el-table-column prop="measures" label="处理措施" width="180">
        </el-table-column>
        <el-table-column prop="note" label="备注"> </el-table-column>
        <el-table-column prop="solveTime" label="故障处理时间">
        </el-table-column>
      </el-table>
      <div style="margin-top: 10px">故障统计:</div>
      <div
        style="width: 100%; border: 1px gray solid; height: 400px"
        id="ErrorStasticChart"
      ></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible6 = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
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
  pending,
  handled,
  frm,
  ErrorMessageChart,
  ErrorMessageHistory,
  getHandleResult,
  postUpdateResult,
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
      form: {
        reasons: [],
        checkboxGroup1: [],
        resultNote: "",
      },
      monthTime: "",
      selectMonth: "", //选择月份
      devName: "",
      tableData1: null,
      centerDialogVisible: false,
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      centerDialogVisible3: false,
      centerDialogVisible4: false,
      centerDialogVisible5: false,
      centerDialogVisible6: false,
      input: "",
      textarea1: "",
      textarea2: "",
      textarea3: "",
      scout: null,
      srowindex: 0, //保存每一行的index
      srowi: 0, //保存每一行的i
      checkList1: [],
      resultNote: "", //查看结果备注
      pendingError: [], //待处理故障信息
      handledError: [], //已处理故障信息
      frmMessage: {}, //查询措施信息
      tabpanIndex: "1", //默认选中的tabpan
      chartMessage: {}, //故障信息图表信息
      ErrorMessage: [], //历史故障信息
      changeStatus: [],
      table_height: 0, //控制表格的高度自适应
      faultRecordid: 0,
      resultMessage: {}, //处理结果返回的信息,
    };
  },
  created() {
  },
  methods: {
    goToThird() {
      this.$router.push({
        path: "/thirdDetail",
      });
    },
    //tab页切换事件
    handleTabClick(tab, event) {
      console.log(tab, event);
    },
    //查看历史故障选择年份后
    monthHandle(val) {
      this.chartMessage = {};
      this.ErrorMessage = [];
      var str = val.toLocaleDateString().replace("/", "0");
      const realStr = str.substring(0, str.length - 2);
      this.monthTime = realStr;
      console.log(typeof realStr);
      this.ErrorMessageHistory(
        this.$route.query.id,
        this.faultRecordid,
        this.monthTime
      );
      this.getErrorChartMessage(
        this.$route.query.id,
        this.faultRecordid,
        this.monthTime
      );
    },
    //查询处理结果的接口
    async getHandleResult(id) {
      let data = {
        faultRecordId: id,
      };
      this.form.reasons = [];
      this.form.checkboxGroup1 = [];
      await getHandleResult(data).then((res) => {
        let { state, message, result } = res.data;
        if (state === true) {
          // this.centerDialogVisible5= false
          this.resultMessage = result;
          this.form.checkboxGroup1 = [];
          if (this.resultMessage.resultVOList.length != 0) {
            for (var i = 0; i < this.resultMessage.resultVOList.length; i++) {
              this.form.reasons.push(
                this.resultMessage.resultVOList[i].checked
              );
              this.form.checkboxGroup1.push([]);
              for (
                var j = 0;
                j <
                this.resultMessage.resultVOList[i].measuresResultVOList.length;
                j++
              ) {
                if (
                  this.resultMessage.resultVOList[i].measuresResultVOList[j]
                    .checked === true
                ) {
                  this.form.checkboxGroup1[i].push(
                    this.resultMessage.resultVOList[i].measuresResultVOList[j]
                      .measuresId
                  );
                }
              }
              // this.changeStatus[i] = !this.resultMessage.resultVOList[i].checked
            }
            console.log("changeStatus", this.changeStatus);
          } else {
            this.$message({
              message: "暂无可查看结果",
              type: "warning",
              center: true,
            });
          }
        } else {
          this.$message({
            message: message,
            type: "warning",
            center: true,
          });
        }
      });
    },
    //修改changeStatus数组
    changeStatus1(i) {
      console.log("reasons", this.form.reasons);
      // console.log("sssss",this.form.reasons[i])
      // console.log("i",i)
      // console.log('resultMessage',this.resultMessage.resultVOList[i].checked)
      if (this.resultMessage.resultVOList[i].checked === false) {
        this.resultMessage.resultVOList[i].checked = true;
      } else {
        this.resultMessage.resultVOList[i].checked = false;
      }
      // var d = this.resultMessage.resultVOList[i].checked
      // this.resultMessage.resultVOList[i].checked = !d
      // if(this.resultMessage.resultVOList[i].checked){
      // 	console.log(11111111111111)
      // }else{
      // 	console.log(222222222222222)
      // }
      // this.changeStatus[i] = !this.changeStatus[i]
      // this.changeStatus.push({ events: [], name: '' })
      // this.changeStatus.splice(this.changeStatus.length - 1, 1)
    },
    //绘图故障信息统计
    drawLine(option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("ErrorStasticChart")
      );
      // 绘制图表
      myChart.setOption(option);
    },
    //查询历史故障信息
    async ErrorMessageHistory(deviceId, faultId, month) {
      let data = {
        deviceId: deviceId,
        faultId: faultId,
        time: month,
      };
      await ErrorMessageHistory(data).then((res) => {
        this.ErrorMessage = res.data.result;
      });
    },
    //查询待处理故障
    async queryPendingError(id) {
      let data = {
        deviceId: id,
      };
      await pending(data).then((res) => {
        this.pendingError = res.data.result;
      });
    },
    //查询已处理故障信息
    async queryHandledError(id) {
      let data = {
        deviceId: id,
      };
      await handled(data).then((res) => {
        this.handledError = res.data.result;
      });
    },
    //查询措施信息
    async queryFrm(id) {
      let data = {
        faultId: id,
      };
      await frm(data).then((res) => {
        if (res.data.state === true) {
          if (res.data.result.length != 0) {
            this.frmMessage = res.data.result[0];
          }
        } else {
          this.$message({
            message: res.data.message,
            type: "warning",
            center: true,
          });
        }
      });
    },
    //查询故障信息图表
    async getErrorChartMessage(deviceId, faultId, month) {
      let data = {
        deviceId: deviceId,
        faultId: faultId,
        time: month,
      };
      await ErrorMessageChart(data).then((res) => {
        if (
          res.data.state === true &&
          res.data.result &&
          res.data.result.reason.length !== 0
        ) {
          console.log(res.data.result);
          this.chartMessage = {
            xAxis: {
              type: "category",
              data: res.data.result.reason,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: res.data.result.value,
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                  color: "rgba(180, 180, 180, 0.2)",
                },
              },
            ],
          };
          this.drawLine(this.chartMessage);
        } else if (res.data.result && res.data.result.reason.length == 0) {
          this.drawLine({});
        }
      });
    },
    closeDialog5() {
      let reas = [];
      for (let i = 0; i < this.form.reasons.length; i++) {
        if (
          this.form.reasons[i] != false &&
          this.form.reasons[i] != undefined &&
          this.form.reasons[i] != true
        ) {
          let data = {
            reasonId: this.form.reasons[i],
            measuresId: this.form.checkboxGroup1[i],
          };
          reas.push(data);
        }
        if (this.form.reasons[i] === true) {
          let data1 = {
            reasonId: this.resultMessage.resultVOList[i].reasonId,
            measuresId: this.form.checkboxGroup1[i],
          };
          reas.push(data1);
        }
        // this.form.checkboxGroup1[i] = []
      }
      let sdata = {
        faultRecordId: this.faultRecordid,
        reason: reas,
        remark: this.form.resultNote,
      };
      console.log("sdata", sdata);
      postUpdateResult(sdata);
      this.centerDialogVisible5 = false;
      this.changeStatus = [];
      this.queryHandledError(this.$route.query.id);
      // this.$router.go(0)
    },
    //显示查看历史故障
    showDialog6(index) {
      this.faultRecordid = this.pendingError[index].faultId;
      this.centerDialogVisible6 = true;
    },
    //显示查看电机信息表
    showDialog3() {
      this.centerDialogVisible3 = true;
    },
    //显示查看措施信息表
    showDialog4(row, index) {
      // console.log("1111111"+this.pendingError[index].faultId)
      this.queryFrm(this.pendingError[index].faultId).then(() => {
        if (this.frmMessage.reasonVOList.length != 0) {
          this.tabpanIndex = "1";
          this.centerDialogVisible4 = true;
        } else {
          this.$message({
            message: "暂无可查看措施",
            type: "warning",
            center: true,
          });
        }
      });
    },
    //显示处理结果的dialog
    showDialog5(index) {
      this.getHandleResult(this.handledError[index].recordId);
      this.faultRecordid = this.handledError[index].recordId;
      this.centerDialogVisible5 = true;
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
    add(s, y, i) {
      this.scout = y;
      this.input = s.date; //故障名称
      this.errorreason = this.reason[this.scout][i];
    },
    //查看措施触发的事件
    look(index, i) {
      this.srowindex = index;
      this.srowi = i;
      let arr = [];
      for (let e = 0; e < this.measures[index][i].length; e++) {
        let data = {
          measure: this.measures[index][i][e],
        };
        arr.push(data);
      }
      this.tableData1 = arr;
      //this.centerDialogVisible1 = true
    },
    //新增原因触发的事件
    submit() {
      // this.scout.index +=1
      // this.scout.name = this.scout.name+ '\n' + this.scout.index +'：' + this.textarea1
      // this.scout.address = this.scout.address+ '\n' + this.scout.index +'：' +this.textarea2
      // this.input = ''
      // this.textarea1 = ''
      // this.textarea2 = ''
      // this.centerDialogVisible = false
      this.reason[this.scout].push(this.textarea1);
      this.measures[this.scout].push([]);
      this.textarea1 = "";
      this.centerDialogVisible = false;
    },
    addmeasure() {
      this.centerDialogVisible2 = true;
    },
    //点击确定新增按钮触发的事件
    confirmAddMeasure() {
      this.measures[this.srowindex][this.srowi].push(this.textarea3);
      this.textarea3 = "";
      this.centerDialogVisible2 = false;
      let arr = [];
      for (
        let e = 0;
        e < this.measures[this.srowindex][this.srowi].length;
        e++
      ) {
        let data = {
          measure: this.measures[this.srowindex][this.srowi][e],
        };
        arr.push(data);
      }
      this.tableData1 = arr;
    },
  },
  mounted() {
    console.log(this.$route.query)
    this.queryPendingError(this.$route.query.id);
    this.queryHandledError(this.$route.query.id);
    this.devName = this.$route.query.name;
    setTimeout(() => {
         this.table_height = this.$refs.rmcTop.offsetHeight - 130;

    }, 100);
    // alert(this.pendingError)
  },
  computed:{
    comStr(){
      var str = this.$route.query.str;
      return (str.substr(1) - 0 >= 120 && str.substr(1) - 0 <= 125) || ( str.substr(1) - 0 >= 104 && str.substr(1) - 0 <= 113 ) || (str.substr(1) - 0 >= 96 && str.substr(1) - 0 <= 101) ||
      (str.substr(1) - 0 >= 85 && str.substr(1) - 0 <= 93) ||  (str.substr(1) - 0 >= 80 && str.substr(1) - 0 <= 83) ||  (str.substr(1) - 0 >= 62 && str.substr(1) - 0 <= 78) ||  
      (str.substr(1) - 0 >= 51 && str.substr(1) - 0 <= 60)  || str == 'T127' || str == "T049" || str == "T048" || str == "T061" || str == "T118"
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
  // .eshover:hover{
  // 	background-color:yellow
  // }
  .dv-border-box-4 {
    height: 0;
  }
}
</style>