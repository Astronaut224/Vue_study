<template>
  <div class="left">
    <h2>Left --- {{ count }}</h2>
    <br>
    <button @click="count += 1">+1</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        reset() {
            this.count = 0;
        }
    }
}
</script>

<style>
.left {
    height: 300px;
    background-color: orange;
}
</style>