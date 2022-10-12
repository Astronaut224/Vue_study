# vue组件

## vue组件使用

vue规定组件是 .vue 结尾的文件，主要用于 UI 结构的复用。

.vue 组件由3部分构成：

- template -> 组件的模板结构
- script -> 组件的JavaScript行为
- style -> 组建的样式

### vue中的script

```vue
<script>
	// 默认导出，这是固定写法
    export default {
        // data数据源
        // 注意：vue组件中 data 不能指向对象，必须是一个函数
        data () {
            return {
                username: 'zhangsan',
            }
        },
        // 事件函数还是写在methods里
        methods: {
            changeName() {
                // 组件中，this 表示当前组件的实例对象
                console.log(this);
                this.username = 'lisi'；
            }
        },
        // 组件
        components: {
            
        },
        // 当前组件中的侦听器
        watch: {
            
        },
        // 当前组件的计算属性
        computed: {
            
        },
        // 过滤器，限vue2.0中
        filters: {
            
        }
    }
</script>
```

### vue中的template

Vue的 template 只允许有一个根元素，所以记住在template中加一个div作为根元素，所有代码都写在这个div中。

```vue
<template>
	<div>
        ...
    </div>
</template>
```

### vue中的style

如果要启用 less 预处理器，可以在 style 标签中设置。

```vue
<style lang="less">
	...
</style>
```



### 使用组件的3个步骤

步骤1：使用 import 语法导入需要的组件

```vue
<script>
	import Left from '@/components/left.vue';
</script>
```

步骤2：使用 components 节点注册组件

```vue
<script>
	export default {
        components: {
            Left,
        }
    }
</script>
```

步骤3：以标签的形式使用组件

```vue
<template>
	<div>
        <Left></Left>
    </div>
</template>
```

注意：在父组件中通过 components 节点注册的组件是 私有子组件。

- 注册全局组件：

在 main.js 中使用 Vue.componen()

```
import Left from '@/components/left.vue';

Vue.component('MyLeft', Left);

// 可以在所有组件中使用
<MyLeft></MyLeft>
```

### 组件中的props

props 是组件的自定义属性，封装组件时可以提高组件的通用性。

现在有组件关系 父 -> 子：

App.vue -> Left.vue -> Count.vue

App.vue -> Right.vue -> Count.vue

Left 和 Right 都是用来 Count 组件，但要求两个不同的初始值。可以在Count组件中用 props 定义一个初始值 first ，然后在 Left 和 Right 中分别设置不同的初始值。

```vue
Count.vue

<template>
  <div>
    <h3>Count组件</h3>
    <p>Count的值：{{ count }}</p>
    <!-- <p>Count的值：{{ first }}</p> -->
    <br>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
    // 1. props 是自定义属性，允许使用者通过自定义属性为当前组件设置初始值
    // 2. 自定义属性名字是封装者自己设置的，只要合法就可以
    // 3. props的值可以直接在模板结构中使用
    // 4. 注意：props是只读的，不要直接修改props的值，否则会报错
    props: ['first'],
    data () {
        return {
            count: this.first
        }
    },
    methods: {
        add() {
            this.count += 1;
        }
    }
}
</script>
```

```vue
Left.vue
<template>
	<div id="#left">
        <Count :first=3></Count>
    </div>
</template>
```

```vue
Right.vue
<template>
	<div id="#left">
        <Count :first=9></Count>
    </div>
</template>
```

- 注意点：
  - props的值可以直接在template模板结构中使用
  - **props是只读的。**在父组件中可以设置 props 的值，但是像 Count.vue 涉及到计算修改值了就不能直接使用 props ，而是将 props 赋值给 data 中的 数据。

#### props的配置项

```vue
<script>
export default {
    props: {
        first: {
            // 用default属性定义默认值
            default: 0,
            // 用type属性指定 first 的类型必须是 Number 数字
            type: Number，
            // required设置 first 是否是必填项，如果使用组件时填写 first 的值就报错
            required: true
        }
    },
}
</script>
```

## 组件间传值

### 父向子传值-props

自定义属性props

父组件

```vue
<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <!-- message是简单类型的数据，直接复制值过来 -->
    <!-- userInfo是复杂类型的数据，复制引用过来 -->
    <Left :msg="message" :user="userInfo"></Left>
  </div>
</template>

<script>
import Left from '@/components/Left.vue';

export default {
  name: 'App',
  components: {
    Left,
  },
  data() {
    return {
      message: '这是父组件定义的数据',
      userInfo: {name: 'zhangsan', age: 20}
    }
  }
}
</script>
```

子组件

```vue
<template>
  <div id="left">
    <h2>Left组件</h2>
    <hr>
    <p>msg的值是：{{ msg }}</p>
    <p>user的值是：{{ user }}</p>
  </div>
</template>

<script>

export default {
  props: ['msg', 'user']
}
</script>
```

### 子向父传值-$emit

自定义事件$emit

子组件

```vue
template>
  <div id="right">
    <h2>Right组件</h2>
    <hr>
    <div>{{ count }}</div>
    <button @click="add">+1</button>
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
    add() {
      this.count += 1;
      // 通过 $emit 自定义事件 numChange，将count的值传给父组件
      this.$emit('numChange', this.count)
    }
  }
}
</script>
```

父组件

```vue
<template>
  <div id="app">
    <h1>App根组件---{{ countFromSon }}</h1>
    <hr>
    <!-- 调用子组件时，给自定义事件numChange绑定事件函数getNewNum -->
    <Right @numChange="getNewNum"></Right>
  </div>
</template>

<script>
import Right from '@/components/Right.vue';

export default {
  name: 'App',
  components: {
    Right
  },
  data() {
    return {
      // 用于接收子组件传值
      countFromSon: 0
    }
  },
  methods: {
    // 自定义事件的时间函数获得的参数val就是子组件传的值
    getNewNum(val) {
      console.log('numChange事件被触发了', val);
      this.countFromSon = val;
    }
  }
}
</script>
```

### 兄弟组件传值-eventBus

1. 创建eventBus.js模块，并向外共享一个Vue实例对象
2. 在数据发送方，调用 bus.$emit('自定义事件', 要发送的数据)，触发自定义事件
3. 在数据接受方，调用 bus.$on('自定义事件', 事件处理函数)，注册自定义事件

eventBus.js

```javascript
import Vue from 'vue';

//对外共享Vue实例
export default new Vue();
```

数据发送方 Left.vue

```vue
<template>
  <div id="left">
    <p>要传给right的值：{{ hello }}</p>
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
import bus from '@/utils/eventBus'
    
export default {
  data () {
    return {
      hello: 'hello',
    }
  },
  methods: {
    sendMsg() {
      // $emit触发自定义事件
      bus.$emit('msgFromLeft', this.hello);
    }
  }
}
</script>
```

数据接收方 Right.vue

```vue
<template>
  <div id="right">
    <p>接收来自left的值：{{ msgLeft }}</p>
  </div>
</template>

<script>
import bus from '@/utils/eventBus'

export default {
  data() {
    return {
      msgLeft: ''
    }
  },
  created() {
    // 注册自定义事件，等$emit被触发就可以接收到值val了
    bus.$on('msgFromLeft', val => {
      this.msgLeft = val;
    })
  }
}
</script>
```

## 生命周期

### 定义&生命周期函数

**生命周期** 是指一个组件从**创建** -> **运行** -> **销毁**的整个阶段。

生命周期函数：是由 vue 框架内置的函数，会随着生命周期，按次序执行。

- 组件创建阶段
  - beforeCreate
  - created
  - beforeMount
  - mounted
- 组件运行阶段
  - beforeUpdate
  - updated

- 组件销毁阶段
  - beforeDestroy
  - destroyed

生命周期图示：https://v2.cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA

---

**beforCreate**：props/data/methods 都还没创建

**created**：props/data/methods 已创建好，但模板结构尚未生成。created 经常用它调用 methods 里的方法，请求服务器数据，并把请求到的数据放到 data 里面等渲染的时候用。

**beforeMount**：将内存中编译好的 HTML 结构渲染到浏览器中，此时浏览器中还没有当前组件的 DOM 结构。（说白了也不能操作DOM元素，也没啥用）

**mounted**：已经将DOM结构渲染好了

---

**beforeUpdate**：**当数据发生变化**，准备将最新数据重新渲染到模板结构（数据是新的，页面上显示旧的）

**updated**：根据最新数据，完成了 DOM 结构的重新渲染

---

**beforeDestroy**：组件还在正常工作，即将被销毁

**destroyed**：组件已经被销毁，DOM结构中组件被移除了

