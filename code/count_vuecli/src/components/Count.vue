<template>
  <div>
    <h3>Count组件</h3>
    <p>Count的值：{{ count }}</p>
    <!-- <p>Count的值：{{ first }}</p> -->
    <br>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
    // 1. props 是自定义属性，允许使用者通过自定义属性为当前组件设置初始值
    // 2. 自定义属性名字是封装者自己设置的，只要合法就可以
    // 3. props的值可以直接在模板结构中使用
    // 4. 注意：props是只读的，不要直接修改props的值，否则会报错
    // props: ['first'],
    props: {
        first: {
            // 用default属性定义默认值
            default: 0,
            // 用type属性指定 first 的类型必须是 Number 数字
            type: Number,
            // required设置 first 是否是必填项，如果使用组件时填写 first 的值就报错
            required: true
        }
    },
    data () {
        return {
            count: this.first
        }
    },
    methods: {
        add() {
            this.count += 1;
        }
    }
}
</script>

<style>

</style>