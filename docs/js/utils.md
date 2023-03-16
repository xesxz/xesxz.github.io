```javascript
function toFirst(fieldData, index) {
  if (index != 0) {
    fieldData.unshift(fieldData.splice(index, 1)[0]);
  }
}
```

```javascript
/**
 * 是否包含指定元素
 * @param arr
 * @param ele
 * @return {boolean}
 */
function isInclude(arr, ele) {
  return arr.indexOf(ele) > -1;
}
```

```javascript
/**
 * tree转二维
 */
    treeToArray(arr) {
      return arr.reduce((acc, cur) => {
        if (Array.isArray(cur.children)) {
          const copyCur = { ...cur };
          delete copyCur.children;
          return acc.concat(copyCur, this.treeToArray(cur.children));
        } else {
          return acc.concat(cur);
        }
      }, []);
    },
```

`new Date().toISOString()`

`new Date(new Date().getTime() + 288e5).toISOString().replace('T', ' ')`




```js
//置顶数据
let arr = [
  { name: '首页', url: '/' },
  { name: '产品', url: '/products' },
  { name: '联系我们', url: '/contact' },
  { name: '关于我们', url: '/about' },
];

// 将 name 属性为 "首页" 的元素置顶
arr.sort((a, b) => {
  if (a.name === '首页' && b.name !== '首页') {
    return -1;
  }
  if (a.name !== '首页' && b.name === '首页') {
    return 1;
  }
  return 0;
});

console.log(arr);
// [
//   { name: '首页', url: '/' },
//   { name: '产品', url: '/products' },
//   { name: '联系我们', url: '/contact' },
//   { name: '关于我们', url: '/about' },
// ]

```