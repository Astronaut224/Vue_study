<template>
  <div id="app">
    <h1>App 组件</h1>
    <!-- 用router-link替代a链接 -->
    <router-link to="/home">首页</router-link>
    <!-- <a href="#/home">首页</a> -->
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <button @click="goBack">后退</button>
    <!-- 当使用行内式时，$router不能带this -->
    <button @click="$router.back()">后退一层</button>
    <button @click="$router.forward()">前进一层</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/tab/Home.vue'
import Movie from '@/components/tab/Movie.vue'
import About from '@/components/tab/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    Movie,
    About
  },
  methods: {
    goBack () {
      // this.$router.go(n) 代表前进n层或后退-n层
      // 如果前进或后退的层数超过上限，就原地不动
      this.$router.go(-1);
      // this.$router.go(-100);
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
  background-color: whitesmoke;
}

a {
  margin-right: 10px;
}
</style>
