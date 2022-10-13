### 情景介绍

修改一个大屏代码，原本是调用一个 echarts 组件，后来需求要把这个echarts显示在轮播图里，就结合使用了 swiper 和 echarts 组件。

### 问题发现

页面先调用 swiper 组件后，在 swiper 组件里调用了 echarts 组件。swiper 组件开启了循环属性 `loop: ture`，正常自动轮播没有问题，可是点击轮播图移动发现有时候图上的数据显示有问题：

![](C:\Users\mi\Desktop\Vue_study\practice\img\问题组件.png)

可以发现原本应该显示百分比的地方，数值变成了 Infiniy%，这个地方的代码是一个计算的插值表达式，如下：

```vue
<tenplate>
	<div>
        <!-- ... -->
        <div class="num">{{ ((Number(item.d4) / totaldata) * 100).toFixed(0) }}%</div>
    </div>
</tenplate>
```

### 问题分析

首先通过 console.log 发现这里是 totaldata 没有获取到，所以插值表达式里的计算结果变成了 Infinity ，于是分析 totaldata 的相关代码：

```vue
<script>
export default {
    data() {
        return {
            totaldata: '',
        }
    },
    computed: {
        total() {
            // 这一段就是用来计算所有数值的总和的，不重要
            return this.sourceData.reduce((a, b) => {
        		return a + Number(b.d4);
      		}, 0);
        }
    },
    mounted() {
        this.totaldata = this.total;
    }
}
</script>
```

可以发现总和的计算是定义 totaldata ，值为空；然后通过计算属性 computed 节点下的 total 计算出数值总和；最后在 mounted 中将 total 赋值给 totaldata 。

**结论：问题在于生命周期**

**分析**：请教了前辈后知道了这是因为，mounted 的生命周期 DOM 结构已经被渲染好了（此时插值表达式的模板结构已经渲染完成），但是 totaldata 的赋值写在了 mounted 中，导致 DOM 结构渲染的时候还不知道 totaldata 的值。

### 解决方法

解决这个问题就是要把 **totaldata 的赋值**在 DOM 结构渲染好之前完成，也就是说放在 mounted 之前就可以了。

通过学习知道组件创建阶段的生命周期是：beforeCreate -> created -> beforeMount -> mounted

所以前辈给的写法是计算函数 toTotalData 写在 methods 里，然后在 created 中完成 totaldata 的赋值，代码如下：

```vue
<script>
export default {
    data() {
        return {
            totaldata: '',
        }
    },
    computed: {
    },
    created() {
        this.totaldata = this.toTotalData(this.sourceData);
    }，
    mounted() {
    }，
    methods: {
        //计算totaldata
    	toTotalData(data){
      		let res = 0;
      		data.forEach((item) =>{
          		res = Number(item.d4) + res;
      		})
      		console.log("res:", res);
      		return res;
    	},
    }
}
</script>
```

ps：我自己测试了一下，发现计算 totaldata 这一步不放在methods里也行，computed和data、props、methods都是在created时就已经创建好的，就使用原来在computed里的计算也行。所以，问题的关键还是 **赋值** ，这一步必须在mounted之前。

![](C:\Users\mi\Desktop\Vue_study\practice\img\问题解决.png)