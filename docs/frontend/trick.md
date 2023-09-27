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