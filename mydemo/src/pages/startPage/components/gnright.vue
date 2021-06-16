<template>
  <div class="container">
    <div class="gnr1" @click="linkDetail1(22,'2#抛丸机')">
      <oneCell :device="gnr1" :color="this.$store.state.WebsocketMessage.Equipment22_FaultStatus"></oneCell>
    </div>
    <div class="gnr2" @click="linkDetail1(24,'2#三角标')">
      <oneCell :device="gnr2" :color="this.$store.state.WebsocketMessage.Equipment24_FaultStatus"></oneCell>
    </div>
    <div class="gnr3" @click="linkDetail1(26,'接箍上下料')">
      <oneCell :device="gnr3" :color="this.$store.state.WebsocketMessage.Equipment26_FaultStatus"></oneCell>
    </div>
    <div class="gnr4" @click="linkDetail1(27,'管拧机')">
      <oneCell :device="gnr4" :color="this.$store.state.WebsocketMessage.Equipment27_FaultStatus"></oneCell>
    </div>
    <div class="gnr5">
      <oneCell :device="gnr5"></oneCell>
    </div>
    <div class="gnr7">
      <oneCell :device="gnr7"></oneCell>
    </div>
    <div class="gnr6" @click="linkDetail1(28,'内保拧接')">
      <oneCell :device="gnr6" :color="this.$store.state.WebsocketMessage.Equipment28_FaultStatus"></oneCell>
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
      gnr1: {
        title: "2#抛丸机",
        status: "nomal",
      },
      gnr2: {
        title: "2#三角标",
        status: "nomal",
      },
      gnr3: {
        title: "接箍上下料",
        status: "nomal",
      },
      gnr4: {
        title: "管拧机",
        status: "nomal",
      },
      gnr5: {
        title: "2#通径机",
        status: "nomal",
      },
      gnr6: {
        title: "内保拧接",
        status: "nomal",
      },
      gnr7: {
        title: "涂油拧接",
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
.gnr1 {
  height: 10%;
  margin-top: 15%;
  cursor: pointer;
}
.gnr2 {
  height: 10%;
  margin-top: 10%;
  cursor: pointer;
}
.gnr3 {
  height: 10%;
  margin-top: 5%;
  cursor: pointer;
}
.gnr4 {
  margin-top: 5%;
  height: 10%;
  cursor: pointer;
}
.gnr5 {
  height: 10%;
  cursor: pointer;
}
.gnr6 {
  height: 10%;
  cursor: pointer;
}
.gnr7 {
  height: 10%;
  cursor: pointer;
}
</style>