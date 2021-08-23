<template>
  <div class="user-com">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="role" label="用户角色">
        <template slot-scope="scope">
          <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
          <el-select
            v-model="scope.row.role"
            @change="
              (val) => {
                handleChange(val, scope.row);
              }
            "
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button -->
          <!-- > -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getAllUser, deleteUser, changeUserRole } from "@/api/user.js";
import store from "@/store/index.js";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible:false,
      options: [
        {
          value: "3",
          label: "管理员",
        },
        {
          value: "2",
          label: "点检",
        },
        {
          value: "1",
          label: "普通用户",
        },
      ],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    // handleEdit() {
    //   this.dialogVisible = true;
    // },
    //删除用户
    handleDelete(index, row) {
      if (row.role == "管理员") {
        this.$confirm(
          '是否确认删除用户名为"' + row.username + '"的用户?',
          "警告",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
        )
          .then(() => {
            var data = {
              userId: row.id,
            };
            deleteUser(data).then((resp) => {
              console.log(resp);
              const { state, message } = resp.data;
              if (state == true) {
                this.getUserList();
                this.notify(message, "success");
              } else {
                this.notify(ErrorMessage, "error");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //提示权限不足
        this.notify("权限不足", "error");
      }
    },
    //获取用户列表
    getUserList() {
      console.log("create");
      getAllUser().then(
        (res) => {
          const { result, state, message } = res.data;
          console.log(res);
          if (state == true) {
            this.tableData = result;
          } else {
            this.notify(message, "error");
          }
        },
        (err) => {
          this.notify(message, "error");
        }
      );
    },
    notify(message, type) {
      this.$message({
        message,
        type,
      });
    },
    //修改用户权限
    handleChange(val, row) {
      console.log(row.role);
      var data = {
        userId: row.id,
        auth: row.role,
      };
      changeUserRole(data).then((res) => {
        console.log(res);
        const { state, message } = res.data;
        if (state == true) {
          this.notify(message, "success");
        } else {
          this.notify(message, "error");
        }
      });
    },
  },
};
</script>

<style>
</style>