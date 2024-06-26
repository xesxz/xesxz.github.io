## 前置说明

这篇介绍的在 [Awesome GIS](https://github.com/sshuair/awesome-gis "https://github.com/sshuair/awesome-gis") 基本上都有，经过我的筛选，在 `npmjs.com` 上也都能找到，方便融入日益强大的 npm 生态。不过这些库大部分都保留了全局库的形式，在非框架中也能使用。有一部分是浏览器 + NodeJS 双端可用的。

## 1\. 与数据格式转换解析相关

## 1.1. 解析和转换 WKT 几何数据

如果只是完成 `WKT` 与 `GeoJSON` 这两个格式之间的转换，那么下面任意一个都能完成你的任务，选库体积最小的即可。否则，就按需选择，就个人体验而言，`@terraformer/wkt` 这个库比较均衡。

下面用表格对比这几个库。

|  | wkt | @terraformer/wkt | wkt-parser-helper | @syncpoint/wkx |
| --- | --- | --- | --- | --- |
| ts类型 | 无 | 有，额外安装 | ts 源码 | 有 |
| 库大小 | 16.7 KB | 86.8 KB | 15.1 KB | 69.7 KB |
| 纯净度 | 0 依赖 | 0 依赖 | 1 依赖 | 1 依赖 |
| 丰富度 | parse + stringify | parse + stringify | parse + stringify | 丰富，还包括 WKB |
| API文档 | 有 | 有，详尽 | 有，详尽 | 有 |
| 更新 | 2019.11 | 2022.8 | 2022.8 | 2021.5 |

`@syncpoint/wkx` 是 `wkx` 这个库的改良版，主要是升级了一些过期的底层 API（适配 NodeJS）。

其实这些库的更新时间不必太在意，因为 `WKT` 这种规范已经发布多年，且足够简单，能用就行，主要是用得舒服。

库大小也并不是真正会包含在最终页面程序之中的大小，因为这些库有的用到 bundler，库大小是包含了多个文件的（例如不同模块风格的库文件、源程序文件等）。

## 1.2. 前端直接读取 GeoPackage - `@ngageoint/geopackage`

`GeoPackage` 是一种基于 SQLite3 定义来的简易单文件地理数据存储格式，文件后缀名是 `.gpkg`，可以被 QGIS、ArcGIS 读取，开源免费，支持扩展。

> 与 SpatialLite 均基于 SQLite3 是相似的，但是最大的不同是，SpatialLite 支持数据库的基本操作，而 GeoPackage 更像一种存粹仓库，不太像普通数据库一样能做查询。

```shell
pnpm add @ngageoint/geopackage
```

这里有一个使用这个库直接在页面读取 GeoPackage 文件中地理数据的网站 [GeoPackage Viewer](http://ngageoint.github.io/geopackage-viewer-js/ "http://ngageoint.github.io/geopackage-viewer-js/")。

此外，这个 `@ngageoint` 账户下还有一堆比较积极维护的库：

+   `@ngageoint/leaflet-geopackage` - Leaflet.js 的插件，允许把 gpkg 直接加载到 lf 地图中

剩下的是一些 NodeJS 才能用的（浏览器不能用）格式转换库：

+   `@ngageoint/geopackage-geojson-js` - NodeJS 端使用，GeoJSON 和 GeoPackage 互转
+   `@ngageoint/geopackage-xyz-js` - NodeJS 端使用，把 xyz 瓦片的 zip 包转为 GeoPackage
+   `@ngageoint/geopackage-pbf-js` - NodeJS 端使用，把 pbf 数据转为 GeoPackage
+   `@ngageoint/geopackage-mbtiles-js` - NodeJS 端使用，把 mbtiles 数据转为 GeoPackage
+   `@ngageoint/geopackage-csv-js` - NodeJS 端使用，把 csv 数据转为 GeoPackage
+   `@ngageoint/geopackage-shapefile-js` - NodeJS 端使用，把 shapefile zip 文件转为 GeoPackage

## 1.3. 前端直接读取 Esri Shapefile - `ts-shapefile`

Shapefile 是 Esri 的杰作，是一种多文件的数据格式，虽然我在各种场合不遗余力地推荐大家使用新的数据格式，但是总是有一些人还在问前端能不能解析 Shapefile。这个库源代码使用 TypeScript 编写，打包后支持类型提示（自带 `d.ts`）。

用于浏览器的打包库文件大约 100+ KB，可以接受。

```shell
pnpm add ts-shapefile
```

这个库的用法要到 GitHub 仓库看 [README](https://github.com/oyvindi/ts-shapefile "https://github.com/oyvindi/ts-shapefile")。

注意，Shapefile 规范本体并不含坐标系，所以本库不解析 `.prj` 文件中的坐标系信息。坐标系的操作库可以看本文第二节。

Mapbox 团队有一个用于写入 Shapefile 并下载为 zip 的库可供参考（纯 js，浏览器可用）：[shp-write](https://github.com/mapbox/shp-write "https://github.com/mapbox/shp-write")

> 注意，部分 npm 上的 shapefile 库是 NodeJS 后端库，浏览器不可用，例如 `shp2json`、`shp-write-stream`、`shp-stream` 等

## 1.4. 把 GDAL 搬进浏览器 - `gdal3.js`

GIS 开发界 GDAL 可谓是祖师爷级别的库，它为多种空间数据格式提供了驱动程序（解析器），集成了一些简单的算法实现。

与 npm 上的 [gdal](https://www.npmjs.com/package/gdal "https://www.npmjs.com/package/gdal") 库不同，`gdal` 库是 NodeJS 对 GDAL 的接口绑定，是后端库，浏览器不可用。（p.s，[gdal-async](https://www.npmjs.com/package/gdal-async "https://www.npmjs.com/package/gdal-async") 解决了 gdal 库非异步的问题，然而浏览器还是用不了）。

这个 [gdal3.js](https://www.npmjs.com/package/gdal3.js "https://www.npmjs.com/package/gdal3.js") 使用 `emscripten` 把 GDAL 转成了 `WebAssembly`，这样浏览器就能使用 GDAL 了，不过与绑定版本性能还是有所差异的。这个库的源码使用 TypeScript 编写。

```shell
pnpm add gdal3.js
```

由于支持了多种格式，携带的 WebAssembly 文件略多，这个库的体积也膨胀到了 `38.4 MB`，浏览器真的想用请谨慎考虑。

文档很详尽，因为携带了 wasm 等额外文件，所以在打包环境使用也要注意文件的拷贝，很时髦地在文档中告知了 Webpack、Vite 环境的浏览器应用应该怎么做。

## 1.5. 格式库小结

我在很多场合都表明：浏览器 + JavaScript 不应用于重度的数据转换，所以大部分重量级的格式转换应该由后端程序完成，其它语言（运行时）有更出色的实现，例如 C++、Java、C#.NET、Rustlang、NodeJS、Python 都有。

在浏览器端有时候是不得而为之。应付一些简单的格式转换还是能胜任的。

## 2\. 操作空间坐标系

## 2.1. 重投影 `proj4`

著名 C++ 投影库 `PROJ` 的 JavaScript 版本，ts 类型需要额外安装 `@types/proj4`。

```shell
pnpm add proj4
```

这个库仅支持单个坐标的转换，对于复杂的数据格式投影转换，需要借助更高层级的封装库，见下文。

## 2.2. 纠“火星”、“百度”加密坐标

```shell
pnpm add gcoord
```

国人开发的专门解决 “火星”、“百度” 等加密算法的问题。坊间通常称他们 “火星坐标系”、“百度坐标系”，实际上只是一些非公开的加密算法，这个库能将加密后的坐标通过拟合的方式比较准确地纠正。

其官方文档指出支持坐标数组和 GeoJSON 的转换。

## 2.3. 空间坐标系的 WKT 定义 - `spatialreference`

这个库并不是拿来做数据坐标系转换的，而是根据 `WKID` 取坐标系的 WKT 定义用的。

它没有 ts 定义，这是比较可惜的一点。它的默认查询模式需要联网，通过 `epsg.io` 在线 API 请求查询，所以在大陆环境可能有影响。

```shell
pnpm add spatialreference
```

用法举例：

```javascript
import SR from 'spatialreference'

new SR({}).wkidToWkt(4326, (err, wkt) => {
  if (!err) console.log(wkt)
})
```

这个库还支持在传入对象中添加数据库方面的数据，参考它的文档，允许从数据库中获取 WKT。

## 2.4. 空间坐标系的 PROJ 定义 - `epsg`

如果你没有在线环境，用不了 2.3 的库，那么可以使用 `epsg` 库获得坐标系的 `PROJ4` 定义。这个库自带了一个 JSON 字典。

```shell
pnpm add epsg
```

例子：

```javascript
import epsg from 'epsg'
console.log(epsg['EPSG:3857'])

// +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs
```

这个库是 commonjs 模块，需要借助 bundle 转换。

## 2.5. 从坐标系定义字符串推导 WKID - `get-epsg-code`

这个与 2.3、2.4 就是相反的操作了。

```shell
pnpm add get-epsg-code
```

例子：

```javascript
import getEPSGCode from 'get-epsg-code'

const proj4string = `+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs`
const wkid = getEPSGCode(proj4string)
// 3857
```

它的文档说支持几乎所有格式，WKT、proj4、esriproj 均可尝试：[在线测试](https://get-epsg-code.netlify.app/ "https://get-epsg-code.netlify.app/")。

## 2.6. 对 GeoJSON 的重投影 - `reproj-helper`、`reproject`

前者由 TypeScript 写成，在其 `dist/` 下的打包成果文件中，是将 `proj4` 打包进去了，所以体积会略大（因为 `proj4` 本身就有 900+KB），好处是 API、说明文档较齐全，也有类型提示，不过缺点是对 GeoJSON 没有使用定义，而是粗暴地设为 `any`。

```shell
pnpm add reproj-helper
```

举例：

```javascript
import RH from 'reproj-helper'

const pointFeature = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "coordinates": [
      27.896140109578766,
      20.219492193232625
    ],
    "type": "Point"
  }
}
const rp = new RH.ReProjector()
rp.from('4326')
rp.to('3857')
rp.feature(pointFeature)
const result = await rp.project()
```

后者就比较轻量化了，发布到 npmjs.com 上的包不含打包成果，但是在安装依赖时也会把 `proj4` 安装进来，专心于 GeoJSON 对象的转换，支持校验 GeoJSON 是否存在坐标系定义。这个就没有 ts 类型提示了：

```shell
pnpm add reproject
```

举例：

```javascript
import { reproject } from 'reproject'

const pointFeature = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "coordinates": [
      27.896140109578766,
      20.219492193232625
    ],
    "type": "Point"
  }
}
console.log(reproject(
  pointFeature,
  '+proj=longlat +datum=WGS84 +no_defs +type=crs',
  '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs +type=crs'
))
```

## 3\. 简易空间分析与几何运算

## 3.1. JTS 的移植 - `jsts`

JTS 有个 C++ 的儿子 `GEOS`，然后又有个 JavaScript 的儿子 `jsts`。`JTS` 是 Java 编写的几何库，其地位无需多言。

```shell
pnpm add jsts
pnpm add @types/jsts -D
```

之前写过一篇如何用它的文章，以缓冲分析为例：

```javascript
import JSTSWKTReader from 'jsts/org/locationtech/jts/io/WKTReader'
import JSTSGeoJSONWriter from 'jsts/org/locationtech/jts/io/GeoJSONWriter'
import JSTSBufferOp from 'jsts/org/locationtech/jts/operation/buffer/BufferOp'
 ​
const wkt = `POINT (0 0)`
const bufferCenter = new JSTSWKTReader().read(wkt)
const bufferResult = JSTSBufferOp.bufferOp(
  bufferCenter,
  10
) // instanceof Geometry
 ​
const bufferResultGeoJSON = new JSTSGeoJSONWriter().write(bufferResult)
```

如果不熟悉其包结构和 JTS 的用法，我不是很推荐直接上手使用 jsts。

## 3.2. 给 GeoJSON 设计的简易版 “turf” - `@terraformer/spatial`

上文介绍 WKT 库时这个 `@terraformer` 账号有出现。这个库可以简易地对 GeoJSON 对象进行简单的空间分析，可以说是一个简单版本的 turf：

```shell
pnpm add @terraformer/spatial
```

它的类型库需要额外安装 `@types/terraformer__spatial -D`。

它具备 `applyConverter`（GeoJSON 要素顶点遍历器）、`intersects`、`convexHull`、`contains` 等非常简单的分析功能，见其 README 文档。

## 3.3. 其他一些几何图形变换与计算库

接下来这些几何库的 “GIS” 血缘就比较淡了，不过辅助用用也还是可以的。

|  | 类型提示 | 库大小 | 丰富度 | 文档 | 用途建议 |
| --- | --- | --- | --- | --- | --- |
| earcut | 额外安装 | 95.2 KB | 专一功能 | 齐备 | 离散几何多边形的三角化，生成三角网格 |
| hextile | 无 | 小于 50KB | 专一功能 | 基本齐全 | 生成渔网（支持若干种内置形状） |
| geometric | 额外安装 | 107 KB | 中等 | 齐备 | 简单几何运算，替代部分 turf 需求 |
| @flatten-js/core | ts 源码 | 5.68 MB | 丰富 | 完善 | 应对较为复杂几何图形的几何计算 |
| geometry-extrude | ts 源码 | 288 KB | 专一功能 | 齐备 | 挤出 polygon 成体，并三角化；基于 earcut |
| simplepolygon | 无 | 36.6 KB | 专一功能 | 齐备 | 处理 GeoJSON。将复杂的（即自交的）GeoJSON 多边形，分解为复合的简单、非自交的单环多边形。见 README |

## 3.4. 几何空间分析库小结

其实上述这些库还远远不够，开源社区总能找到宝藏，不过应该也足够使用了。我为什么没有把 `turf` 列出来呢？是因为 turf 的算法准确性、性能实在是拿不出手，群友们都反馈过这个问题，能不用还是尽量不要用了。

而且，复杂的几何计算我觉得还是交给后台计算程序比较好，前端能运算的终究有限。

## 4\. 地图库扩展

## 4.1. 为 ol、mapboxgl、leaflet.js 扩展绘图工具 - `terra-draw`

这个库是前端几个地图库（支持 OpenLayers V7、Leaflet.js V1.9、MapboxGL V2、Maplibre V2、GoogleMapAPI V3）的插件，由 TypeScript 写成，文档齐全，也有在线例子。

```shell
pnpm add terra-draw
```

在我写这篇文章时，它还在 alpha 阶段，不过可用性已经很不错了。官方示例指路：[TerraDraw](https://www.terradraw.io/ "https://www.terradraw.io/")

## 4.2. 为 leaflet.js 扩展的绘图工具

如题。这个绘图插件很强大，基本满足绝大多数 2D 绘制要求，体积也来到了 450 KB+。

```shell
pnpm add @geoman-io/leaflet-geoman-free
```

由 TypeScript 编写，支持多国语言，具有十分完善的文档。不过，它自带的按钮对于某些场景可能不太合适使用了（想自定义按钮样式、UI 逻辑的情况）。总体来说我打 98 分。

## 5\. 杂项

## 5.1. 中国大陆行政区划编码库

这个像个字典，小型项目（不具备数据库接口调用条件）适合使用。

```shell
pnpm add china-region
```

另有带类型提示的版本 `china-regions-ts`，不过我个人建议在找这类行政编码库时，尽量找最新版的。

## 5.2. 为 GeoJSON 增强类型提示 - `@types/geojson`

这个可以替代 GeoJSON 各级对象在你 TypeScript 项目中的 `any` 问题，注意要安装到开发依赖，这东西只是个类型库。

```shell
pnpm add @types/geojson -D
```

用法简单：

```typescript
import type { Polygon } from 'geojson'

// ...
```

## 5.3. 与 WFS 类似的 OGC Feature API 客户端实现库 - `@ogcapi-js/features`

OGC API 是什么我之前写过一篇入门介绍，是 OGC 正在开发推进的下一代 GIS 网络规范，涵盖方方面面。其中，`OGC Feature API` 就是 `WFS` 的下一代规范，也即原来打算的 `WFS 3.0`。

当满足 OGC Feature API 的服务启动后，可以用这个包来调用 `OGC Feature API` 规范定义的功能。

> 当前 OGC API 仍未完全落定，以最新版为准，可以关注 `@ogcapi-js` 这个账户下的新包。

```shell
pnpm add @ogcapi-js/features
```

用法也很简单。

```javascript
import { Service } from `@ogcapi-js/features`;

// 创建一个服务对象
const service = new Service({
  baseUrl: 'https://ogcapi.service.com'
});

// 调用接口获取数据集清单
const collections = await services.getCollections();
```

## 5.4. 操作 Esri 的投影定义对象

Esri 用户的小工具，不过也适用于部分需要坐标系 WKT 的场景，暴露一个 lookup 函数，传入 WKID 来查找坐标系对象：

```shell
pnpm add @esri/proj-codes
```

这个包略大，如无必要则不用，查找坐标系的工作应该让后端数据库完成。

```javascript
import codes from '@esri/proj-codes'

const crs = codes.lookup(3857)

crs.name
// 'WGS_1984_Web_Mercator_Auxiliary_Sphere'

crs.wkt
// 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984"...'

crs.description
// 'WGS 1984 Web Mercator Major Auxiliary Sphere'

crs.authority
// 'EPSG'

crs.deprecated
// 'no'

crs.extent
// { "slat": -85.06, "nlat": 85.06, "llon": -180.0, "rlon": 180.0 }

// this works too
codes.lookup(3857).name
// 'WGS_1984_Web_Mercator_Auxiliary_Sphere'
```

## 6\. 小结

这篇主要以浏览器前端为主，其实有一部分库在 NodeJS 后端也能用，譬如坐标系、格式转换、几何空间分析等。单独给后端 NodeJS 的也有，数据库、格式转换、图像算法的偏多，不过也逐渐淡去了 GIS 血缘，有机会再介绍吧。
