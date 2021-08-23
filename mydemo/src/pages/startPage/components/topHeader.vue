<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">无缝管加工7号线智能诊断系统</div>
    <img src="@/assets/img/logo.png" alt="" class="imgOne" />
    <!-- <img src="@/assets/img/logo1.png" alt="" class="img2"> -->
    <img src="@/assets/img/leftLogo.png" alt="" class="img2" />
    <div class="user"  @click="goToUser">
      <dv-border-box-5 style="width:300px;height:50px">
      <span style="margin-right:10px">用户管理</span>
      <i class="el-icon-s-custom"></i> 
      </dv-border-box-5>
    </div>
    <!-- <div class="user-dec">
      <dv-decoration-1 style="width:100px;height:50px;" />
    </div> -->
    <div class="userRight">
       <span style="margin-right:20px"><i class="el-icon-s-custom"></i> {{ $store.state.userInfo.username }}</span>
        <span><i class="el-icon-message-solid"></i>  {{ $store.state.userInfo.role }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  methods: {
    goToUser(){
      this.$router.push('menu')
    }
  },
};
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  .user{
    position: absolute;
    top: 40px;
    left: 240px;
    color: #ccc;
    font-size: 24px;
    cursor: pointer;
  }
  .user-dec{
        position: absolute;
    top: 40px;
    left: 200px;
  }
  .userRight{
    position: absolute;
    top: 40px;
    right: 240px;
    color: #ccc;
  }
  .imgOne {
    width: 180px !important;
    height: 50px !important;
    position: absolute;
    right: 1vh;
    top: 7vh;
    display: block;
  }
  .img2 {
    width: 180px !important;
    height: 80px !important;
    position: absolute;
    left: 1vh;
    top: 6.5vh;
    display: block;
  }
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    color: #fff;
  }
  .userMane {
    width: 90px;
    position: absolute;
    right: 1vw;
    top: 6vh;
    color: #fff;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 2px;
    .el-dropdown-link {
      cursor: pointer;
      color: #fff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
