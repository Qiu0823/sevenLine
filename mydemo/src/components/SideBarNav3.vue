<template>
  <div class="firstNav">
    <!-- 第一层 -->
    <div class="first" v-for="(firstItem,firstIndex) in firstList1" :key="firstItem.areaId" @mouseenter="handleEnter1($event,firstIndex)" >
      <!--第一层 标题 -->
      <div class="firstTitle">
        <div class="greenBtn" :style="{backgroundColor:WebsocketMessage['Data1_'+ (firstItem.areaId)]} "></div>
        <span class="spanyy">{{ firstItem.area }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>

      <div class="secondWrap">
        <!-- 第二层 -->
        <div
          class="second firstSon"
          v-for="(secondItem,secondIndex) in firstItem.areaTypeVOS"
          :key="secondItem.areaTypeId"
          @mouseenter="handleEnter2($event,secondIndex,firstIndex)" 
        >
          <!--第二层 标题 -->
          <div class="secondTitle">
            <!--  secondItem.areaTypeId为2  WebsocketMessage.Data2_2 WebsocketMessageTest["Data2_"+ (areaTypeId)] -->
            <div class="greenBtn" :style="{backgroundColor:WebsocketMessage['Data2_'+ (secondItem.areaTypeId)]}" ></div>
            <span class="spanyy">{{ secondItem.areaType }}</span>
            <i class="el-icon-arrow-right"></i>
          </div>

          <div class="thirdWraper">
              <div
               v-for="thirdItem in secondItem.deviceVOS"
              :key="thirdItem.deviceId" 
              class="thirdTitle"
              @click="
                handleClick(thirdItem.device, thirdItem.deviceId, thirdItem.str)
              "
            >
         <div class="titleWrap">
              <div class="greenBtn" :style="{backgroundColor:WebsocketMessage[thirdItem.data]}"></div>
          <span class="spanyy">{{ thirdItem.device}}</span>
         </div>
            </div>
         <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findIndexMenu } from "@/api/detail.js";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      firstList1: [
      {
        "areaId": 1,
        "area": "上料区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 1,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 35,
                "device": "1#逐支喷码机",
                "str": "T036",
                "data": "Data35"
              },
              {
                "deviceId": 36,
                "device": "2#逐支喷码机",
                "str": "T037",
                "data": "Data36"
              }
            ]
          },
          {
            "areaTypeId": 2,
            "areaType": "操作台01-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 37,
                "device": "上料辊式输送链",
                "str": "T048",
                "data": "Data37"
              },
              {
                "deviceId": 38,
                "device": "管号识别前分钢调整电机",
                "str": "T049",
                "data": "Data38"
              },
              {
                "deviceId": 138,
                "device": "上料挡料臂",
                "str": "T047",
                "data": "Data154"
              }
            ]
          },
          {
            "areaTypeId": 3,
            "areaType": "操作台02-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 41,
                "device": "喷码识别步进机",
                "str": "T050",
                "data": "Data41"
              },
              {
                "deviceId": 42,
                "device": "喷码识别对齐辊道二",
                "str": "T051",
                "data": "Data42"
              },
              {
                "deviceId": 43,
                "device": "2#管号识别旋转辊",
                "str": "T052",
                "data": "Data43"
              }
            ]
          },
          {
            "areaTypeId": 4,
            "areaType": "操作台03-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 39,
                "device": "喷码识别对齐辊道一",
                "str": "T053",
                "data": "Data39"
              },
              {
                "deviceId": 40,
                "device": "1#管号识别旋转辊",
                "str": "T054",
                "data": "Data40"
              },
              {
                "deviceId": 41,
                "device": "喷码识别步进机",
                "str": "T050",
                "data": "Data41"
              }
            ]
          }
        ]
      },
      {
        "areaId": 2,
        "area": "车丝区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 5,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 1,
                "device": "1#收口机",
                "str": "T002",
                "data": "Data1"
              },
              {
                "deviceId": 2,
                "device": "2#收口机",
                "str": "T003",
                "data": "Data2"
              },
              {
                "deviceId": 3,
                "device": "3#收口机",
                "str": "T004",
                "data": "Data3"
              },
              {
                "deviceId": 4,
                "device": "4#收口机",
                "str": "T005",
                "data": "Data4"
              },
              {
                "deviceId": 5,
                "device": "1#车丝机",
                "str": "T006",
                "data": "Data5"
              },
              {
                "deviceId": 6,
                "device": "2#车丝机",
                "str": "T007",
                "data": "Data6"
              },
              {
                "deviceId": 7,
                "device": "3#车丝机",
                "str": "T008",
                "data": "Data7"
              },
              {
                "deviceId": 8,
                "device": "4#车丝机",
                "str": "T009",
                "data": "Data8"
              },
              {
                "deviceId": 9,
                "device": "铁屑集中装置与环链及粉碎机",
                "str": "T010",
                "data": "Data9"
              },
              {
                "deviceId": 15,
                "device": "1#黑皮扣修磨",
                "str": "T018",
                "data": "Data15"
              },
              {
                "deviceId": 16,
                "device": "2#黑皮扣修磨",
                "str": "T019",
                "data": "Data16"
              },
              {
                "deviceId": 17,
                "device": "3#黑皮扣修磨",
                "str": "T020",
                "data": "Data17"
              },
              {
                "deviceId": 18,
                "device": "4#黑皮扣修磨",
                "str": "T021",
                "data": "Data18"
              }
            ]
          },
          {
            "areaTypeId": 6,
            "areaType": "操作台13-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 44,
                "device": "1#车丝机后表面吹扫旋转辊",
                "str": "T056",
                "data": "Data44"
              },
              {
                "deviceId": 45,
                "device": "1#车丝机后黑皮扣修磨旋转辊",
                "str": "T057",
                "data": "Data45"
              },
              {
                "deviceId": 46,
                "device": "1#车丝机后步进机",
                "str": "T055",
                "data": "Data46"
              },
              {
                "deviceId": 47,
                "device": "1#车丝机后管号识别旋转辊",
                "str": "T059",
                "data": "Data47"
              },
              {
                "deviceId": 48,
                "device": "1#车丝机后螺纹检验旋转辊",
                "str": "T060",
                "data": "Data48"
              },
              {
                "deviceId": 49,
                "device": "1#车丝机后检验步进机",
                "str": "T058",
                "data": "Data49"
              }
            ]
          },
          {
            "areaTypeId": 7,
            "areaType": "操作台14-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 50,
                "device": "2#车丝机后表面吹扫旋转辊",
                "str": "T062",
                "data": "Data50"
              },
              {
                "deviceId": 51,
                "device": "2#车丝机后黑皮扣修磨旋转辊",
                "str": "T063",
                "data": "Data51"
              },
              {
                "deviceId": 52,
                "device": "2#车丝机后步进机",
                "str": "T061",
                "data": "Data52"
              },
              {
                "deviceId": 53,
                "device": "2#车丝机后管号识别旋转辊",
                "str": "T065",
                "data": "Data53"
              },
              {
                "deviceId": 54,
                "device": "2#车丝机后螺纹检验旋转辊",
                "str": "T066",
                "data": "Data54"
              },
              {
                "deviceId": 55,
                "device": "2#车丝机后检验步进机",
                "str": "T064",
                "data": "Data55"
              }
            ]
          },
          {
            "areaTypeId": 8,
            "areaType": "操作台15-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 56,
                "device": "3#车丝机后表面吹扫旋转辊",
                "str": "T068",
                "data": "Data56"
              },
              {
                "deviceId": 57,
                "device": "3#车丝机后黑皮扣修磨旋转辊",
                "str": "T069",
                "data": "Data57"
              },
              {
                "deviceId": 58,
                "device": "3#车丝机后步进机",
                "str": "T067",
                "data": "Data58"
              },
              {
                "deviceId": 59,
                "device": "3#车丝机后管号识别旋转辊",
                "str": "T071",
                "data": "Data59"
              },
              {
                "deviceId": 60,
                "device": "3#车丝机后螺纹检验旋转辊",
                "str": "T072",
                "data": "Data60"
              },
              {
                "deviceId": 61,
                "device": "3#车丝机后检验步进机",
                "str": "T070",
                "data": "Data61"
              }
            ]
          },
          {
            "areaTypeId": 9,
            "areaType": "操作台16-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 62,
                "device": "4#车丝机后表面吹扫旋转辊",
                "str": "T074",
                "data": "Data62"
              },
              {
                "deviceId": 63,
                "device": "4#车丝机后黑皮扣修磨旋转辊",
                "str": "T075",
                "data": "Data63"
              },
              {
                "deviceId": 64,
                "device": "4#车丝机后步进机",
                "str": "T073",
                "data": "Data64"
              },
              {
                "deviceId": 65,
                "device": "4#车丝机后管号识别旋转辊",
                "str": "T077",
                "data": "Data65"
              },
              {
                "deviceId": 66,
                "device": "4#车丝机后螺纹检验旋转辊",
                "str": "T078",
                "data": "Data66"
              },
              {
                "deviceId": 67,
                "device": "4#车丝机后检验步进机",
                "str": null,
                "data": "Data67"
              }
            ]
          }
        ]
      },
      {
        "areaId": 3,
        "area": "返修区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 10,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 19,
                "device": "1#带锯",
                "str": "T022",
                "data": "Data19"
              },
              {
                "deviceId": 20,
                "device": "2#带锯",
                "str": "T023",
                "data": "Data20"
              }
            ]
          },
          {
            "areaTypeId": 11,
            "areaType": "操作台17-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 68,
                "device": "带锯前对齐辊道",
                "str": "T079",
                "data": "Data68"
              },
              {
                "deviceId": 69,
                "device": "1#带锯管号识别旋转辊",
                "str": "T080",
                "data": "Data69"
              },
              {
                "deviceId": 70,
                "device": "1#带锯输送辊道",
                "str": "T081",
                "data": "Data70"
              }
            ]
          },
          {
            "areaTypeId": 12,
            "areaType": "操作台18-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 71,
                "device": "2#带锯管号识别旋转辊",
                "str": "T082",
                "data": "Data71"
              },
              {
                "deviceId": 72,
                "device": "2#带锯输送辊道",
                "str": "T083",
                "data": "Data72"
              },
              {
                "deviceId": 68,
                "device": "带锯前对齐辊道",
                "str": "T079",
                "data": "Data68"
              }
            ]
          },
          {
            "areaTypeId": 13,
            "areaType": "操作台27-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 73,
                "device": "锯机区域拨料装置",
                "str": "T085",
                "data": "Data73"
              },
              {
                "deviceId": 127,
                "device": "锯机区域翻转台架",
                "str": "T084",
                "data": "Data143"
              }
            ]
          }
        ]
      },
      {
        "areaId": 4,
        "area": "管拧区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 14,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 21,
                "device": "1#抛丸机",
                "str": "T024",
                "data": "Data21"
              },
              {
                "deviceId": 22,
                "device": "2#抛丸机",
                "str": "T025",
                "data": "Data22"
              },
              {
                "deviceId": 23,
                "device": "1#三角标",
                "str": "T011",
                "data": "Data23"
              },
              {
                "deviceId": 24,
                "device": "2#三角标",
                "str": "T012",
                "data": "Data24"
              },
              {
                "deviceId": 25,
                "device": "外保拧接",
                "str": "T026",
                "data": "Data25"
              },
              {
                "deviceId": 26,
                "device": "接箍上下料",
                "str": "T027",
                "data": "Data26"
              },
              {
                "deviceId": 27,
                "device": "管拧机",
                "str": "T028",
                "data": "Data27"
              },
              {
                "deviceId": 28,
                "device": "内保拧接",
                "str": "T029",
                "data": "Data28"
              },
              {
                "deviceId": 151,
                "device": "1#通径机",
                "str": "T035",
                "data": "Data167"
              },
              {
                "deviceId": 152,
                "device": "2#通径机",
                "str": "T045",
                "data": "Data168"
              }
            ]
          },
          {
            "areaTypeId": 15,
            "areaType": "操作台29-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 74,
                "device": "管端通径对齐辊道",
                "str": "T087",
                "data": "Data74"
              },
              {
                "deviceId": 76,
                "device": "1#抛丸机前步进机",
                "str": "T086",
                "data": "Data76"
              }
            ]
          },
          {
            "areaTypeId": 16,
            "areaType": "操作台32-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 77,
                "device": "1#抛丸机旋转辊",
                "str": "T089",
                "data": "Data77"
              },
              {
                "deviceId": 78,
                "device": "1#抛丸机旋转辊高度调节装置",
                "str": "T090",
                "data": "Data78"
              },
              {
                "deviceId": 79,
                "device": "1#抛丸机输送辊",
                "str": "T091",
                "data": "Data79"
              },
              {
                "deviceId": 80,
                "device": "1#抛丸机输送辊高度调节装置",
                "str": "T092",
                "data": "Data80"
              },
              {
                "deviceId": 81,
                "device": "1#抛丸机后步进机",
                "str": "T088",
                "data": "Data81"
              },
              {
                "deviceId": 82,
                "device": "2#抛丸前_1#三角标对齐辊道",
                "str": "T093",
                "data": "Data82"
              },
              {
                "deviceId": 123,
                "device": "1#抛丸机输送辊高度升降装置",
                "str": "T095",
                "data": "Data139"
              },
              {
                "deviceId": 124,
                "device": "1#抛丸机旋转辊高度升降装置",
                "str": "T094",
                "data": "Data140"
              }
            ]
          },
          {
            "areaTypeId": 17,
            "areaType": "操作台33-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 83,
                "device": "2#抛丸机旋转辊",
                "str": "T097",
                "data": "Data83"
              },
              {
                "deviceId": 84,
                "device": "2#抛丸机旋转辊高度调节装置",
                "str": "T098",
                "data": "Data84"
              },
              {
                "deviceId": 85,
                "device": "2#抛丸机输送辊",
                "str": "T099",
                "data": "Data85"
              },
              {
                "deviceId": 86,
                "device": "2#抛丸机输送辊高度调节装置",
                "str": "T100",
                "data": "Data86"
              },
              {
                "deviceId": 87,
                "device": "2#抛丸机后步进机",
                "str": "T096",
                "data": "Data87"
              },
              {
                "deviceId": 88,
                "device": "2#三角标对齐辊道",
                "str": "T101",
                "data": "Data88"
              },
              {
                "deviceId": 120,
                "device": "2#抛丸机输送辊高度升降装置",
                "str": "T103",
                "data": "Data136"
              },
              {
                "deviceId": 121,
                "device": "2#抛丸机旋转辊高度升降装置",
                "str": "T102",
                "data": "Data137"
              }
            ]
          },
          {
            "areaTypeId": 18,
            "areaType": "操作台37-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 89,
                "device": "外保步进机涂油旋转辊",
                "str": "T106",
                "data": "Data89"
              },
              {
                "deviceId": 90,
                "device": "外保步进机",
                "str": "T104",
                "data": "Data90"
              },
              {
                "deviceId": 91,
                "device": "抛丸检验_涂油前旋转辊",
                "str": "T105",
                "data": "Data91"
              }
            ]
          },
          {
            "areaTypeId": 19,
            "areaType": "操作台39-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 92,
                "device": "管拧机后_2#通径对齐辊道",
                "str": "T108",
                "data": "Data92"
              },
              {
                "deviceId": 93,
                "device": "2#管端通径高度调整电机",
                "str": null,
                "data": "Data93"
              },
              {
                "deviceId": 94,
                "device": "管拧机后检验_通径后旋转辊",
                "str": "T109",
                "data": "Data94"
              },
              {
                "deviceId": 95,
                "device": "管拧机后步进机",
                "str": "T107",
                "data": "Data95"
              },
              {
                "deviceId": 96,
                "device": "内保对齐辊道",
                "str": "T110",
                "data": "Data96"
              },
              {
                "deviceId": 97,
                "device": "内保涂油旋转辊",
                "str": "T112",
                "data": "Data97"
              },
              {
                "deviceId": 98,
                "device": "内保步进机",
                "str": "T111",
                "data": "Data98"
              },
              {
                "deviceId": 99,
                "device": "内保管号识别旋转辊",
                "str": "T113",
                "data": "Data99"
              },
              {
                "deviceId": 117,
                "device": "出废拨料钩",
                "str": "T114",
                "data": "Data133"
              }
            ]
          }
        ]
      },
      {
        "areaId": 5,
        "area": "退磁区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 20,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 30,
                "device": "管体退磁",
                "str": "T030",
                "data": "Data30"
              }
            ]
          }
        ]
      },
      {
        "areaId": 6,
        "area": "涂层区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 21,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 31,
                "device": "涂层设备",
                "str": "T031",
                "data": "Data31"
              }
            ]
          },
          {
            "areaTypeId": 22,
            "areaType": "操作台44-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 100,
                "device": "涂油线纵向链1",
                "str": "T115",
                "data": "Data100"
              },
              {
                "deviceId": 101,
                "device": "涂油线纵向链2",
                "str": "T116",
                "data": "Data101"
              },
              {
                "deviceId": 102,
                "device": "涂油线纵向链3",
                "str": "T117",
                "data": "Data102"
              }
            ]
          }
        ]
      },
      {
        "areaId": 7,
        "area": "烘干区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 23,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 32,
                "device": "烘干设备",
                "str": "T032",
                "data": "Data32"
              }
            ]
          },
          {
            "areaTypeId": 24,
            "areaType": "操作台44-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 103,
                "device": "烘箱前斯惠顿",
                "str": "T118",
                "data": "Data103"
              },
              {
                "deviceId": 104,
                "device": "烘干设备内节距式输送链",
                "str": "T119",
                "data": "Data104"
              }
            ]
          }
        ]
      },
      {
        "areaId": 8,
        "area": "测量区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 25,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 33,
                "device": "测量点",
                "str": "T033",
                "data": "Data33"
              }
            ]
          },
          {
            "areaTypeId": 26,
            "areaType": "操作台45-辅机设备",
            "deviceVOS": [
              {
                "deviceId": 105,
                "device": "测量点前对齐辊道",
                "str": "T121",
                "data": "Data105"
              },
              {
                "deviceId": 106,
                "device": "测量点前接箍涂漆旋转辊",
                "str": "T122",
                "data": "Data106"
              },
              {
                "deviceId": 107,
                "device": "测量点前步进机",
                "str": "T120",
                "data": "Data107"
              },
              {
                "deviceId": 108,
                "device": "色环旋转辊",
                "str": "T123",
                "data": "Data108"
              },
              {
                "deviceId": 109,
                "device": "测量点步进机",
                "str": "T124",
                "data": "Data109"
              },
              {
                "deviceId": 110,
                "device": "接箍喷印旋转辊",
                "str": "T125",
                "data": "Data110"
              },
              {
                "deviceId": 111,
                "device": "测量点后拨料装置",
                "str": "T127",
                "data": "Data111"
              },
              {
                "deviceId": 113,
                "device": "出废台架挡料器",
                "str": "T128",
                "data": "Data129"
              },
              {
                "deviceId": 114,
                "device": "测量点后翻转台架",
                "str": "T126",
                "data": "Data130"
              },
              {
                "deviceId": 104,
                "device": "烘干设备内节距式输送链",
                "str": "T119",
                "data": "Data104"
              }
            ]
          }
        ]
      },
      {
        "areaId": 9,
        "area": "打包区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 27,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 34,
                "device": "打捆机",
                "str": "T034",
                "data": "Data34"
              }
            ]
          }
        ]
      },
      {
        "areaId": 10,
        "area": "公共区域",
        "areaTypeVOS": [
          {
            "areaTypeId": 28,
            "areaType": "单机设备",
            "deviceVOS": [
              {
                "deviceId": 10,
                "device": "乳化液集中供给",
                "str": "T013",
                "data": "Data10"
              },
              {
                "deviceId": 11,
                "device": "液压油集中供给",
                "str": "T014",
                "data": "Data11"
              }
            ]
          },
          {
            "areaTypeId": 29,
            "areaType": "RGV小车",
            "deviceVOS": [
              {
                "deviceId": 12,
                "device": "1#RGV",
                "str": "T015",
                "data": "Data12"
              },
              {
                "deviceId": 13,
                "device": "2#RGV",
                "str": "T016",
                "data": "Data13"
              },
              {
                "deviceId": 14,
                "device": "3#RGV",
                "str": "T017",
                "data": "Data14"
              }
            ]
          },
          {
            "areaTypeId": 30,
            "areaType": "RGV轨道",
            "deviceVOS": [
              {
                "deviceId": 139,
                "device": "3#RGV轨道",
                "str": "T133",
                "data": "Data155"
              },
              {
                "deviceId": 140,
                "device": "2#RGV轨道西段",
                "str": "T132",
                "data": "Data156"
              },
              {
                "deviceId": 141,
                "device": "2#RGV轨道东段",
                "str": "T131",
                "data": "Data157"
              },
              {
                "deviceId": 142,
                "device": "1#RGV轨道西段",
                "str": "T130",
                "data": "Data158"
              },
              {
                "deviceId": 143,
                "device": "1#RGV轨道东段",
                "str": "T129",
                "data": "Data159"
              }
            ]
          },
          {
            "areaTypeId": 31,
            "areaType": "桁架",
            "deviceVOS": [
              {
                "deviceId": 144,
                "device": "1#桁架",
                "str": "T038",
                "data": "Data160"
              },
              {
                "deviceId": 145,
                "device": "2#桁架",
                "str": "T039",
                "data": "Data161"
              },
              {
                "deviceId": 146,
                "device": "3#桁架",
                "str": "T040",
                "data": "Data162"
              },
              {
                "deviceId": 147,
                "device": "4#桁架",
                "str": "T041",
                "data": "Data163"
              },
              {
                "deviceId": 148,
                "device": "5#桁架",
                "str": "T042",
                "data": "Data164"
              },
              {
                "deviceId": 149,
                "device": "6#桁架",
                "str": "T043",
                "data": "Data1656"
              },
              {
                "deviceId": 150,
                "device": "7#桁架",
                "str": "T044",
                "data": "Data166"
              }
            ]
          }
        ]
      }
    ],
      firstList:[],
    };
  },
  mounted() {
    this.getIndexMenu();
  },
  created() {
    var secWrap = document.getElementsByClassName("secondWrap");
  },
  methods: {
    async getIndexMenu() {
      await findIndexMenu().then((res) => {
        this.firstList = res.data.result;
        console.log(res);
      });
    },
    handleClick(name, id, str) {
      console.log("llll");
      this.$router.push({
        path: "/index",
        query: { id: id, name: name, str },
      });
    },
    handleEnter1(e,i){
      var secWrap = document.getElementsByClassName('secondWrap')[i];
      var overHeight = secWrap.clientHeight + secWrap.getBoundingClientRect().y - document.documentElement.clientHeight
      if(overHeight > 0) {
        console.log(secWrap.offsetTop,secWrap.offsetLeft,)
        secWrap.style.top += -(overHeight + 22) + 'px'
      }
    },
       handleEnter2(e,i,i2){
         var overHeight = e.target.childNodes[1].clientHeight + e.target.childNodes[1].getBoundingClientRect().y - document.documentElement.clientHeight
         if(overHeight>0){
           e.target.childNodes[1].style.top  += -(overHeight + 22) + 'px'
         }
    }
  },
  computed:{
    ...mapState(['WebsocketMessage'])
  }
};
</script>

<style lang='less'>

.firstNav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #203456;
  //   border: 1px solid red;
  .first {
    position: relative;
    width: 100%;
    padding: 13px 0;
    box-sizing: border-box;
    .firstTitle {
      width: 100%;
      justify-content: space-evenly;
      .greenBtn{
        width: 20px;
        height: 20px;
      }
      .spanyy {
        //一级标题文字样式
        font-size: 16px;
        display: inline-block;
        width: 80px;
        height: 20px;
        line-height: 20px;
        // margin-left: 10px;
      }

      //   一级标题和符合水平显示
      display: flex;
      //   justify-content: center;
      span {
        margin-right: 5px;
      }
    }
    .secondWrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //   height: 20vh;
      height: auto;
      position: absolute;
      left: 100%;
      width: 25vh;
      top: 0;
    }
    .firstSon {
      height: auto;
      display: none; //默认第二级菜单不显示
      background-color: rgb(4, 55, 90);
      position: relative;
      height: 50px;
      .secondTitle {
        width: 100%;
        padding-top: 15px;
        box-sizing: border-box;
        //   二级标题和符合水平显示
        display: flex;
        justify-content: space-evenly;
           .greenBtn{
        width: 20px;
        height: 20px;
        margin-bottom: 2px;
      }
        .spanyy {
          //二级标题样式
          font-size: 16px;
          display: inline-block;
          width: 140px;
        }
      }
      .thirdWraper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // height: 20vh;
        height: auto;
        position: absolute;
        left: 100%;
        width: 28vh;
        top: 0;
        // display: none;
      }
      .thirdTitle {
        height: 50px;
        background-color: rgb(4, 55, 90);
        font-size: 16px;
        display: none;
       
        .titleWrap{
           display: flex;
        justify-content: space-evenly;
          height: 50px;
        line-height: 50px;
         .spanyy {
          //二级标题样式
          font-size: 16px;
          display: inline-block;
          width: 220px;
        }
        }
        // justify-content: center;
           .greenBtn{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-top: 10px;
      }
      }
    }
  }

  //   鼠标悬停效果  一级鼠标悬停
  .first {
    &:hover {
      //first:hover 一级鼠标悬停一级标题箭头变化
      background-color: cornflowerblue;
      .firstTitle {
        .el-icon-arrow-right {
          transform: rotate(90deg);
          transition: 0.1s;
        }
      }
      //first:hover 一级鼠标悬停二级显示
      .firstSon {
        display: block;
        &:hover {
          //firstSon:hover 二级鼠标悬停三级显示
          background-color: cornflowerblue;
          .thirdTitle{
            display: block;
          }
          .thirdWraper {
            display: block;
              .thirdTitle:hover{
                  background-color: cornflowerblue;
                 }
          }
        }
      }
    }
  }

    //鼠标悬停效果  一级鼠标悬停
  .firstSon {
    &:hover {
      //first:hover 一级鼠标悬停一级标题箭头变化
      .secondTitle {
        .el-icon-arrow-right {
          transform: rotate(90deg);
          transition: 0.1s;
        }
      }
      //first:hover 一级鼠标悬停二级显示
      // .thirdWraper {
      //   // display: block;
      //       .thirdTitle {
      //   height: 46px;
      //   line-height: 46px;
      //   background-color: rgb(4, 55, 90);
      //   font-size: 16px;
      //   display: flex;
      //   justify-content: space-evenly;
      //   // justify-content: center;
      //      .greenBtn{
      //   width: 20px;
      //   height: 20px;
      //   display: inline-block;
      // }
      // }
      // }
    }
  }
}
</style>