<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <br>
    <button @click="btnGetBooks">获取书籍列表</button>
  </div>
</template>

<script>
// 导入封装好的 axios 模块
import request from '@/utils/request';

export default {
    methods: {
        async btnGetBooks () {
            const {data: res} = await request.get('/api/get');
            console.log(res);
        }
    }
}
</script>

<style>
.right-container {
    height: 300px;
    background-color: skyblue;
}
</style>