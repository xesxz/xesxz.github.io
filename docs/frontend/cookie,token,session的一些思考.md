# cookie,token,session 的一些思考

## cookie

只有同域的请求会自动携带 cookie
允许跨域以及携带 cookie 的方案（这样设置响应头就会跨域携带 cookie 啦）
ps：apifox 还是阔以

### 方案一

```javascript
//后端
const cors = require("@koa/cors");
app.use(
  cors({
    origin: "*", // 前端地址
    credentials: true,
  })
);
//前端;
axios({
  url: "http://localhost:3000/string",
  method: "get",
  withCredentials: true,
}).then((res) => {
  console.log(res);
});
```

### 方案二

好像可以通过修改 host 解决跨域

参考资料
![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202211031038949.png)
