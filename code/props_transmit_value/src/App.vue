<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <!-- message是简单类型的数据，直接复制值过来 -->
    <!-- userInfo是复杂类型的数据，复制引用过来 -->
    <Left :msg="message" :user="userInfo"></Left>
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
  },
  data() {
    return {
      message: '这是父组件定义的数据',
      userInfo: {name: 'zhangsan', age: 20}
    }
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
