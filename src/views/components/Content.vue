<template>
  <div class="bigBox">
    <div class="top">
      <!--      左侧商品分类部分开始-->
      <div class="rTop">
        <div class="lBox">
          <div class="lShop" v-for="out in outArr">
            <div class="img"><img :src="out.imgSrc" alt=""></div>
            <div class="rShop" v-for="list in out.listArr">{{ list }}</div>
          </div>
        </div>
        <!--        右侧商品分类部分结束-->
        <!--       中间商品部分开始-->
        <div class="mBox">
          <div class="shopTopList">
            <ul>
              <li v-for="list in serveArr">{{ list }}</li>
            </ul>
          </div>
          <div class="shopBottomList">
            <div class="BottomL">
              <div class="goods" @mouseleave="onPlay">
                <img :src="goodsArr[index].src" alt="">
              </div>
              <ul class="change">
                <li
                    v-for="(list,idx) in goodsArr.length"
                    @mouseover="changeImg(idx)"
                    :class="{active:index==idx}"
                ></li>
              </ul>
            </div>
            <div class="BottomM">
              <div class="box1" v-for="list in shopBottomM">
                <div class="name">{{ list.title }}</div>
                <div class="img1"><img :src="list.imgSrc" alt=""></div>
                <div class="price">{{ list.price }}</div>
              </div>
            </div>
            <div class="BottomR">
              <div class="bigB1" :style="move">
                <div class="bigB" v-for="(val,idx) in serveArrNum">
                  <ul class="box2" v-for="(list,idx) in serveArr1" v-if="idx<(index1+1)*12&&idx>=(index1*12)">
                    <li class="img2">
                      <img :src="list.imgSrc" alt="">
                    </li>
                    <li>{{ list.title }}</li>
                  </ul>
                </div>
              </div>
              <div class="button">
                <button @click="ButtonL" :class="ac"> <</button>
                <button @click="ButtonR" :class="acr"> ></button>
              </div>
            </div>

          </div>
        </div>
        <!--        中间商品本部分结束-->
        <!--右侧京东注册部分-->
        <div class="rBox">
          <div class="login">
            <div class="login1">
              <div class="login1-l"><img src="@/assets/images/login/logo.png" height="82" width="82"/></div>
              <div class="login1-r">
                <div>Hi~上午好</div>
                <div>注册</div>
              </div>
            </div>
            <div class="login2">
              <div>登录京东后更多优惠</div>
              <div>登录可享，专属优惠，贴心推荐</div>
            </div>
            <div class="login3">
              <div class="login3-1"><span>立即登录</span></div>
            </div>
          </div>
          <div class="user">
            <div class="user-1">
              <div class="user-2"><img src="@/assets/images/login/login (3).png" height="40" width="40"/></div>
              <div class="user-3">浏览记录</div>
            </div>
            <div class="user-1">
              <div class="user-2"><img src="@/assets/images/login/login (4).png" height="40" width="40"/></div>
              <div class="user-3">商品收藏</div>
            </div>
            <div class="user-1">
              <div class="user-2"><img src="@/assets/images/login/login (2).png" height="40" width="40"/></div>
              <div class="user-3">店铺关注</div>
            </div>
            <div class="user-1">
              <div class="user-2"><img src="@/assets/images/login/login (1).png" height="40" width="40"/></div>
              <div class="user-3">我的京东</div>
            </div>
          </div>
          <div class="vip">
            <div class="plus">
              <div class="vipS">
                <div class="plus1">Plus会员</div>
                <div class="plus2">权益升级</div>
                <div class="plus3"><span>立即开通</span></div>
              </div>
            </div>
            <div class="bVip">
              <div class="vipS">
                <div class="bVip1">企业会员</div>
                <div class="bVip2">采购补贴3200元</div>
                <div class="bVip3"><span>立即开通</span></div>
              </div>
            </div>
          </div>
        </div>
        <!--        右侧京东注册登录部分结束-->
      </div>
      <div class="lTop">
        <div class="imgQ"><img src="@/assets/images/伸缩图前.avif" alt=""></div>
        <div class="imgH"><img src="@/assets/images/伸缩图.avif" alt=""></div>
      </div>
    </div>

    <!--    <div>
        <ul>
          <li v-for="item in goodsArr" :key="goodsArr.id">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>-->
  </div>
</template>

<script>

export default {
  name: "Content",
  data() {
    return {
      ac: 'none',
      acr: 'block',
      move: 0,
      index: 0,
      index1: 0,
      timer: 0,
      serveArrNum: '',
      outArr: [
        {imgSrc: require('@/assets/images/icon/icon (01).png'), listArr: ['家用电器']},
        {imgSrc: require('@/assets/images/icon/icon (02).png'), listArr: ['手机', '运营商', '数码']},
        {imgSrc: require('@/assets/images/icon/icon (03).png'), listArr: ['电脑', '办公', '文具用品']},
        {imgSrc: require('@/assets/images/icon/icon (04).png'), listArr: ['家居', '家具', '家装', '厨具']},
        {imgSrc: require('@/assets/images/icon/icon (05).png'), listArr: ['男装', '女装', '童装', '内衣']},
        {imgSrc: require('@/assets/images/icon/icon (06).png'), listArr: ['美妆', '个护清洁', '宠物']},
        {imgSrc: require('@/assets/images/icon/icon (07).png'), listArr: ['女鞋', '箱包', '钟表', '珠宝']},
        {imgSrc: require('@/assets/images/icon/icon (08).png'), listArr: ['男鞋', '运动', '户外']},
        {imgSrc: require('@/assets/images/icon/icon (09).png'), listArr: ['房产', '汽车', '汽车用品']},
        {imgSrc: require('@/assets/images/icon/icon (10).png'), listArr: ['母婴', '玩具乐器']},
        {imgSrc: require('@/assets/images/icon/icon (11).png'), listArr: ['食品', '酒类', '生鲜', '特产']},
        {imgSrc: require('@/assets/images/icon/icon (12).png'), listArr: ['艺术', '礼品鲜花', '农牧园艺']},
        {imgSrc: require('@/assets/images/icon/icon (13).png'), listArr: ['京东买药', '计生情趣']},
        {imgSrc: require('@/assets/images/icon/icon (14).png'), listArr: ['图书', '文娱', '教育', '电子书']},
        {imgSrc: require('@/assets/images/icon/icon (15).png'), listArr: ['机票', '酒店', '旅游', '生活']},
        {imgSrc: require('@/assets/images/icon/icon (16).png'), listArr: ['支付', '白条', '保险', '企业金融']},
        {imgSrc: require('@/assets/images/icon/icon (17).png'), listArr: ['安装', '维修', '清洗', '二手']},
        {imgSrc: require('@/assets/images/icon/icon (18).png'), listArr: ['元器件', '原材料', '五金机电']}
      ],
      serveArr: ['新品', '排行榜', '京东拍卖', '京东企业购', '拍拍二手', '手机数码', '家电家居', '服饰美妆', '京东直播', '京东五金城'],
      shopBottomM: [
        {
          title: '百亿补贴',
          imgSrc: require('@/assets/images/shopping/百亿补贴.jpg'),
          price: '￥4842'
        },
        {
          title: '9.9包邮',
          imgSrc: require('@/assets/images/shopping/9.9包邮.jpg'),
          price: '￥9.9'
        },
        {
          title: '京东秒杀',
          imgSrc: require('@/assets/images/shopping/京东秒杀.jpg'),
          price: '￥17.8'
        },
        {
          title: '京东直播',
          imgSrc: require('@/assets/images/shopping/京东直播.png'),
          price: '一二三四'
        }
      ],
      serveArr1: [
        {imgSrc: require('@/assets/images/rightList/天天领好礼.png'), title: '天天领好礼'},
        {imgSrc: require('@/assets/images/rightList/京豆.png'), title: '京豆'},
        {imgSrc: require('@/assets/images/rightList/充值中心.png'), title: '充值中心'},
        {imgSrc: require('@/assets/images/rightList/国家补贴.png'), title: '国家补贴'},
        {imgSrc: require('@/assets/images/rightList/企采返E卡.png'), title: '企采返E卡'},
        {imgSrc: require('@/assets/images/rightList/云建站.png'), title: '云建站'},
        {imgSrc: require('@/assets/images/rightList/政府消费券.png'), title: '政府消费券'},
        {imgSrc: require('@/assets/images/rightList/酒店.png'), title: '酒店'},
        {imgSrc: require('@/assets/images/rightList/游戏.png'), title: '游戏'},
        {imgSrc: require('@/assets/images/rightList/问医生.png'), title: '问医生'},
        {imgSrc: require('@/assets/images/rightList/金条借款.png'), title: '金条借款'},
        {imgSrc: require('@/assets/images/rightList/信用卡.png'), title: '信用卡'},

        {imgSrc: require('@/assets/images/rightList/珠宝馆.png'), title: '珠宝馆'},
        {imgSrc: require('@/assets/images/rightList/买贵双倍赔.png'), title: '买贵双倍赔'},
        {imgSrc: require('@/assets/images/rightList/企业计划购.png'), title: '企业计划购'},
        {imgSrc: require('@/assets/images/rightList/加油卡.png'), title: '加油卡'},
        {imgSrc: require('@/assets/images/rightList/企业购.png'), title: '企业购'},
        {imgSrc: require('@/assets/images/rightList/京东奢品.png'), title: '京东奢品'},
        {imgSrc: require('@/assets/images/rightList/电脑馆.png'), title: '电脑馆'},
        {imgSrc: require('@/assets/images/rightList/礼品卡.png'), title: '礼品卡'},
        {imgSrc: require('@/assets/images/rightList/爱回收.png'), title: '爱回收'},
      ],
      //   可以用这种形式遍历图片
      /* goodsArr:[
           require('@/assets/images/leftList/卡萨帝洗衣机.jpg'),
           require('@/assets/images/leftList/卡萨帝洗衣机.jpg'),
           require('@/assets/images/leftList/卡萨帝洗衣机.jpg'),
           require('@/assets/images/leftList/卡萨帝洗衣机.jpg'),
           require('@/assets/images/leftList/卡萨帝洗衣机.jpg'),
  ]*/
      goodsArr: [
        {src: require('@/assets/images/leftList/卡萨帝洗衣机.jpg')},
        {src: require('@/assets/images/leftList/小天鹅洗衣机.jpg')},
        {src: require('@/assets/images/leftList/多功能锅.jpg')},
        {src: require('@/assets/images/leftList/耳机.jpg')},
        {src: require('@/assets/images/leftList/福袋.jpg')},
        {src: require('@/assets/images/leftList/躺椅.jpg')}
      ]

    }
  },
  methods: {
    /*计算遍历次数*/
    serveArr1Num() {
      this.serveArrNum = Number(parseInt((this.serveArr1.length - 1) / 12 + 1))
    },
    ButtonR() {
      this.index1++
      this.move = `transform: translateX(${-240 * this.index1}px)`
      if (this.index1 > this.serveArrNum - 2) {
        this.acr = 'none'
        this.ac = 'block'
        // console.log(this.index1)
        // console.log(this.move)
        // this.index1=0
      }
    },
    ButtonL() {
      this.index1--
      this.move = `transform: translateX(${+240 * this.index1}px)`
      if (this.index1 == 0) {
        this.acr = 'block'
        this.ac = 'none'
        // console.log(this.index1)
        // console.log(this.move)
      }
    },
    // 轮播图部分
    changeImg(aaa) {
      this.index = aaa;
      clearInterval(this.timer)
    },
    Next() {
      this.index++
      if (this.index == this.goodsArr.length) {
        this.index = 0
      }
    },
    onPlay() {
      clearInterval(this.timer)
      this.timer = setInterval(this.Next, 1500)
    }
  },
  beforeMount() {
    this.serveArr1Num()
  },
  mounted() {
    this.onPlay()
    console.log(this.serveArrNum)
    console.log(typeof this.serveArrNum)
  },
  beforeDestroy() {
    clearInterval(this.timer); // 关闭计时器
    // console.log("卸载前已清除计时器"); // 日志确认
  }
}
</script>

<style scoped lang="scss">
.bigB li:hover, .box1:hover, .login1 img:hover, .login1 div:hover, .shopTopList li:hover, .rShop:hover,
.user:hover, .vipS:hover, .goods:hover, .login3-1:hover, .lTop:hover {
  cursor: pointer;
}

.bigB li:hover {
  color: red;
}

.rShop:hover {
  color: red;
  text-decoration: underline;
}

.block {
  display: block;
}

.none {
  display: none;
}

.top {
  height: 424px;
  background: transparent;
  position: relative;
  display: flex;
  margin: 0 auto;

  .rTop {
    width: 1297px;
    height: 424px;
    background: white;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    .lBox, .rBox {
      width: 230px;
      height: 410px;
      background: rgb(247, 248, 252);
      border-radius: 5px;
    }

    .lBox {
      width: 230px;
      height: 410px;
      //background: #29519d;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;

      .lShop {
        width: 240px;
        height: 36px;
        display: flex;
        justify-content: left;

        .img {
          width: 20px;
          height: 20px;
          //background: #29519d;
          margin-top: 17px;

          img {
            width: 20px;
            height: 20px;
          }
        }

        .rShop {
          padding-left: 14px;
          padding-top: 17px;
        }
      }
    }

    .mBox {
      width: 780px;
      height: 410px;
      background: transparent;
      border-radius: 5px;

      .shopTopList {
        width: 752px;
        height: 50px;
        background: rgb(247, 248, 252);
        margin: 0 auto;
        border-radius: 5px;
        overflow: hidden;

        ul {
          width: 1000px;
          height: 50px;
          display: flex;
          //background: #7c62a4;
          justify-content: space-between;
          padding: 15px;
          align-items: center;

          li {
            font-weight: bolder;
            border-right: 1px solid gray;
            padding-right: 18px;
          }
        }
      }

      .shopBottomList {
        margin: 15px auto;
        width: 752px;
        height: 336px;
        //background: #7c62a4;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .BottomL, .BottomM, .BottomR {
          width: 240px;
          height: 320px;
          //background: red;
        }

        //轮播图部分
        .BottomL {
          .goods img {
            width: 240px;
            height: 320px;
            position: relative;
          }

          .change {
            width: 240px;
            height: 40px;
            display: flex;
            //background: rgba(163, 236, 106, 0.79);
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 34px;

            li {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, .2);
              margin-left: 5px;

            }

            .active {
              background: red;
              width: 20px;
              height: 10px;
              border-radius: 30px;
            }
          }


        }

        .BottomM {
          display: flex;
          justify-content: space-evenly;
          align-content: space-evenly;
          flex-wrap: wrap;

          .box1 {
            width: 112px;
            height: 152px;
            background: linear-gradient(to bottom, rgb(254, 242, 236), rgb(255, 255, 255));
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;

            img {
              width: 82px;
              height: 82px;
            }
          }
        }

        .BottomR {
          display: flex;
          position: relative;
          overflow: hidden;

          .bigB1 {
            height: 320px;
            background: rgb(247, 248, 252);
            display: flex;
            position: absolute;
            z-index: 99;
          }

          .bigB {
            width: 240px;
            height: 320px;
            //background: yellow;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-content: flex-start;

            > ul {
              margin-top: 6px;
            }
          }

          .box2 {
            width: 70px;
            height: 70px;
            //background: #29519d;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;

            img {
              width: 36px;
              height: 36px;
            }
          }

          .button {
            width: 240px;
            height: 30px;
            position: absolute;
            //display: flex;
            //justify-content: space-between;
            margin-top: 64%;
            //background: aqua;
            z-index: 100;

            button {
              width: 20px;
              height: 20px;
              background: rgba(204, 204, 204, 0.58);
              font-size: 16px;
              color: rgba(255, 255, 255, 0.97);
              border: none;
              text-align: center;

              &:first-child {
                border-radius: 20px 100px 100px 20px;
                position: absolute;
                margin-left: -5px;

              }

              &:last-child {
                border-radius: 100px 20px 20px 100px;
                position: absolute;
                margin-left: 225px;
              }
            }
          }

        }
      }

    }

    //登录板块
    .rBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .login {
        width: 240px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: relative;

      }

      .user {
        width: 240px;
        height: 60px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .vip {
        width: 240px;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .login1 {
        width: 240px;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        position: relative;
      }

      .login2 {
        width: 240px;
        height: 70px;
      }

      .login3 {
        width: 240px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login1-l {
        position: absolute;
        margin-left: -130px;
        margin-top: 13px;
      }

      .login1-r {
        position: absolute;
        margin-left: 40px;
        margin-top: 40px;
      }

      .login1-r:first-child {
        color: #1A1A1A;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bolder;
      }

      .login2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .login3-1 {
        width: 220px;
        height: 30px;
        background: red;
        margin: 0 auto;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login3-1 span {
        color: white;
        height: 25px;
        width: 65px;
      }

      .user-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .user-2 {
        width: 24px;
        height: 24px;
      }

      .user-2 img {
        width: 100%;
        height: 100%;
      }

      .user-3 {
        color: #505259;
        font-size: 12px;
      }

      .plus {
        width: 100px;
        height: 80px;
        background: url("@/assets/images/login/bg01.png");
        background-size: 100%;
        border-radius: 5px;
      }

      .bVip {
        width: 100px;
        height: 80px;
        background: url("@/assets/images/login/bg02.png");
        background-size: 100%;
        border-radius: 5px;
      }

      .vipS {
        width: 100px;
        height: 64px;
        margin: 5px auto;
      }

      .plus1 {
        font-size: 12px;
        color: #664100;
        margin-left: 6px;
        margin-top: 8px;
      }

      .bVip1 {
        font-size: 12px;
        color: #003066;
        margin-left: 6px;
        margin-top: 8px;
      }

      .plus2 {
        font-size: 12px;
        color: #664100;
        margin-left: 6px;
      }

      .bVip2 {
        font-size: 12px;
        color: #003066;
        margin-left: 6px;
      }

      .plus3 {
        width: 80px;
        height: 25px;
        background: #664100;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 9px auto;
      }

      .plus3 span {
        color: white;
        font-size: 12px;
        font-weight: bolder;
        text-align: center;
      }

      .bVip3 {
        width: 80px;
        height: 25px;
        background: #0249FF;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 9px auto;
      }

      .bVip3 span {
        color: white;
        font-size: 12px;
        font-weight: bolder;
        text-align: center;
      }
    }
  }

  //伸缩图部分
  .lTop {
    position: absolute;
    width: 108px;
    height: 432px;
    left: -108px;
    //background: rgba(163, 236, 106, 0.79);
    .imgQ {
      width: 108px;
      height: 432px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .imgH {
      width: 1px;
      height: 432px;
      position: absolute;
      top: 0;
      left: 106px;
      overflow: hidden;
      transition: all .5s;
      z-index: 101;

      img {
        width: 792px;
        height: 432px;
      }
    }
  }

  .lTop:hover .imgH {
    width: 792px;
  }

}

</style>