<template>
  <div class="con">
    <div class="title">
        <dv-decoration-7 class="border7" style="width:200px;height:50px;">{{singleTitle}}</dv-decoration-7>
    </div>
    <div class="imgBox">
      <!-- <img src="~@/assets/img/lamp.png" alt="" /> -->
      <i class="iconfont  icon-ic_zhishideng_ " :style="{color:color}" > </i>
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
.icon-ic_zhishideng_{
    // width: 100%;
    // height: 100%;
    color: rgb(156, 16, 16);
    // width: 5vh;
    // height: 5vh;
    font-size: xxx-large;
    font-weight: bolder;
    font-stretch: expanded;
}
.iconfont{
  font-size: 32px!important;
}
.con {
    width: 15%;
    height: 10%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title {
      height: 55%;
    //   border: 1px solid red;
      .border7{
          width: 100%!important;
          height: 100%!important;
      }
      text-align: center;
    //   flex: 2;
 
  }
  .imgBox {
      margin-top: 2vh;
      height: 40%;
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