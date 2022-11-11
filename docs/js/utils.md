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
