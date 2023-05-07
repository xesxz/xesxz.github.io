[思维导图](https://segmentfault.com/a/1190000041072705)

## JS

### new 具体做了什么

1. 创建一个空对象
2. 构造函数里面的 this 指向空对象
3. 设置原型链,对象的**proto**指向构造函数的 prototype
4. 执行构造函数里面的内容,返回这个对象

### new Vue 做了什么

1. this.init(option)
2. 初始化事件 初始化生命周期 初始化 stata(data props watch methods，以及数据的响应式)
3. 如果 el 存在,替换 dom

### Vue 生命周期

共分为四个阶段
创建->挂载 ->更新 ->销毁
创建阶段 init 初始化事件和生命周期，初始化数据 方法等 create 里面最早可以访问 data
mounted 最早可以访问 dom 所以上面可以做一些事件监听
destroyed 可以销毁定时器和一些第三方的库

### createApp 做了什么

1. createAppAPI

### template 是怎么变成 vnode 的

template --> ast --->render---> vnode ---> patch ---> 真实 dom

### vue 对象和数组响应式

### vue key 的作用

高效更新 dom，vue 的 diff 算法只对修改部分更新,采用就地复用。不用更新整个 list

## vue router

### vue router 实现原理

### vue-router 的钩子

beforEach afterEach

路由独享的 beforeEnter

组件内的守卫 beforeRouteEnter

### Vue $nextTick 原理

vue 在观察到数据变化并没有立即更新 dom，而是将事件循环中的数据缓冲起来，应用最后的数据。如果在一个循环中。。。、balabala

### v-model 实现原理

动态绑定 input 的 value 监听 input 的事件，赋值给出 value

### 路由传参的方式

1. query
2. params

query 要再 url 后面拼接参数，刷新后 params 参数会丢失

## 缓存

强缓存:不与服务器建立联系 状态码 200 disk cache memory cache

协商缓存 与服务器建立一次连接 304 modify etag

http1 http2
http1 明文传输，不支持服务端推送
http2 多路复用 头部压缩

| http | https  |
| ---- | ------ |
|      | ssl ca |
| 80   | 443    |

## js

1. 深拷贝
   Json.parse(Json.stringty)
   递归 
   2.浅拷贝
   Object.assign(target,source,source...)   只能拷贝一层

```
  const target = {
      name:"zz",
      obj:{
        sex:"male"
      }
    }

 const r = Object.assign({},target)

target.obj.sex = "fmale"

console.log(r);
```



   扩展运算符（spread）

2. 闭包 3.白屏时间 首屏时间
   4 为什么 0.1+0.2！=0.3？
   5 call apply bind
   改变 this 指向 call，第二个参数是数组

### 作用域

### 判断是否是数组

```
Array.isArray(arr); // true
arr.__proto__ === Array.prototype; // true
arr instanceof Array; // true
Object.prototype.toString.call(arr); // "[object Array]"
```

### get 和 post 区别

1 get 请求参数放在 URL 后面 post 放在请求体
2 get 请求可以被缓存 post 不行
3 get 请求刷下后回退不会重新请求数据 post 会
4 get 请求参数有长度的限制
5 get 请求可以直接在浏览器访问

### cookie localstorage sessionstorage

数据持久性 cookie 有失效时间 localstorage 除非主动删除 sessionstorage 页面关闭后
cookie 比较小
localstorage 可以跨标签页 sessionstorage 不能

### 事件冒泡 捕获

addEventListener
默认第三个参数是 false 采用事件冒泡，先执行下面的元素，在向上指向上面的元素
采用 true 是事件捕获,先执行子元素，再执行父元素

### 简单谈谈浏览器从输入 URL 到页面渲染的过程

dns 解析 获取 ip 地址
建立 tcp 连接
发送 http 请求
服务起返回数据
浏览器解析数据 -----> dom tree css 树 render tree 浏览器计算元素的位置 然后到页面上
断开连接

### 简述浏览器渲染机制

html 解析成 dom 树和 css 树(cssom) -> render tree -> 技术 layout -> painting

CSRF 跨站请求伪造
怎么避免：验证 refrer 使用 token

### 回流 重绘

回流必然引起重绘
dom 树的末端改变 class
一个元素多个设置多个 style 通过改变类实现
避免使用 table
避免操作 dom,创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。
将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。

### BFC

块级格式化上下文

#### 触发 bfc

display 为 block inline-block table
float 不为 none
overflow 不为 visble
position fix absolute

## webpack

TODO 需要学习常见 loader 和 plugin

### webpack 和 rollup 比较

## 设计模式

单例模式
工厂模式
发布订阅者模式
策略模式
```
https://blog.csdn.net/u013558749/article/details/122495670
// 定义策略对象
const addStrategy = {
  execute: (a, b) => a + b
};

const subtractStrategy = {
  execute: (a, b) => a - b
};

const multiplyStrategy = {
  execute: (a, b) => a * b
};

const divideStrategy = {
  execute: (a, b) => a / b
};

// 客户端代码
class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute(a, b) {
    return this.strategy.execute(a, b);
  }
}

const calculator = new Calculator(addStrategy);
console.log(calculator.execute(1, 2)); // 3

calculator.strategy = multiplyStrategy;
console.log(calculator.execute(2, 3)); // 6

calculator.strategy = divideStrategy;
console.log(calculator.execute(6, 2)); // 3
```

## 常用手写

### 数组扁平化

```
//方法一递归
let arr = [1, [2, [3, 4]]]

function flat(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flat(arr))
```

```
//方法一some
function iterTree2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(iterTree2(arr1));
```

## mvvm

### addEventListener

默认是 false 向上冒泡
捕获 到达目标 冒泡

### axios

[CancelToken 的运用实践](https://www.cnblogs.com/qlongbg/p/12966813.html)

### let const var

快捷作用域出现是为了解决 var 声明变量的一些缺陷
1FOR 循环
2var 变量提升,维护起来困难 变量污染

````
  if(true){
        console.log('执行了');
    }else{
        console.log('没执行');
        var j = 2;
    }

    console.log(j);   //输出undefined 定义变量j的代码虽然没有执行，但是却依然不会报错
    ```
````

### vue 管理系统权限

beforeEach
后台返回一个该用户可以访问的菜单
前台所有路由都写好了 meta 里面设置 false
对比修改路由的 meta

or

动态引入 addroute

### 手写 promise

### 防抖节流

防抖：函数调用 n 秒后才会执行，若在 n 秒内又调用则取消调用重新计算执行时间
节流：用户点击只会执行一次 例如一秒内不能连续调用两次

### 盒模型

普通盒模型 IE 盒模型
ie 盒模型在改变 padding border 的时候他会压缩 centent 的大小 整个盒子不会改变

## 居中

垂直居中一张图片
1 父元素 ` display: table-cell;vertical-align: middle; text-align: center;`

## defer async 区别

script 阻塞 dom 树渲染
这两个不会
区别 defer 是 dom 树渲染完执行脚本 async 是下载完就执行
[JS script脚本中async和defer区别详解](https://www.jb51.net/article/189439.htm)

## 有封装过那些业务组件

无数据的空盒子

title

表格组件 有些数据没有分页 让 table 里面的数据滚动

大屏有些常用的盒子有统一的样式和功能 有封装可拖拽的盒子？怎么实现

[封装 svg-icon 组件](https://blog.csdn.net/Liw_J/article/details/117675208)

echart 封装 监听 resize 组件离开销毁封装

## Cesium
做了那些功能
各种样式的线
旋转立锥 
白膜贴图



工作经历

成都市城市生命线安全运行监测系统
燃气专项 供排水专项 桥梁后端image.png



### vue2和vue3响应式原理的区别
1 Object.defineProperty 和 proxy
2 添加get和set，触发set方法的时候更新视图
3 vue2递归遍历data里面的属性，vue3是原生的proxy不用遍历(直接对data对象代理了)
4 数组和对象，vue2是重写的数组的方法 vue3可以对响应式不存在的数据更新响应式


