<template>
  <div id="app">
    <!-- 给要修改的DOM元素添加ref属性值 -->
    <h1 ref="title">App</h1>
    <hr>
    <button @click="changeColor">变色</button>
    <button @click="resetLeft">Left的值reset</button>
    <hr>
    <Left ref="comLeft"></Left>
    <hr>
    <Right></Right>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'App',
  components: {
    Left,
    Right
  },
  methods: {
    changeColor() {
      // 通过this.$refs.自定义 获取到DOM元素
      this.$refs.title.style.color = 'red';
    },
    resetLeft() {
      this.$refs.comLeft.reset();
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
}
</style>
