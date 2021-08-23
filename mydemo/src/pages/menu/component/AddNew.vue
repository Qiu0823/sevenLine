<template>
  <div class="addNew-com">
        <div class="form-title">
        注册新用户
    </div>
    <el-form
      :model="ruleFormRegister"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo2-ruleForm"
      id="selectForm"
    >
      <el-form-item label="用户名" prop="username" required>
        <el-input v-model="ruleFormRegister.username" size="medium">
          <el-button
            slot="append"
            icon="el-icon-s-custom"
            class="button-icon"
          ></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="权限" prop="auth" required>
        <el-select
          v-model="ruleFormRegister.auth"
          placeholder="请选择权限"
          style="width: 100%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="registerSubmitForm('ruleForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addNew } from "@/api/user.js";
export default {
  data() {
    return {
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
      ruleFormRegister: {
        username: "",
        auth: undefined,
      },
    };
  },
  methods: {
    registerSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addNew(this.ruleFormRegister).then((res) => {
              const {state,message} = res.data;
              if(state == true){
                this.$message({
                message: message,
                type: "success",
                });
              } else{
                this.$message({
                message: message,
                type: "error",
                });
              }
          });
          this.resetForm(formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //清空表格
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='less'>
.addNew-com {
  width: 60%;
  height: 50%;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 100px;
  padding-top: 120px;
  box-sizing: border-box;
  padding-right: 20px;
  position: relative;
   .form-title{
            color: black;
            position: absolute;
            top: 50px;
            left: calc(50% - 40px);
            font-size: 20px;
        }
}
</style>