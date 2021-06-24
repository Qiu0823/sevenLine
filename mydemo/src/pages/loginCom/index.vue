<template>
  <dv-full-screen-container>
    <div class="login-con">
      <div class="login-box">
        <div class="loginTitle">系统标题</div>
        <!-- <div class="userName">
              </div>
              <div class="password"></div>
              <div class="loginBtn"></div> -->
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        userName: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          alert("submit!");
          console.log("submit");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang='less'>
.login-con {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/loginBg1.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  .login-box {
    width: 30%;
    height: 40%;
    background: #282b3c;
    position: absolute;
    left: 180px;
    top: 240px;
    border: 4px solid #414b85;
    border-top: transparent;
    display: flex;
    flex-direction: column;
    .demo-ruleForm {
      // border: 1px solid red;
      // margin: 0 auto;
      .el-form-item {
        .el-form-item__label {
          font-size: 28px !important;
        }
      }
    }
  }
}
</style>