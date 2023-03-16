<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2023-03-10 15:23:53
 * @LastEditors: zl
 * @LastEditTime: 2023-03-10 15:30:41
-->
## 获取元素高度的方法

使用元素的 offsetHeight 属性获取元素高度，包括内边距、边框和元素内容的高度。

使用元素的 clientHeight 属性获取元素的高度，包括内边距和元素内容的高度。

使用元素的 scrollHeight 属性获取元素的高度，包括元素内容的高度和任何溢出的内容。

使用 getComputedStyle() 方法获取元素的样式对象，然后获取 height 属性的值。

使用 jQuery 中的 height() 方法获取元素的高度。

使用 JavaScript 中的 getBoundingClientRect() 方法获取元素的位置和尺寸信息，然后计算出元素的高度。

使用 IntersectionObserver API 监听元素的可见性变化，然后获取元素的高度。

## 同时设置一个dom多个css样式
`element.style.cssText = "color:red; font-weight:bold;";`