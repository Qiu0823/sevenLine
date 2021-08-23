<template>
  <dv-full-screen-container>
    <div class="login-con">
      <div class="login-box">
        <div class="loginTitle">后台管理系统</div>
        <div class="login-logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <!-- 登录页 -->
        <transition name="el-zoom-in-center">
          <el-form
            v-if="showForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            id="selectForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" size="medium">
                <el-button
                  slot="append"
                  icon="el-icon-s-custom"
                  class="button-icon"
                ></el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                size="medium"
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              >
                <el-button
                  slot="append"
                  class="button-icon"
                  icon="el-icon-view"
                ></el-button>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginSubmitForm('ruleForm')"
                >提交</el-button
              >
              <el-button type="primary" @click="goToRegister">去注册</el-button>
            </el-form-item>
          </el-form>
        </transition>
        <!-- 注册页 -->
        <el-form
          v-if="!showForm"
          :model="ruleFormRegister"
          status-icon
          :rules="rulesRegister"
          ref="ruleForm"
          label-width="100px"
          class="demo2-ruleForm"
          id="selectForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleFormRegister.username" size="medium">
              <el-button
                slot="append"
                icon="el-icon-s-custom"
                class="button-icon"
              ></el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              size="medium"
              type="password"
              v-model="ruleFormRegister.password"
              autocomplete="off"
            >
              <el-button
                slot="append"
                class="button-icon"
                icon="el-icon-view"
              ></el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              size="medium"
              type="password"
              v-model="ruleFormRegister.checkPass"
              autocomplete="off"
            >
              <el-button
                slot="append"
                class="button-icon"
                icon="el-icon-view"
              ></el-button>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="registerSubmitForm('ruleForm')"
              >提交</el-button
            >
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            <el-button type="primary" @click="goToLogin">去登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import store from '@/store/index.js'
export default {
  data() {
    //登录输入框验证
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
    //注册输入框验证
    var checkUserNameRes = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePassRes = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2Res = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleFormRegister.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      showForm: true,
      ruleForm: {
        password: "",
        username: "",
      },
      ruleFormRegister: {
        password: "",
        username: "",
        checkPass: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkUserName, trigger: "blur" }],
      },
      rulesRegister: {
        username: [{ validator: checkUserNameRes, trigger: "blur" }],
        password: [{ validator: validatePassRes, trigger: "blur" }],
        checkPass: [{ validator: validatePass2Res, trigger: "blur" }],
      },
    };
  },
  methods: {
    //去注册按钮
    goToRegister() {
      this.showForm = !this.showForm;
    },
    //去登录按钮
    goToLogin() {
      this.showForm = !this.showForm;
    },
    //登录页面的提交按钮
    loginSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          store.dispatch('acSetUserInfo',this.ruleForm).then(()=>{
            console.log('登录完成')
            this.$router.push('/')
          }).catch((error)=>{
              this.$message({
              message: error,
              type: "error",
            });
          })
          // if (
          //   this.ruleForm.username == this.$store.state.userInfo.name &&
          //   this.ruleForm.password == this.$store.state.userInfo.password
          // ) {
          //   this.$router.push("/");
          // } else {
          //   this.$message({
          //     message: "用户名或密码错误",
          //     type: "error",
          //   });
          //   console.log("密码错误");
          // }
        }
      });
    },
    //注册页面的提交按钮
    registerSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("resister submit");
          this.resetForm(formName);
          alert("submit!");
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
<style>
</style>
<style lang='less' scope="scoped">
.login-con {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/img/loginBg1.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  .login-box {
    width: 30%;
    height: 38%;
    background: #282b3c;
    position: absolute;
    left: 180px;
    top: 240px;
    border: 4px solid #414b85;
    border-top: transparent;
    border-radius: 10px;
    overflow: hidden;
    .el-form-item__label {
      font-size: 20px !important;
      height: 100%;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
    }
    .demo-ruleForm {
      width: 100%;
      height: 80%;
      padding-right: 50px;
      box-sizing: border-box;
      .el-form-item {
        margin-top: 50px;
        .button-icon i {
          font-size: 22px;
        }
        .el-input--medium {
          .el-input__inner {
            height: 40px;
            line-height: 40px;
          }
        }
      }
      .el-form-item:last-child {
        .el-form-item__content {
          margin-left: 30px !important;
          .el-button {
            font-size: 18px;
            margin-right: 20px;
          }
        }
      }
    }
    .demo2-ruleForm {
      width: 100%;
      height: 80%;
      padding-right: 50px;
      box-sizing: border-box;
      .el-form-item {
        margin-top: 30px;
        .button-icon i {
          font-size: 22px;
        }
        .el-input--medium {
          .el-input__inner {
            height: 40px;
            line-height: 40px;
          }
        }
      }
      .el-form-item:last-child {
        .el-form-item__content {
          margin-left: 30px !important;
          .el-button {
            font-size: 18px;
            margin-right: 20px;
          }
        }
      }
    }
    .loginTitle {
      width: 100%;
      font-size: 30px;
      margin-top: 40px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .login-logo {
      position: absolute;
      right: 0;
      top: -0px;
    }
  }
}
</style>