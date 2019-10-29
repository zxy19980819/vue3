<template>
  <div style="position: relative;height: 100vh">
  <div class="car-item" v-for="(item,i) in list" v-if="list.length">

    <checkbutton :ischeck="item.ischeck"
                 @click.native="check(i)" class="button"></checkbutton>
    <img :src="item.img" alt="">
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="info-bottom">
        <span class="price">{{item.price}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>


      </div>

  </div>
</template>

<script>
const checkbutton=()=>import('components/common/checkbutton.vue')

  export default{
    data:()=>{
      return{
    list:[
// {
//           title:'test',
//         desc:'test',
//         price:'test',
//         count:'test',
//         ischeck:false
//
//       },{ title:'test',
//         desc:'test',
//         price:'test',
//         count:'test',
//         ischeck:false}
],

      }
    },
    components:{
      checkbutton,

    },
    created(){
     this.list= this.$store.state.carlist
    },

    methods:{
      check(i){
        console.log(this.list[i].ischeck);
          if(!this.list[i].ischeck){
            this.list[i].ischeck=true
          }else{
            this.list[i].ischeck=false
          }
          this.$emit('changelist',this.list)


      }
    }
  }

</script>

<style scoped>
.car-item{
  border-top: 1px solid grey;
  padding-top: 5px;
  width: 100%;
  height: 150px;
  display: flex;
}
img{

  width: 30%;
  height: 90%;
  display: inline-block;
  border-radius: 5%;
  margin-left: 5px;
}
  .item-info{
    width: 65%;
  margin: 3px;
    color: grey;
  }
  .item-title{
    font-size: large;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-desc{
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  .info-bottom{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .price{
    font-size: large;
    color: palevioletred;
  }
  .count{

  }
  .button{
    margin-top: 20%;
  }

</style>
