<template>
  <div class="container">
    <div class="fcl21" @click="linkDetail1(3, '3#收口机','T004')">
      <oneCell :device="fcl21" :color="this.$store.state.WebsocketMessage.Data3"></oneCell>
    </div>
    <div class="fcl22" @click="linkDetail1(7, '3#车丝机','T008')">
      <oneCell :device="fcl22" :color="this.$store.state.WebsocketMessage.Data7"></oneCell>
    </div>
    <div class="fcl23" @click="linkDetail1(17, '3#修扣黑皮扣','T020')">
      <oneCell :device="fcl23" :color="this.$store.state.WebsocketMessage.Data17"></oneCell>
    </div>
    <div class="fcl24" @click="linkDetail1(17, '3#吹水黑皮扣','T020')">
      <oneCell :device="fcl24" :color="this.$store.state.WebsocketMessage.Data17"></oneCell>
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
    linkDetail1(id, name,str) {
      console.log(str);
      this.$router.push({
        path: "/index",
        query: { id: id, name: name,str },
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