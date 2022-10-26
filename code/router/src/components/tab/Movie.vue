<template>
  <div class="Movie-container">
    <h3>Movie</h3>
    <hr>
    <!-- 注意一：在哈希地址中/后面的参数叫做路径参数 -->
    <!-- 在路由对象中，需要通过 this.$route.params 获取路径参数 -->
    <!-- 注意二：在哈希地址中?后面的参数叫做查询参数 -->
    <!-- 在路由对象中，需要通过 this.$route.query 获取查询参数 -->
    <!-- 注意三：this.$route.path 只是路径/movie/tab1 -->
    <!-- this.$route.fullPath 才是完整地址/movie/tab1/2?name=zs&age=20 -->
    <router-link to="/movie/tab1/1">死侍</router-link>
    <router-link to="/movie/tab1/2?name=zs&age=20">雷神</router-link>
    <router-link to="/movie/tab1/3">浩克</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scope>
.Movie-container {
    height: 300px;
    background-color: pink;
}
</style>