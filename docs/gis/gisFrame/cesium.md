# cesium

## **AlphaMode**

3DTile b3dm 内嵌的 glb 数据,glb 的 material 中 alphaMode 有三种模式

## **Animation**

控件 widget

## **AnimationViewModel**

## 第三方公司

[厦门图扑软件科技有限公司]()

[earthsdk](http://earthsdk.com/)

[数字视觉]()

## 视角

```javascript
1;
view.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(116.435314, 39.960521, 15000.0), //设置位置
  orientation: {
    heading: Cesium.Math.toRadians(20.0),
    pitch: cesium.Math.toRadians(-90.0),
    roll: 0,
  },
});

2;
view.camera.setView({
  destination: Cesium.Rectangle.fromDegrees(0.0, 20.0, 10.0, 30.0), //west, south, east, north

  orientation: {
    heading: Cesium.Math.toRadians(20.0), // 方向

    pitch: Cesium.Math.toRadians(-90.0), // 倾斜角度

    roll: 0,
  },
});

3;
var center = Cesium.Cartesian3.fromDegrees(-98.0, 40.0);
viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, -4790000.0, 3930000.0));

// 2. Using a HeadingPitchRange offset
var center = Cesium.Cartesian3.fromDegrees(-72.0, 40.0);
var heading = Cesium.Math.toRadians(50.0);
var pitch = Cesium.Math.toRadians(-20.0);
var range = 5000.0;
viewer.camera.lookAt(
  center,
  new Cesium.HeadingPitchRange(heading, pitch, range)
);
```

## 加载河流

```javascript
    loadWater () {
        let _this = this;
        _this.reqRoadrData(function (res) {
            let features = res.features;
            for (let i = 0; i < features.length; i++) {
                let geometry = features[i].geometry;
                let coordinates = geometry.coordinates[0][0];
                let geo = [];
                for (let j = 0; j < coordinates.length; j++) {
                    geo.push(coordinates[j][0], coordinates[j][1])
                }
                let data = {
                    geometry: geo, //水的geometry模板
                };
                let style = {
                    water_normals_map: './js/comps/water/waternormals.jpg', //水动效贴图
                    texture_width: 512,
                    texture_height: 512,
                    water_opacity: 1, //水的透明度
                    water_color: 0x3195fa, //水的颜色0x33CCFF
                    distortionScale: 4, //水中倒影清晰度（越大越不清晰）
                    fog: true, //开启雾化效果
                    water_size: 5 //水面起伏大小（越小越大）
                };
                let widget = _this.map.stage.addWidget(Vex.Water, data, style, null);
                widget.load(true);
            }
        })
    }
```

## 常用方法

```javascript
viewer.camera.computeViewRectangle(); //获取当前视角的 Rectangle

viewer.camera.positionCartographic.height; //获取相机高度

viewer.camera.position; //获取当前视角
```

## 事件

```javascript
If the mouse is over a point of interest, change the entity billboard scale and color
var previousPickedEntity = undefined;
const mousemove = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
 mousemove.setInputAction(function (movement) {
   var pickedPrimitive = viewer.scene.pick(movement.endPosition);
   var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
  if (Cesium.defined(previousPickedEntity)) {
     previousPickedEntity.label = null
     }
  if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {


   pickedEntity.label = {
      text: pickedEntity.properties._name._value,
      font: '15px SimHei ',
      width: 3,
      style: Cesium.LabelStyle.FILL,
    fillColor: new Cesium.Color(1, 1, 0),
       horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.TOP
     }
    previousPickedEntity = pickedEntity;
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
```

## 分色渲染

```javascript
Cesium.GeoJsonDataSource.load("./data/beijing.geojson").then(function (
  dataSource
) {
  viewer.dataSources.add(dataSource);
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    // 构造随机颜色
    var color = Cesium.Color.fromRandom({ alpha: 0.6 });
    entity.polygon.material = color;
    entity.polygon.outline = false;
  }
});
```

## 加载模型 12

```javascript
var modelentity = viewer.entities.add({
  name: "123",
  description:
    "<div><img src='Build/Cesium/Assets/Images/cesium_credit.png' /><p>这是一辆大车！</div>", // 这是模型的描述属性，可以是html标签
  position: Cesium.Cartesian3.fromDegrees(112.07, 35.05),
  model: {
    uri: "Model/SFTDT.glb", // 资源路径
  },
});
```

## 链接

[经纬度](https://www.cnblogs.com/arxive/p/10256065.html)

[材质](https://blog.csdn.net/weixin_43805235/article/details/85112444)

[cesium大批量点位加载-pointprimitive]: http://t.zoukankan.com/s313139232-p-13409426.html

## 加载倾斜摄影

```javascript
var tileset = new Cesium.Cesium3DTileset({
  //相对路径
  url: "http://data.marsgis.cn/3dtiles/max-piping2/tileset.json",
});
//添加到球体上
viewer.scene.primitives.add(tileset);
//定位过去
viewer.zoomTo(tileset);
```

## mti3d

面
areaLayer.\_contentVectorLayer.\_values.popupName = "exposePersonDetail";

聚合
clusterLayer.\_layer.\_options.popupName = "testPop";

关闭弹框
globe.globalOverlay.visible && globe.globalOverlay.setPosition(undefined);

关闭多个弹窗两种方式
window.mti3d.overlay.remove(item, window.globe);
overlay.destroy()


### 坐标系

Cesium中常用的坐标有两种 **WGS84地理坐标系(104,30)** 和 **笛卡尔空间坐标系Cartesian3**，WGS84地理坐标系包括 WGS84经纬度坐标系（没有实际的对象）和 WGS84弧度坐标系（Cartographic）；


cesium加载需使用天地图墨卡托显示的位置才是正确的  vec_w


#### 坐标转换

[cnblogs](https://www.cnblogs.com/matanzhang/p/11846929.html)
经纬度和弧度的转换
```
//方法一：
var longitude = Cesium.Math.toRadians(longitude1); //其中 longitude1为角度

var latitude= Cesium.Math.toRadians(latitude1); //其中 latitude1为角度

var cartographic = new Cesium.Cartographic(longitude, latitude, height)；

//方法二：
var cartographic= Cesium.Cartographic.fromDegrees(longitude, latitude, height);//其中，longitude和latitude为角度

//方法三：
var cartographic= Cesium.Cartographic.fromRadians(longitude, latitude, height);//其中，longitude和latitude为弧度
```





## 地形

```
      terrainProvider: new Cesium.ArcGISTiledElevationTerrainProvider({
    url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
  }),

     terrainProvider : Cesium.createWorldTerrain()


```