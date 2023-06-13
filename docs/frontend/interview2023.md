<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2023-03-09 16:02:50
 * @LastEditors: zl
 * @LastEditTime: 2023-06-09 17:14:24
-->
## this的指向
1在全局作用域中，this指向全局对象（浏览器中为window对象）。
2在函数中，this指向调用该函数的对象。如果没有明确指定调用对象，则this指向全局对象。
3在构造函数中，this指向新创建的对象。
4在事件处理函数中，this指向触发事件的元素。
5在箭头函数中，没有自己的this 而是继承父作用域的this

## evenloop 宏任务 微任务
[宏任务和微任务的理解](https://juejin.cn/post/7103679289245040653)


# vue

## 常用的vueuse hook
`useLocalStorage`

封装过那些组件
常见的表格表格弹框 下拉菜单 文件上传 点击地图上传地址  文件下载 预览 播放器
左右两侧面板,点击翻转



事件委托
addEventListener默认是事件冒泡 第三个参数是false


css 选择器及优先级
元素 id 类 伪类
id选择器 优先级最高 类 元素
style内联会覆盖选择器的样式 然后important优先级最高