<template>

    <!--{{ischeck}}-->
    <div class="button"

         :class="{current:ischeck}"
    ></div>

</template>

<script>

  export default{
    data:()=>{
      return{


      }

    },
    props:{
        ischeck:{
            type:Boolean,
          default:false
        }
    },
    methods:{


    }
  }

</script>

<style scoped>
  .button{
    height: 12px;
    width: 12px;
   border: 1px solid grey;
    border-radius: 50%;

  }
  .current{
    background-color: #2aabd2;
  }
</style>
