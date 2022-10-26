<!--
 * @Author: Astronaut224 1398838410@qq.com
 * @Date: 2022-10-15 09:54:33
 * @LastEditors: Astronaut224 1398838410@qq.com
 * @LastEditTime: 2022-10-15 13:18:57
 * @FilePath: \demo-cart\src\components\Footer\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isFull" @change="fullChange" />
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ total }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">结算（{{ goodsNum }}）</button>
  </div>
</template>

<script>
export default {
  props: {
    isFull: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    goodsNum: {
      type: Number,
      default: 0
    }
  },
  methods: {
    fullChange(e) {
      const newFull = e.target.checked;
      this.$emit('full-change', newFull);
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
