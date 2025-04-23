<template>
  <div class="Box">
    <div class="bigBox">
      <div class="lBox">
        <div class="area">
          <div :class="color" @mouseover="changeColor" @mouseleave="changeColor2">中国大陆版 - 山东</div>
          <div class="area1">
            <div class="a1">
              <div v-for="(list,idx) in areaArr"><span>{{ list }}</span>
                <div class="a2" v-if="idx==0">
                  <div class="yBox" v-for="list in provinceArr">{{ list }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="s">你好，<span class="red">请登录  </span>免费注册</div>
        <div class="s">切换至企业版</div>
      </div>
      <div class="rBox">
        <ul>
          <li v-for="list in listArr">{{ list }}</li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: 'red',
      color: '',
      hover: false,
      areaArr: [
        '中国大陆版',
        '中國港澳版',
        '中國台灣版',
        '京东全球版'
      ],
      provinceArr: [
        '北京', '上海', '天津', '重庆', '河北', '山西',
        '河南', '辽宁', '吉林', '黑龙江', '内蒙古', '江苏',
        '山东', '安徽', '浙江', '福建', '湖北', '湖南', '广东',
        '广西', '江西', '四川', '海南', '贵州', '云南', '西藏',
        '陕西', '甘肃', '青海', '宁夏', '新疆', '港澳', '台湾',
        '钓鱼岛', '海外'],
      listArr: [
        '购物车',
        '我的订单',
        '我的京东',
        '企业采购',
        '商家服务',
        '网站导航',
        '手机京东',
        '网站无障碍',
      ]
    }
  },
  methods: {
    changeColor() {
      this.color = 'red'
    },
    changeColor2() {
      this.color = ''
    },
  }
}
</script>

<style scoped lang="scss">
.rBox li:hover, .s:hover {
  cursor: pointer;
  color: red;
}

.red {
  color: red;
}

.Box {
  width: 100%;
}

.bigBox {
  width: 1480px;
  height: 30px;
  //background: gray;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;

  .lBox {
    width: 550px;
    height: 30px;
    //background: #29519d;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .area1 {
      position: relative;
    }

    .a1 {
      width: 120px;
      height: 160px;
      background: rgb(255, 255, 255);
      display: none;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      border-radius: 10px;
      z-index: 99;
      //background: red;
      a1:first-child {
        /* width: 100px;
         height: 21px;*/
      }

      span {
        position: relative;
        z-index: 999;
      }
    }

    .a2 {
      width: 380px;
      height: 260px;
      background: rgb(255, 255, 255);
      display: none;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: space-evenly;
      position: absolute;
      padding-left: 100px;
      margin-top: -36px;
      margin-left: -28px;
      border-radius: 10px;
      border: 1px solid #c9c6c6;

      .yBox {
        width: 55px;
        height: 30px;
        text-align: center;
        line-height: 30px;
      }
    }
  }

  .rBox {
    width: 800px;
    height: 30px;
    //background: antiquewhite;
    display: flex;
    justify-content: space-evenly;

    ul {
      width: 800px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      //border: 1px solid red;
    }
  }

  .area:hover .a1, .a1 div:first-child:hover .a2 {
    display: flex;
  }

  .a1 div span:hover, .yBox:hover {
    color: red;
  }
}

.none {
  display: none;
}

.block {
  display: block;
}
</style>