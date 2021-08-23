<template>
  <div class='side-box' >
       <!-- <el-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <i :class="{'el-icon-s-unfold':collapsed,'el-icon-s-fold':!collapsed}" />
    </el-button> -->
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  :collapse="isCollapse" background-color='#0A1536' text-color='#fff'>
     <el-menu-item index="6"  @click="goToPage('/')">
    <i class="el-icon-menu"></i>
    <span slot="title">回到首页</span>
  </el-menu-item>
    <el-menu-item index="1" v-if="showItemDatas.Data1" @click="goToPage('/addNew','添加新用户')">
    <i class="el-icon-menu"></i>
    <span slot="title">添加新用户</span>
  </el-menu-item>
  <el-menu-item index="2" v-if="showItemDatas.Data2" @click="goToPage('/changePas','修改密码')" >
    <i class="el-icon-menu"></i>
      <span slot="title">修改密码</span>
  </el-menu-item>
    <el-menu-item index="3" v-if="showItemDatas.Data3" @click="goToPage('/userList','查看用户所有信息')">
    <i class="el-icon-menu"></i>
      <span slot="title">查看用户所有信息</span>
  </el-menu-item>
      <el-menu-item index="4" v-if="showItemDatas.Data4" @click="goToPage('/bugInfo','处理故障信息')">
    <i class="el-icon-menu"></i>
      <span slot="title">处理故障信息</span>
  </el-menu-item>
     <el-menu-item index="5" v-if="showItemDatas.Data5" @click="logout">
    <i class="el-icon-setting"></i>
    <span slot="title">退出登录</span>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
import {showSideItem} from '@/api/user.js'
export default {
    data() {
      return {
        showItemDatas:{}
      };
    },
    created() {
      showSideItem().then(res=>{
        console.log(res)
        const { state,result } = res.data;
        if(state == true){
          this.showItemDatas = result;
        }
      })
    },
    methods: {
      goToPage(val,currentNav){
        this.$router.push(val);
        // this.$emit('change',currentNav)
        this.$store.dispatch('acSetCurrentNav',currentNav)
      },
      logout(){
        this.$store.dispatch('logout');
        this.$router.push('loginCom')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
    props:['isCollapse']
}
</script>

<style lang='less'>
    .side-box{
        height: 100%;
        ul{
            height: 100%;
        }
    }
    // .side-box{
    //     width: 200px;
    //     height: 100%;
    //     ul{
    //         height: 100%;
    //     }
    //     &.fold{
    //         width: 65px;
    //         transition: 0.5s;
    //     }
    // }
</style>