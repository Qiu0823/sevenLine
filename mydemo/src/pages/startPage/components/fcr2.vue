<template>
  <div class="container">
    <div class="fcr21" @click="linkDetail1(1,'1#收口机')">
      <oneCell :device="fcr21" :color="this.$store.state.WebsocketMessage.Equipment1_FaultStatus"></oneCell>
    </div>
    <div class="fcr22" @click="linkDetail1(5,'1#车丝机')">
      <oneCell :device="fcr22" :color="this.$store.state.WebsocketMessage.Equipment5_FaultStatus"></oneCell>
    </div>
    <div class="fcr23" @click="linkDetail1(15,'1#修扣黑皮扣')">
      <oneCell :device="fcr23" :color="this.$store.state.WebsocketMessage.Equipment15_FaultStatus"></oneCell>
    </div>
    <div class="fcr24" @click="linkDetail1(15,'1#吹水黑皮扣')">
      <oneCell :device="fcr24" :color="this.$store.state.WebsocketMessage.Equipment15_FaultStatus"></oneCell>
    </div>
  </div>
</template>

<script>
import oneCell from "@/components/oneCell";
import{linkDetail} from '@/util/util.js'
export default {
  components: {
    oneCell,
  },
  data() {
    return {
      fcr21: {
        title: "1#收口机",
        status: "nomal",
      },
      fcr22: {
        title: "1#车丝机",
        status: "nomal",
      },
      fcr23: {
        title: "1#修扣黑皮扣",
        status: "nomal",
      },
      fcr24: {
        title: "1#吹水黑皮扣",
        status: "nomal",
      },
    };
  },
	methods:{
		link(id){
			this.$emit('linkDetail',id)
		},
     linkDetail1(id, name) {
      console.log(name);
      this.$router.push({
        path: "/index",
        query: { id: id, name: name },
      });
    },
	},
	mounted() {
		console.log(this.$store.state.WebsocketMessage)
	}
};
</script>

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
}
.fcr21 {
  height: 10%;
  margin-top: 7%;
	cursor:pointer;
}
.fcr22 {
  height: 10%;
  margin-top: 15%;
	cursor:pointer;
}
.fcr23 {
  height: 10%;
	cursor:pointer;
}
.fcr24 {
  height: 10%;
	cursor:pointer;
}
</style>