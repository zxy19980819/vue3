<template>
<div>
  <img :src="goodsItem.show.img" alt="" @load="imgload" @click="itemclick" >
</div>
</template>

<script>
  export default{
    data:()=>{
      return{

      }
    },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
         this.$bus.$emit('imgload')
        },
       itemclick(){
       this.$router.push('/detail/'+this.goodsItem.iid)
       }
    }
  }

</script>

<style scoped>
 img{

width: 48%;
   float: left;
   margin: 3px;
 }
</style>
