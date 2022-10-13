<template>
  <input type="text" v-if="inputVisible" @blur="showButton" ref="inputRef">
  <button v-else @click="showInput">展示input</button>
</template>

<script>
export default {
    data() {
        return {
            inputVisible: false,
        }
    },
    methods: {
        showInput() {
            // 点击按钮，切换布尔值，显示输入框
            this.inputVisible = true;
            // 显示输入框后，焦点自动对到输入框上
            this.$nextTick(() => {
                this.$refs.inputRef.focus();
            })
        },
        showButton() {
            // 输入框失去焦点，切换布尔值，显示按钮
            this.inputVisible = false;
        }
    }
}
</script>

<style>

</style>