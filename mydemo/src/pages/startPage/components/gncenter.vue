<template>
  <div class="container">
    <div class="detect2">
      <div class="detect2-onecell" v-for="item in decArr" :key="item.id" @click="linkDetail1(item.id, item.title,item.str)">
        <span class="dv-title-gc">{{ item.title }}</span>
        <div class="LEDbtn greenBtn"></div>
      </div>
    </div>
    <!-- <div class="gnc1">
      <oneCell :device="gnc1"></oneCell>
    </div>
    <div class="gnc2">
      <oneCell :device="gnc2"></oneCell>
    </div>
    <div class="gnc3">
      <oneCell :device="gnc3"></oneCell>
    </div>
    <div class="gnc4">
      <oneCell :device="gnc4"></oneCell>
    </div>
    <div class="gnc5">
      <oneCell :device="gnc5"></oneCell>
    </div>
    <div class="gnc6">
      <oneCell :device="gnc6"></oneCell>
    </div>
    <div class="gnc7">
      <oneCell :device="gnc7"></oneCell>
    </div> -->
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
      decArr: [
        {
          title: "1#抛丸机前步进梁",
          status: "nomal",
          id: 76,
          str:'T086'
        },
        {
          title: "1#抛丸机后步进梁",
          status: "nomal",
          id: 81,
          str:'T088'
        },
        {
          title: "2#抛丸机后步进梁",
          status: "nomal",
          id: 87,
          str:'T096'
        },
        {
          title: "外保步进梁",
          status: "nomal",
          id: 90,
          str:'T104'
        },
        {
          title: "管拧机步进梁",
          status: "nomal",
          id: 27,
          str:'T028'
        },
        {
          title: "管拧机后步进梁",
          status: "nomal",
          id: 95,
          str:'T107'
        },
        {
          title: "内保步进梁",
          status: "nomal",
          id: 98,
          str:'T111'
        },
      ],
    };
  },
	methods: {
	  linkDetail(id) {
	    this.$router.push({
	      path: "/index",
	      query: { id: id },
	    });
	  },
	  linkDetail1(id, name,str) {
	    console.log(name);
	    this.$router.push({
	      path: "/index",
	      query: { id: id, name: name,str },
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
div {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #203456;
  /* padding-top: 0.5vh; */
}
.detect2 {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px !important;
  justify-content: space-between;
  .detect2-onecell {
    box-sizing: border-box;
    border-bottom: 1px solid #203456;
    display: flex;
    // padding-top: 1vh;
    .LEDbtn {
      width: 13px !important;
      height: 13px !important;
    }
    .dv-title-gc {
      width: 50%;
      text-align: right;
      // border: 1px solid red;
      padding-right: 2vh;
      padding-left: 4vh;
    }
  }
  div {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
}
.gnc1 {
  height: 14%;
}
.gnc2 {
  height: 15%;
}
.gnc3 {
  height: 14%;
}
.gnc4 {
  height: 12%;
}
.gnc5 {
  height: 15%;
}
.gnc6 {
  height: 12%;
}
.gnc7 {
  height: 12%;
}
</style>
