<template>
  <div class="container">
    <div class="fcl11" style="float: right" @click="linkDetail1(4, '4#收口机','T005')">
      <oneCell :device="fcl11" :color="this.$store.state.WebsocketMessage.Data4"></oneCell>
    </div>
    <div class="fcl12" @click="linkDetail1(8, '4#车丝机','T009')">
      <oneCell :device="fcl12" :color="this.$store.state.WebsocketMessage.Data8"></oneCell>
    </div>
    <div class="fcl13" @click="linkDetail1(18, '4#吹水黑皮扣','T021')">
      <oneCell :device="fcl13" :color="this.$store.state.WebsocketMessage.Data18"></oneCell>
    </div>
    <div class="fcl14" @click="linkDetail1(18, '4#修扣黑皮扣','T021')">
      <oneCell :device="fcl14" :color="this.$store.state.WebsocketMessage.Data18"></oneCell>
    </div>
    <div class="fcl15" @click="linkDetail1(9, '铁屑收集','T010')">
      <oneCell :device="fcl15" :color="this.$store.state.WebsocketMessage.Data9"></oneCell>
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
      fcl11: {
        title: "4#收口机",
        status: "nomal",
      },
      fcl12: {
        title: "4#车丝机",
        status: "nomal",
      },
      fcl13: {
        title: "4#吹水黑皮扣",
        status: "nomal",
      },
      fcl14: {
        title: "4#修磨黑皮扣",
        status: "nomal",
      },
      fcl15: {
        title: "铁屑收集",
        status: "nomal",
      },
    };
  },
  methods: {
    link(id) {
      this.$emit("linkDetail", id);
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

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
  float: right;

  /* padding-left: 10%; */
}
.fcl11 {
  height: 10%;
  margin-top: 19%;
  font-size: 12px !important;
  cursor: pointer;
}
.fcl12 {
  height: 10%;
  margin-top: 45%;
  cursor: pointer;
}
.fcl13 {
  height: 10%;
  cursor: pointer;
  /* margin-top: 8%; */
}
.fcl14 {
  height: 10%;
  margin-bottom: 5%;
  cursor: pointer;
}
.fcl15 {
  position: relative;
  top: -0.5vh;
  cursor: pointer;
}
</style>
