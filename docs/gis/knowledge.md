<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2022-09-21 17:46:26
 * @LastEditors: zl
 * @LastEditTime: 2022-09-26 16:48:53
-->
## Shp 数据格式说明

[数据格式说明](https://zhuanlan.zhihu.com/p/362478883)

## 坐标系

WGS84(4326) 标准 gps 系统用的 个人获取不到

天地图（接近于 WGS84 坐标系统的 GCJ2000）

BD-09 百度地图（BD09 坐标系统） 百度坐标系，百度自研，百度地图使用

GCJ-02 高德地图（火星坐标系统）、腾讯地图（火星坐标系统） 火星坐标系，国测局 02 年发布的坐标体系，高德，腾讯等使用。

4490 政府单位

## 各种地图服务
[Web地图服务规范(WMS、WMTS、TMS)简析](https://blog.csdn.net/oYinHeZhiGuang/article/details/115731622)

WMS：

WMTS： 与 wms 最大的区别的采用缓存技术缓解服务器压力

wfs 返回json或者xml这些


## OGC规范
[OGC标准介绍¶](https://www.osgeo.cn/doc_ogcstd/ogc_standard/index.html)

## ol 加载 mvt 地图

[ol 加载 mvt 地图](./ol加载mvt.md)

## 成都 bbox

` [102.992886, 30.089615, 104.89738, 31.435321]`

## 倾斜摄影测量与 BIM 技术实现城市三维模型的构建与应用

[倾斜摄影测量与 BIM 技术实现城市三维模型的构建与应用](./倾斜摄影测量与BIM技术实现城市三维模型的构建与应用.md)



## 互联网地图

`VUE_APP_GIS_BASEMAP_URL:["http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=","http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk="],`