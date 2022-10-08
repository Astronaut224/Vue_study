# Vue基础使用

## 1. 基本使用步骤

1. 导入vue.js文件
2. 在页面中声明一个被vue控制的DOM结构
3. 创建vm实例对象（vue实例）

```html
<body>
    <!-- 准备好受vue控制的DOM结构 -->
    <div id="app">{{ username }}</div>

    <!-- 1. 引入vue.js脚本文件 -->
    <script src="./lib/vue.js"></script>

    <!-- 2. 创建vue实例对象 -->
    <script>
        const vm = new Vue({
            // 3. 声明受vue控制的DOM结构
            el: '#app',
            // data对象代表要渲染到页面的数据
            data: {
                username: 'zhangsan'
            }
        })
    </script>
</body>
```

## 2. vue的指令

指令是用于渲染页面的模板语法。

根据用途可分为6大类：

- 内容渲染指令
- 属性绑定指令
- 事件绑定指令
- 双向绑定指令
- 条件渲染指令
- 列表渲染指令

### 1.内容渲染指令

1. v-text

将数据渲染到指定标签内，但是**会覆盖元素内默认的值**。几乎不用。

2. 插值表达式

vue 提供的 {{}} 语法，可以解决 v-text 覆盖默认值的问题。主要使用

3. v-html

v-text 和 插值表达式 只能渲染纯文本内容，如果要把包含HTML标签的字符串渲染成HTML元素，需要使用 v-html 指令。

```html
<body>
    <!-- 准备好受vue控制的DOM结构 -->
    <div id="app">
        <div>
            <p v-text="username"></p>
            <p v-text="gender">性别：</p>

            <hr>

            <p>{{ username }}</p>
            <p>性别：{{ gender }}</p>

            <hr>

            <p v-html="info"></p>
        </div>
    </div>

    <!-- 1. 引入vue.js脚本文件 -->
    <script src="./lib/vue.js"></script>

    <!-- 2. 创建vue实例对象 -->
    <script>
        const vm = new Vue({
            // 3. 声明受vue控制的DOM结构
            el: '#app',
            // data对象代表要渲染到页面的数据
            data: {
                username: 'zhangsan',
                gender: '女',
                info: '<h4 style="color: red; font-weight: bold;">欢迎大家来学习 Vue.js</h4>'
            }
        })
    </script>
</body>
```

### 2. 属性绑定指令

插值表达式只能用在内容节点中，不能用在属性节点中。

需要通过`v-bind:`指令，为元素动态绑定值，可简写为一个英文冒号`:`

```html
<body>
    <div id="app">
        <input type="text" v-bind:placeholder="tips">
        <img :src="logo" alt="" style="width: 100px;">
    </div>
    
    <script src="./lib/vue.js"></script>

    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                tips: '请输入用户名',
                logo: 'https://v2.cn.vuejs.org/images/logo.svg'
            }
        })
    </script>
</body>
```



### 案例：使用Javascript表达式

```html
<body>
    <div id="app">
        <div>1加2的结果是{{ 1 + 2 }}</div>
        <div>{{ tips }} 翻转的结果是：{{ tips.split('').reverse().join('') }}	</div>
        <div :title="'box-' + index">box</div>
    </div>
    
    <script src="./lib/vue.js"></script>

    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                tips: '请输入用户名',
                logo: 'https://v2.cn.vuejs.org/images/logo.svg',
                index: 3
            }
        })
    </script>
</body>
```

### 3. 事件绑定指令

v-on 绑定事件，语法格式如下

```
<button v-on:click="add">+1</button>
```

事件函数写在 vue 对象中的 methods中，如下：

```
<script>
        const vm = new Vue({
            el: '#app',
            data: {
                count: 0
            },
            methods: {
                add() {
                    vm.count += 1;
                }
            }
        })
</script>
```



1. 通过 this 访问数据

**注意**：要获取 data 中的数据源，可以用常量 vm 接收，也可以用 this，两者完全一致。

完整示例：

```html
<body>
    <div id="app">
        <div>count 的值是: {{ count }}</div>
        <br>
        <button v-on:click="add">+1</button>
        <button v-on:click="sub">-1</button>
    </div>

    <script src="./lib/vue.js"></script>

    <script>
        const vm = new Vue({
            el: '#app',

            data: {
                count: 0
            },

            methods: {
                add() {
                    vm.count += 1;
                },
                sub() {
                    // this 和 vm 相同
                    this.count -= 1;
                }
            }
        })
    </script>
</body>
```

2. 传参

传参可以直接使用小括号()

```html
// 绑定事件并传参
<button v-on:click="add(3)">+</button>

// 事件函数中
methods: {
	 add(n) {
         vm.count += n;
     }
}
```

3. v-on 简写

v-on: 可以直接简写为 @

```
<button @click="add">+1</button>
```

4. 内置变量 $event

$event 就是原生事件对象里的 e

如果事件函数没有传参的话默认就是e，如果有传参就需要使用$event了。

```html
<button v-on:click="add($event, 1)">+N</button>

methods: {
	add(e, n) {
        vm.count += n;
                    
        if (this.count % 2 === 0) {
        // count是偶数
        e.target.style.backgroundColor = 'pink';
        } else {
        // count是奇数
        e.target.style.backgroundColor = 'skyblue';
        }
     }
}
```



