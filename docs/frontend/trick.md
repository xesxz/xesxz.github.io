<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2022-10-24 09:18:34
 * @LastEditors: zl
 * @LastEditTime: 2023-04-18 17:03:17
-->
```javascript
    addArea(geojson, option) {
    const _option = {
      showLabel: true,
      layerName: "",
    };
    if (option) Object.assign(_option, option);
  }

    addArea(geojson, option) {
    var _option = option || {};

    var showLabel =
        _option.showLabel || true
    var layerName = _option.layerName  || ""
}


addArea(geojson, options) {
    options = options || {};
    options.fill = options.fill || "rgba(136,217,255,0.2)";
    options.stroke = options.stroke || "#88D9FF";
    options.width = options.width || "4";
}


addArea(geojson,  { fill = "rgba(136,217,255,0.2)", stroke = "#88D9FF", width = 4 }) {

}

处理报错
  createTempVectorLayer(layerName, geojson, options = {}) {
    const { location = true, zIndex = 12, hover = true } = options;}


1 确定option是否存在三种写法
option = {}
if (option) 
var _option = option || {};


2 defaultOption 写在外场最好





```

## nodemodules 删除

`rimraf`





如果您想要将JavaScript代码插入到当前网站中，有几种方法可以实现：

使用浏览器开发者工具
大多数浏览器都有内置的开发者工具，您可以使用它来在当前页面中插入JavaScript代码。打开开发者工具并转到“Console”选项卡。在控制台中，您可以直接键入JavaScript代码并按Enter键执行它。或者，您可以将代码复制并粘贴到控制台中，然后按Enter键执行它。

使用书签
您可以创建一个包含JavaScript代码的书签，并在需要时单击该书签以在当前页面中执行该代码。要创建一个JavaScript书签，请打开您的浏览器并创建一个新的书签。在书签的URL字段中输入以下代码：

javascript:(function() { /* 在这里输入您的代码 */ })();
将“在这里输入您的代码”替换为您要插入的JavaScript代码。现在，当您单击该书签时，浏览器将在当前页面中执行该代码。

使用浏览器插件
某些浏览器插件可以让您轻松地在当前页面中插入JavaScript代码。例如，Chrome浏览器中的“Custom JavaScript for Websites”插件允许您在当前页面中添加自定义JavaScript代码。安装插件后，在浏览器中打开当前页面并单击插件图标。在弹出的窗口中，您可以输入您要插入的JavaScript代码。单击“保存”以执行该代码。

无论您选择哪种方法，都应该小心插入的JavaScript代码，以确保它不会破坏当前页面或危害您的计算机。


```
npx kill-port 3000
```



Mac 查看本机公网IP 命令

`curl ifconfig.me`
`curl -L ip.tool.lu`
`curl ipinfo.io/json`





## 颜色

在图形设计和颜色管理中，HSB、RGB 和 LAB 是常用的颜色表示方式，它们分别代表以下内容：

RGB（红绿蓝）：

RGB 是一种基于光的颜色表示方式，常用于计算机图形和屏幕显示。
它使用红色（Red）、绿色（Green）和蓝色（Blue）三个通道的值来描述颜色。
每个通道的值通常在 0 到 255 之间，其中 0 表示没有颜色，255 表示最大强度的颜色。
RGB 表示的颜色是加法混合的，通过调整这三个通道的值，可以得到各种颜色。
HSB（色相、饱和度、亮度）：

HSB 是一种将颜色分解为更容易理解的成分的颜色表示方式。
色相（Hue）表示颜色的种类，通常以角度度量，例如，红色在 0 度，绿色在 120 度，蓝色在 240 度。
饱和度（Saturation）表示颜色的纯度，0 表示无饱和度（灰阶），100 表示最大饱和度（鲜艳）。
亮度（Brightness）表示颜色的亮度，通常在 0 到 100 之间，0 表示黑色，100 表示白色。
LAB（CIELAB 或 Lab*）：

LAB 是一种颜色空间，旨在模拟人眼对颜色的感知方式。
L 表示亮度，取值范围通常是 0 到 100，0 表示黑色，100 表示白色。
a 和 b 表示颜色的色差。a 表示从绿色（负值）到红色（正值）的变化，而 b 表示从蓝色（负值）到黄色（正值）的变化。
LAB 空间的优点是它对颜色的变化更均匀，不像 RGB 和 HSB 那样在视觉上可能会出现不均匀的色彩转换。
这些颜色表示方式在不同的领域和应用中都有用处，选择合适的表示方式取决于您的需求和工作环境。例如，RGB 适用于屏幕显示和图形设计，而LAB 更适用于颜色管理和色彩科学研究。 HSB 则常用于在设计软件中直观地调整颜色。




https://github.com/unjs/untun



ssh root@192.168.31.2
