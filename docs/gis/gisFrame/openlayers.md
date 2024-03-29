# openlayers

## Openlayers API 整理-思否

[Openlayers API 整理-思否](https://segmentfault.com/a/1190000020297846)

## openLayer 点击要素获取对应的属性信息

1.首先是 map 的点击事件

```javascript
const map = this.map;
map.on("click", function (evt) {
  var coordinate = evt.coordinate; //获取点击要素的位置coordinate[0]为精度coordinate[1]为纬度
  /****************************************************/
  //判断当前单击处是否有要素，捕获到要素时弹出popup
  var feature = map.forEachFeatureAtPixel(
    evt.pixel,
    function (feature, layerVetor) {
      return feature;
    }
  );
  if (feature) {
    //捕捉到要素

    // featuerInfo = feature.getProperties().features[0].N.attribute;
    console.log(
      "获取到点击的要素" + "jingdu:" + coordinate[0] + feature.get("lei")
    ); //其中lei是定义的属性
  }
});
```

2.使用 Select 进行要素的选择

```javascript
//定义select控制器，点击标注后的事件
const map = this.map;
var select = new Select();
//map加载该控件，默认是激活可用的
map.addInteraction(select);
select.on("select", function (e) {
  console.log("选中要素");
  // console.log(e.selected[0].get('name')); //打印已选择的Feature的name属性
  var currentRome = e.selected[0]; //获取当前选中的节点
});
```

## openLayer 点击 wms 获取对应的属性信息

通过 `getFeatureInfoUrl`获取 url, url 请求返回对应的 Feature (老版本为`getGetFeatureInfoUrl`)
可以返回具体的 html、json

## openLayer 获取图层是 geojson 类型

方法一

```javascript
const source = layer.getSource();
const features = source.getFeatures();
const geometry = features[0].getGeometry();
const geojsonType = geometry.getType();
```

方法二

```javascript
const source = layer.getSource();
const features = source.getFeatures();
const geometry = features[0].getGeometry();

geometry instanceof LineString;
```

## 坐标转换

```javascript
transform([11305782.573945541, 3957322.3425137387], "EPSG:3857", "EPSG:4326"); //由投影 转向 普通经纬度
ol.proj.fromLonLat([37.41, 8.82]); //由普通经纬度 转向 投影
```

## 坐标系

```javascript
    projection: 'EPSG:3857', //默认是投影坐标，所以可以不用设置
    center: ol.proj.fromLonLat([117.244302, 31.822944]),//因为projection是设置的投影坐标，需要将经纬度坐标转换为投影坐标
```

```javascript
   projection: "EPSG:4326",
   center: [104.04754138059005, 30.657127519105]
```

## ---

[OpenLayers 3 之 动态点扩散效果](https://blog.csdn.net/qingyafan/article/details/49848455?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase)

## flyTo

```javascript
this.map
  .getView()
  .animate({ zoom: 10 }, { center: fromLonLat(JSON.parse(info.point)) }); //先放大再移动
this.map
  .getView()
  .animate({ center: fromLonLat(JSON.parse(info.point)) }, { zoom: 10 }); //先移动再放大
this.map
  .getView()
  .animate({ center: fromLonLat(JSON.parse(info.point)), zoom: 10 }); //同时移动和放大  还可以加一个属性duration: 10000
```

## 飞行方式

### animate `view.animate`

### fit view.fit

````

## 最佳可视范围和限制缩放

[openlayers 中设置地图最佳可视范围和限制缩放](https://blog.csdn.net/qq_34817440/article/details/104232186?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-2-104232186.nonecase&utm_term=openlayers%E6%98%BE%E7%A4%BA%E5%9C%B0%E5%9B%BE%E8%8C%83%E5%9B%B4&spm=1000.2123.3001.4430)

## 点击高亮区域

```javascript
   singleClickFun () {
      const self = this
      function mapClick (e) {
        //点击后先判断feature是否存在，如果存在就先还原
        if (self.feature) {
          self.feature.setStyle(new OlStyleStyle({
            stroke: new OlStyleStroke({
              color: '#000',
              width: 2
            }),
            fill: new OlStyleFill({
              color: [38, 155, 0, 0.3]	//使用了一个数组，[r,g,b,a]
            })
          }))
        }
        let pixel = self.map.getEventPixel(e.originalEvent);
        let featureInfo = self.map.forEachFeatureAtPixel(pixel, (feature) => {
          return feature
        })
        self.feature = featureInfo
        const name1 = featureInfo.getProperties().name
        console.log(featureInfo, "feature")
        console.log(featureInfo.ol_uid)
        featureInfo.setStyle(new OlStyleStyle({
          fill: new OlStyleFill({
            color: 'rgba(57,255,155,0.26)'
          }),
          stroke: new OlStyleStroke({
            color: 'rgba(193,180,213,0.5)',
            width: 2
          }),
          text: new OlStyleText({
            text: name1,
            font: '18px Calibri,sans-serif',
            fill: new OlStyleFill({
              color: '#000000'
            })
          })
        }))
      }
      this.map.on('singleclick', event => {
        mapClick(event)
      })
    },



````

## 添加的图层居中显示

```javascript
let extent = layerJson.getSource().getExtent();
this.map.getView().fit(extent);
```

## Openlayers 获取单个要素 feature 的几何类型

`feature.getGeometry().getType()`

`feature.getProperties().geometry instanceof Point`

## 坐标系注册

[epsg](https://epsg.io/)

```

import { register } from 'ol/proj/proj4'
import proj4 from "proj4"
proj4.defs(
  'EPSG:4548',
  '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs'
)
register(proj4)
```

```
//指定输出坐标
   format: new GeoJSON({
      dataProjection: 'EPSG:4544', // 元数据的投影坐标
      featureProjection: 'EPSG:4326' // 规定要素以哪种坐标显示
    }),
```


```
function getLayerById(map, layerId) {
  const layers = map.getLayers().getArray();
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].get('id') === layerId) {
      return layers[i];
    }
  }
  return null;
}

  getLayerByName(name) {
  return  this.map.getLayers().getArray().find(item => {
      return item.get("name") == name 
    })
  },
```


openlayers加载gif三种方案
1.gifler
2 overlay
3 几张不同帧的图片循环渲染



[openlayer中加载geojson的几种方式](https://blog.csdn.net/qq_40323256/article/details/107817399)

```
new VectorSource({
        url: data,
        format: new GeoJSON(),
      });



new VectorSource({
        features: new GeoJSON().readFeatures(data),
      });



      ```

扩散圈
一直循环往复
向外扩散



学习路线 

iClient-JavaScript-master

https://github.com/NieuwlandGeo/SLDReade
dzsp

// 闪烁方法
let interval
function flash(feature, speed) {
  const defaultStyle = olStyle.getPointStyle(feature);
  const hoverStyle = olStyle.getPointStyle(feature, true);

  //停止闪烁的标志
  let flag = 0;
  interval && clearInterval(interval);
  //闪烁方法对象
  interval = setInterval(function () {
    //闪烁次数
    if (flag <= 1 * 20) {
      if (flag % 2 == 0) {
        feature.setStyle(defaultStyle);
      } else {
        feature.setStyle(hoverStyle);
      }
      flag++;
    } else {
      //停止闪烁,还原样式,删除间隔对象
      feature.setStyle(defaultStyle);
      window.clearInterval(interval);
    }
    //间隔时间
  }, speed * 100);
}
