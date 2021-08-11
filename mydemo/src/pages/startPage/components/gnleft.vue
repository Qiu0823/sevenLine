<template>
  <div class="container">
    <div class="gnl1"  @click="linkDetail1(151,'1#通径机','T035')">
      <oneCell :device="gnl1"></oneCell>
    </div>
    <div class="gnl2" @click="linkDetail1(21,'1#抛丸机','T024')">
      <oneCell :device="gnl2" :color="this.$store.state.WebsocketMessage.Data21"></oneCell>
    </div>
			<div class="gnl3" @click="linkDetail1(23,'1#三角标','T011')">
			  <oneCell :device="gnl3" :color="this.$store.state.WebsocketMessage.Data23"></oneCell>
			</div>
    <!-- <div class="gnl5" style="display:none">
      <oneCell :device="gnl5"></oneCell>
    </div> -->
    <div class="gnl4" @click="linkDetail1(25,'外保涂油拧接','T026')">
      <oneCell :device="gnl4" :color="this.$store.state.WebsocketMessage.Data25"></oneCell>
    </div>
  </div>
</template>

<script>
import oneCell from "@/components/oneCell";
export default {
  components: {
    oneCell,
  },
  data() {
    return {
      gnl1: {
        title: "1#通径机",
        status: "nomal",
      },
      gnl2: {
        title: "1#抛丸机",
        status: "nomal",
      },
      gnl3: {
        title: "1#三角标",
        status: "nomal",
      },
      gnl4: {
        title: "外保涂油拧接",
        status: "nomal",
      },
      // gnl5: {
      //   title: "涂油拧接",
      //   status: "nomal",
      // },
    };
  },
	methods:{
		link(id){
			this.$emit('linkDetail',id)
		},
      linkDetail1(id, name,str) {
      console.log(name);
      this.$router.push({
        path: "/index",
        query: { id: id, name: name,str },
      });
    },
	}
};
</script>

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
}
.gnl1 {
  height: 10%;
	cursor:pointer;
  /* margin-left: -2.5vh; */
}
.gnl2 {
  height: 10%;
	cursor:pointer;
}
.gnl3 {
  height: 10%;
  margin-top: 10%;
	cursor:pointer;
}
.gnl4 {
  height: 10%;
	cursor:pointer;
  margin-top: 8%;
}
.gnl5 {
  height: 10%;
	cursor:pointer;
}
</style>
