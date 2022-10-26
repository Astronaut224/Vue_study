<template>
  <div class="home-container">
    <h3>Home</h3>
    <hr>
    <button @click="gotoDe">跳转到 死侍</button>
    <button @click="gotoDe2">无痕跳转到 死侍</button>
    <router-link to="/main">跳转到后台</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    gotoDe () {
      this.$router.push('/movie/tab1/1');
    },
    gotoDe2 () {
      this.$router.replace('/movie/tab1/1');
    },
  }
}
</script>

<style lang="less" scope>
.home-container {
    height: 300px;
    background-color: orange;
}
</style>