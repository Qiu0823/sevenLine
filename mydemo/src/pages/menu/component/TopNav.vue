<template>
  <div class="topNav-box">
    <div class="top-left">
            <el-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed" class="topNav-button">
      <i :class="{'el-icon-s-unfold':isCollapse,'el-icon-s-fold':!isCollapse}" />
    </el-button>
    <span>
       {{ $store.state.currentNav}}
    </span>
    </div>
    <div class="top-right">
        <span style="margin-right:20px"><i class="el-icon-s-custom"></i> {{ $store.state.userInfo.username }}</span>
        <span><i class="el-icon-message-solid"></i>  {{ $store.state.userInfo.role }}</span>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
              toggleCollapsed(){
          this.$emit('change')
      }
    },
    props:['isCollapse','currentNav']
}
</script>

<style lang='less'>
    .topNav-box{
        height: 60px;
        border-bottom: 1px solid #ccc;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        .topNav-button{
            margin-right: 10px;
        }
        .top-right{
            color: #ccc;
        }
    }
</style>