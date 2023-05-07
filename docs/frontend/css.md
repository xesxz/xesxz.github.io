## 居中

```css
/* 方案一flex */

/* 方案二定位+translate 此方案不需要知道元素的宽高*/
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: cyan;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* 方案三定位加上 margin-left margin-top 负的宽高 */
.box{
       position: absolute;
       left: 50%;
       top: 50%;
       margin-left: -200px;
       margin-top: -200px;
       width: 400px;
       height: 400px;
       border: 1px solid;
}
/* 方案四定位加上 四个方向0 margin auto */

.box{
      position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       margin: auto;
}


```

## 过渡

```css
transition: background-color 1s linear;
```

## 单行文本溢出

```css
div {
  width: 400px;
  height: 100px;
  border: 1px solid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## flex 弹性盒布局，最后一行左对齐

```css
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul:after {
  content: "";
  width: 32%;
}
ul li {
  width: 32%;
  height: 40px;
  margin-bottom: 10px;
  background: #2fbaff;
}
```

<iframe id="iframe" height=100 width=80% frameborder=0 allowfullscreen="true" src="/html/flex.html">  
 </iframe>

## hover-label-animation

<iframe id="iframe" height=50 width=80% frameborder=0 allowfullscreen="true" src="/html/hover-label-animation.html">  
 </iframe>

## [iconfont 卡片 hover 样式](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

```css
.rec-card:hover {
  transform: scale(1.05);
  background: #fff;
}

.rec-card {
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
}
```

## iconfont 的使用方法

[iconfont 的使用方法](https://blog.csdn.net/qq_39176732/article/details/81390423)

## [Echarts 实现隐藏 x 轴，y 轴，刻度线，网格](https://www.cnblogs.com/xiaojun-zxj/p/8327683.html)

```javascript
    xAxis: {
          splitLine: {
            show: false  //是否显示分割线
          },
          axisLine: {
            show: false  //是否显示x轴的坐标轴
          },
          axisLabel: {
            show: false //是否显示x轴的label
          },
          axisTick: {
            show: false //是否显示x轴的刻度
          }
        },

```

## 水球

```javascript
option = {
  backgroundColor: "#050038",
  title: {
    text: "ewfw",
    textStyle: {
      fontWeight: "normal",
      fontSize: 25,
      color: "rgb(97, 142, 205)",
    },
  },
  series: [
    {
      type: "liquidFill",
      radius: "45%",
      center: ["50%", "50%"],
      data: [0.5, 0.5, 0.5],
      backgroundStyle: {
        borderWidth: 1,
        color: "rgb(255,0,255,0.1)",
      },
      label: {
        normal: {
          formatter: (0.5 * 100).toFixed(2) + "%",
          textStyle: {
            fontSize: 50,
          },
        },
      },
    },
  ],
};
```

## scss- 条件语句 循环语句使用

[scss- 条件语句 循环语句使用](https://blog.csdn.net/weixin_40054326/article/details/103054843)

## 安装 sass

`npm install sass-loader@7.3.1 node-sass@4.14.1 --save-dev `

`npm install node-sass sass-loader --save-dev`

`cnpm install --save less less-loader`

` import less from 'less' Vue.use(less);`

## el-dialog 从底部弹出的动画效果

```css
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}
```

## 呼吸

![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202208161129581.png?token=AFPLVXUTCTHYASVQ3A77ECTC7MHUQ)
[呼吸](http://k21vin.gitee.io/front-end-data-visualization/#/native/pureCSS/loading)


## 样式是通过class添加的，可以通过getComputedStyle获取样式
```
var element = document.querySelector('.my-class');
var computedStyle = window.getComputedStyle(element);
var backgroundColor = computedStyle.backgroundColor;
```