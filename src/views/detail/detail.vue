<template>
  <div id="detail">
   <navbar class="navbar">
     <div slot="left" style="color: red" @click="backclick1">返回</div>
     <div slot="center"><span v-for="(item,i) in titles"
                              :class="{current:i===currentindex}"
                              @click="currentclick(i)">{{item}}</span></div>
   </navbar>

    <scroll class="content"
            ref="scroll"
            :probeType="probeType"
            @myscroll="detailscroll">
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="item in topimg" >
            <img :src="item" alt="">

          </div>

        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <!--详情价格-->
      <div class="base-info">
        <div class="info-title">{{info.title}}</div>
        <div class="info-price">
          <span class="n-price">{{info.newPrice}}</span>
          <del class="o-price">{{info.oldPrice}}</del>
          <span v-if="info.discount" class="discount">{{info.discount}}</span>
        </div>
        <div class="info-other">
          <span>{{info.columns[0]}}</span>
          <span>{{info.columns[1]}}</span>
          <span>{{info.services[info.services.length-1].name}}</span>
        </div>
        <div class="info-service">
        <span class="info-service-item" v-for="item in info.services" >
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </span>
        </div>
      </div>
  <div class="detailimg">
   <div v-for="item in detailimg"> <img :src="item" alt=""></div>
  </div>
      <div class="param-info" ref="param">
        <div v-for="item in infoParam.table">
          <span v-for="items in item">{{items}}</span>
        </div>
      </div >
      <div class="info-param">
        <div v-for="item in infoParam.set">
          <span v-for="items in item">{{items}}</span>
        </div>
      </div>
      <div style="border-top: 1px solid gainsboro;display: flex;justify-content: space-between;padding: 10px"><span>用户评价</span><span>更多</span></div>
   <div class="comment-info" style="border-top: 1px solid gainsboro;padding: 10px" ref="comment">
     <div v-for="item in commentInfo">{{item.content}}</div>
   </div>
    </scroll>
    <detailbottombar @addcar="addcar"></detailbottombar>
    <backtop @click.native="backclick" v-show="backtop"></backtop>



          </div>
</template>

<script>
  const navbar=()=>import('components/common/navbar.vue')
  const scroll=()=>import('components/common/scroll/scroll.vue')
  //const backtop=()=>import('components/common/backtop.vue')
  const detailbottombar=()=>import('views/detail/detailBottomBar.vue')

  import {getDetail} from 'network/home.js'
  import {backTop} from 'components/content/mixin.js'
  import Swiper from 'swiper'
  export default{
      name:'detail',
    data:()=>{
      return{
        iid:null,
        titles:['商品','参数','评论','推荐'],
        currentindex:0,
        topimg:[],
        info:{
            title:[],
            desc:[],
            newPrice:[],
            oldPrice:[],
            discount:[],
            columns:[],
            services:[],
            realPrice:[],
          detailimg:[],
          commentInfo:[],

        },
        infoParam:{
         set:{},
          table:[]
        },
        topY:[0,100,200,500],
        probeType:3,

      }
    },
   mixins:[backTop],
   created(){
     this.iid= this.$route.params.iid
     getDetail(this.iid).then(res=>{
      // console.log(res.result);
       this.topimg=res.result.itemInfo.topImages
       this.detailimg=res.result.detailInfo.detailImage[0].list
        this.info.title=res.result.itemInfo.title
       this.info.desc=res.result.itemInfo.desc
       this.info.newPrice=res.result.itemInfo.price
       this.info.oldPrice=res.result.itemInfo.oldPrice
       this.info.discount=res.result.itemInfo.discountDesc
       this.info.columns=res.result.columns
       this.info.realPrice=res.result.itemInfo.lowNowPrice
       this.info.services=res.result.shopInfo.services
       this.infoParam.set=res.result.itemParams.info.set
       this.infoParam.table=res.result.itemParams.rule.tables[0]
       this.commentInfo=res.result.rate.list
     })
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
    },
    updated(){
        this.topY=[]
      this.topY.push(0);
        this.topY.push(this.$refs.param.offsetTop)
      this.topY.push(this.$refs.comment.offsetTop)
    },
    components:{
      navbar,
      scroll,
      detailbottombar,

    },
    methods:{
      currentclick(i){
        this.currentindex=i


        this.$refs.scroll.scroll.scrollTo(0,-this.topY[i],100)
      },
      backclick1(){
          this.$router.go(-1)
      },
      detailscroll(pos){

        if(this.topY[1]>Math.abs(pos.y)>this.topY[0]){

            this.currentindex=0
        }else if(this.topY[2]>Math.abs(pos.y)&&Math.abs(pos.y)>this.topY[1]){

          this.currentindex=1
        }
      },
      addcar(){

        const product={
            img:this.topimg[0],
            title:this.info.title,
          desc:this.info.desc,
          price:this.info.oldPrice,
          iid:this.iid,
          count:1,
          ischeck:false
        }
        this.$store.commit('addcar',product)
        console.log(this.$toast);
this.$toast.show('成功加入',1000)

      }
    }
  }

</script>

<style scoped>
  @import "../../../lib/swiper-4.5.0/dist/css/swiper.min.css";
.tabcontrol{
  height: 40px;
}
  span{
    margin: 5px;
  }
  .current{
    color: pink;
  }
  .navbar{
    position: relative;
    background-color: white;
    z-index: 10;
  }
  .navbar div{
    line-height: 50px;
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
.base-info{
  width: 100%;
}
  .info-price{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .n-price{
    color: pink;
    font-size: large;
  }
  .discount{
    background-color: palevioletred;
    margin-left: 30px;
    color: white;
  }
.info-other{
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  margin: 10px 0 10px 0;
  display: flex;

}
  .info-other span{
    flex: 1;
  }
  .info-service{
    /*display: flex;*/
    width: 100%;
    border-bottom: 1px solid gainsboro;

  }
  .info-service img{
    width: 20px;
    height: 20px;
  }
  .info-service-item{
    width: 45vw;
    display: inline-block;
    text-align: center;
  }
  #detail{
    height: 100vh;
  }
.content{
  height: calc( 100% - 50px - 50px);
}
  .detailimg img{
    height: 300px;
    width: 100%;
  }
  .param-info{
    border-top: 1px solid gainsboro;
    padding: 5px;
  }
  .param-info span{
    display: inline-block;
    margin: 5px;
    margin-left: 40px;
  }
  .info-param{
    border-top: 1px solid gainsboro;
    padding: 5px;
  }
  .info-param span{
    display: inline-block;
    margin: 5px;
    margin-left: 40px;
  }
</style>
