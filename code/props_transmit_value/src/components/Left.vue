<template>
  <div id="left">
    <h2>Left组件</h2>
    <hr>
    <p>msg的值是：{{ msg }}</p>
    <p>user的值是：{{ user }}</p>
  </div>
</template>

<script>

export default {
  props: ['msg', 'user']
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