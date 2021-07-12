<template>
  <div class="line-con">
       <div class="tableCon">
        <div class="rightBox">
          <dv-border-box-11 title="1#车丝机振动">
            <div class="dvHeader">
              <div class="texts">X轴：</div>
              <div class="texts">Y轴：</div>
              <div class="texts">Z轴：</div>
            </div>
            <div class="dvGraph">
              <div
                class="main"
                ref="chartRing1"
                style="width: 350px; height: 150px"
              ></div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="rightBox">
          <dv-border-box-11 title="2#车丝机振动">
            <div class="dvHeader">
              <div class="texts">X轴：</div>
              <div class="texts">Y轴：</div>
              <div class="texts">Z轴：</div>
            </div>
            <div class="dvGraph">
              <div
                class="main"
                ref="chartRing2"
                style="width: 350px; height: 150px"
              ></div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="rightBox">
          <dv-border-box-11 title="3#车丝机振动">
            <div class="dvHeader">
              <div class="texts">X轴：</div>
              <div class="texts">Y轴：</div>
              <div class="texts">Z轴：</div>
            </div>
            <div class="dvGraph">
               <div
                class="main"
                ref="chartRing3"
                style="width: 350px; height: 150px"
              ></div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="rightBox">
          <dv-border-box-11 title="4#车丝机振动">
            <div class="dvHeader">
              <div class="texts">X轴：</div>
              <div class="texts">Y轴：</div>
              <div class="texts">Z轴：</div>
            </div>
            <div class="dvGraph">
               <div
                class="main"
                ref="chartRing4"
                style="width: 350px; height: 150px"
              ></div>
            </div>
          </dv-border-box-11>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
    .line-con{
        width: 100%;
        height: 100%;
            .tableCon {
      width: 100%;
      height: 90%;
      position: absolute;
      top: 10%;
      right: 0;
      display: flex;
      flex-direction: column;
      .rightBox {
        flex: 1;
        display: flex;
        flex-direction: column;
        .border-box-content {
          margin-left: 5%;
          width: 90%;
          height: 96%;
          display: flex;
          flex-direction: column;
          .dvHeader {
            margin-top: 18%;
            flex: 1;
            /* 							border: 1px solid red; */
            display: flex;
            .texts {
              flex: 1;
            }
          }
          .dvGraph {
            flex: 4;
              // padding-right: 50px;
            .main {
              width: 50%;
              padding-right: 50px;
              box-sizing: border-box;
              height: 100%;
              div {
                canvas {
                  width: 310px !important;
                }
              }
            }
            /* 							border: 1px solid yellow; */
          }
        }
      }
    }
    }
</style>