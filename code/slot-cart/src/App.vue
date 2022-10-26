<!--
 * @Author: Astronaut224 1398838410@qq.com
 * @Date: 2022-10-15 09:54:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-19 16:35:35
 * @FilePath: \slot-cart\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
    :count="item.goods_count"
    @state-change="getNewState">
      <Counter :cnum="item.goods_count" :cid="item.id" @plusGoods="getNewCount(item, $event)" @minusGoods="getNewCount(item, $event)"></Counter>
    </Goods>
    <Footer :isFull="fullState" :total="totalPrice" :goodsNum="goodsSum" @full-change="getNewFull"></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header/Header';
import Goods from '@/components/Goods/Goods';
import Footer from '@/components/Footer/Footer';
import Counter from '@/components/Counter/Counter';

export default {
  components: {
    Header,
    Goods,
    Footer,
    Counter
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
      this.list = res.list;
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
    },
    // 获取改变后的商品数量
    getNewCount(item,val) {
      // 这里 val 就是原本自定义事件传的值
      console.log(item, val);
      item.goods_count = val;
    }
  },
  computed: {
    // 当一个数值，依赖于其他数值时，可以使用计算属性
    fullState() {
      return this.list.every(item => item.goods_state);
    },
    // 计算购物车商品总价
    totalPrice() {
      return this.list.filter(item => item.goods_state).reduce((total,item) => {
        return total += item.goods_price * item.goods_count;
      },0)
    },
    // 计算购物车商品总数量
    goodsSum() {
      return this.list.filter(item => item.goods_state).reduce((result, item) => {
        return result += item.goods_count;
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
