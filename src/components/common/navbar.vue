<template>
  <div class="nav-bar">
     <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
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
.nav-bar{
  display: flex;
  height: 50px;
  text-align: center;

  width: 100%;
}
  .left{
    width: 60px;
    height: 100%;
    /*background-color: #1b6d85;*/
  }
.center{
  flex: 1;
  /*background-color: #2ac845;*/
  height: 100%;
}
  .right{
    width: 60px;
    /*background-color: #2e6da4;*/
    height: 100%;
  }
</style>
