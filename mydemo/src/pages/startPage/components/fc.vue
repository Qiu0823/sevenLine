<template>
  <div class="container">
    <!-- <div class="fcl1">
      <oneCell :device="fcl1"></oneCell>
    </div>
    <div class="fcl2">
      <oneCell :device="fcl2"></oneCell>
    </div>
    <div class="fcl3">
      <oneCell :device="fcl3"></oneCell>
    </div>
    <div class="fcl4">
      <oneCell :device="fcl4"></oneCell>
    </div>
    <div class="fcl5">
      <oneCell :device="fcl5"></oneCell>
    </div> -->
     <div class="detect2">
        <div class="detect2-onecell" v-for="item in decArr" :key="item.id" @click="linkDetail1(item.id, item.title)">
        <span class="dv-title-fc">{{item.title}}</span>
        <div class="LEDbtn greenBtn"></div>
        </div>         
      </div>
  </div>
</template>

<script>
// import oneCell from "./oneCell";
export default {
  components: {
    // oneCell,
  },
  data() {
    return {
        decArr:[{
        title: "3#收口步进梁",
        status: "nomal",
        id:3
      },
       {
        title: "4#收口步进梁",
        status: "nomal",
        id:4
      },
       {
        title: "3#车丝步进梁",
        status: "nomal",
        id:7
      },
       {
        title: "3#车丝后步进梁",
        status: "nomal",
        id:58
      },
       {
        title: "3#车丝检验步进梁",
        status: "nomal",
        id:61
      },
       {
        title: "4#车丝步进梁",
        status: "nomal",
        id:8
      },
       {
        title: "4#车丝后步进梁",
        status: "nomal",
        id:64
      },
       {
        title: "4#车丝检验步进梁",
        status: "nomal",
        id:67
      },],
      fcl1: {
        title: "步进梁",
        status: "nomal",
      },
      fcl2: {
        title: "3#车丝后步进梁",
        status: "nomal",
      },
      fcl3: {
        title: "3#车丝检验步进梁",
        status: "nomal",
      },
      fcl4: {
        title: "4#车丝后步进梁",
        status: "nomal",
      },
      fcl5: {
        title: "4#车丝检验步进梁",
        status: "nomal",
      },
    };
  },
	methods: {
	  linkDetail(id) {
	    this.$router.push({
	      path: "/index",
	      query: { id: id },
	    });
	  },
	  linkDetail1(id, name) {
	    console.log(name);
	    this.$router.push({
	      path: "/index",
	      query: { id: id, name: name },
	    });
	  },
	},
};
</script>

<style scoped="scoped" lang='less'>
.container {
  border-left: 1px solid #203456;
  border-right: 1px solid #203456;
  display: flex;
  flex-direction: column;
}
.detect2 {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px!important;
  justify-content: space-between;
  .detect2-onecell{
    box-sizing: border-box;
    border-bottom: 1px solid #203456;
    display: flex;
    .LEDbtn{
      width: 13px!important;
      height: 13px!important;
    }
    .dv-title-fc{
      width: 50%;
      text-align: right;
      padding-right: 2vh;
      padding-left: 4vh;
    }
  }
  div{
	  padding: 0;
	  margin: 0;
	  font-size: 12px;
  }
}
div {
  width: 100%;
  height: 100%;
  // padding-top: 0.5vh;
  border-bottom: 1px solid #203456;
}
.fcl1 {
  height: 17%;
}
.fcl2 {
  height: 19%;
}
.fcl3 {
  height: 19%;
}
.fcl4 {
  height: 19%;
}
.fcl5 {
  height: 19%;
  border-bottom: none;
}
</style>
