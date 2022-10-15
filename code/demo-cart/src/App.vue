<template>
  <div class="app-container">
    <Header></Header>
    <Goods v-for="item in list" 
    :key="item.id" 
    :id="item.id"
    :title="item.goods_name" 
    :pic="item.goods_img"
    :price="item.goods_price"
    :state="item.goods_state"
    @state-change="getNewState">
    </Goods>
    <Counter></Counter>
    <Footer :isFull="fullState" @full-change="getNewFull"></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header/Header';
import Goods from '@/components/Goods/Goods';
import Counter from '@/components/Counter/Counter';
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    Header,
    Goods,
    Counter,
    Footer
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    // 调用初始化购物车列表函数
    this.initCarList()
  },
  methods: {
    // 封装请求购物车列表数据的方法
    async initCarList() {
      // 解构赋值promise对象里的data
      const {data:res} = await axios.get('https://www.escook.cn/api/cart');
      this.list= res.list;
      console.log(res.list);
    },
    // 获取复选框勾选状态
    getNewState(val) {
      // console.log('父组件接收到的：', val);
      this.list.some(item => {
        if(item.id === val.id) {
          item.goods_state = val.state;
          return true;
        }
      })
    },
    // 获取全选框勾选状态
    getNewFull(val) {
      // 循环将获取到的状态赋值给每一个商品
      this.list.forEach(item => {
        item.goods_state = val;
      })
    }
  },
  computed: {
    // 当一个数值，依赖于其他数值时，可以使用计算属性
    fullState() {
      return this.list.every(item => item.goods_state);
    },
    totalPrice() {
      this.list.filter(item => item.goods_state).reduce((total,item) => {
        return total += item.goods_price * item.goods_count;
      },0)
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
