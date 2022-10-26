<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox" class="custom-control-input" :id="'cb' + id" :checked="state" @change="stateChange" />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
        <slot>插槽占位</slot>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter'

export default {
  props: {
    // 接收id是因为复选框状态通过$emit 子向父传值时要用
    id: {
      required: true,
      type: Number
    },
    title: {
      default: '商品商品商品',
      type: String
    },
    pic: {
      default: '../../assets/logo.png',
      type: String
    },
    price: {
      default: '0',
      type: Number
    },
    state: {
      default: true,
      type: Boolean
    },
    count: {
      default: 1,
      type: Number
    }
  },
  methods: {
    // 只要复选框的状态发生变化，就会触发这个事件函数
    stateChange(e) {
      const newState = e.target.checked;
      // 把{id, state}传给父组件，就知道哪个商品的复选框状态发生改变了
      this.$emit('state-change', {id: this.id, state: newState});
    }
  },
  components: {
    Counter
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
