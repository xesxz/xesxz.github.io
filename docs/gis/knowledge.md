<!--
 * @Descripttion:
 * @version:
 * @Author: zl
 * @Date: 2022-09-21 17:46:26
 * @LastEditors: zl
 * @LastEditTime: 2022-09-29 10:44:13
-->

## Shp 数据格式说明


必要的三个文件  shp  shx dbf





### 格式转换

shp 转 geojson

GDAL 数据转换工具 [mars3d](http://mars3d.cn/dev/guide/data/geojson.html#_4-geojson%E6%A0%BC%E5%BC%8F%E4%BB%8B%E7%BB%8D)

[数据格式说明](https://zhuanlan.zhihu.com/p/362478883)

## 坐标系

WGS84(4326) 标准 gps 系统用的 个人获取不到

天地图（接近于 WGS84 坐标系统的 GCJ2000）4490 政府单位

BD-09 百度地图（BD09 坐标系统） 百度坐标系，百度自研，百度地图使用

GCJ-02 高德地图（火星坐标系统）、腾讯地图（火星坐标系统） 火星坐标系，国测局 02 年发布的坐标体系，高德，腾讯等使用。


1. 目前常用GIS坐标系
EPSG:4326坐标系：目前最通用的标准坐标系，平时我们常说的经度纬度多少多少、从GPS 设备、智能手机中取出的数据的坐标系、国际地图提供商使用的坐标系 都是这个坐标系。WGS－84坐标系（World Geodetic System）是一种国际上采用的地心坐标系。坐标原点为地图质心，其地心空间直角坐标系的Z轴指向国际时间局（BIH）1984.0定义的协议地极（CTP）方向，X轴指向BIH1984.0的协议子午面和CTP赤道的交点，Y轴与Z轴、X轴垂直构成右手坐标系，称为1984年世界大地坐标系。这是一个国际协议地图参考系统（ITRS），是目前国际上统一采用的大地坐标系。GPS广播星历是以WGS-84坐标系为根据的。【wgs84需要保证坐标误差最小】
EPSG:3857坐标系：Web Mercator（墨卡托）投影坐标系，该坐标系是由Google 最先发明的。在投影过程中，将表示地图的参考椭球体近似的作为正球体处理（正球体半径 R = 椭球体半长轴 a）。由于墨卡托投影当纬度接近两极时，y值趋向于无穷大，那些“懒惰的工程师”为了方便，就把Y轴的取值范围也限定在X轴相同范围，搞个正方形地图，而形成了Web Mercator 投影。 目前在互联网上的大部分全国公众地图网站均采用此坐标系。【墨卡托最早用来航海，要保证方向误差最小】
EPSG:4490坐标系：2000国家大地坐标系，是我国当前最新的国家大地坐标系，英文名称为China Geodetic Coordinate System 2000，英文缩写为CGCS2000。2000国家大地坐标系是全球地心坐标系在我国的具体体现，其原点为包括海洋和大气的整个地图的质量中心。Z轴指向BIH1984.0定义的协议极地方向（BIH国际时间局），X轴指向BIH1984.0定义的零子午面与协议赤道的交点，Y轴按右手坐标系确定。
CGCS2000 高斯平面投影坐标系(EPSG:4491至EPSG:4554)：支持CGCS2000 Gauss-Kruger Zone 和 CGCS2000 Gauss-Kruger CM 的3度带和6度带平面投影。【各种投影坐标系为了本区域的面积、长度的测量误差最小】




## 各种地图服务

[Web 地图服务规范(WMS、WMTS、TMS)简析](https://blog.csdn.net/oYinHeZhiGuang/article/details/115731622)

WMS：

WMTS： 与 wms 最大的区别的采用缓存技术缓解服务器压力

wfs 返回 json 或者 xml 这些

## OGC 规范

[OGC 标准介绍¶](https://www.osgeo.cn/doc_ogcstd/ogc_standard/index.html)

## ol 加载 mvt 地图

[ol 加载 mvt 地图](./ol加载mvt.md)

## 成都 bbox

` [102.992886, 30.089615, 104.89738, 31.435321]`

## 倾斜摄影测量与 BIM 技术实现城市三维模型的构建与应用

[倾斜摄影测量与 BIM 技术实现城市三维模型的构建与应用](./倾斜摄影测量与BIM技术实现城市三维模型的构建与应用.md)

## 互联网地图

`VUE_APP_GIS_BASEMAP_URL:["http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=","http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk="],`

## geoserver

配置 pdf：将四个 jar 包复制到指定目录，重启服务

跨域：

`C:\geoserver-2.21.1-bin\webapps\geoserver\WEB-INF`

```
Uncomment following filter to enable CORS
    <filter-mapping>
        <filter-name>cross-origin</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

tip

shp 文件中有个 cpg 文件定义文字方式 默认没有应该是选择 GBK
在添加 Shpfile 数据存储时，有一个 DBF 文件的字符集的选项，即属性文件的编码，平时所说的 shp 文件编码，实际上就是说的 DBF 文件编码，如果该选项设置与 DBF 文件的本身的编码不一致则有可能会导致乱码。

默认在创建 shp 文件之后，会产生一个同名的\*.cpg 文件，其记录了 dbf 文件的编码。在 ArcGIS 10.2.1 之前的版本，创建 shp 文件的时候，其编码类型是由操作系统的语言区域设置（language locale）决定的，对于简体中文的 windows 系统，一般都是 GBK 编码；而从 ArcGIS 10.2.1 版本以及之后的版本，shp 文件都是默认 UTF-8 编码的。

字体
http://10.1.47.189:18091/geoserver/rest/fonts

## B3dm
B3dm，Batched 3D Model，成批量的三维模型的意思。
倾斜摄影数据（例如osgb）、BIM数据（如rvt）、传统三维模型（如obj、dae、3dMax制作的模型等），均可创建此类瓦片。