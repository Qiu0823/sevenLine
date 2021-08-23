<template>
  <div class="changePas-com">
      <!-- <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"> -->
    <div class="form-title">
        修改密码
    </div>
      <el-form
        :model="changePasForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo2-ruleForm"
        id="selectForm"
      >
        <el-form-item label="旧密码" prop="oldPwd">
          <el-input
            size="medium"
            type="password"
            v-model="changePasForm.oldPwd"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input
            size="medium"
            type="password"
            v-model="changePasForm.newPwd"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="changePasBtn('ruleForm')"
            >确认修改</el-button
          >
          <el-button type="primary" @click="dialogVisible = false"
            >取消</el-button
          >
        </el-form-item>
      </el-form>
      <!-- </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      changePasForm: {
        oldPwd: "",
        newPwd: "",
      },
      dialogVisible:true,
    };
  },
  methods: {
         //确定修改密码按钮
    changePasBtn(){
      console.log('点击了 确定修改密码按钮')
    },
  },
};
</script>

 <style lang="less">
    .changePas-com{
        position: relative;
        .form-title{
            color: black;
            position: absolute;
            top: 50px;
            left: calc(50% - 40px);
            font-size: 20px;
        }
      width: 60%;
        height: 50%;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 100px;
        padding-top: 120px;
        box-sizing: border-box;
        padding-right: 20px;
    }
</style>
