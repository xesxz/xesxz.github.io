## ol 加载 mvt 地图

[//]: # "ol"
[//]: # "![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202208161852623.png)"
[//]: #
[//]: # "mapbox"
[//]: # "![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202208161852470.png)"

```javascript
// <script src="https://openlayers.org/en/v6.15.1/examples/resources/mapbox-streets-v6-style.js"></script>

import "./style.css";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import apply from "ol-mapbox-style";

apply("map", "mapbox://styles/mapbox/streets-v11", {
  accessToken:
    "pk.eyJ1IjoiNjMxMjk4OTgzIiwiYSI6ImNrcXE3bGJjMzExd2Yyd3IxZnVsMzF3YnoifQ.PwJgJ85Al8qG_6Sr6OecbA",
}).then((res) => {
  res.addLayer(
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        format: new MVT(),
        url:
          "https://{a-d}.tiles.mapbox.com/v1/mapbox.mapbox-streets-v8/" +
          "{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiNjMxMjk4OTgzIiwiYSI6ImNrcXE3bGJjMzExd2Yyd3IxZnVsMzF3YnoifQ.PwJgJ85Al8qG_6Sr6OecbA",
      }),
    })
  );
});
```
