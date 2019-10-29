<template>
  <div class="bottom">
    <checkbutton class="check" @click.native="allcheck" :ischeck="ischeck"></checkbutton>
    <span style="">全选</span>
    <div class="total">
      <span>合计</span>

      <span>{{clist|total}}</span>

    </div>
    <div class="go-count">去计算（{{clist|go}}）</div>


</div>
</template>

<script>
  const checkbutton=()=>import('components/common/checkbutton.vue')
  export default{
    props:{
      list:{
        type:Array,
        default:0
      }
    },

    data:()=>{
      return{
        clist:[],
        ischeck:false

      }

    }
   ,
    watch:{
      list:function(newVal,oldVal){
        this.clist = newVal;
      }
    },
    created(){

    },
    components:{
      checkbutton
    },
    methods:{
      allcheck(){
          this.ischeck=true

this.$store.commit('allcheck')

      }

    },
    filters:{
       total(clist){
           var total=0
           clist.forEach(function (item,i) {
             if(item.ischeck){
                 total=total+parseInt(item.count)*Number(item.price.slice(1,item.price.length))

             }
           })
        return total
       },
      go(clist){
        var num=0
        clist.forEach(function (item,i) {
          if(item.ischeck){
            num=num+item.count

          }
        })
        return num

      }
    },
    computed:{
//        total(){
//            //return list
//        }
    }
  }

</script>

<style scoped>
.bottom{
  position:fixed;
  z-index: 200;
  bottom: 0;
  height: 50px;
  display: flex;
background-color:whitesmoke;
  width: 100%;
  align-items: center;
}
  .check{
    background-color: white;

    margin-right: 5px;
  }
  .total{
    margin: 0 30px 0 30px;
  }
  .go-count{
    height: 100%;
    background-color: orangered;
    width: 20%;
    text-align: center;
    line-height: 50px;
   position: absolute;
    right: 0;
    color: white;
  }
</style>
