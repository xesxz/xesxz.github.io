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
