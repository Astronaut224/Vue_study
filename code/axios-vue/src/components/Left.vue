<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <br>
    <button @click="btnPost">发送POST请求</button>
  </div>
</template>

<script>
export default {
    name: 'Left',
    data () {
        return {
            userInfo: {
                name: 'zs',
                age: 20
            }
        }
    },
    methods: {
        async btnPost () {
            // 通过 this.$http 调用了 axios
            const {data: res} = await this.$http.post('/api/post', this.userInfo);
            console.log(res);
        }
    }
}
</script>

<style lang="less" scoped>
.left-container {
    height: 300px;
    background-color: pink;
}
</style>