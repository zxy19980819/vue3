<template>
  <div style="position: relative">
    <navbar class="nav-bar">
      <div slot="center" class="" style="line-height: 50px;font-size: large">购物车({{count}})</div>
    </navbar>
<carlist style="margin-top: 50px" @changelist="changelist"></carlist>
    <carbottombar class="bottom" :list="list"></carbottombar>
   </div>
</template>

<script>
  const navbar=()=>import('components/common/navbar.vue')
  const carlist=()=>import('./carlist.vue')
  const carbottombar=()=>import('./carbottombar.vue')
  export default{
    data:()=>{
      return{
        list:[]
      }
    },
    components:{
      navbar,
      carlist,
      carbottombar
    },
    computed:{
        count(){
            return this.$store.state.carlist.length
        }
    },
    methods:{
      changelist(list){
       this.list=list

      }
    }
  }

</script>

<style scoped>
.nav-bar{
  background-color: palevioletred;
  color: white;
  position: fixed;
  z-index: 200;
  top:0;
}
</style>
