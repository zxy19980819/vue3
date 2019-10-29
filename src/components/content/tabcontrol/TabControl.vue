<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" class="tab-control-item" :class="{active:i===current}" @click="active(i)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
      props:{
          titles:{
              type:Array,
            default(){
                  return []
            }
          }
      },
   data:()=>{
     return{
        current:0
     }
  },
    components: {

    },
    methods:{
          active(i){
              this.current=i
            this.$emit('tabclick',i)
          }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;

  }
  .tab-control-item{
    text-align: center;
    background-color: white;
flex: 1;
    font-size: large;
    border-bottom: 1px solid transparent;
  }
  .tab-control-item:hover, .tab-control-item:active{
    border-bottom: 3px solid pink;
    color: pink;
  }
  .active{
    border-bottom: 3px solid pink;
    color: pink;
  }
</style>
