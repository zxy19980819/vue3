<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot ></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    data:()=>{
      return{
        scroll:null
      }
    },
    props:{
        probeType:{
            type:Number,
          default:0
        },
        pullUpLoad:{
            type:Boolean,
           default:false
        }
    },
    mounted(){
      let wrapper = this.$refs.wrapper
      this.scroll = new BScroll(wrapper,{
             click:true,
             probeType:this.probeType,
             pullUpLoad:this.pullUpLoad

      })
      this.scroll.on('scroll',(pos)=>{
       this.$emit('myscroll',pos)
      })
//        上拉加载
      this.scroll.on('pullingUp',()=>{
        this.$emit('mypullingUp')
      })
    }

  }

</script>

<style scoped>

</style>
