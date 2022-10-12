<template>
  <div id="right">
    <h2>Right组件</h2>
    <hr>
    <div>{{ count }}</div>
    <button @click="add">+1</button>
    <hr>
    <p>接收来自left的值：{{ msgLeft }}</p>
  </div>
</template>

<script>
import bus from '@/utils/eventBus'

export default {
  data() {
    return {
      count: 0,
      msgLeft: ''
    }
  },
  methods: {
    add() {
      this.count += 1;
      // 通过 $emit 自定义事件 numChange，将count的值传给父组件
      this.$emit('numChange', this.count)
    }
  },
  created() {
    bus.$on('msgFromLeft', val => {
      this.msgLeft = val;
    })
  }
}
</script>

<style>
#right {
    display: inline-block;
    width: 50%;
    height: 500px;
    background-color: pink;
}
</style>