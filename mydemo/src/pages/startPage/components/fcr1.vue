<template>
  <div class="container">
    <div class="fcr11" @click="linkDetail1(2,'2#收口机','T003')">
      <oneCell :device="fcr11" :color="this.$store.state.WebsocketMessage.Data2"></oneCell>
    </div>
    <div class="fcr12" @click="linkDetail1(6,'2#车丝机','T007')">
      <oneCell :device="fcr12" :color="this.$store.state.WebsocketMessage.Data6"></oneCell>
    </div>
    <div class="fcr13" @click="linkDetail1(16,'2#吹水黑皮扣','T019')">
      <oneCell :device="fcr13" :color="this.$store.state.WebsocketMessage.Data16"></oneCell>
    </div>
    <div class="fcr14" @click="linkDetail1(16,'2#修扣黑皮扣','T019')">
      <oneCell :device="fcr14" :color="this.$store.state.WebsocketMessage.Data16"></oneCell>
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
      fcr11: {
        title: "2#收口机",
        status: "nomal",
      },
      fcr12: {
        title: "2#车丝机",
        status: "nomal",
      },
      fcr13: {
        title: "2#吹水黑皮扣",
        status: "nomal",
      },
      fcr14: {
        title: "2#修磨黑皮扣",
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
.fcr11 {
  height: 10%;
  margin-top: 19%;
  cursor: pointer;
}
.fcr12 {
  height: 10%;
  margin-top: 50%;
  cursor: pointer;
}
.fcr13 {
  height: 10%;
  cursor: pointer;
}
.fcl14 {
  height: 10%;
  margin-bottom: 5%;
  cursor: pointer;
}
</style>
