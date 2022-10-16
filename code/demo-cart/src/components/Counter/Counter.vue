<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="minus">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ cnum }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="plus">+</button>
  </div>
</template>

<script>
import bus from '@/utils/eventBus';

export default {
  data() {
    return {
      count: '',
    }
  },
  props: {
    cnum: {
      default: 1,
      type: Number
    },
    cid: {
      required: true,
      type: Number
    }
  },
  methods: {
    plus() {
      this.count = this.cnum + 1;
      bus.$emit('plusGoods', {id: this.cid, count: this.count});
    },
    minus() {
      if(this.count > 1) {
        this.count = this.cnum - 1;
      }else return true;
      bus.$emit('minusGoods', {id: this.cid, count: this.count})
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
