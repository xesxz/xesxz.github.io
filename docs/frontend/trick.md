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
```

## nodemodules 删除

`rimraf`
