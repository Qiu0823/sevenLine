<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-middle">全线急停盘管理页面</div>
      </div>

      <dv-border-box-1 class="main-container">
        <div class="mc-left">
          <dv-border-box-5 :reverse="false">
          <lamp-list> </lamp-list>
          </dv-border-box-5>
        </div>
        <!-- <div class="mc-content"></div> -->
        <div class="mc-right"></div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LampList from '../housePage/components/lampList.vue'
import { mapState } from "vuex";
export default {
  name: "DataView",

  data() {
    return {
      str:'',
    };
  },
  components:{
      LampList
  },
  created() {
    this.str = this.$route.query.str;
    if(this.$store.state.ws.readyState == 1){
			this.ws.send(this.str)
    }
  },
    computed: {
    ...mapState(["WebsocketMessage", "ws"]),
  },
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("~@/assets/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .main-container {
    height: calc(~"100% - 80px");
    width: 100%;
    display: flex;
    .mc-left{
        width: 50%;
        height: 100%;
    }
      .mc-right{
        width: 50%;
        height: 100%;
    }
  }
}
</style>