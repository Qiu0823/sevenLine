<template>
  <div class="page-box">
      <div :class="{'side-com':true,'fold':isCollapse}">
      <SideBar :isCollapse='isCollapse' @change="changecurrent" ></SideBar>
      </div>
      <div :class="{'side-main':true, 'main-fold':isCollapse}">
          <div class="topHeader">
          <TopNav @change="handleChange"  :isCollapse='isCollapse' :currentNav='currentNav'></TopNav>
          </div>
             <div class="main-content">
                 <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import SideBar from './component/SideBar.vue'
import TopNav from './component/TopNav.vue'
export default {
    data() {
        return {
            isCollapse: false,
            currentNav:'current'
        }
    },
    methods: {
        handleChange(){
            this.isCollapse = !this.isCollapse;
            console.log(this.isCollapse)
        },
        changecurrent(val){
            this.currentNav = val;
            console.log(this.currentNav)
        }
    },
    components:{
        SideBar,
        TopNav
    }
}
</script>

<style lang='less'>
   .side-com{
        width: 200px;
        height: 100%;
        position: fixed;
        ul{
            height: 100%;
        }
        &.fold{
            width: 65px;
            transition: 0.5s;
        }
    }
    .side-main{
        margin-left: 201px;
        height: 100%;
        &.main-fold{
            margin-left: 66px;
        }
        .topHeader{
            height: 60px;
        }
        .main-content{
            // border: 1px solid red;
            margin-top: 5px;
            height: calc(100% - 70px);

        }
    }
</style>