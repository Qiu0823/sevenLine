<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">无缝管加工7号线智能诊断系统</div>
    <img src="@/assets/img/logo.png" alt="" class="imgOne" />
    <!-- <img src="@/assets/img/logo1.png" alt="" class="img2"> -->
    <img src="@/assets/img/leftLogo.png" alt="" class="img2" />
  </div>
</template>

<script>
export default {
  name: "TopHeader",
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
