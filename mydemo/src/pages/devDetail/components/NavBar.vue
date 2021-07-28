<template>
  <div class="navCon">
    <dv-border-box-2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgb(0,11,44)"
        text-color="#fff"
        active-text-color="#f40"
        @open="2 - 1"
      >
        <el-submenu index="1">
          <template slot="title">上料区域</template>
          <el-menu-item index="2-1">乳化液</el-menu-item>
          <el-menu-item index="2-2">液压油</el-menu-item>
          <el-menu-item index="2-3">1#喷码机</el-menu-item>
          <el-menu-item index="2-4">2#喷码机</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">车丝区域</template>
          <el-menu-item index="2-1">1#收口机</el-menu-item>
          <el-menu-item index="2-2">1#车丝机</el-menu-item>
          <el-menu-item index="2-3">1#修磨黑皮扣</el-menu-item>
          <el-menu-item index="2-4">1#吹水黑皮扣</el-menu-item>

          <el-menu-item index="2-5">2#收口机</el-menu-item>
          <el-menu-item index="2-6">2#车丝机</el-menu-item>
          <el-menu-item index="2-7">2#吹水黑皮扣</el-menu-item>
          <el-menu-item index="2-8">2#修磨黑皮扣</el-menu-item>

          <el-menu-item index="2-9">3#收口机</el-menu-item>
          <el-menu-item index="2-10">3#车丝机</el-menu-item>
          <el-menu-item index="2-11">3#修磨黑皮扣</el-menu-item>
          <el-menu-item index="2-12">3#吹水黑皮扣</el-menu-item>

          <el-menu-item index="2-13">4#收口机</el-menu-item>
          <el-menu-item index="2-14">4#车丝机</el-menu-item>
          <el-menu-item index="2-15">4#吹水黑皮扣</el-menu-item>
          <el-menu-item index="2-16">4#修磨黑皮扣</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">管拧区</template>
          <el-menu-item index="2-1">1#通径机</el-menu-item>
          <el-menu-item index="2-2">1#抛丸机</el-menu-item>
          <el-menu-item index="2-3">1#三角标</el-menu-item>
          <el-menu-item index="2-4">外保涂油拧接</el-menu-item>
          <el-menu-item index="2-5">2#通径机</el-menu-item>
          <el-menu-item index="2-6">2#三角标</el-menu-item>
          <el-menu-item index="2-7">接箍上下料</el-menu-item>
          <el-menu-item index="2-8">管拧机</el-menu-item>
          <el-menu-item index="2-9">2#通径机</el-menu-item>
          <el-menu-item index="2-10">内保涂油拧接</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">退磁区域</template>
          <el-menu-item index="2-1">退磁</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">涂层区域</template>
          <el-menu-item index="2-1">涂层</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">烘干区域</template>
          <el-menu-item index="2-1">烘干机</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">测量区域</template>
          <el-menu-item index="2-1">测量点</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">打包区域</template>
          <el-menu-item index="2-1">打捆机</el-menu-item>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">返修区域</template>
          <el-menu-item index="2-1">1#带锯</el-menu-item>
          <el-menu-item index="2-2">2#带锯</el-menu-item>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">公告区域</template>
          <el-menu-item index="2-1">1#RGV</el-menu-item>
          <el-menu-item index="2-2">2#RGV</el-menu-item>
          <el-menu-item index="2-3">3#RGV</el-menu-item>
          <el-menu-item index="2-4">1#桁架</el-menu-item>
          <el-menu-item index="2-5">2#桁架</el-menu-item>
          <el-menu-item index="2-6">3#桁架</el-menu-item>
          <el-menu-item index="2-7">4#桁架</el-menu-item>
          <el-menu-item index="2-8">5#桁架</el-menu-item>
          <el-menu-item index="2-9">6#桁架</el-menu-item>
          <el-menu-item index="2-10">7#桁架</el-menu-item>
        </el-submenu>
      </el-menu>
    </dv-border-box-2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less'>
.el-submenu__title:hover {
  background-color: rgb(32, 39, 105) !important;
}
.el-menu--horizontal {
  .el-menu--popup-bottom-start {
    margin-top: 0 !important;
  }
  .el-menu--popup {
    background-color: rgb(11, 16, 66) !important;
    .el-menu-item {
      width: 100%;
      height: 100%;
      background-color: rgb(11, 16, 66) !important;
      //   color: black !important;
    }
  }
}
</style>