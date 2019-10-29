<template>
  <div id="app" >
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>

     <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar.vue'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/normalize.css";
  #app{
    width: 100%;
    padding-bottom: 50px;

  }
</style>
