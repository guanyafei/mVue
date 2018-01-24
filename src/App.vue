<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    name:'App',
    data(){
    return {};
  }
  }
</script>
<style scoped>
  #app{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    font-family: "微软雅黑";
    background-color: #E5E9F2;
    color: #2c3e50;
  }
</style>