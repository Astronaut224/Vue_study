<template>
  <div class="app-container">
    <h1 v-color="'red'">App 根组件</h1>
    <p v-color="color">测试</p>
    <button @click="color='green'">改变颜色</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认情况下，组件提供的内容会被填充到名为default的插槽中 -->
        <!-- 需要注意，v-slot指令必须用在组件或者template标签中，所以外面要包一层template标签 -->
        <template v-slot:default>
          <p>这是Left组件的内容,声明的p标签</p>
        </template>
      </Left>
    </div>
    <Article>
        <!-- 标题 -->
        <template #title="obj">
          <h3>一首诗 --- {{ obj.msg }}</h3>
          <p>{{ obj }}</p>
        </template>
        <!-- 内容 -->
        <template #content>
          <p>假如生活欺骗了你</p>
          <p>不要悲伤，不要心急</p>
          <p>你大嘴巴子扇他</p>
        </template>
        <!-- 作者 -->
        <template #author>
          <p>作者</p>
        </template>
      </Article>
  </div>
</template>

<script>
import Left from '@/components/Left';
import Article from '@/components/Article';

export default {
  data() {
    return {
      color: 'blue'
    }
  },
  components: {
    Left,
    Article
  },
  // 私有自定义指令节点
  directives: {
    color: {
      // bind函数会在当前指令第一次绑定时触发
      // el形参表示当前指令绑定到的 DOM 元素
      bind(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
      }
    }
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
