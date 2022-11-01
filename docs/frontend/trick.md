```javascript
    addArea(geojson, option) {
    const _option = {
      showLabel: true,
      layerName: "",
    };
    if (option) Object.assign(_option, option);
  }

    addArea(geojson, option) {
    var _option = option || {};

    var showLabel =
        _option.showLabel || true
    var layerName = _option.layerName  || ""
}


addArea(geojson, options) {
    options = options || {};
    options.fill = options.fill || "rgba(136,217,255,0.2)";
    options.stroke = options.stroke || "#88D9FF";
    options.width = options.width || "4";
}


addArea(geojson,  { fill = "rgba(136,217,255,0.2)", stroke = "#88D9FF", width = 4 }) {

}



```

## nodemodules 删除

`rimraf`
