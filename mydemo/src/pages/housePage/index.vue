<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">
          <!-- <dv-border-box-2
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;"
          >
            <span>首页</span>
            <i class="el-icon-s-home"></i>
          </dv-border-box-2> -->
          <router-link to="/">
            <img src="~@/assets/img/home.png" class="houseImg" />
          </router-link>
        </div>
        <div class="mh-middle">全线急停盘总览</div>
      </div>
      <!-- 急停盘名称，故障时间 -->
      <dv-border-box-1 class="main-container">
        <div class="mc-left">
          <dv-border-box-5 :reverse="false">
            <lamp-list> </lamp-list>
          </dv-border-box-5>
        </div>
        <!-- <div class="mc-content"></div> -->
        <div class="mc-right">
          <div class="tableArea">
            <!-- <div class="table_c"> -->
              <!-- <div class="table_all"> -->
              <!-- <el-card shadow="hover" class="tebale_card"> -->
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%"
                  :row-class-name="tableRowClassName"
                  :header-cell-style="{
                    background: '#3f5c6d2c',
                    color: '#fff',
                  }"
                >
                  <el-table-column
                    prop="name"
                    label="急停盘名称"
                    min-width="180"
                  >
                  </el-table-column>
                  <el-table-column prop="date" label="急停时间" width="180">
                  </el-table-column>
                     <el-table-column prop="date" label="恢复运行时间" width="180">
                  </el-table-column>
                </el-table>
              <!-- </el-card> -->
              <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LampList from "../housePage/components/lampList.vue";
import { mapState } from "vuex";
export default {
  name: "DataView",

  data() {
    return {
      str: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
        },
      ],
    };
  },
  components: {
    LampList,
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex !== -1) {
        return "warning-row";
      } else return "";
    },
  },
  created() {
    this.str = this.$route.query.str;
    if (this.$store.state.ws.readyState == 1) {
      this.ws.send(this.str);
    }
  },
  computed: {
    ...mapState(["WebsocketMessage", "ws"]),
  },
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
    // justify-content: space-between;
    // align-items: flex-end;
    .el-icon-s-home {
      font-size: 32px;
      color: #666;
      padding-top: 10px;
    }
    .mh-left {
      width: 20%;
      .houseImg {
        width: 70px;
        height: 70px;
        margin-right: 150px;
      }
    }
    .mh-middle {
      width: 80%;
      padding-right: 350px;
    }
  }
  .main-container {
    height: calc(~"100% - 80px");
    width: 100%;
    display: flex;
    .mc-left {
      width: 67%;
      height: 100%;
    }
    .mc-right {
      width: 33%;
      height: 100%;
      .tableArea {
        width: 95%;
        margin: 0 auto;
        height: 100%;
        margin-top: 2vh;
        .has-gutter {
          tr {
            background-color: #3f5c6d2c;
          }
        }
        .warning-row {
          background-color: #3f5c6d2c;
          color: #fff;
        }
        .success-row {
          background-color: #3f5c6d2c;
        }
        // .table_c {
        //   width: 100%;
        //   height: 500px;
        //   background-size: 100% auto;
        // }
        .el-card__body {
          padding: 0;
          height: 100%;
        }

        .el-card,
        .el-card__body {
          border: none;
        }
        .tebale_card {
          background-color: #3f5c6d2c;
        }
        .el-table__header-wrapper {
          background-color: #3f5c6d2c;
        }
        .el-table,
        .el-table__expanded-cell {
          background-color: #43667a2c; //3f5c6d2c
        }
      }
    }
  }
}
</style>