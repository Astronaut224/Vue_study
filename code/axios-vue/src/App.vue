<template>
  <div id="app">
    <h1>App 组件</h1>
    <hr>
    <Left></Left>
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
  }
}
</script>

<style lang="less">
</style>
