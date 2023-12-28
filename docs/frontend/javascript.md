<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2022-08-07 00:11:14
 * @LastEditors: zl
 * @LastEditTime: 2023-05-29 11:54:25
-->
# JAVASCRIPT

## class

###继承

```javascript
class Father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    console.log(this.x + this.y);
  }
}

class Son extends Father {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  sum1() {
    console.log(this.x + this.y + this.z);
  }
}
```

##

## 数组方法

slice 从一段文字中 copy 一部分 原来的部分不变

splice 好比插队 插一个或者多个 增删 splice(index,haw many)

every 元素中所有元素都满足才返回 true

some 元素中只要有一个元素满足就返回 true

find 找到第一个就不再找了 返回这个元素 good man

filter 是找到符合条件的所有元素 返回这个元素 bad man

fill 填充 盒子里面的饼干 我要用其他饼干代替

join 连接数组变字符串(split 字符串变数组)

concat 连接两个或者更多数组 返回新数组

[cookie,token,session 的一些思考](./cookie,token,session的一些思考.md)


![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202303211438688.png)
![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202303211442262.png)




??（空值合并操作符）
当左侧值为 null 或 undefined 时，返回 ?? 符号右边的值



移除空格
let color = '#FFF5EE'

color = color.replace(/\s/g, "");
