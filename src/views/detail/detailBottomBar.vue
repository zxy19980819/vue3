<template>
 <div class="bottom">
    <div class="bottom-item">
      <span style="background-color: #2aabd2" @click="addcar">加入购物车</span>
      <span style="background-color: brown">立即购买</span>
    </div>
 </div>
</template>

<script>

  export default{
    data:()=>{
      return{

      }
    },
    props:{


    },
    components:{

    },
    methods:{
        addcar(){

            this.$emit('addcar')
        }

    }
  }

</script>

<style scoped>
.bottom{
  position:relative;
  z-index: 200;
  bottom:0px;
  height: 50px;

  width: 100%;
}
  .bottom-item{
    width: 100%;
    height: 100%;
  }
  .bottom-item span{
    width: 50%;
    display: inline-block;
    height: 100%;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: large;
  }
</style>
