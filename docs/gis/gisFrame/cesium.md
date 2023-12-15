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
  new Cesium.HeadingPitchRange(heading, pitch, range),
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

copy(viewer.camera.position); //获取当前视角

function getRadiansOfCamera() {
  const position = viewer.camera.position.clone();
  const heading = viewer.camera.heading;
  const pitch = viewer.camera.pitch;
  const roll = viewer.camera.roll;
  return {
    destination: position, //三维笛卡尔坐标
    orientation: {
      heading,
      pitch,
      roll,
    },
  };
}
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
Cesium.GeoJsonDataSource.load('./data/beijing.geojson').then(function (
  dataSource,
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

## 加载模型


```javascript
var modelentity = viewer.entities.add({
  name: '123',
  description:
    "", // 这是模型的描述属性，可以是html标签
  position: Cesium.Cartesian3.fromDegrees(112.07, 35.05),
  model: {
    uri: 'Model/SFTDT.glb', // 资源路径
  };
})
```


## 链接

[经纬度](https://www.cnblogs.com/arxive/p/10256065.html)

[材质](https://blog.csdn.net/weixin_43805235/article/details/85112444)

[cesium大批量点位加载-pointprimitive]: http://t.zoukankan.com/s313139232-p-13409426.html

## 加载倾斜摄影

```javascript
var tileset = new Cesium.Cesium3DTileset({
  //相对路径
  url: 'http://data.marsgis.cn/3dtiles/max-piping2/tileset.json',
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

Cesium 中常用的坐标有两种 **WGS84 地理坐标系(104,30)** 和 **笛卡尔空间坐标系 Cartesian3**，WGS84 地理坐标系包括 WGS84 经纬度坐标系（没有实际的对象）和 WGS84 弧度坐标系（Cartographic）；

cesium 加载需使用天地图墨卡托显示的位置才是正确的 vec_w

#### 坐标转换


var Cartesian3_to_WGS84 = function (point) {
  var cartesian33 = new Cesium.Cartesian3(point.x, point.y, point.z);
  var cartographic = Cesium.Cartographic.fromCartesian(cartesian33);
  var lat = Cesium.Math.toDegrees(cartographic.latitude);
  var lng = Cesium.Math.toDegrees(cartographic.longitude);
  var alt = cartographic.height;
  return {lng: lng, lat: lat, alt: alt};
}

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

## 可学习的框架

supermap

mars3d

mti3d

x

heightReference

1
面状、点状、广告牌 (面貌似不用设置，但是他的 perPositionHeight 不能为 ture)
heightReference: HeightReference.CLAMP_TO_GROUND, //贴地

2 geojson
let promise = Cesium.GeoJsonDataSource.load(\_geojsondata, {

clampToGround: true

});

3
线状数据需要设置 clampToGround 的属性为 true。 作者：地理信息技术杂谈 https://www.bilibili.com/read/cv19452276?from=articleDetail 出处：bilibili

```
  for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];

        entity.polygon.material = new Color(12 / 255, 152 / 255, 207 / 255, 1);
        entity.polygon.outline = false;
        // entity.polygon.extrudedHeight = 100
        entity.polygon.outlineWidth = 10;
        // Cesium 设置Polygon轮廓线outlineWidth宽度
        entity.polyline = {
          positions: entity.polygon.hierarchy._value.positions,
          width: entity.polygon.outlineWidth,
          material: Color.YELLOW
      }

```

## 底图

````
 imageryProvider: createWorldImagery({
      style: IonWorldImageryStyle.ROAD,
    }),
    ```


## `Color`

````

    var defaultFill = Cesium.Color.fromBytes(255, 0, 0, 100);
    // var defaultFill = new Cesium.Color(160 / 255, 30 / 255, 240 / 255, 1);
    // var defaultFill = new Cesium.Color(255 / 255, 0 / 255, 0 / 255, 1);
    ```

      //默认的Cesium会加载一个bingMap底图，这个地图网络不太好，一般要先去掉这个默认的

viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

在 cesium 中 viewer.camera 和 viewer.scene.camera 的区别

viewer.flyTo 和 viewer.camera.flyTo 区别

前者是飞向一个实体 后者是飞向一个具体的坐标

map.viewer.scene.primitives.get(0) 查看属性

        var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function(movement) {
    const feature = viewer.scene.pick(movement.endPosition);
    if (feature instanceof Cesium.Cesium3DTileFeature) {
        const propertyIds = feature.getPropertyIds();
        const length = propertyIds.length;
        for (let i = 0; i < length; ++i) {
            const propertyId = propertyIds[i];
            console.log(`{propertyId}: ${feature.getProperty(propertyId)}`);
        }
    }

}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

http://data.mars3d.cn/3dtiles/bim-daxue/scenetree.json

map.on(mars3d.EventType.click, function(event) {
let feature = event.pickedObject;
//下面只是演示解释底层实现，在平台中直接通过 event.graphic.attr 可以获取属性
if (feature instanceof Cesium.Cesium3DTileFeature) {
let propertyNames = feature.getPropertyNames();
let length = propertyNames.length;
for (var i = 0; i < length; ++i) {
let propertyName = propertyNames[i];
console.log(propertyName + ': ' + feature.getProperty(propertyName));
}
}
});

蚊香？
material: new Cesium.Material({
fabric: {
type: 'VtxfShader1',
uniforms: {
color: new Cesium.Color(0.2, 1.0, 0.0, 1.0),
repeat: 30.0,
offset: 0.0,
thickness: 0.3,
},
source: `                                uniform vec4 color;
                                uniform float repeat;
                                uniform float offset;
                                uniform float thickness;
                                czm_material czm_getMaterial(czm_materialInput materialInput)
                                {
                                    czm_material material = czm_getDefaultMaterial(materialInput);
                                    float sp = 1.0/repeat;
                                    vec2 st = materialInput.st;
                                    float dis = distance(st, vec2(0.5));
                                    float m = mod(dis + offset, sp);
                                    float a = step(sp*(1.0-thickness), m);
                                    material.diffuse = color.rgb;
                                    material.alpha = a * color.a;
                                    return material;
                                }
                           `
},
translucent: false
}),

                    * 推荐使用 Notepade ++ 打开阅读；

1. 场景数据文件为 json 格式，输出路径为 /info/index.json ;
2. 示例数据如下
   {
   "version": "0.5",
   "created": "2019-08-12 16:31:32.618",
   "copyright": "Copyright BimAngle 2017-2019",
   "db":
   {
   "rootDbId": 1,
   "externalIds": [null, "doc", "91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e58", "", "", "f72ed939-20fb-4570-b23e-88f5281ad539-00022c59", "5c80e61e-acf5-442d-afcc-fefd6ffc74bf-001493d8", "91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e5f", "ec54546d-d2dd-4ba0-b637-29155aa29f08-00151623", "91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e75", "ec54546d-d2dd-4ba0-b637-29155aa29f08-00155837", "91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e7c", "b906fd0a-6f15-438c-96ae-71b6da03e3c6-0015ab26"],
   "parentIds": [-1, -1, 1, 1, 3, 4, 5, 1, 5, 1, 5, 1, 5],
   "names": [null, "Model", "MEP_C_5F(37.600)", "风管", "矩形风管", "半径弯头/接头", "半径弯头/接头 [1348568]", "MEP_C_6F(41.800)", "半径弯头/接头 [1381923]", "MEP_C_7F(46.000)", "半径弯头/接头 [1398839]", "MEP_C_8F(50.200)", "半径弯头/接头 [1420070]"],
   "categories": [null, "Revit Document", "Revit Level", "Revit Category", "Revit Family Name", "Revit Family Type", "Revit Duct", "Revit Level", "Revit Duct", "Revit Level", "Revit Duct", "Revit Level", "Revit Duct"],
   "types": [-1, 5, 2, 3, 3, 3, 4, 2, 4, 2, 4, 2, 4],
   "propPackIds": [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   "boundingBoxes": [null, [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], null, [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 22.1], null, [65.574, 2.573, 25.8, 67.774, 7.93, 26.3], null, [65.574, 2.573, 30.0, 67.774, 7.93, 30.5], null, [65.574, 2.573, 34.2, 67.774, 7.93, 34.7]]
   }
   }
3. 所有数据保存在 db 字段中，详细说明如下:
   3.1 概述
   a. 整个场景是按树形结构组织的，每个节点都有一个唯一 id, 称为 dbId；
   b. db.rootDbId 保存场景树跟节点的 dbId 值;
   c. db 的其它字段类型都是数组，数组的索引值就是对应的 dbId。比如要获取 dbId = 10 这个节点的节点名称，可以取值: db.names[10];
   3.2 字段描述
   a. db.rootDbId: 类型为 int，根节点的 id 值;
   b. db.externalIds: 类型为 string[]，节点的外部 ID，用于关联原始 BIM 模型中的构件。例如对于 rvt 模型，这里保存的是对应构件的 element.UniqueId (Revit Api);
   c. db.parentIds: 类型为 int[], 节点的父节点 dbId。例如要获取 dbId = 10 这个节点的父节点 dbId，可以取值: db.parentIds[10];
   d. db.names: 类型为 string[], 节点的名称。比如要获取 dbId = 10 这个节点的名称，可以取值: db.names[10];
   e. db.categories: 类型为 string[], 节点的分类。取值方法同上；
   f. db.types: 类型为 int[], 节点的几何分类，主要参考了 Navisworks 的标识方式。详细定义: -1: 无效, 0,1: 未知, 2: 图层(layer), 3:集合(collection), 4:组合(composite), 5: 模型(model)
   g. db.propPackIds: 类型为 int[], 节点的详细属性包 id。例如要获取 dbId = 10 这个节点的详细数据，可以加载这个 json 文件: /info/{db.propPackIds[10]}.json ;
   h. db.boundingBoxes, 类型为 double[][6], 节点的空间包围盒信息，内容为: [minX, minY, minZ, maxX, maxY, maxZ];
   如果希望将视角定位某个节点的范围，可以调用以下代码:

function zoomToFeature(viewer, tileset, db, dbId){
var box = db.boundingBoxes[dbId];
if(!!box) return false;

var minX = box[0];
var minY = box[1];
var minZ = box[2];
var maxX = box[3];
var maxY = box[4];
var maxZ = box[5];

var sphere = Cesium.BoundingSphere.transform(
Cesium.BoundingSphere.fromCornerPoints(new Cesium.Cartesian3(minX, minY, minZ), new Cesium.Cartesian3(maxX, maxY, maxZ)),
tileset.root.computedTransform,
new Cesium.BoundingSphere()
);
var camera = viewer.scene.camera;
var offset = new Cesium.HeadingPitchRange(camera.heading, camera.pitch, 0);
camera.flyToBoundingSphere(sphere, {offset: offset});  
 return true;
}




map.viewer.scene.globe.depthTestAgainstTerrain 默认是false，也就是不使用深度检测，所以模型会遮挡地形，导致模型无法显示在地形下面。


supermap 默认设置的是true
