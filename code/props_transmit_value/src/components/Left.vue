<template>
  <div id="left">
    <h2>Left组件</h2>
    <hr>
    <p>msg的值是：{{ msg }}</p>
    <p>user的值是：{{ user }}</p>
    <hr>
    <p>要传给right的值：{{ hello }}</p>
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
import bus from '@/utils/eventBus'

export default {
  props: ['msg', 'user'],
  data () {
    return {
      hello: 'hello',
    }
  },
  methods: {
    sendMsg() {
      // $emit触发自定义事件
      bus.$emit('msgFromLeft', this.hello);
    }
  }
}
</script>

<style>
#left {
    display: inline-block;
    width: 50%;
    height: 500px;
    background-color: skyblue;
}
</style>