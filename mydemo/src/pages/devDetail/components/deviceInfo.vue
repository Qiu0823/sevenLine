<template>
  <div class="device-info-con">
    <div class="device-info-title">
      <h5 class="firstTitle" style="text-align: left; margin-bottom: 5px">
        设备信息
      </h5>
      <p style="text-align: left; padding-left: 50px">
        设备名称：{{ devName }}
      </p>
    </div>
    <!-- <div class="device-status"> -->
    <!-- <h3>设备状态</h3> -->
    <div class="device-status-itemList">
      <div class="dsi-item" v-for="(item, index) in itemList" :key="index">
        <dv-border-box-2>
          <div class="text">
            <h4
              class="firstTitle"
              v-if="item.title !== ' '"
              style="margin-left: 1vh"
            >
              {{ item.title }}
            </h4>
            <span v-else>设备状态</span>
            <div
              v-for="(item1, index1) in item.value"
              :key="item1"
              style="display: flex; padding-left: 15px; margin-bottom: 5px"
            >
              <span style="width: 60%; text-align: center">{{ item1 }}</span>

              <div v-if="index >= 1">
                <div
                  v-if="
                    $store.state.WebsocketMessage[
                      `Data${pageIndex[index - 1] + index1 + 1}`
                    ] &&
                    $store.state.WebsocketMessage[
                      `Data${pageIndex[index - 1] + index1 + 1}`
                    ].includes('#')
                  "
                  class="LEDbtn greenBtn"
                  :style="{
                    backgroundColor:
                      $store.state.WebsocketMessage[
                        `Data${pageIndex[index - 1] + index1 + 1}`
                      ],
                    marginLeft: '5px',
                  }"
                ></div>
                <div v-else>
                  {{
                    $store.state.WebsocketMessage[
                      `Data${pageIndex[index - 1] + index1 + 1}`
                    ]
                  }}
                </div>
              </div>

              <div v-else>
                <div
                  v-if="
                    $store.state.WebsocketMessage[`Data${index1 + 1}`] &&
                    $store.state.WebsocketMessage[`Data${index1 + 1}`].includes(
                      '#'
                    )
                  "
                  class="LEDbtn greenBtn"
                  :style="{
                    backgroundColor:
                      $store.state.WebsocketMessage[`Data${index1 + 1}`],
                    marginLeft: '5px',
                  }"
                ></div>
                <div v-else style="color: green">
                  {{ $store.state.WebsocketMessage[`Data${index1 + 1}`] }}
                </div>
              </div>
              <!-- <div
                v-if="index >= 1"
                class="LEDbtn greenBtn"
                :style="{
                  backgroundColor:
                    $store.state.WebsocketMessage[
                      `Data${pageIndex[index - 1] + index1 + 1}`
                    ],
                  marginLeft: '5px',
                }"
              ></div> -->

              <!-- <div
                v-else
                class="LEDbtn greenBtn"
                :style="{
                  backgroundColor:
                    $store.state.WebsocketMessage[`Data${index1 + 1}`],
                  marginLeft: '5px',
                }"
              ></div> -->
            </div>
          </div>
        </dv-border-box-2>
      </div>
    </div>
    <!-- </div> -->

    <!-- 乳化液 -->
    <div class="tableCom" v-if="str == 'T013'">
      <dv-border-box-2>
        <div class="title">电表展示</div>
        <div class="bc-chart-item table1">
          <div class="bcci-header">{{tableHeaderTitle1}}: {{option1.series[0].data[0].value}}</div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option1"
          />
        </div>
        <div class="bc-chart-item">
          <div class="bcci-header">{{tableHeaderTitle2}}: {{option2.series[0].data[0].value}}</div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option2"
          />
        </div>
      </dv-border-box-2>
    </div>

    <!-- 管体退磁 -->
    <div class="tableCom" v-else-if="str == 'T030'">
      <dv-border-box-2>
        <div class="title">电表展示</div>
        <div class="bc-chart-item table1">
          <div class="bcci-header">{{tableHeaderTitle1}}: {{option3.series[0].data[0].value}}</div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option3"
          />
        </div>
        <div class="bc-chart-item">
          <div class="bcci-header">{{tableHeaderTitle2}}: {{option4.series[0].data[0].value}}</div>
          <dv-charts
            style="
              margin: auto;
              margin-top: -30px !important;
              width: 250px;
              height: 250px;
            "
            :option="option4"
          />
        </div>
      </dv-border-box-2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // a:1,
      itemList: [],
      str: "",
      pageIndex: [],
      arrItemLenghVal: [],
      tableHeaderTitle1:'',
      tableHeaderTitle2:'',
      option1: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 1234,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}转",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: -1,
            max: 1,
          },
        ],
      },
      //series[0].data[0].value
      option2: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 1234,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}转",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 160,
            max: 2000,
          },
        ],
      },
            option3: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 0,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 1,
            max: 20,
          },
        ],
      },
            option4: {
        series: [
          {
            type: "gauge",
            data: [
              {
                name: "1#电机",
                value: 0,
                radius: "60%",
              },
            ],
            axisLabel: {
              formatter: "{value}",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            pointer: {
              valueIndex: 1,
              style: {
                scale: [0.6, 0.6],
              },
            },
            details: {
              show: true,
              formatter: "{name}{value}",
              position: "start",
              offset: [10, 0],
              style: {
                fontSize: 13,
                textAlign: "left",
              },
            },
            min: 1,
            max: 20,
          },
        ],
      },
    };
  },
  // created() {
  //   this.str = this.$route.query.str;
  //   console.log(this.str);
  // },
  created() {
    this.str = this.$route.query.str;
    if (
      this.str == "T002" ||
      this.str == "T003" ||
      this.str == "T004" ||
      this.str == "T005"
    ) {
      this.itemList = [
        //收口机
        {
          title: "停止运行状态",
          value: ["自动运行状态", "故障停机状态", "急停状态"],
          add: 0,
        },
        {
          title: "模式状态",
          value: [
            "点动状态",
            "手动状态",
            "自动状态",
            "自动过管模式",
            "自动收尾模式",
          ],
        },
        {
          title: "自动主控制时序状态",
          value: [
            "自动对齐完成",
            "自动夹紧完成",
            "自动进料完成",
            "自动收口完成",
            "自动退料完成",
          ],
        },
      ];
    } else if (
      this.str == "T006" ||
      this.str == "T007" ||
      this.str == "T008" ||
      this.str == "T009"
    ) {
      this.itemList = [
        //车丝机
        {
          title: " ",
          value: [
            "液压启动",
            "实际主轴箱液位正常",
            "实际冷却液箱温度高于设置",
            "实际冷却液箱液面溢出",
            "实际冷却液液面高",
            "实际冷却液液面低",
            "实际冷却液液面过低",
            "机器主轴旋转启动",
            "机器点动模式",
            "机器自动MDI模式",
          ],
        },
      ];
    } else if (this.str == "T010") {
      this.itemList = [
        //铁屑
        {
          title: " ",
          value: [
            "环链管道乳化液液位状态",
            "粉碎机1运行状态",
            "粉碎机2运行状态",
            "粉碎机3运行状态",
            "粉碎机4运行状态",
            "环链排屑机运行状态",
            "角度旋转机运行状态",
            "环链乳化液水泵启动中",
            "环链正转启动中",
            "粉碎机1自动模式",
            "粉碎机2自动模式",
            "粉碎机3自动模式",
            "粉碎机4自动模式",
            "环链排屑机自动模式",
            "角度旋转机自动模式",
          ],
        },
      ];
    } else if (this.str == "T011" || this.str == "T012") {
      //三角标
      this.itemList = [
        {
          title: " ",
          value: [
            "机器人自动",
            "机器人手动",
            "机器人原始位",
            "机器人移动中",
            "机器人作业完成",
            "机器人作业中",
            "机器人报警",
            "机器人上电",
            "准备好待机状态",
            "主站心跳",
          ],
        },
      ];
    } else if (this.str == "T013") {
      //乳化液
      this.itemList = [
        {
          title: " ",
          value: [
            "手动模式",
            "自动模式",
            "1#车丝机供液指示",
            "2#车丝机供液指示",
            "3#车丝机供液指示",
            "4#车丝机供液指示",
            "远程状态",
            "运行状态指示",
          ],
        },
      ];
      this.tableHeaderTitle1 = "乳化液水箱液位";
      this.tableHeaderTitle2 = "乳化液浓度";
      this.option1.series[0].details.formatter= "{value}液位值";
      this.option2.series[0].details.formatter= "{value}浓度值";
    } else if (this.str == "T014") {
      //液压油
      this.itemList = [
        {
          title: " ",
          value: [
            "运行状态指示",
            "手动模式",
            "自动模式",
            "1#车丝机供液指示",
            "2#车丝机供液指示",
            "3#车丝机供液指示",
            "4#车丝机供液指示",
            "远程状态",
            "运行状态指示",
            "乳化液水箱液位",
            "乳化液浓度",
          ],
        },
      ];
    } else if (this.str == "T015" || this.str == "T016" || this.str == "T017") {
      //RGV
      this.itemList = [
        {
          title: "运行停止状态",
          value: [
            "操作台紧停",
            "操作台本地",
            "操作台远程（主线）",
            "操作台手动",
            "操作台自动",
            "充电机伸缩机构伺服就绪",
            "操作台与充电机通讯正常",
            "小车控制柜紧停",
            "小车是否有料",
            "小车完全停止",
            "电磁铁工作",
            "小车准备就绪",
            "小车与电池组通讯正常",
          ],
        },
      ];
    } else if (
      this.str == "T018" ||
      this.str == "T019" ||
      this.str == "T020" ||
      this.str == "T021"
    ) {
      //黑皮扣修磨
      this.itemList = [
        {
          title: " ",
          value: [
            "急停",
            "去黑皮扣设备工作中",
            "去黑皮扣设备等待中",
            "去黑皮扣检测有料",
            "修磨电机启动中",
            "进给电机工作中",
            "升降电机工作中",
            "补偿电机工作中",
            "润滑油泵工作中",
            "定位气缸工作中",
            "修磨气缸工作中",
            "吹水设备工作中",
            "吹水设备等待中",
            "吹水气缸前进中",
            "吹水气缸后退中",
            "吹水气缸工作中",
            "吹水气缸初始位",
            "吹水气缸中间位",
            "自动模式",
            "手动模式",
          ],
        },
      ];
    } else if (this.str == "T022" || this.str == "T023") {
      //带锯
      this.itemList = [
        {
          title: "运行停止状态",
          value: ["自动运行状态", "准备好待机状态", "故障停机状态"],
        },
        {
          title: "模式状态",
          value: ["手动模式", "自动模式"],
        },
        {
          title: "关键状态数据",
          value: [
            "准备完成，管子可进入",
            "管子切完，可取出",
            "管子到位，可开始切割",
          ],
        },
      ];
    } else if (this.str == "T024" || this.str == "T025") {
      //抛丸机
      this.itemList = [
        {
          title: "运行停止状态",
          value: ["自动运行状态", "准备好待机状态", "故障停机状态"],
        },
        {
          title: "模式状态",
          value: ["手动模式", "自动模式"],
        },
        {
          title: "自动主控制时序状态",
          value: ["自动步时序"],
        },
      ];
    } else if (this.str == "T026") {
      //外保拧接
      this.itemList = [
        {
          title: " ",
          value: [
            "机器人自动",
            "准备好待机状态",
            "故障停机状态",
            "机器人原始位",
            "机器人安全域",
            "钢管到位允许拧环",
            "机器人作业中",
            "机器人工作完成",
            "机器人手动模式",
            "控制柜手动模式",
            "控制柜自动模式",
            "机器人移动中",
          ],
        },
      ];
    } else if (this.str == "T027") {
      //接箍上下料
      this.itemList = [
        {
          title: "运行停止状态",
          value: [
            "机器人原始位",
            "机器人错误报警",
            "设备暂停中",
            "机器人作业完成",
            "接箍倾斜",
            "急停",
            "相机故障",
            "系统故障",
            "安全光幕触发",
            "扫描失败信号",
          ],
        },
        {
          title: "模式状态",
          value: [
            "自动模式",
            "手动模式",
            "小夹具使用中",
            "大夹具使用中",
            "吸盘使用中",
            "电机上电状态",
          ],
        },
        {
          title: "自动主控制时序状态",
          value: ["拍照抓取接箍", "上料中", "取隔板中"],
        },
      ];
    } else if (this.str == "T028") {
      //管拧机
      this.itemList = [
        {
          title: "运行停止状态",
          value: ["预拧旁路", "喷油旁路"],
        },
        {
          title: "模式状态",
          value: [
            "拧接手动",
            "拧接自动",
            "预拧自动",
            "循环启动",
            "预拧使能",
            "喷油使能",
            "步进梁使能",
          ],
        },
        {
          title: "自动预拧状态",
          value: ["预拧自动步时序"],
        },
      ];
    } else if (this.str == "T029") {
      //内保拧接
      this.itemList = [
        {
          title: "运行停止状态",
          value: [
            "机器人自动",
            "准备好待机状态",
            "故障停机状态",
            "机器人原始位",
            "机器人安全域",
            "允许机器人拧环",
            "机器人作业中",
            "机器人作业完成",
          ],
        },
        {
          title: "模式状态",
          value: [
            "机器人手动",
            "控制柜手动",
            "控制柜自动模式",
            "机器人动作监控触发",
          ],
        },
      ];
    } else if (this.str == "T030") {
      //管体退磁
      this.itemList = [
        {
          title: " ",
          value: [
            "停止状态",
            "运行状态",
            "直流线圈端口有料检测",
            "交流线圈端口有料检测",
          ],
        },
      ];
      this.tableHeaderTitle1 = '直流电流显示';
      this.tableHeaderTitle2 = '交流电流显示';
      this.option1.series[0].details.formatter= "{value}电流值";
      this.option2.series[0].details.formatter= "{value}电流值";
    } else if (this.str == "T031") {
      //涂层
      this.itemList = [
        {
          title: " ",
          value: ["吸附箱状态"],
        },
        {
          title: "模式状态 ",
          value: ["喷枪手动模式", "喷枪选择", "自动模式", "点动模式"],
        },
        {
          title: "自动主控制时序状态 ",
          value: ["A箱脱附步序", "B箱脱附步序"],
        },
      ];
    } else if (this.str == "T032") {
      //烘干
      this.itemList = [
        {
          title: " ",
          value: [
            "自动运行态",
            "手动运行态",
            "启动状态",
            "停止状态",
            "自动开始状态",
            "高温模式",
          ],
        },
      ];
    } else if (this.str == "T033") {
      //测量点
      this.itemList = [
        {
          title: "运行停止状态",
          value: ["自动运行状态", "故障停机状态"],
        },
        {
          title: "模式状态",
          value: ["手自动模式选择运行态"],
        },
        {
          title: "自动主控制时序状态",
          value: [
            "接箍预热自动步序",
            "接箍喷涂自动步时序",
            "接箍烘干工位自动步时序",
            "色环喷涂过程自动步序",
            "测长称重过程自动步序",
            "针刻印自动步序",
            "管体喷标自动步序",
            "接箍喷码自动步序",
          ],
        },
      ];
    } else if (this.str == "T034") {
      //打捆机
      this.itemList = [
        {
          title: " ",
          value: [
            "P1_手动_成型",
            "P1自动_成型",
            "P1自动运行_成型",
            "P1报警_成型",
            "P1急停",
            "P1自动停止中间位_成型",
            "系统正常_成型",
            "自动准备好",
            "E4手动_打包",
            "E4自动_打包",
            "E4自动运行_打包",
            "E4报警_打包",
            "E4急停_打包",
            "E4半自动_打包",
            "上位机暂停P1区_成型",
            "上位机暂停E4区_打包",
            "P1_手动_输送",
            "P1自动_输送",
            "P1自动运行_输送",
            "P1报警_输送",
            "P1自动停止中间位_输送",
            "P1_手动_储料",
            "P1自动_储料",
            "P1自动运行_储料",
            "P1报警_储料",
          ],
        },
      ];
    } else if (this.str == "T035") {
      //1#通径机
      this.itemList = [
        {
          title: " ",
          value: [
            "1#通径机自动运行条件",
            "1#通径机自动模式条件满足",
            "1#通径机自动模式",
            "1#通径机自动判废",
          ],
        },
      ];
    } else if (this.str == "T036" || this.str == "T037") {
      //管体喷码机
      this.itemList = [
        {
          title: "运行停止状态",
          value: ["自动运行状态", "准备好待机状态", "故障停机状态"],
        },
        {
          title: "模式状态",
          value: ["点动模式", "手动模式", "自动模式", "1#通径机自动判废"],
        },
        {
          title: "自动主控制时序状态",
          value: ["1#自动步时序"],
        },
      ];
    } else if (
      this.str == "T038" ||
      this.str == "T039" ||
      this.str == "T040" ||
      this.str == "T041" ||
      this.str == "T042" ||
      this.str == "T043" ||
      this.str == "T044"
    ) {
      //桁架
      this.itemList = [
        {
          title: " ",
          value: [
            "X轴运行状态",
            "Y轴运行状态",
            "Z轴运行状态",
            "U轴运行状态",
            "X轴综合报警",
            "Y轴综合报警",
            "Z轴综合报警",
            "U轴综合报警",
            "X1轴与PLC通讯报警",
            "X2轴与PLC通讯报警",
            "Y轴与PLC通讯报警",
            "Z1轴与PLC通讯报警",
            "Z2轴与PLC通讯报警",
            "U1轴与PLC通讯报警",
            "U2轴与PLC通讯报警",
            "X1轴编码器通讯报警",
            "X2轴编码器通讯报警",
            "Y轴编码器通讯报警",
            "Z1轴编码器通讯报警",
            "Z2轴编码器通讯报警",
            "U1轴编码器通讯报警",
            "U1轴编码器通讯报警",
          ],
        },
      ];
      // 2#通径机
    } else if (this.str == "T045") {
      this.itemList = [
        {
          title: " ",
          value: [
            "1#通径机自动运行条件",
            "1#通径机自动模式条件满足",
            "1#通径机自动模式",
          ],
        },
      ];
    }
    if (this.$store.state.ws.readyState == 1) {
      this.ws.send(this.str);
    }
    this.arrItemLenghVal.push(this.itemList[0].value.length);
    this.$nextTick(function () {
      document.getElementsByClassName("dsi-item")[0].style.flex =
        this.arrItemLenghVal[0];
      for (let i = 1; i < this.itemList.length; i++) {
        this.arrItemLenghVal.push(this.itemList[i].value.length);
        document.getElementsByClassName("dsi-item")[i].style.flex =
          this.arrItemLenghVal[i];
        this.pageIndex[i - 1] = 0;
        for (let j = 0; j < i; j++) {
          this.pageIndex[i - 1] += this.itemList[j].value.length;
        }
      }
      if (this.itemList.length == 1 && this.itemList[0].value.length > 8) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "90%";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
      if (this.itemList.length == 1 && this.itemList[0].value.length <= 8) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "40%";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.marginTop = "20px";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
      if (this.itemList.length == 1 && this.itemList[0].value.length > 10) {
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "device-status-itemList"
        )[0].style.height = "100%";
        document.getElementsByClassName("dsi-item")[0].style.height = "100%";
      }
    });

    console.log(this.pageIndex);
  },
  computed: {
    ...mapState(["WebsocketMessage", "ws"]),
  },
  mounted() {
    console.log(this.option1.series[0].data[0].value);
  },
  watch: {
    "$store.state.WebsocketMessage.Data9"(newVal, oldVal) {
      if (this.$route.query.name.includes('乳化液')) {
        console.log("液位值：" + newVal);
        this.option1.series[0].data[0].value = newVal;
        this.option1 = { ...this.option1 };
      }
    },
    "$store.state.WebsocketMessage.Data10"(newVal, oldVal) {
      if (this.$route.query.name.includes('乳化液')) {
      console.log("浓度值：" + newVal);
      this.option2.series[0].data[0].value = newVal;
      this.option2 = { ...this.option2 };
      }
    },

    "$store.state.WebsocketMessage.Data5"(newVal, oldVal) {
      if (this.$route.query.name.includes('退磁')) {
        console.log("直流电流显示" + newVal);
        this.option3.series[0].data[0].value = newVal;
        this.option3 = { ...this.option3 };
        console.log(this.option3.series[0].data[0].value,'option3Value')
      }
    },
      "$store.state.WebsocketMessage.Data6"(newVal, oldVal) {
      if (this.$route.query.name.includes('退磁')) {
      console.log("交流电流显示" + newVal);
      this.option4.series[0].data[0].value = newVal;
      this.option4 = { ...this.option4 };
        console.log(this.option4.series[0].data[0].value,'option4Value')

      }
    },
  },
  props: ["devName"],
};
</script>

<style lang='less'>
span {
  font-size: 15px;
}
p {
  margin: 0;
}
li {
  margin-bottom: 10px;
}
.tableCom {
  position: relative;
  .title {
    position: absolute;
    left: 1vh;
    top: 1vh;
  }
  .border-box-content {
    display: block !important;
  }
  .table1 {
    // margin-top:20px
  }
  .bc-chart-item {
    width: 100%;
    &.table1 {
      padding-top: 30px;
    }
  }
}
.device-info-con {
  // padding-left: 1vw;
  height: 80%;
  .device-info-title {
    width: 100%;
    h3,
    div {
      text-align: left;
    }
  }
  .device-status {
    height: 90%;
    box-sizing: border-box;
    h3 {
      text-align: left;
    }
  }
  .device-status-itemList {
    width: 326px;
    display: flex;
    height: 100%;
    flex-direction: column;
    // justify-content: space-around;
    ul,
    li {
      padding: 0;
      margin: 0;
    }
    // padding-left: 2vh;
    .dsi-item {
      display: flex;
      flex: 1;
      .text {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid royalblue;
        // border: 1px solid red;
      }
    }
  }
}
</style>