<template>
  <div class="article-container">
    <div class="header-box">
        <!-- 为插槽指定属性和值 -->
        <slot name="title" msg="假如生活欺骗了你" :user="userInfo"></slot>
    </div>
    <div class="content-box">
        <slot name="content"></slot>
    </div>
    <div class="footer-box">
        <slot name="author"></slot>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            userInfo: {
                name: 'zs',
                age: 20
            }
        }
    }
}
</script>

<style lang="less" scoped>
.article-container {
    height: 300px;
    .header-box {
        height: 100px;
        background-color: pink;
    }
    .content-box {
        height: 100px;
        background-color: skyblue;
    }
    .footer-box {
        height: 100px;
        background-color: orange;
    }
}
</style>