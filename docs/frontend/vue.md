# vue

### 获取 data 初始化状态

```javascript
this.$data; // 组件当前data对象
this.$options.data(); // 组件初始化状态下的data对象
Object.assign(this.$data, this.$options.data()); // 重置data对象到初始化状态
```
