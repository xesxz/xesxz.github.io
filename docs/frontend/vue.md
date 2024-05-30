# vue

## VUE 装饰器

vue 装饰器有两种
vue-class-component(官方版)

```js
import Vue from "vue";
import Component from "vue-class-component";
```

vue-property-decorator(社区版)

```js
import { Component, Vue } from "vue-property-decorator";
```

`cnpm i vue-property-decorator -S`
https://www.cnblogs.com/shiww/p/11322737.html

### vue.config.js

```javascript
module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    port: 8888, // 端口
    // hot: true,
    // open: true, // 自动开启浏览器
  },
};
```

vue3
![vue3](https://raw.githubusercontent.com/xesxz/image/main/screenshot202211021014096.png)

vue2
![vue2](https://raw.githubusercontent.com/xesxz/image/main/screenshot202211021016579.png)




在vue3中使用reactive定义数组
```javascript

//方案一
let data = reactive([{ id: 123, name: 'asd' }])

//赋值的时候  
 data.length = 0
    data.push(...res.result)

```


```javascript
//方案二
let state = reactive({
  list:[]
})

//赋值的时候  
state.list = res.result
```


## vuecli

tailwind  使用vuecli 创建项目后可以使用 `vue add tailwind`添加tailwind
[在VUE中使用Tailwind CSS](https://juejin.cn/post/7083294405280399390)


postcss
npx tailwindcss init -p


## 配置代理
  ```baseURL: '/admin',```

  ```javascript
    proxy: {
      '/admin': {
        target: 'http://221.237.108.102:81',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/admin': ''
        }
      },
    }

    ```


vue2能够监测到数组push 因为重写了数组的方法  不能监测到数组长度改变 直接修改数组下标（vue3可以）  