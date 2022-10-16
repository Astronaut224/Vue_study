<!--
 * @Author: Astronaut224 1398838410@qq.com
 * @Date: 2022-10-15 19:28:24
 * @LastEditors: Astronaut224 1398838410@qq.com
 * @LastEditTime: 2022-10-15 21:54:58
 * @FilePath: \slot\src\App.vue
 * @Description: 动态组件
-->
<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <button @click="comName = 'Left'">显示Left</button>
      <button @click="comName = 'Right'">显示Right</button>
      <hr>
      <!-- keep-alive使组件被隐藏时不被销毁，而是状态变为inactive -->
      <keep-alive activited="Left, Right">
        <!-- component占位符，通过is属性来决定显示的组件 -->
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left';
import Right from '@/components/Right';

export default {
  data() {
    return {
      comName: 'Left',
    }
  },
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
