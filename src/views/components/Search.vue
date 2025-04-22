<template>
<div class="bigBox">
  <div class="searchBox" :class="fixedTop">
   <div class="logo">
     <img src="@/assets/images/JDRed.png" alt="">
   </div>
    <div class="search">
      <input type="text">
      <img src="@/assets/images/img.png" alt="">
      <input type="button" value="搜索">
    </div>
    <div class="dou">
      <img src="@/assets/images/JD.gif" alt="">
    </div>
  </div>
  <div class="list" ref="shopList">
    <ul>
      <li
      v-for="(list, index) in listArr"
      :key="index"
      :style="{ color: index < 2 ? 'red' : 'black' }"
      >
       {{list}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      fixedTop:null,
    listArr:['政府消费券 至高享5折','没领错过18000元礼包','空气炸锅','吹风机静音','尼龙双肩包','包包','燃气热水器','哪吒2周边',]
    }
  },
  methods:{
    getHeight(){
      if(this.$refs.shopList.getBoundingClientRect().top<-454){
        this.fixedTop = 'fix'
        // console.log(this.$refs.shop.getBoundingClientRect().top)
      }
    },
    getHeight2(){
      if(this.$refs.shopList.getBoundingClientRect().top>-454){
        this.fixedTop = ''
        // console.log(2222)
      }
    }
  },
  mounted() {
    this.getHeight()
    window.addEventListener('scroll',this.getHeight)
    window.addEventListener('scroll',this.getHeight2)
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.getHeight,)
    window.removeEventListener('scroll',this.getHeight2,)
  }
}
</script>

<style scoped lang="scss">
.fix {
  position: fixed;
  z-index: 190;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: .5px solid rgba(0, 0, 0, .06);
  .logo{
    margin-top: -10px;
  }
  .search{
    position: absolute;
    //margin-top: -80px;
    left: 20px;
    width: 1297px;
    height: 44px;
  }
  .dou{
    display: none;
  }
}
.list li:hover,.logo:hover,.dou:hover,.search img:hover,.search input:hover{
  cursor: pointer;
}
.list li:hover{
  color: red !important;
}
.bigBox{
  width: 1297px;
  height: 134px;
  margin: 0 auto;
  position: relative;
  .searchBox{
    width: 1297px;
    height: 76px;
    //background: #7c62a4;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    .logo{
      width: 240px;
      height: 70px;

      padding-top: 16px;
      img{
        width: 240px;
        height: 70px;
      }
    }
    .search{
      width: 766px;
      height: 44px;
      margin-top: 32px;
      //position: relative;
      top:-13px;
      left:22%;
    input:first-child{
      width: 763px;
      height: 44px;
      position: absolute;
      border-radius: 10px;
      border: 1px solid red;
      outline: none;
      padding-left: 20px;
      padding-right: 125px;
    }
      img{
        width: 25px;
        height: 25px;
        position: absolute;
        margin-top:10px;
        margin-left: 650px;

      }
      input:last-child{
        width: 80px;
        height: 36px;
        background: red;
        position: absolute;
        margin-top:4px;
        margin-left: 679px;
        border: transparent;
        border-radius: 10px;

      }
    }
    .dou{
      width: 190px;
      height: 120px;
      //background: red;
      img{
        width: 190px;
        height: 120px;
      }
    }
  }
  .list{
    width: 786px;
    height: 40px;
    position: relative;
    margin: 0 auto;
  }
  .list ul{
    width: 786px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    display: flex;
    position: absolute;
    padding-left: 20px;
    li{
      font-size: 14px;
    }
  }

}

</style>