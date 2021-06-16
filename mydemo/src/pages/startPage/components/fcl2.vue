<template>
  <div class="container">
    <div class="fcl21" @click="linkDetail1(3, '3#收口机')">
      <oneCell :device="fcl21" :color="this.$store.state.WebsocketMessage.Equipment3_FaultStatus"></oneCell>
    </div>
    <div class="fcl22" @click="linkDetail1(7, '3#车丝机')">
      <oneCell :device="fcl22" :color="this.$store.state.WebsocketMessage.Equipment7_FaultStatus"></oneCell>
    </div>
<<<<<<< HEAD
    <div class="fcl23" @click="linkDetail1(17, '3#修扣黑皮扣')">
      <oneCell :device="fcl23" :color="this.$store.state.WebsocketMessage.Equipment17_FaultStatus"></oneCell>
=======
    <div class="fcl23" @click="linkDetail1(17, '3#修磨黑皮扣')">
      <oneCell :device="fcl23"></oneCell>
>>>>>>> cqy1
    </div>
    <div class="fcl24" @click="linkDetail1(17, '3#吹水黑皮扣')">
      <oneCell :device="fcl24" :color="this.$store.state.WebsocketMessage.Equipment17_FaultStatus"></oneCell>
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
      fcl21: {
        title: "3#收口机",
        status: "nomal",
      },
      fcl22: {
        title: "3#车丝机",
        status: "nomal",
      },
      fcl23: {
        title: "3#修磨黑皮扣",
        status: "nomal",
      },
      fcl24: {
        title: "3#吹水黑皮扣",
        status: "nomal",
      },
    };
  },
  methods: {
    link(id) {
      this.$emit("linkDetail", id);
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

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
  /* border: red 1px solid; */
}
.fcl21 {
  height: 10%;
  margin-top: 7%;
  cursor: pointer;
}
.fcl22 {
  height: 10%;
  margin-top: 15%;
  cursor: pointer;
}
.fcl23 {
  height: 10%;
  cursor: pointer;
}
.fcl24 {
  height: 10%;
  cursor: pointer;
}
</style>