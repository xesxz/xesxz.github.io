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
