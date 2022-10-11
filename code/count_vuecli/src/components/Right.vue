<template>
  <div id="right">
    <h2>Right组件</h2>
    <hr>
    <Count :first="9"></Count>
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
#right {
    display: inline-block;
    width: 50%;
    height: 500px;
    background-color: pink;
}
</style>