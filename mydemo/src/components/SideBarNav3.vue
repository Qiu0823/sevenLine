<template>
  <div class="firstNav">
    <!-- 第一层 -->
    <div
      class="first"
      v-for="(firstItem, firstIndex) in firstList"
      :key="firstIndex"
    >
      <!--第一层 标题 -->
      <div class="firstTitle">
        <span class="spanyy">{{ firstItem.title }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>

      <div class="secondWrap">
        <!-- 第二层 -->
        <div
          class="second firstSon"
          v-for="(secondItem, secondIndex) in firstItem.secondList"
          :key="secondIndex"
        >
          <!--第二层 标题 -->
          <div class="secondTitle">
            <span class="spanyy">{{ secondItem.title }}</span>
            <i class="el-icon-arrow-right"></i>
          </div>

          <div class="thirdWraper">
            <div
              class="thirdTitle"
              v-for="(thirdItem, thirdIndex) in secondItem.thirdList"
              :key="thirdIndex"
            >
              {{ thirdItem }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstList: [
        {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
            {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
          ],
        },
         {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
            {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
          ],
        },
         {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题", "三级标题"],
            },
            {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题", "三级标题"],
            },
              {
              title: "三级标题",
              thirdList: ["三级标题", "三级标题", "三级标题", "三级标题"],
            },
          ],
        },
           
              {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
         {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
                 {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
                 {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
                 {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
                 {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
                 {
          title: "一级标题",
          secondList: [
            {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
             {
              title: "二级标题",
              thirdList: ["三级标题", "四级标题"],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang='less'>
.spanyy{
  font-size: 16px;
  display: inline-block;
  width: 80px;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
}
.firstNav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
//   border: 1px solid red;
  .first {
    position: relative;
    width: 100%;
    height: 10%;
    background-color: rgb(15, 14, 82);
    background-color: #000f37;
    .firstTitle {
      width: 100%;
      border: 1px solid rgb(143, 122, 219);
      border: 1px solid #121b63;


      //   一级标题和符合水平显示
      display: flex;
    //   justify-content: center;
      span {
        margin-right: 5px;
      }
    }
    .secondWrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    //   height: 20vh;
    height: auto;
      position: absolute;
      left: 100%;
      width: 12vh;
      top: 0;
    }
    .firstSon {
      height: auto;
      display: none; //默认第二级菜单不显示
    background-color: rgb(22, 20, 109);
    background-color: #000f37;

    height: 5vh;
      .secondTitle {
        width: 100%;
        border: 1px solid rgb(143, 122, 219);
      border: 1px solid #121b63;
    //   border: 1px solid #000f37;
        //   二级标题和符合水平显示
        display: flex;
        justify-content: center;
        span {
          margin-right: 8px;
        }
      }
      .thirdWraper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // height: 20vh;
    height: auto;
        position: absolute;
        left: 100%;
        width: 12vh;
        top: 0;
      }
      .thirdTitle {
        width: 12vh;
        height: 5vh;
        display: none; //默认第三级菜单不显示
    background-color: rgb(25, 23, 138);
    background-color: #000f37;
  font-size: 16px;
      }
    }
  }

  //   鼠标悬停效果  一级鼠标悬停
  .first {
    &:hover {
      //first:hover 一级鼠标悬停一级标题箭头变化
      .firstTitle {
        .el-icon-arrow-right {
          transform: rotate(90deg);
        }
      }
      //first:hover 一级鼠标悬停二级显示
      .firstSon {
        display: block;
        &:hover {
          //firstSon:hover 二级鼠标悬停三级显示
          .thirdTitle {
            display: block;
          }
        }
      }
    }
  }

  //   鼠标悬停效果  一级鼠标悬停
  .firstSon {
    &:hover {
      //first:hover 一级鼠标悬停一级标题箭头变化
      .secondTitle {
        .el-icon-arrow-right {
          transform: rotate(90deg);
        }
      }
      //first:hover 一级鼠标悬停二级显示
      .thirdTitle {
        display: block;
      }
    }
  }
}
</style>