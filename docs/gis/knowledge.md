<!--
 * @Descripttion:
 * @version:
 * @Author: zl
 * @Date: 2022-09-21 17:46:26
 * @LastEditors: zl
 * @LastEditTime: 2022-09-29 10:44:13
-->

## Shp 数据格式说明

[数据格式说明](https://zhuanlan.zhihu.com/p/362478883)

## 坐标系

WGS84(4326) 标准 gps 系统用的 个人获取不到

天地图（接近于 WGS84 坐标系统的 GCJ2000）4490 政府单位

BD-09 百度地图（BD09 坐标系统） 百度坐标系，百度自研，百度地图使用

GCJ-02 高德地图（火星坐标系统）、腾讯地图（火星坐标系统） 火星坐标系，国测局 02 年发布的坐标体系，高德，腾讯等使用。

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
