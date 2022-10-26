### 初始化三维地图

```javascript
function initMap() {
  axios({
    url: "http://gsafety.chengdu.aicim.com:55505/cim_oauth/oauth/token?grant_type=password&client_id=CimApp1&client_secret=3e83fff3-80bf-4d88-92f7-33e433db0fa1",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic Q2ltQXBwMTozZTgzZmZmMy04MGJmLTRkODgtOTJmNy0zM2U0MzNkYjBmYTE=",
    },
    data: qs.stringify({
      username: "chenangas",
      password: "Chenangas@1208",
    }),
  }).then((data) => {
    const ACUrl =
      "http://gsafety.chengdu.aicim.com:55505" +
      "/BigScreen/#/map?appId=f96eed3e-3af9-4bfe-a8c0-b65f87ad2e00" +
      "&ac_access=" +
      data.data.access_token;
    window.AC.init({
      elementId: "mapFrame",
      url: ACUrl,
      callbackFn: function (data) {
        getUndergroundLayers();
      },
    });
  });
}
```

## 工程导航

```javascript
window.AC.Presentation.play({
  presentationIndex: 1,
  callbackFn: function (data) {
    console.log("Presentation.play:" + JSON.stringify(data));
  },
});
```
