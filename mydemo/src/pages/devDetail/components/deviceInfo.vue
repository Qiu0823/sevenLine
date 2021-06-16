<template>
  <div class="device-info-con areaBorderStyle">
      <div class="device-info-title">
          <h3>设备信息</h3>
          <div>设备名称：{{devName}}</div>
<!--          <div>设备厂家：上海西重所</div> -->
      </div>
      <div class="device-status">
        <h3>设备状态</h3>
        <div class="device-status-itemList">
            <div class="dsi-item" v-for="(item1,index) in itemList" :key="index">
                <div class="text">{{item1.item}}</div>
                <div class="LEDbtn greenBtn" :style="{backgroundColor:item1.color}"></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
						itemList:[
							{
								item:'机器人自动',
								color: this.$store.state.WebsocketMessage.Equipment23_Status1
							},
							{
								item:'准备好待机状态',
								color: this.$store.state.WebsocketMessage.Equipment23_Status2
							},
							{
								item:'故障停机状态',
								color: this.$store.state.WebsocketMessage.Equipment23_Status3
							},
							{
								item:'机器人原始位',
								color: this.$store.state.WebsocketMessage.Equipment23_Status4
							},
							{
								item:'主站心跳',
								color: this.$store.state.WebsocketMessage.Equipment23_Status5
							},
							{
								item:'允许机器人工作',
								color: this.$store.state.WebsocketMessage.Equipment23_Status6
							},
							{
								item:'机器人作业中',
								color: this.$store.state.WebsocketMessage.Equipment23_Status7
							},
							{
								item:'机器人作业完成',
								color: this.$store.state.WebsocketMessage.Equipment23_Status8
							},
							{
								item:'机器人手动',
								color: this.$store.state.WebsocketMessage.Equipment23_Status9
							},
							{
								item:'机器人移动中',
								color: this.$store.state.WebsocketMessage.Equipment23_Status10
							}
						]
        }
    },
    mounted() {
        console.log(this.devName)
    },
    props:['devName']
}
</script>

<style lang='less' scoped>
    .device-info-con{
        // border: 1px solid red;
        height: 40vw;
        display: flex;
        flex-direction: column;
        .device-info-title{
        // border: 1px solid green;
            height: 20%;
            width: 100%;
            padding-left: 1vw;
            h3,div{
                text-align: left;
            }
            div{
                margin-left: 1vw;
                font-size: 20px;
                margin-bottom: 1vw;
            }
            margin-bottom: 2vw;
        }
        .device-status{
            height: 67%;
            padding-left: 1vw;
            box-sizing: border-box;
            h3{
                text-align: left;
            }
        }
        .device-status-itemList{
            width: 100%;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 2vh;
            .dsi-item{
                display: flex;
                .text{
                    width: 8vw;
                    text-align: left;
                }
            }
        }
    }
</style>