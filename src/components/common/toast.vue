<template>
  <div class="toast" v-show="isshow">
   {{message}}
  </div>
</template>

<script>

  export default{
    data:()=>{
      return{
        message:'',
        isshow:false
      }
    },
    methods:{
       show(message,time){
          this.isshow=true
         this.message=message
         setTimeout(()=>{
              this.isshow=false
         },time)
       }
    }
  }

</script>

<style scoped>
 .toast{
   position: fixed;
   top:50%;
   left: 50%;
   transform: translate(-50%,-50%);
   background-color: rgba(0,0,0,0.5);
   width: 100px;
   height: 40px;
   text-align: center;
   line-height: 40px;
   color: white;
 }
</style>
