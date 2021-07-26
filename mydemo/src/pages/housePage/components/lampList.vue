<template>
  <div class="lampList">
      <div class="fir-row" v-for="(item,index) in 9" :key="index">
        <singLamp v-for="(item1,index1) in 6" :key="item1" :color='$store.state.WebsocketMessage[`Data${arrIndex[index] + index1+1}`]' :singleTitle="titleNameArr[arrIndex[index] + index1]"></singLamp>
      </div>
   
  </div>
</template>
<script>
import SingLamp from './singLamp.vue'
export default {
    components:{
        SingLamp,
    },
    data() {
        return {
            arrIndex:[],
            titleNameArr:[
                '上料操作台',
                '管号识别操作台（东端）',
                '管号识别操作台（西端）',
                '车丝前RGV小车操作台',
                '1#收口机操作台',
                '2#收口机操作台',
                '3#收口机操作台',
                '4#收口机操作台',
                "1#管体车丝机",
                "2#管体车丝机",
                "3#管体车丝机",
                "4#管体车丝机",
                "1#车丝后检验操作台",
                "2#车丝后检验操作台",
                "3#车丝后检验操作台",
                "4#车丝后检验操作台",
                "1#锯辅机部分",
                "2#锯辅机部分",
                "3#收口机3#桁架部分",
                "环链",
                "1#黑皮扣操作台",
                "2#黑皮扣操作台",
                "3#黑皮扣操作台",
                "4#黑皮扣操作台",
                "1#切头锯操作台",
                "2#切头锯操作台",
                "切头区域桁架操作台",
                "车丝后RGV小车操作台",
                "管端通径操作台（西端）",
                "1#抛丸机操作台（西端）",
                "2#抛丸机操作台（东端）",
                "1#抛丸机辅机操作台",
                "2#抛丸机辅机操作台",
                "1#三角标主机设备",
                "2#三角标主机设备",
                "外保主机设备",
                "外保辅机操作台",
                "管拧机操作台",
                "内保辅机操作台",
                "内保主机设备",
                "分钢仪",
                "钢管全长消磁设备",
                "涂油烘干设备操作台",
                "涂油前辅机操作台",
                "测量点辅机操作台",
                "测量点主机操作台",
                "抽检RGV小车操作台",
                "打包机操作台",
                "接箍上下料",
                "乳化液",
                "液压油",
                "图层",
                "1#喷码",
                "2#喷码",
            ]
        }
    },
    created() {
        for (let i = 1; i <= 9; i++) {
            this.arrIndex.push((i-1)*6)            
        }
        console.log(this.arrIndex)
    },
}
</script>

<style lang='less'>
 .lampList{
     width: 95%;
     height: 100%;
     margin: 0 auto;
     margin-top: 35px;
     .fir-row{
         width: 100%;
         height: 10%;
         display: flex;
         justify-content: space-between;
     }
 }
</style>