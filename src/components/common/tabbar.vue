
<template>



    <nav class="mui-bar ">
      <router-link class="mui-tab-item1 " tag='span'to="/home">

        <span class="mui-tab-label">首页</span>

      </router-link>
      <router-link class="mui-tab-item1" tag='span'to="/menber">

        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" tag='span'to="/shopCar">


        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" tag='span'to="/search">


        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>



</template>


<script>


  export default{
      data:()=>{
          return{

          }
      }
  }
</script>


<style>

  /*改类名，解决mui冲突*/

  .mui-bar{


    width: 100%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    background-color: papayawhip;
    position: fixed;
  bottom: 0px;
  }
  .mui-tab-item1{
    width: 25%;
    display: inline-block;
    line-height: 50px;
}
</style>
