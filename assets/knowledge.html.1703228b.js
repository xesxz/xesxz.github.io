import{_ as d,o as h,c as i,b as e,d as o,w as s,e as t,a as l,r}from"./app.ace0dae9.js";const c={},_=e("h2",{id:"shp-\u6570\u636E\u683C\u5F0F\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shp-\u6570\u636E\u683C\u5F0F\u8BF4\u660E","aria-hidden":"true"},"#"),t(" Shp \u6570\u636E\u683C\u5F0F\u8BF4\u660E")],-1),p=e("p",null,"\u5FC5\u8981\u7684\u4E09\u4E2A\u6587\u4EF6 shp shx dbf",-1),u=e("h3",{id:"\u683C\u5F0F\u8F6C\u6362",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u683C\u5F0F\u8F6C\u6362","aria-hidden":"true"},"#"),t(" \u683C\u5F0F\u8F6C\u6362")],-1),g=e("p",null,"shp \u8F6C geojson",-1),B=t("GDAL \u6570\u636E\u8F6C\u6362\u5DE5\u5177 "),m={href:"http://mars3d.cn/dev/guide/data/geojson.html#_4-geojson%E6%A0%BC%E5%BC%8F%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"},E=t("mars3d"),f={href:"https://zhuanlan.zhihu.com/p/362478883",target:"_blank",rel:"noopener noreferrer"},b=t("\u6570\u636E\u683C\u5F0F\u8BF4\u660E"),S=e("h2",{id:"\u5750\u6807\u7CFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5750\u6807\u7CFB","aria-hidden":"true"},"#"),t(" \u5750\u6807\u7CFB")],-1),x=e("p",null,"WGS84(4326) \u6807\u51C6 gps \u7CFB\u7EDF\u7528\u7684 \u4E2A\u4EBA\u83B7\u53D6\u4E0D\u5230",-1),G=e("p",null,"\u5929\u5730\u56FE\uFF08\u63A5\u8FD1\u4E8E WGS84 \u5750\u6807\u7CFB\u7EDF\u7684 GCJ2000\uFF094490 \u653F\u5E9C\u5355\u4F4D",-1),C=e("p",null,"BD-09 \u767E\u5EA6\u5730\u56FE\uFF08BD09 \u5750\u6807\u7CFB\u7EDF\uFF09 \u767E\u5EA6\u5750\u6807\u7CFB\uFF0C\u767E\u5EA6\u81EA\u7814\uFF0C\u767E\u5EA6\u5730\u56FE\u4F7F\u7528",-1),v=e("p",null,"GCJ-02 \u9AD8\u5FB7\u5730\u56FE\uFF08\u706B\u661F\u5750\u6807\u7CFB\u7EDF\uFF09\u3001\u817E\u8BAF\u5730\u56FE\uFF08\u706B\u661F\u5750\u6807\u7CFB\u7EDF\uFF09 \u706B\u661F\u5750\u6807\u7CFB\uFF0C\u56FD\u6D4B\u5C40 02 \u5E74\u53D1\u5E03\u7684\u5750\u6807\u4F53\u7CFB\uFF0C\u9AD8\u5FB7\uFF0C\u817E\u8BAF\u7B49\u4F7F\u7528\u3002",-1),w=e("ol",null,[e("li",null,"\u76EE\u524D\u5E38\u7528GIS\u5750\u6807\u7CFB EPSG:4326\u5750\u6807\u7CFB\uFF1A\u76EE\u524D\u6700\u901A\u7528\u7684\u6807\u51C6\u5750\u6807\u7CFB\uFF0C\u5E73\u65F6\u6211\u4EEC\u5E38\u8BF4\u7684\u7ECF\u5EA6\u7EAC\u5EA6\u591A\u5C11\u591A\u5C11\u3001\u4ECEGPS \u8BBE\u5907\u3001\u667A\u80FD\u624B\u673A\u4E2D\u53D6\u51FA\u7684\u6570\u636E\u7684\u5750\u6807\u7CFB\u3001\u56FD\u9645\u5730\u56FE\u63D0\u4F9B\u5546\u4F7F\u7528\u7684\u5750\u6807\u7CFB \u90FD\u662F\u8FD9\u4E2A\u5750\u6807\u7CFB\u3002WGS\uFF0D84\u5750\u6807\u7CFB\uFF08World Geodetic System\uFF09\u662F\u4E00\u79CD\u56FD\u9645\u4E0A\u91C7\u7528\u7684\u5730\u5FC3\u5750\u6807\u7CFB\u3002\u5750\u6807\u539F\u70B9\u4E3A\u5730\u56FE\u8D28\u5FC3\uFF0C\u5176\u5730\u5FC3\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7684Z\u8F74\u6307\u5411\u56FD\u9645\u65F6\u95F4\u5C40\uFF08BIH\uFF091984.0\u5B9A\u4E49\u7684\u534F\u8BAE\u5730\u6781\uFF08CTP\uFF09\u65B9\u5411\uFF0CX\u8F74\u6307\u5411BIH1984.0\u7684\u534F\u8BAE\u5B50\u5348\u9762\u548CCTP\u8D64\u9053\u7684\u4EA4\u70B9\uFF0CY\u8F74\u4E0EZ\u8F74\u3001X\u8F74\u5782\u76F4\u6784\u6210\u53F3\u624B\u5750\u6807\u7CFB\uFF0C\u79F0\u4E3A1984\u5E74\u4E16\u754C\u5927\u5730\u5750\u6807\u7CFB\u3002\u8FD9\u662F\u4E00\u4E2A\u56FD\u9645\u534F\u8BAE\u5730\u56FE\u53C2\u8003\u7CFB\u7EDF\uFF08ITRS\uFF09\uFF0C\u662F\u76EE\u524D\u56FD\u9645\u4E0A\u7EDF\u4E00\u91C7\u7528\u7684\u5927\u5730\u5750\u6807\u7CFB\u3002GPS\u5E7F\u64AD\u661F\u5386\u662F\u4EE5WGS-84\u5750\u6807\u7CFB\u4E3A\u6839\u636E\u7684\u3002\u3010wgs84\u9700\u8981\u4FDD\u8BC1\u5750\u6807\u8BEF\u5DEE\u6700\u5C0F\u3011 EPSG:3857\u5750\u6807\u7CFB\uFF1AWeb Mercator\uFF08\u58A8\u5361\u6258\uFF09\u6295\u5F71\u5750\u6807\u7CFB\uFF0C\u8BE5\u5750\u6807\u7CFB\u662F\u7531Google \u6700\u5148\u53D1\u660E\u7684\u3002\u5728\u6295\u5F71\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u8868\u793A\u5730\u56FE\u7684\u53C2\u8003\u692D\u7403\u4F53\u8FD1\u4F3C\u7684\u4F5C\u4E3A\u6B63\u7403\u4F53\u5904\u7406\uFF08\u6B63\u7403\u4F53\u534A\u5F84 R = \u692D\u7403\u4F53\u534A\u957F\u8F74 a\uFF09\u3002\u7531\u4E8E\u58A8\u5361\u6258\u6295\u5F71\u5F53\u7EAC\u5EA6\u63A5\u8FD1\u4E24\u6781\u65F6\uFF0Cy\u503C\u8D8B\u5411\u4E8E\u65E0\u7A77\u5927\uFF0C\u90A3\u4E9B\u201C\u61D2\u60F0\u7684\u5DE5\u7A0B\u5E08\u201D\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u5C31\u628AY\u8F74\u7684\u53D6\u503C\u8303\u56F4\u4E5F\u9650\u5B9A\u5728X\u8F74\u76F8\u540C\u8303\u56F4\uFF0C\u641E\u4E2A\u6B63\u65B9\u5F62\u5730\u56FE\uFF0C\u800C\u5F62\u6210\u4E86Web Mercator \u6295\u5F71\u3002 \u76EE\u524D\u5728\u4E92\u8054\u7F51\u4E0A\u7684\u5927\u90E8\u5206\u5168\u56FD\u516C\u4F17\u5730\u56FE\u7F51\u7AD9\u5747\u91C7\u7528\u6B64\u5750\u6807\u7CFB\u3002\u3010\u58A8\u5361\u6258\u6700\u65E9\u7528\u6765\u822A\u6D77\uFF0C\u8981\u4FDD\u8BC1\u65B9\u5411\u8BEF\u5DEE\u6700\u5C0F\u3011 EPSG:4490\u5750\u6807\u7CFB\uFF1A2000\u56FD\u5BB6\u5927\u5730\u5750\u6807\u7CFB\uFF0C\u662F\u6211\u56FD\u5F53\u524D\u6700\u65B0\u7684\u56FD\u5BB6\u5927\u5730\u5750\u6807\u7CFB\uFF0C\u82F1\u6587\u540D\u79F0\u4E3AChina Geodetic Coordinate System 2000\uFF0C\u82F1\u6587\u7F29\u5199\u4E3ACGCS2000\u30022000\u56FD\u5BB6\u5927\u5730\u5750\u6807\u7CFB\u662F\u5168\u7403\u5730\u5FC3\u5750\u6807\u7CFB\u5728\u6211\u56FD\u7684\u5177\u4F53\u4F53\u73B0\uFF0C\u5176\u539F\u70B9\u4E3A\u5305\u62EC\u6D77\u6D0B\u548C\u5927\u6C14\u7684\u6574\u4E2A\u5730\u56FE\u7684\u8D28\u91CF\u4E2D\u5FC3\u3002Z\u8F74\u6307\u5411BIH1984.0\u5B9A\u4E49\u7684\u534F\u8BAE\u6781\u5730\u65B9\u5411\uFF08BIH\u56FD\u9645\u65F6\u95F4\u5C40\uFF09\uFF0CX\u8F74\u6307\u5411BIH1984.0\u5B9A\u4E49\u7684\u96F6\u5B50\u5348\u9762\u4E0E\u534F\u8BAE\u8D64\u9053\u7684\u4EA4\u70B9\uFF0CY\u8F74\u6309\u53F3\u624B\u5750\u6807\u7CFB\u786E\u5B9A\u3002 CGCS2000 \u9AD8\u65AF\u5E73\u9762\u6295\u5F71\u5750\u6807\u7CFB(EPSG:4491\u81F3EPSG:4554)\uFF1A\u652F\u6301CGCS2000 Gauss-Kruger Zone \u548C CGCS2000 Gauss-Kruger CM \u76843\u5EA6\u5E26\u548C6\u5EA6\u5E26\u5E73\u9762\u6295\u5F71\u3002\u3010\u5404\u79CD\u6295\u5F71\u5750\u6807\u7CFB\u4E3A\u4E86\u672C\u533A\u57DF\u7684\u9762\u79EF\u3001\u957F\u5EA6\u7684\u6D4B\u91CF\u8BEF\u5DEE\u6700\u5C0F\u3011")],-1),A=e("h2",{id:"\u5404\u79CD\u5730\u56FE\u670D\u52A1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5404\u79CD\u5730\u56FE\u670D\u52A1","aria-hidden":"true"},"#"),t(" \u5404\u79CD\u5730\u56FE\u670D\u52A1")],-1),I={href:"https://blog.csdn.net/oYinHeZhiGuang/article/details/115731622",target:"_blank",rel:"noopener noreferrer"},M=t("Web \u5730\u56FE\u670D\u52A1\u89C4\u8303(WMS\u3001WMTS\u3001TMS)\u7B80\u6790"),k=e("p",null,"WMS\uFF1A",-1),D=e("p",null,"WMTS\uFF1A \u4E0E wms \u6700\u5927\u7684\u533A\u522B\u7684\u91C7\u7528\u7F13\u5B58\u6280\u672F\u7F13\u89E3\u670D\u52A1\u5668\u538B\u529B",-1),W=e("p",null,"wfs \u8FD4\u56DE json \u6216\u8005 xml \u8FD9\u4E9B",-1),P=e("h2",{id:"ogc-\u89C4\u8303",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ogc-\u89C4\u8303","aria-hidden":"true"},"#"),t(" OGC \u89C4\u8303")],-1),T=e("p",null,"[OGC \u6807\u51C6\u4ECB\u7ECD\xB6](https://www.osgeo .cn/doc_ogcstd/ogc_standard/index.html)",-1),F=e("h2",{id:"ol-\u52A0\u8F7D-mvt-\u5730\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ol-\u52A0\u8F7D-mvt-\u5730\u56FE","aria-hidden":"true"},"#"),t(" ol \u52A0\u8F7D mvt \u5730\u56FE")],-1),y=t("ol \u52A0\u8F7D mvt \u5730\u56FE"),j=e("h2",{id:"\u6210\u90FD-bbox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6210\u90FD-bbox","aria-hidden":"true"},"#"),t(" \u6210\u90FD bbox")],-1),H=e("p",null,[e("code",null," [102.992886, 30.089615, 104.89738, 31.435321]")],-1),L=e("h2",{id:"\u503E\u659C\u6444\u5F71\u6D4B\u91CF\u4E0E-bim-\u6280\u672F\u5B9E\u73B0\u57CE\u5E02\u4E09\u7EF4\u6A21\u578B\u7684\u6784\u5EFA\u4E0E\u5E94\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u503E\u659C\u6444\u5F71\u6D4B\u91CF\u4E0E-bim-\u6280\u672F\u5B9E\u73B0\u57CE\u5E02\u4E09\u7EF4\u6A21\u578B\u7684\u6784\u5EFA\u4E0E\u5E94\u7528","aria-hidden":"true"},"#"),t(" \u503E\u659C\u6444\u5F71\u6D4B\u91CF\u4E0E BIM \u6280\u672F\u5B9E\u73B0\u57CE\u5E02\u4E09\u7EF4\u6A21\u578B\u7684\u6784\u5EFA\u4E0E\u5E94\u7528")],-1),R=t("\u503E\u659C\u6444\u5F71\u6D4B\u91CF\u4E0E BIM \u6280\u672F\u5B9E\u73B0\u57CE\u5E02\u4E09\u7EF4\u6A21\u578B\u7684\u6784\u5EFA\u4E0E\u5E94\u7528"),N=l(`<h2 id="\u4E92\u8054\u7F51\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u5730\u56FE" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u5730\u56FE</h2><p><code>VUE_APP_GIS_BASEMAP_URL:[&quot;http://t{0-7}.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;,&quot;http://t{0-7}.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;],</code></p><h2 id="geoserver" tabindex="-1"><a class="header-anchor" href="#geoserver" aria-hidden="true">#</a> geoserver</h2><p>\u914D\u7F6E pdf\uFF1A\u5C06\u56DB\u4E2A jar \u5305\u590D\u5236\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u91CD\u542F\u670D\u52A1</p><p>\u8DE8\u57DF\uFF1A</p><p><code>C:\\geoserver-2.21.1-bin\\webapps\\geoserver\\WEB-INF</code></p><div class="language-text ext-text"><pre class="language-text"><code>Uncomment following filter to enable CORS
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;cross-origin&lt;/filter-name&gt;
        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
</code></pre></div><p>tip</p><p>shp \u6587\u4EF6\u4E2D\u6709\u4E2A cpg \u6587\u4EF6\u5B9A\u4E49\u6587\u5B57\u65B9\u5F0F \u9ED8\u8BA4\u6CA1\u6709\u5E94\u8BE5\u662F\u9009\u62E9 GBK \u5728\u6DFB\u52A0 Shpfile \u6570\u636E\u5B58\u50A8\u65F6\uFF0C\u6709\u4E00\u4E2A DBF \u6587\u4EF6\u7684\u5B57\u7B26\u96C6\u7684\u9009\u9879\uFF0C\u5373\u5C5E\u6027\u6587\u4EF6\u7684\u7F16\u7801\uFF0C\u5E73\u65F6\u6240\u8BF4\u7684 shp \u6587\u4EF6\u7F16\u7801\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u8BF4\u7684 DBF \u6587\u4EF6\u7F16\u7801\uFF0C\u5982\u679C\u8BE5\u9009\u9879\u8BBE\u7F6E\u4E0E DBF \u6587\u4EF6\u7684\u672C\u8EAB\u7684\u7F16\u7801\u4E0D\u4E00\u81F4\u5219\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E71\u7801\u3002</p><p>\u9ED8\u8BA4\u5728\u521B\u5EFA shp \u6587\u4EF6\u4E4B\u540E\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u540C\u540D\u7684*.cpg \u6587\u4EF6\uFF0C\u5176\u8BB0\u5F55\u4E86 dbf \u6587\u4EF6\u7684\u7F16\u7801\u3002\u5728 ArcGIS 10.2.1 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u521B\u5EFA shp \u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u5176\u7F16\u7801\u7C7B\u578B\u662F\u7531\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8BED\u8A00\u533A\u57DF\u8BBE\u7F6E\uFF08language locale\uFF09\u51B3\u5B9A\u7684\uFF0C\u5BF9\u4E8E\u7B80\u4F53\u4E2D\u6587\u7684 windows \u7CFB\u7EDF\uFF0C\u4E00\u822C\u90FD\u662F GBK \u7F16\u7801\uFF1B\u800C\u4ECE ArcGIS 10.2.1 \u7248\u672C\u4EE5\u53CA\u4E4B\u540E\u7684\u7248\u672C\uFF0Cshp \u6587\u4EF6\u90FD\u662F\u9ED8\u8BA4 UTF-8 \u7F16\u7801\u7684\u3002</p><p>\u5B57\u4F53 http://10.1.47.189:18091/geoserver/rest/fonts</p><h2 id="b3dm" tabindex="-1"><a class="header-anchor" href="#b3dm" aria-hidden="true">#</a> B3dm</h2><p>B3dm\uFF0CBatched 3D Model\uFF0C\u6210\u6279\u91CF\u7684\u4E09\u7EF4\u6A21\u578B\u7684\u610F\u601D\u3002 \u503E\u659C\u6444\u5F71\u6570\u636E\uFF08\u4F8B\u5982osgb\uFF09\u3001BIM\u6570\u636E\uFF08\u5982rvt\uFF09\u3001\u4F20\u7EDF\u4E09\u7EF4\u6A21\u578B\uFF08\u5982obj\u3001dae\u30013dMax\u5236\u4F5C\u7684\u6A21\u578B\u7B49\uFF09\uFF0C\u5747\u53EF\u521B\u5EFA\u6B64\u7C7B\u74E6\u7247\u3002</p>`,13),V={href:"https://www.cnblogs.com/haolb123/p/14060285.html",target:"_blank",rel:"noopener noreferrer"},Z=t("geoserver\u8DE8\u57DF");function q(z,K){const a=r("ExternalLinkIcon"),n=r("RouterLink");return h(),i("div",null,[_,p,u,g,e("p",null,[B,e("a",m,[E,o(a)])]),e("p",null,[e("a",f,[b,o(a)])]),S,x,G,C,v,w,A,e("p",null,[e("a",I,[M,o(a)])]),k,D,W,P,T,F,e("p",null,[o(n,{to:"/gis/ol%E5%8A%A0%E8%BD%BDmvt.html"},{default:s(()=>[y]),_:1})]),j,H,L,e("p",null,[o(n,{to:"/gis/%E5%80%BE%E6%96%9C%E6%91%84%E5%BD%B1%E6%B5%8B%E9%87%8F%E4%B8%8EBIM%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0%E5%9F%8E%E5%B8%82%E4%B8%89%E7%BB%B4%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%9E%84%E5%BB%BA%E4%B8%8E%E5%BA%94%E7%94%A8.html"},{default:s(()=>[R]),_:1})]),N,e("p",null,[e("a",V,[Z,o(a)])])])}var X=d(c,[["render",q],["__file","knowledge.html.vue"]]);export{X as default};
