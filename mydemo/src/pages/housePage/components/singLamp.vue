<template>
  <div class="con">
    <div class="title">
        <div class="border7" style="width:200px;height:50px;">{{singleTitle}}</div>
    </div>
    <div class="imgBox">
      <!-- <img src="~@/assets/img/lamp.png" alt="" /> -->
      <!-- <i class="iconfont  icon-ic_zhishideng_ " :style="{color:color}" > </i> -->
      <i class="el-icon-timer"></i>
    </div>
    <!-- <div>
      {{value}}
    </div> -->
  </div>
  <!-- :style="{backgroundColor:'yellow'}" -->
</template>

<script>
export default {
  props:['color','singleTitle']
};
</script>

<style lang='less' scoped>
.el-icon-timer{
     color: rgb(156, 16, 16);
    font-size: xxx-large;
    font-weight: bolder;
    font-stretch: expanded;
}
.icon-ic_zhishideng_{
    color: rgb(156, 16, 16);
    font-size: xxx-large;
    font-weight: bolder;
    font-stretch: expanded;
}
.iconfont{
  font-size: 32px!important;
}
.con {
    width: 15%;
    height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title {
      height: 55%;
      height: 3vh;
      background-color:#666;
      color: black;
      .border7{
          // width: 100%!important;
          // height: 100%!important;
      margin-top: 5px;
      text-align: center;
      }
      text-align: center;
    //   flex: 2;
 
  }
  .imgBox {
      margin-top: 1vh;
      height: 40%;
      height: 5vh;
    img{
        // width: 80%;
        // height: 80%;
        // background-size: 30%;
        width: 40%;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
    }
  }
}
</style>