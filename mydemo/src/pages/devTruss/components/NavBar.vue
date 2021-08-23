<template>
  <div class="navCon">
    <dv-border-box-2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgb(0,11,44)"
        text-color="#fff"
        active-text-color="cornflowerblue"
      >
        <el-submenu
          v-for="(firstItem, firstIndex) in firstList"
          :key="firstItem.areaId"
          :index="firstIndex + 1 + ''"
        >
          <template slot="title">
            <!-- <div>
              <span class="greenBtn"></span>
              <span>{{ firstItem.area }}</span>
            </div> -->
            {{ firstItem.area }}
          </template>
          <el-submenu
            v-for="(secondItem, secondIndex) in firstItem.areaTypeVOS"
            :key="secondItem.areaTypeId"
            :index="firstIndex + 1 + '-' + (secondIndex + 1)"
          >
            <template slot="title">
              {{ secondItem.areaType }}
            </template>
            <el-menu-item
              v-for="(thirdItem, thirdIndex) in secondItem.deviceVOS"
              @click="
                handleClick(thirdItem.device, thirdItem.deviceId, thirdItem.str)
              "
              :key="thirdItem.deviceId"
              :index="
                firstIndex +
                1 +
                '-' +
                (secondIndex + 1) +
                '-' +
                (thirdIndex + 1)
              "
              >
              {{ thirdItem.device }}

              </el-menu-item
            >
          </el-submenu>
        </el-submenu>
      </el-menu>
    </dv-border-box-2>
  </div>
</template>

<script>
import { findIndexMenu } from "@/api/detail.js";

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
         firstList: [
        {
          areaId: 4,
          area: "管拧区域",
          areaTypeVOS: [
            {
              areaTypeId: 14,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 21,
                  device: "1#抛丸机",
                  htmlId: 21,
                  str: "T024",
                },
                {
                  deviceId: 22,
                  device: "2#抛丸机",
                  htmlId: 22,
                  str: "T025",
                },
                {
                  deviceId: 23,
                  device: "1#三角标",
                  htmlId: 23,
                  str: "T011",
                },
                {
                  deviceId: 24,
                  device: "2#三角标",
                  htmlId: 24,
                  str: "T012",
                },
                {
                  deviceId: 25,
                  device: "外保拧接",
                  htmlId: 25,
                  str: "T026",
                },
                {
                  deviceId: 26,
                  device: "接箍上下料",
                  htmlId: 26,
                  str: "T027",
                },
                {
                  deviceId: 27,
                  device: "管拧机",
                  htmlId: 27,
                  str: "T028",
                },
                {
                  deviceId: 28,
                  device: "内保拧接",
                  htmlId: 28,
                  str: "T029",
                },
                {
                  deviceId: 151,
                  device: "1#通径机",
                  htmlId: 167,
                  str: "T035",
                },
                {
                  deviceId: 152,
                  device: "2#通径机",
                  htmlId: 168,
                  str: "T045",
                },
              ],
            },
            {
              areaTypeId: 15,
              areaType: "操作台29-辅机设备",
              deviceVOS: [
                {
                  deviceId: 74,
                  device: "管端通径对齐辊道",
                  htmlId: 74,
                  str: null,
                },
                {
                  deviceId: 76,
                  device: "1#抛丸机前步进机",
                  htmlId: 76,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 16,
              areaType: "操作台32-辅机设备",
              deviceVOS: [
                {
                  deviceId: 77,
                  device: "1#抛丸机旋转辊",
                  htmlId: 77,
                  str: null,
                },
                {
                  deviceId: 78,
                  device: "1#抛丸机旋转辊高度调节装置",
                  htmlId: 78,
                  str: null,
                },
                {
                  deviceId: 79,
                  device: "1#抛丸机输送辊",
                  htmlId: 79,
                  str: null,
                },
                {
                  deviceId: 80,
                  device: "1#抛丸机输送辊高度调节装置",
                  htmlId: 80,
                  str: null,
                },
                {
                  deviceId: 81,
                  device: "1#抛丸机后步进机",
                  htmlId: 81,
                  str: null,
                },
                {
                  deviceId: 82,
                  device: "2#抛丸前_1#三角标对齐辊道",
                  htmlId: 82,
                  str: null,
                },
                {
                  deviceId: 123,
                  device: "1#抛丸机输送辊高度升降装置",
                  htmlId: 139,
                  str: null,
                },
                {
                  deviceId: 124,
                  device: "1#抛丸机旋转辊高度升降装置",
                  htmlId: 140,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 17,
              areaType: "操作台33-辅机设备",
              deviceVOS: [
                {
                  deviceId: 83,
                  device: "2#抛丸机旋转辊",
                  htmlId: 83,
                  str: null,
                },
                {
                  deviceId: 84,
                  device: "2#抛丸机旋转辊高度调节装置",
                  htmlId: 84,
                  str: null,
                },
                {
                  deviceId: 85,
                  device: "2#抛丸机输送辊",
                  htmlId: 85,
                  str: null,
                },
                {
                  deviceId: 86,
                  device: "2#抛丸机输送辊高度调节装置",
                  htmlId: 86,
                  str: null,
                },
                {
                  deviceId: 87,
                  device: "2#抛丸机后步进机",
                  htmlId: 87,
                  str: null,
                },
                {
                  deviceId: 88,
                  device: "2#三角标对齐辊道",
                  htmlId: 88,
                  str: null,
                },
                {
                  deviceId: 120,
                  device: "2#抛丸机输送辊高度升降装置",
                  htmlId: 136,
                  str: null,
                },
                {
                  deviceId: 121,
                  device: "2#抛丸机旋转辊高度升降装置",
                  htmlId: 137,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 18,
              areaType: "操作台37-辅机设备",
              deviceVOS: [
                {
                  deviceId: 89,
                  device: "外保步进机涂油旋转辊",
                  htmlId: 89,
                  str: null,
                },
                {
                  deviceId: 90,
                  device: "外保步进机",
                  htmlId: 90,
                  str: null,
                },
                {
                  deviceId: 91,
                  device: "抛丸检验_涂油前旋转辊",
                  htmlId: 91,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 19,
              areaType: "操作台39-辅机设备",
              deviceVOS: [
                {
                  deviceId: 93,
                  device: "2#管端通径高度调整电机",
                  htmlId: 93,
                  str: null,
                },
                {
                  deviceId: 94,
                  device: "管拧机后检验_通径后旋转辊",
                  htmlId: 94,
                  str: null,
                },
                {
                  deviceId: 95,
                  device: "管拧机后步进机",
                  htmlId: 95,
                  str: null,
                },
                {
                  deviceId: 96,
                  device: "内保对齐辊道",
                  htmlId: 96,
                  str: null,
                },
                {
                  deviceId: 97,
                  device: "内保涂油旋转辊",
                  htmlId: 97,
                  str: null,
                },
                {
                  deviceId: 98,
                  device: "内保步进机",
                  htmlId: 98,
                  str: null,
                },
                {
                  deviceId: 99,
                  device: "内保管号识别旋转辊",
                  htmlId: 99,
                  str: null,
                },
                {
                  deviceId: 117,
                  device: "出废拨料钩",
                  htmlId: 133,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 2,
          area: "车丝区域",
          areaTypeVOS: [
            {
              areaTypeId: 5,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 1,
                  device: "1#收口机",
                  htmlId: 1,
                  str: "T002",
                },
                {
                  deviceId: 2,
                  device: "2#收口机",
                  htmlId: 2,
                  str: "T003",
                },
                {
                  deviceId: 3,
                  device: "3#收口机",
                  htmlId: 3,
                  str: "T004",
                },
                {
                  deviceId: 4,
                  device: "4#收口机",
                  htmlId: 4,
                  str: "T005",
                },
                {
                  deviceId: 5,
                  device: "1#车丝机",
                  htmlId: 5,
                  str: "T006",
                },
                {
                  deviceId: 6,
                  device: "2#车丝机",
                  htmlId: 6,
                  str: "T007",
                },
                {
                  deviceId: 7,
                  device: "3#车丝机",
                  htmlId: 7,
                  str: "T008",
                },
                {
                  deviceId: 8,
                  device: "4#车丝机",
                  htmlId: 8,
                  str: "T009",
                },
                {
                  deviceId: 9,
                  device: "铁屑集中装置与环链及粉碎机",
                  htmlId: 9,
                  str: "T010",
                },
                {
                  deviceId: 15,
                  device: "1#黑皮扣修磨",
                  htmlId: 15,
                  str: "T018",
                },
                {
                  deviceId: 16,
                  device: "2#黑皮扣修磨",
                  htmlId: 16,
                  str: "T019",
                },
                {
                  deviceId: 17,
                  device: "3#黑皮扣修磨",
                  htmlId: 17,
                  str: "T020",
                },
                {
                  deviceId: 18,
                  device: "4#黑皮扣修磨",
                  htmlId: 18,
                  str: "T021",
                },
              ],
            },
            {
              areaTypeId: 6,
              areaType: "操作台13-辅机设备",
              deviceVOS: [
                {
                  deviceId: 44,
                  device: "1#车丝机后表面吹扫旋转辊",
                  htmlId: 44,
                  str: null,
                },
                {
                  deviceId: 45,
                  device: "1#车丝机后黑皮扣修磨旋转辊",
                  htmlId: 45,
                  str: null,
                },
                {
                  deviceId: 46,
                  device: "1#车丝机后步进机",
                  htmlId: 46,
                  str: null,
                },
                {
                  deviceId: 47,
                  device: "1#车丝机后管号识别旋转辊",
                  htmlId: 47,
                  str: null,
                },
                {
                  deviceId: 48,
                  device: "1#车丝机后螺纹检验旋转辊",
                  htmlId: 48,
                  str: null,
                },
                {
                  deviceId: 49,
                  device: "1#车丝机后检验步进机",
                  htmlId: 49,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 7,
              areaType: "操作台14-辅机设备",
              deviceVOS: [
                {
                  deviceId: 50,
                  device: "2#车丝机后表面吹扫旋转辊",
                  htmlId: 50,
                  str: null,
                },
                {
                  deviceId: 51,
                  device: "2#车丝机后黑皮扣修磨旋转辊",
                  htmlId: 51,
                  str: null,
                },
                {
                  deviceId: 52,
                  device: "2#车丝机后步进机",
                  htmlId: 52,
                  str: null,
                },
                {
                  deviceId: 53,
                  device: "2#车丝机后管号识别旋转辊",
                  htmlId: 53,
                  str: null,
                },
                {
                  deviceId: 54,
                  device: "2#车丝机后螺纹检验旋转辊",
                  htmlId: 54,
                  str: null,
                },
                {
                  deviceId: 55,
                  device: "2#车丝机后检验步进机",
                  htmlId: 55,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 8,
              areaType: "操作台15-辅机设备",
              deviceVOS: [
                {
                  deviceId: 56,
                  device: "3#车丝机后表面吹扫旋转辊",
                  htmlId: 56,
                  str: null,
                },
                {
                  deviceId: 57,
                  device: "3#车丝机后黑皮扣修磨旋转辊",
                  htmlId: 57,
                  str: null,
                },
                {
                  deviceId: 58,
                  device: "3#车丝机后步进机",
                  htmlId: 58,
                  str: null,
                },
                {
                  deviceId: 59,
                  device: "3#车丝机后管号识别旋转辊",
                  htmlId: 59,
                  str: null,
                },
                {
                  deviceId: 60,
                  device: "3#车丝机后螺纹检验旋转辊",
                  htmlId: 60,
                  str: null,
                },
                {
                  deviceId: 61,
                  device: "3#车丝机后检验步进机",
                  htmlId: 61,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 9,
              areaType: "操作台16-辅机设备",
              deviceVOS: [
                {
                  deviceId: 62,
                  device: "4#车丝机后表面吹扫旋转辊",
                  htmlId: 62,
                  str: null,
                },
                {
                  deviceId: 63,
                  device: "4#车丝机后黑皮扣修磨旋转辊",
                  htmlId: 63,
                  str: null,
                },
                {
                  deviceId: 64,
                  device: "4#车丝机后步进机",
                  htmlId: 64,
                  str: null,
                },
                {
                  deviceId: 65,
                  device: "4#车丝机后管号识别旋转辊",
                  htmlId: 65,
                  str: null,
                },
                {
                  deviceId: 66,
                  device: "4#车丝机后螺纹检验旋转辊",
                  htmlId: 66,
                  str: null,
                },
                {
                  deviceId: 67,
                  device: "4#车丝机后检验步进机",
                  htmlId: 67,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 10,
          area: "公共区域",
          areaTypeVOS: [
            {
              areaTypeId: 28,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 10,
                  device: "乳化液集中供给",
                  htmlId: 10,
                  str: "T013",
                },
                {
                  deviceId: 11,
                  device: "液压油集中供给",
                  htmlId: 11,
                  str: "T014",
                },
              ],
            },
            {
              areaTypeId: 29,
              areaType: "RGV小车",
              deviceVOS: [
                {
                  deviceId: 12,
                  device: "1#RGV",
                  htmlId: 12,
                  str: "T015",
                },
                {
                  deviceId: 13,
                  device: "2#RGV",
                  htmlId: 13,
                  str: "T016",
                },
                {
                  deviceId: 14,
                  device: "3#RGV",
                  htmlId: 14,
                  str: "T017",
                },
              ],
            },
            {
              areaTypeId: 30,
              areaType: "RGV轨道",
              deviceVOS: [
                {
                  deviceId: 139,
                  device: "3#RGV轨道",
                  htmlId: 155,
                  str: null,
                },
                {
                  deviceId: 140,
                  device: "2#RGV轨道西段",
                  htmlId: 156,
                  str: null,
                },
                {
                  deviceId: 141,
                  device: "2#RGV轨道东段",
                  htmlId: 157,
                  str: null,
                },
                {
                  deviceId: 142,
                  device: "1#RGV轨道西段",
                  htmlId: 158,
                  str: null,
                },
                {
                  deviceId: 143,
                  device: "1#RGV轨道东段",
                  htmlId: 159,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 31,
              areaType: "桁架",
              deviceVOS: [
                {
                  deviceId: 144,
                  device: "1#桁架",
                  htmlId: 160,
                  str: "T038",
                },
                {
                  deviceId: 145,
                  device: "2#桁架",
                  htmlId: 161,
                  str: "T039",
                },
                {
                  deviceId: 146,
                  device: "3#桁架",
                  htmlId: 162,
                  str: "T040",
                },
                {
                  deviceId: 147,
                  device: "4#桁架",
                  htmlId: 163,
                  str: "T041",
                },
                {
                  deviceId: 148,
                  device: "5#桁架",
                  htmlId: 164,
                  str: "T042",
                },
                {
                  deviceId: 149,
                  device: "6#桁架",
                  htmlId: 165,
                  str: "T043",
                },
                {
                  deviceId: 150,
                  device: "7#桁架",
                  htmlId: 166,
                  str: "T044",
                },
              ],
            },
          ],
        },
        {
          areaId: 1,
          area: "上料区域",
          areaTypeVOS: [
            {
              areaTypeId: 1,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 35,
                  device: "1#逐支喷码机",
                  htmlId: 35,
                  str: "T036",
                },
                {
                  deviceId: 36,
                  device: "2#逐支喷码机",
                  htmlId: 36,
                  str: "T037",
                },
              ],
            },
            {
              areaTypeId: 2,
              areaType: "操作台01-辅机设备",
              deviceVOS: [
                {
                  deviceId: 37,
                  device: "上料辊式输送链",
                  htmlId: 37,
                  str: null,
                },
                {
                  deviceId: 38,
                  device: "管号识别前分钢调整电机",
                  htmlId: 38,
                  str: null,
                },
                {
                  deviceId: 138,
                  device: "上料挡料臂",
                  htmlId: 154,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 3,
              areaType: "操作台02-辅机设备",
              deviceVOS: [
                {
                  deviceId: 41,
                  device: "喷码识别步进机",
                  htmlId: 41,
                  str: null,
                },
                {
                  deviceId: 42,
                  device: "CT02_喷码识别对齐辊道二",
                  htmlId: 42,
                  str: null,
                },
                {
                  deviceId: 43,
                  device: "CT02_2#管号识别旋转辊",
                  htmlId: 43,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 4,
              areaType: "操作台03-辅机设备",
              deviceVOS: [
                {
                  deviceId: 39,
                  device: "CT03_喷码识别对齐辊道一",
                  htmlId: 39,
                  str: null,
                },
                {
                  deviceId: 40,
                  device: "CT03_1#管号识别旋转辊",
                  htmlId: 40,
                  str: null,
                },
                {
                  deviceId: 153,
                  device: "喷码识别步进机",
                  htmlId: 41,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 8,
          area: "测量区域",
          areaTypeVOS: [
            {
              areaTypeId: 25,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 33,
                  device: "测量点",
                  htmlId: 33,
                  str: "T033",
                },
              ],
            },
            {
              areaTypeId: 26,
              areaType: "操作台45-辅机设备",
              deviceVOS: [
                {
                  deviceId: 105,
                  device: "测量点前对齐辊道",
                  htmlId: 105,
                  str: null,
                },
                {
                  deviceId: 106,
                  device: "测量点前接箍涂漆旋转辊",
                  htmlId: 106,
                  str: null,
                },
                {
                  deviceId: 107,
                  device: "测量点前步进机",
                  htmlId: 107,
                  str: null,
                },
                {
                  deviceId: 108,
                  device: "色环旋转辊",
                  htmlId: 108,
                  str: null,
                },
                {
                  deviceId: 109,
                  device: "测量点步进机",
                  htmlId: 109,
                  str: null,
                },
                {
                  deviceId: 110,
                  device: "接箍喷印旋转辊",
                  htmlId: 110,
                  str: null,
                },
                {
                  deviceId: 111,
                  device: "测量点后拨料装置",
                  htmlId: 111,
                  str: null,
                },
                {
                  deviceId: 113,
                  device: "出废台架挡料器",
                  htmlId: 129,
                  str: null,
                },
                {
                  deviceId: 114,
                  device: "测量点后翻转台架",
                  htmlId: 130,
                  str: null,
                },
                {
                  deviceId: 155,
                  device: "烘干设备内节距式输送链",
                  htmlId: 104,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 3,
          area: "返修区域",
          areaTypeVOS: [
            {
              areaTypeId: 10,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 19,
                  device: "1#带锯",
                  htmlId: 19,
                  str: "T022",
                },
                {
                  deviceId: 20,
                  device: "2#带锯",
                  htmlId: 20,
                  str: "T023",
                },
              ],
            },
            {
              areaTypeId: 11,
              areaType: "操作台17-辅机设备",
              deviceVOS: [
                {
                  deviceId: 68,
                  device: "带锯前对齐辊道",
                  htmlId: 68,
                  str: null,
                },
                {
                  deviceId: 69,
                  device: "1#带锯管号识别旋转辊",
                  htmlId: 69,
                  str: null,
                },
                {
                  deviceId: 70,
                  device: "1#带锯输送辊道",
                  htmlId: 70,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 12,
              areaType: "操作台18-辅机设备",
              deviceVOS: [
                {
                  deviceId: 71,
                  device: "2#带锯管号识别旋转辊",
                  htmlId: 71,
                  str: null,
                },
                {
                  deviceId: 72,
                  device: "2#带锯输送辊道",
                  htmlId: 72,
                  str: null,
                },
                {
                  deviceId: 154,
                  device: "带锯前对齐辊道",
                  htmlId: 68,
                  str: null,
                },
              ],
            },
            {
              areaTypeId: 13,
              areaType: "操作台27-辅机设备",
              deviceVOS: [
                {
                  deviceId: 73,
                  device: "锯机区域拨料装置",
                  htmlId: 73,
                  str: null,
                },
                {
                  deviceId: 127,
                  device: "锯机区域翻转台架",
                  htmlId: 143,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 6,
          area: "涂层区域",
          areaTypeVOS: [
            {
              areaTypeId: 21,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 31,
                  device: "涂层设备",
                  htmlId: 31,
                  str: "T031",
                },
              ],
            },
            {
              areaTypeId: 22,
              areaType: "操作台44-辅机设备",
              deviceVOS: [
                {
                  deviceId: 100,
                  device: "涂油线纵向链1",
                  htmlId: 100,
                  str: null,
                },
                {
                  deviceId: 101,
                  device: "涂油线纵向链2",
                  htmlId: 101,
                  str: null,
                },
                {
                  deviceId: 102,
                  device: "涂油线纵向链3",
                  htmlId: 102,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 7,
          area: "烘干区域",
          areaTypeVOS: [
            {
              areaTypeId: 23,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 32,
                  device: "烘干设备",
                  htmlId: 32,
                  str: "T032",
                },
              ],
            },
            {
              areaTypeId: 24,
              areaType: "操作台44-辅机设备",
              deviceVOS: [
                {
                  deviceId: 103,
                  device: "烘箱前斯惠顿",
                  htmlId: 103,
                  str: null,
                },
                {
                  deviceId: 104,
                  device: "烘干设备内节距式输送链",
                  htmlId: 104,
                  str: null,
                },
              ],
            },
          ],
        },
        {
          areaId: 9,
          area: "打包区域",
          areaTypeVOS: [
            {
              areaTypeId: 27,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 34,
                  device: "打捆机",
                  htmlId: 34,
                  str: "T034",
                },
              ],
            },
          ],
        },
        {
          areaId: 5,
          area: "退磁区域",
          areaTypeVOS: [
            {
              areaTypeId: 20,
              areaType: "单机设备",
              deviceVOS: [
                {
                  deviceId: 30,
                  device: "管体退磁",
                  htmlId: 30,
                  str: "T030",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getIndexMenu();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$router);
    },
    async getIndexMenu() {
      await findIndexMenu().then((res) => {
        this.firstList = res.data.result;
        this.$store.commit('setItemList',res.data.result)
        console.log(this.$store.state.storeItemList)
        console.log(res);
      });
    },
    handleClick(name, id, str) {
      console.log(name, id, str);
      this.$router.replace({
        path: "/index",
        query: { id: id, name: name, str },
      });
        // this.$nextTick(() => {
        // });
        // window.open(`index?id=${id}&name=${name}&str=${str}`)
    },
  },
  
};
</script>

<style lang='less'>
.el-submenu__title{
  display: flex!important;
}
.el-submenu__icon-arrow{
  margin-top: 22px!important;
  height: 12px;
}
.el-submenu__title:hover {
  background-color: rgb(32, 39, 105) !important;
  // color: cornflowerblue;
}
.el-menu--horizontal {
  .el-menu--popup-bottom-start {
    margin-top: 0 !important;
  }
  .el-menu--popup {
    background-color: rgb(11, 16, 66) !important;
    .el-menu-item {
      width: 100%;
      height: 100%;
      background-color: rgb(11, 16, 66) !important;
      //   color: black !important;
    }
  }
}
</style>