<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">设备故障诊断系统</div>
    <!-- <div @click="link" class="d1">
      <img  src="@/assets/img/home.png" alt="">
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  methods:{
    		//控制跳转主页
		// link(){
		// 	this.$router.push({
		// 		path: `/`
		// 	})
		// }
  }
}
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration, .header-right-decoration {
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
  }
  .d1{
    position: absolute;
    left: 23px;
    top: -2vh ;
    width: 60px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius:4px;
      img{
    height: 50px!important;
    width: 50px!important;
  }
  }
}
</style>
