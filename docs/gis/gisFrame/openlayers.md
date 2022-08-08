# openlayers

## openLayer 点击要素获取对应的属性信息

1.首先是 map 的点击事件

```
 const map = this.map;
       map.on('click', function(evt) {
          var coordinate = evt.coordinate;      //获取点击要素的位置coordinate[0]为精度coordinate[1]为纬度
        /****************************************************/
        //判断当前单击处是否有要素，捕获到要素时弹出popup
        var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layerVetor) { return feature; });
         if (feature) { //捕捉到要素

            // featuerInfo = feature.getProperties().features[0].N.attribute;
            console.log("获取到点击的要素" + "jingdu:" + coordinate[0] + feature.get('lei'));  //其中lei是定义的属性
         }
       })

```

2.使用 Select 进行要素的选择

```
//定义select控制器，点击标注后的事件
     const map = this.map;
     var select = new Select();
     //map加载该控件，默认是激活可用的
     map.addInteraction(select);
     select.on("select", function (e) {
       console.log("选中要素");
       // console.log(e.selected[0].get('name')); //打印已选择的Feature的name属性
             var currentRome = e.selected[0]; //获取当前选中的节点

    })

```

## openLayer 获取图层是 geojson 类型

方法一

```
  const source = layer.getSource()
  const features =  source.getFeatures()
  const geometry = features[0].getGeometry()
  const geojsonType = geometry.getType()
```

方法二

```
 const source = layer.getSource()
  const features =  source.getFeatures()
  const geometry = features[0].getGeometry()

  geometry instanceof LineString

```

## 坐标转换

ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857')

## ---

[OpenLayers 3 之 动态点扩散效果](https://blog.csdn.net/qingyafan/article/details/49848455?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase)
