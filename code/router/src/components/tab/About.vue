<template>
  <div class="About-container">
    <h3>About</h3>
    <hr>
    <!-- 子级路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr> 
    <!-- 展示嵌套组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scope>
.About-container {
    height: 300px;
    background-color: skyblue;
    a {
      margin-right: 10px;
    }
}
</style>