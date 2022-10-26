<template>
  <div class="tab1-container">
    <!-- this.$route是路由的参数对象 -->
    <div>Tab1 --- {{ this.$route.params.mid }} --- {{ mid }}</div>
    <button @click="showThis">打印 this</button>
  </div>
</template>

<script>
export default {
    props: ['mid'],
    methods: {
        showThis () {
            console.log(this);
            console.log(this.$route.query);
        }
    }
}
</script>

<style lang="less" scoped>
.tab1-container {
    width: 100%;
    height: 100%;
    background-color: green;
}
</style>