<template>
  <div class="goods">

        <goodslistItem v-for="item in goods" :goodsItem="item">{{item}}</goodslistItem>


  </div>
</template>

<script>
  import goodslistItem from './goodslistItem.vue'
  export default{
    data:()=>{
      return{

      }
    },
    props:{
        goods:{
          type:Array,
          default(){
              return []
          }
        }

    },
    components:{
      goodslistItem
    }
  }

</script>

<style>
  .goods{
  overflow: hidden;
    width: 100%;
  }
</style>
