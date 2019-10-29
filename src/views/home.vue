<template>
  <div style="height: 100vh">
<navbar class="home-nav" >
  <div slot="center">购物街</div>
</navbar>
    <!--lunbotu-->
    <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="item in bannerList" :key="item.link">
          <a :href="item.link"><img :src="item.image" alt=""></a>

        </div>

      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <backtop @click.native="backclick" v-show="backtop"></backtop>

       <scroll  class="content-home" ref="scroll"
                :probeType="probeType"
                @myscroll="homescroll"
                :pullUpLoad="pullUpLoad"
                @mypullingUp="pullingUp">
         <tabcontrol :titles="titles" class="tabcontrol" @tabclick="tabclick"></tabcontrol>
         <goodslist :goods="goods[currenttype].list" ></goodslist>
       </scroll>



</div>
</template>

<script>
  const navbar=()=>import('components/common/navbar.vue')
  const tabcontrol=()=>import('components/content/tabcontrol/TabControl.vue')
  const goodslist=()=>import('components/content/goods/goodslist.vue')
  const goodslistItem=()=>import('components/content/goods/goodslistItem.vue')
  const scroll=()=>import('components/common/scroll/scroll.vue')
  const backtop=()=>import('components/common/backtop.vue')
  import {getHomeMultidata,getHomeGoods} from '../network/home.js'

  import BScroll from 'better-scroll'

  import Swiper from 'swiper'

  export default{
      data:()=>{
          return{
            bannerList:[],
            titles:['流行','新款','精选'],
            goods:{
                'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]},
            },
            currenttype:'pop',
            probeType:3,
            backtop:false,
            pullUpLoad:true,
            saveY:0
          }
      },
    components:{
          navbar,
      tabcontrol,
      goodslist,
      goodslistItem,
      scroll,
      backtop
    },
    created(){
     this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      //      监听图片加载完成,防抖
     const refresh= this.debounce( this.$refs.scroll.refresh,500)
      this.$bus.$on('imgload',()=>{
       refresh()
      })
    },
    activated(){
     this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY=this.$refs.scroll.scroll.y
    },
    methods:{
//        事件监听
      tabclick(i){
        switch (i){
          case 0 :
              this.currenttype='pop'
                break
          case 1 :
            this.currenttype='new'
            break
          case 2 :
            this.currenttype='sell'
            break
        }
      },
      backclick(){
         this.$refs.scroll.scroll.scrollTo(0,0,500)
},
      homescroll(pos){
          if(Math.abs(pos.y)>300){
              this.backtop=true
          }else{
            this.backtop=false
          }
      },
      pullingUp(){
        this.getHomeGoods(this.currenttype)
      },
      debounce(fn,delay){
        let timer=null
        return function (...args) {
         if(timer){
             clearTimeout(timer)
         }
        timer= setTimeout(()=>{
             fn.apply(this,args)
        },delay)
        }
      },
//        网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res=>{

          this.bannerList=res.data.banner.list
        })
      },
      getHomeGoods(type){
          const page=parseInt(this.goods[type].page)+1


        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          console.log( this.goods[type].list)
          console.log(  this.goods[type].page)
        })
      }
    }
  }

</script>

<style >
  @import "../../lib/swiper-4.5.0/dist/css/swiper.min.css";
.home-nav{
  background-color: palevioletred;
  line-height: 50px;
  font-size: 20px;
  color: white;
  position: fixed;
  z-index: 100;

}
  .swiper-slide{
    /*//background-color: #2aabd2;*/
    width: 100%;
    height: 200px;
  }
.swiper-slide img{
  width: 100%;
  height: 100%;
}

.tabcontrol{
  /*position: sticky;*/
  /*top:50px;*/
}
  .content-home{
    height: calc(100% - 100px);
    overflow: hidden;
  }
</style>
