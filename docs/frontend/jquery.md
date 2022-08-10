## js 和 jquery 对比记忆

### js 新增节点删除节点

```
  document.body.appendChild(document.createElement("a")) //新增节点
  document.querySelector("div").removeChild(document.querySelector("a")) //删除节点
```

### jquery 新增节点删除节点

```
    $('div').remove()  //删除被选中元素及其子元素
    $('div').empty()  //删除被选中元素的子元素
    注意元素包含文本节点
```

### js 修改属性

```
    document.querySelector('div').style.width = "500px"
    document.querySelector('div').className = "close"
```

### jquery 修改 css 属性

```
   $('div').css('color', "red")
    $('div').addClass('close')
```

### jquery 修改属性

```
   $('div').attr('src', "./")

```

### js 修改属性

```
 setAttribute

```

#### jquery 移除之后加上的属性

` bg2.removeAttr('style')`

#### jquery 修改 css 样式有两种写法

```
   $('div').css('background-image', "url(./wind1.png")
   $('div').css({ "background-image": "url(./wind1.png" })
```

## 添加多层的 dom，例如 ul li

```
   var ulinfo = document.createElement('ul');   //这一种是写死的
    ulinfo.innerHTML =
      `
<li>134</li>
<li>134qer</li>
`
    document.body.appendChild(ulinfo)
```

```
   var ulinfo = document.createElement('ul'),  这一种是动态添加
      fragment = document.createDocumentFragment()
    const arr = [
      123,
      134,
      25435
    ]
    for (var i = 0; i < arr.length; i++) {
      var li = document.createElement('li')
      li.innerHTML = arr[i]
      fragment.appendChild(li)
    }

    ulinfo.appendChild(fragment)
    document.body.appendChild(ulinfo)
```

https://www.webhek.com/post/javascript-documentfragment.html

fragment 是创建一个文档碎片，比如要在 ul 下面动态添加是个 li 循环的时候就要操作 dom10 次，为了性能的考虑，我们创建一个 fragment，他是不占位的空节点，先把 li 放在 fragment 里面，再把添加 fragment，这样就只操作了一次 dom。

# jquery

## jquery html

### jquery 获取、设置

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

### jquery 添加

- append(_content_) - 在被选元素的结尾插入内容（文本元素和新创建的 dom 元素都可以）
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容

注详情的参数看菜鸟教程比较好

### 删除元素/内容

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

### jQuery 操作 CSS

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

https://www.runoob.com/jquery/jquery-css.html 菜鸟教程

## 循环

```javascript
$.ajax({
  method: "get",
  url: "./product.json",
  success(res) {
    console.log(res);
    let content = "";
    const data = res.data.list;
    data.forEach((item) => {
      content += `
           <li>
            <img src="${item.image}" alt="">
            </li>
          `;
    });
    document.getElementsByTagName("ul")[0].innerHTML = content;
  },
});
```

## jquery 循环

```javascript
// $('ul')获取的是一个数组，但是要使用它的方法就  $('ul').html() 这样他取的是第一个
var list = [
  {
    name: "木易杨",
    src: "https://www.muyiy.cn/",
  },
];
var content = "";
$.each(list, function (i, val) {
  content += `<li><a href=${list[i].src} target="_blank">${list[i].name}</a></li>`;
  $("ul").html(content);
});
```
