<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!-- 官方要求每个slot都要有name属性，如果省略了name默认值为default -->
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
