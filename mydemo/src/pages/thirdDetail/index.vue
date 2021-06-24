<template>
  <div class="page-box">
    <div class="page-header">页面标题</div>
    <div class="page-body">
      <div class="body-sidebar">侧边栏</div>
      <div class="body-context">
        <div class="contain">
          <div class="conntainHeader">
            <div class="ch">
              <span>区域：</span>
              <el-select
                v-model="value"
                placeholder="请选择"
                @change="getAllAreaDevice"
              >
                <el-option
                  v-for="item in areas"
                  :key="item.areaId"
                  :label="item.area"
                  :value="item.areaId"
                >
                </el-option>
              </el-select>
            </div>
            <div class="ch">
              <span>设备：</span>
              <el-select
                v-model="value1"
                placeholder="请选择"
                @change="getDevNum"
              >
                <el-option
                  v-for="item in areasDevice"
                  :key="item.deviceId"
                  :label="item.device"
                  :value="item.deviceId"
                >
                </el-option>
              </el-select>
            </div>
            <div class="ch">
              <el-button type="primary" @click="click1">查找故障</el-button>
            </div>
          </div>
          <div class="conntainContext">
            <el-table
              :row-class-name="tableRowClassName"
              :data="tableData"
              border
              style="width: 100%"
              :header-cell-style="{
                textAlign: 'center',
                fontSize: '26px',
                height: '80px',
                padding: '0',
                background: '#203456',
              }"
              :cell-style="{ textAlign: 'center', height: '50px' }"
            >
              <!-- <el-table-column label="库区" width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.ReservoirArea }}
        </template>
      </el-table-column> -->
              <el-table-column prop="fault" label="故障名称"> </el-table-column>

              <el-table-column label="操作原因措施">
                <template slot-scope="scope">
                  <el-button
                    @click="showAddDialog(scope.$index)"
                    type="text"
                    size="nomal"
                    >新增</el-button
                  >
                  <el-button type="text" size="nomal">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <!-- 新增弹出的dialog框 -->
    <el-dialog title="提示" :visible.sync="addDialog" width="30%">
      <el-form ref="addForm" :model="addForm" label-width="80px">
        <el-form-item label="故障原因">
          <el-select
            style="width: 100%"
            v-model="addForm.faultReason"
            filterable
            allow-create
            default-first-option
            placeholder="请选择"
            @change="getReasonNum"
          >
            <el-option
              v-for="item in reasonSelect"
              :key="item.reasonId"
              :label="item.reason"
              :value="item.reasonId"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="故障措施" style="width: 100%">
          <div style="width: 100%">
            <div
              v-for="(item, i) in addForm.input"
              v-bind:key="i"
              style="width: 90%; float: left"
            >
              <el-input
                style="display: inline-block"
                v-model="addForm.input[i]"
                placeholder="请输入内容"
              ></el-input>
            </div>
            <div style="width: 10%; float: left">
              <span @click="addInput" class="el-icon-plus"></span>
            </div>
          </div>
        </el-form-item>
        <el-form-item style="margin: 0 auto !important">
          <el-button type="primary" @click="onSubmit">提交原因和措施</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAllArea,
  getAllAreaDevice,
  getAllDevReason,
  getAllErrReason,
  addReaAndMea,
} from "../../api/detail.js";
export default {
  data() {
    return {
      areasDevice: [],
      faultId: "", //table里每个故障问题对应的id
      reason: "", //dialog故障原因下拉框里选中后的原因
      reasonId: 0, //dialog故障原因下拉框里每个原因的id
      areas: [], //区域选择框数据
      value: "", //区域下拉框绑定的数据
      value1: "", //设备下拉框绑定的数据
      devNum: "",
      tableData: ["设备急停"], //表格table信息
      addDialog: false, //控制新增dialog的显示

      addForm: {
        faultReason: "", //新增dialog下拉框选择的原因
        input: [""], //输入框的值
      }, //新增Dialog表单数据
      reasonSelect: [], //新增dialog下拉列表
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex !== -1) {
        return "success-row";
      }
    },
    //点击新增按钮
    showAddDialog(tableIndex) {
      var item = this.tableData[tableIndex];
      this.addDialog = true;
      var data = {
        faultId: item.faultId,
      };
      this.faultId = item.faultId;
      this.getNewDevReason(data);
    },
    //获取设备故障所有原因
    async getNewDevReason(data) {
      await getAllErrReason(data).then((res) => {
        let { state, message, result } = res.data;
        if (state == true) {
          this.reasonSelect = result;
        }
      });
    },
    addInput() {
      this.addForm.input.push("");
    },
    //查看故障
    async searchAllReason() {
      console.log(111);
      let data = {
        deviceId: this.devNum,
      };
      await getAllDevReason(data).then((res) => {
        console.log(res, "查看故障");
        let { state, message, result } = res.data;
        if (state == true) {
          this.tableData = result;
        }
      });
    },
    //选择设备后
    getDevNum(val) {
      this.devNum = val; //保存设备id
    },
    //新增原因和措施
    onSubmit() {
      this.addReaAndMeaWrapper();
    },
    async addReaAndMeaWrapper() {
      let data = {
        faultId: this.faultId,
        reasonId: this.reasonId,
        reason: this.reason,
        measures: this.addForm.input,
      };
      console.log(data);
      await addReaAndMea(data).then((res) => {
        console.log(res);
        let { state, message, result } = res.data;
        // if(state == true){
        //   this.$message({
        //     message,
        //   })
        // }
      });
    },
    //故障原因下拉框改变事件
    getReasonNum(val) {
      this.reason = val;
      this.reasonId = 0;
      this.reasonSelect.forEach((item) => {
        if (item.reasonId == val) {
          this.reasonId = item.reasonId; //保存选中后的故障原因及其id
          this.reason = item.reason;
        }
      });
    },
    //接口获取全部区域
    async getAllArea() {
      await getAllArea().then((res) => {
        let { state, message, result } = res.data;
        if (state === true) {
          this.areas = result;
        } else {
          this.$message({
            message: message,
            type: "warning",
            center: true,
          });
        }
      });
    },
    click1() {
      this.searchAllReason();
    },
    async getAllAreaDevice(id) {
      let data = {
        areaId: id,
      };
      await getAllAreaDevice(data).then((res) => {
        let { state, message, result } = res.data;
        if (state === true) {
          this.areasDevice = result;
        } else {
          this.$message({
            message: message,
            type: "warning",
            center: true,
          });
        }
      });
    },
  },
  mounted() {
    this.getAllArea();
  },
};
</script>
<style  lang='less'>
.page-box {
  width: 100%;
  height: 100%;
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .page-header {
    width: 100%;
    height: 20%;
    border: 1px solid thistle;
  }

  .page-body {
    width: 100%;
    height: 80%;
    display: flex;
    .el-form-item__content {
      margin-left: 0px !important;
    }
    .body-sidebar {
      height: 100%;
      width: 20%;
      border: 1px solid steelblue;
    }
    .body-context {
      height: 100%;
      width: 80%;
      // border: 1px solid red;
      .contain {
        height: 80%;
        width: 80%;
        background: #162d53;
        display: flex;
        flex-direction: column;
        margin: 20px auto;

        .conntainHeader {
          flex: 1;
          display: flex;
          font-size: 24px;

          .ch {
            float: left;
            flex: 1;
            margin: auto;
          }
        }

        .conntainContext {
          flex: 4;
          // border: 1px brown solid;
          font-size: 22px;
          .el-table__row {
            &.success-row {
              background: rgb(18, 104, 141);
              // background-color: #606266;
            }
          }
          .el-table {
            color: #fff;
            .warning-row {
              background-color: #429118;
            }
          }
          .el-table--border {
            td {
              border: 1px solid #666;
            }
          }
          .el-table--border {
            border: none;
          }
        }
      }
    }
  }
}
</style>