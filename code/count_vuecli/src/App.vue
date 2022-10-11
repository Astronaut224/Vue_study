<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';

export default {
  name: 'App',
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #F0E68C;
  width: 1920px;
  height: 800px;
}
</style>
