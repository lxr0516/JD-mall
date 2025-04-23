<template>
  <div>
    <div class="bigBox">
      <div class="Top" :class="fixedTop">
        <div class="box" v-for="(list,index) in boxArr ">
          <img :src="list.imgSrc" alt="">
          <div class="part1">
            <div class="part01" :style="{color: index==0?'red':'black'}">{{ list.title }}</div>
            <div class="part02" :style="{color: index==0?'red':'black'}">{{ list.name }}</div>
          </div>
        </div>
      </div>
      <div class="shopContent" ref="shop">
        <div class="big" v-for="list in shopArr">
          <div v-if="list.AD=='true'">
            <div class="bg01">
              <img :src="list.bgSrc" alt="" @click="change">
              <div class="bg011">
                <div class="bg02"><img :src="list.bgArr[0]" alt="">
                  <div class="b">超市出游</div>
                </div>
                <div class="bg03"><img :src="list.bgArr[1]" alt="">
                  <div class="b">运动健身</div>
                  <div class="b1">低至五折</div>
                </div>
                <div class="bg04"><img :src="list.bgArr[2]" alt="">
                  <div class="b">时尚出游</div>
                  <div class="b1">满200减30</div>
                </div>
                <div class="bg05"><img :src="list.bgArr[3]" alt="">
                  <div class="b">宠物生活</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="list.AD=='false'">
            <div class="img"><img :src="list.imgSrc" alt=""></div>
            <div class="p">
              <div class="title"><img v-if="list.JD==true" src="@/assets/images/shop/京东自营.png" alt="">{{
                  list.title
                }}
              </div>
              <div class="price">{{ list.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopContent",
  data() {
    return {
      fixedTop: null,
      boxArr: [
        {imgSrc: require('@/assets/images/box/猜你喜欢.png'), title: '为你精选', name: '猜你喜欢'},
        {imgSrc: require('@/assets/images/box/潮电好物.png'), title: '潮电好物', name: '3C数码'},
        {imgSrc: require('@/assets/images/box/居家优品.png'), title: '居家优品', name: '家电家居'},
        {imgSrc: require('@/assets/images/box/百货生鲜.png'), title: '百货生鲜', name: '超市甄选'},
        {imgSrc: require('@/assets/images/box/服饰美妆.png'), title: '服饰美妆', name: '运动户外'},
        {imgSrc: require('@/assets/images/box/进口好物.png'), title: '进口好物', name: '全球购'},
      ],
      shopArr: [
        {
          JD: false,
          AD: 'true', bgSrc: require('@/assets/images/shop/背景.png'),
          bgArr: [require('@/assets/images/shop/超市出游.jpg'),
            require('@/assets/images/shop/运动健身.jpg'),
            require('@/assets/images/shop/时尚出游.jpg'),
            require('@/assets/images/shop/宠物生活.jpg'),
          ]
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/三星洗烘一体机.avif'),
          title: '   三星AI神旗舰黑钻热泵洗烘一体机超大容量家用滚筒洗衣机【18...',
          price: '￥29999.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/丹东草莓.avif'),
          title: '   京鲜生 丹东红颜草莓净重2.8斤大果20g+生鲜水果 源头直...',
          price: '￥48.60',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/伊利奶粉.avif'),
          title: ' 伊利6罐返60元超市卡QQ星榛高紫金儿童奶粉(6岁以上)【C...',
          price: '￥309.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/伴手礼礼盒.avif'),
          title: '  苏贝熊喜饼宝宝诞生新生儿满月伴手礼生孩子报喜喜糖喜蛋礼盒百日...',
          price: '￥25.88',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/套装.avif'),
          title: '  伊琦蕾（YIQILEI）2025春秋季气质女装感软糯百搭针织...',
          price: '￥248.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/小米充电宝.avif'),
          title: '  小米（MI）小米自带线充电宝20000 33W 浅咖色 适用...',
          price: '￥149.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/小米洗烘套装.avif'),
          title: '  小米（MI）【国家补贴20%】米家子母双筒分区洗烘一体机15...',
          price: '￥4999.00',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/小黄人洗衣机.avif'),
          title: '   TCL 小黄人10公斤大眼萌AI超级筒洗烘1.31洗净比滚筒...',
          price: '￥4399.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/摇摇椅.avif'),
          title: '  联亿实木摇椅北欧家用摇摇椅老人午睡椅逍遥椅阳台休闲躺椅懒人沙...',
          price: '￥960.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/比比赞零食.avif'),
          title: '  比比赞（BIBIZAN）辣卤零食大礼包75包深夜解馋夜宵肉脯...',
          price: '￥24.9',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/石头扫地机.avif'),
          title: '  石头（roborock）扫地机器人扫拖一体 P20 Pro ...',
          price: '￥3599.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/统帅三桶洗衣机.avif'),
          title: '  统帅（Leader）【京东全球独家首发】三筒快净0手洗 海尔...',
          price: '￥99999.00',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/苏打水.avif'),
          title: '  依能 天然苏打水 无糖无汽无添加 500ml*24瓶 塑膜装...',
          price: '￥59.90',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/躺椅.avif'),
          title: '  梓藤罗 天然藤椅躺椅阳台老人休闲午休椅折叠椅手工编织可调节靠...',
          price: '￥2688.00',
          JD: false
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/阿迪达斯鞋子.avif'),
          title: '  阿迪达斯三叶草YEEZY700MNVN椰子yeezy耐磨运动...',
          price: '￥459.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/跳绳.avif'),
          title: '  安踏（ANTA）沙专业式4.0跳绳学生【学校推荐 】小学生初...',
          price: '￥22.80',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/电动车.avif'),
          title: '  雅迪【门店自提】C16青春版 电动三轮车小型家用女士老人代步...',
          price: '￥4999.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/衣柜.avif'),
          title: '  柏维棠定制金属衣帽架步入式衣帽间开放式卧室砌墙上衣柜框架衣橱...',
          price: '￥2552.00',
          JD: true
        },
        {
          AD: 'false',
          imgSrc: require('@/assets/images/shop/蒙牛真果粒.avif'),
          title: '  蒙牛（MENGNIU）蒙牛真果粒（草莓+芦荟+椰果+桃果粒）...',
          price: '￥46.90',
          JD: true
        }
      ],
    }
  },
  methods: {
    getHeight() {
      if (this.$refs.shop.getBoundingClientRect().top < 100) {
        this.fixedTop = 'fix'
        // console.log(this.$refs.shop.getBoundingClientRect().top)
      }
    },
    getHeight2() {
      if (this.$refs.shop.getBoundingClientRect().top > 100) {
        this.fixedTop = ''
        // console.log()
      }
    },
    change() {
      this.$router.push({
        name: 'Spring'
      })
    }
  },
  mounted() {
    this.getHeight()
    window.addEventListener('scroll', this.getHeight, true)
    window.addEventListener('scroll', this.getHeight2, true)
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      window.removeEventListener('scroll', this.getHeight, true)
      window.removeEventListener('scroll', this.getHeight2, true)
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getHeight, true)
    window.removeEventListener('scroll', this.getHeight2, true)
  }
}
</script>

<style scoped lang="scss">
.fix {
  position: fixed;
  z-index: 100;
  top: 76px;
  width: 100%;
  background-color: #fff;
  border-bottom: .5px solid rgba(0, 0, 0, .06);
}

.red {
  color: red;
}

.big:hover, .box:hover {
  cursor: pointer;
}

.part01:hover, .part02:hover {
  color: red;
}

.bigBox {
  width: 1296px;
  background: white;
  //border-radius:12px;
  margin: 0 auto;
  position: relative;

  .Top {
    width: 1296px;
    height: 72px;
    background-color: white;
    display: flex;
    z-index: 200;
    justify-content: flex-start;
    //position: fixed; /* 固定位置 */
    /*//top: 0; !* 顶部对齐 *!
    //left: 0; !* 左侧对齐 *!
    //z-index: 1000; !* 确保在其他内容之上 *!*/

    .box {
      width: 169px;
      height: 48px;
      //background: #29519d;
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
      margin-top: 12px;

      img {
        padding-left: 6px;
      }

      .part1 {
        padding-right: 36px;

        .part01 {
          font-size: 16px;
          font-family: "PingFang SC";
          font-weight: bolder;
        }

        .part02 {
          font-size: 14px;

        }
      }


    }
  }

  .shopContent {
    width: 1294px;
    display: flex;
    flex-wrap: wrap;

    .big {
      width: 248px;
      height: 368px;
      //background: #29519d;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 8px;
      position: relative;
      border-radius: 12px;
      margin-top: 5px;

      .bg01 {
        width: 248px;
        height: 368px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        //右侧春日出游部分
        .bg011 {
          width: 222px;
          height: 256px;
          //background: #29519d;
          position: absolute;
          z-index: 100;
          top: 96px;
          left: 13px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .bg02 {
            width: 106px;
            height: 114px;

            img {
              width: 72px;
              height: 72px;
              position: absolute;
              top: 10px;
              left: 15px;
            }

            .b {
              color: white;
              position: absolute;
              top: 87px;
              left: 25px;
              font-size: 14px;
              font-weight: bolder;
            }
          }

          .bg03 {
            width: 106px;
            height: 134px;

            img {
              width: 72px;
              height: 72px;
              position: absolute;
              top: 5px;
              left: 135px;
            }

            .b {
              color: white;
              position: absolute;
              font-weight: bolder;
              font-size: 14px;
              position: absolute;
              top: 87px;
              left: 140px;

            }

            .b1 {
              position: absolute;
              top: 110px;
              left: 135px;
            }
          }

          .bg04 {
            width: 106px;
            height: 132px;

            img {
              width: 72px;
              height: 72px;
              position: absolute;
              left: 19px;
            }

            .b {
              color: white;
              position: absolute;
              top: 208px;
              left: 26px;
              font-size: 14px;
              font-weight: bolder;
            }

            .b1 {
              position: absolute;
              top: 230px;
              left: 15px;
            }

          }

          .bg05 {
            width: 106px;
            height: 114px;

            img {
              width: 72px;
              height: 72px;
              position: absolute;
              left: 134px;
              top: 145px;
            }

            .b {
              color: white;
              position: absolute;
              top: 226px;
              left: 142px;
              font-size: 14px;
              font-weight: bolder;
            }
          }
        }

        //春日出游部分结束
      }

      .img {
        width: 242px;
        height: 246px;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
          border-radius: 12px 12px 0 0;

        }
      }

      .p {
        width: 240px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .title {
          width: 240px;
          height: 48px;
          position: relative;

          img {
            position: relative;
            top: 4px;
            width: 32px;
            height: 18px;
          }
        }

        .price {
          width: 240px;
          height: 17px;
          font-size: 24px;
          font-weight: bolder;
          color: red;
        }


      }
    }

    .big:not(:first-child):hover {
      border: 2px solid red;
      transform: scale3d(1.03, 1.03, 1.03);
      position: relative;
      top: -2px;

    }
  }
}
</style>