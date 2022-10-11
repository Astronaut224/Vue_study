<template>
  <div id="left">
    <h2>Left组件</h2>
    <hr>
    <Count :first=3></Count>
  </div>
</template>

<script>
import Count from '@/components/Count.vue';

export default {
    components: {
        Count
    }
}
</script>

<style>
#left {
    display: inline-block;
    width: 50%;
    height: 500px;
    background-color: skyblue;
}
</style>