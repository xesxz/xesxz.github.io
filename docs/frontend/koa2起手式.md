https://koa.bootcss.com/

创建 koa2 项目

```javascript
cnpm i -g koa-generator //全部安装koa-generator
koa2 -e koa2-learn   ==使用ejs模板引擎  //创建koa2项目  koa2 project_name
DEBUG=koa2-learn:* npm start  //启动项目
npm run dev  需要修改  //开发环境启动项目
nuxt.js    vue.js

```

连接数据库

```javascript
1. mongod --dbpath=/Users/workspace/mongodb/db
2. redis-server
3. robo
4. Npm run dev

```

![](youdaonote-images/DC9AEF415B5C46F0B15D083CE8801E63.png)

person.js

```javascript
const mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Person", personSchema);
```

config.js

```javascript
module.exports = {
  dbs: "mongodb://127.0.0.1:27017/dbs",
};
```

app.js

引入

```javascript
const mongoose = require("mongoose");
const dbConfig = require("./dbs/config");
```

使用、连接数据库

```javascript
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
});
```

导入数据

```javascript
mongoimport -d test -c area areas.dat

```

测试接口

```javascript
curl -d 'name=lilei&age=27' http://localhost:3000/users/addPerson

```

redis

缓存数据库

从缓存数据库读数据快

```javascript
koa - generic - session;
koa - redis;
```

使用

```javascript
const session = require("koa-generic-session");
const Redis = require("koa-redis");
//这个是服务器端把session种在cookie中,目的是区分不同用户
```

```javascript
redis-cli
keys *

```

vue 服务端渲染 nuxt

```javascript
npx create-nuxt-app mt-app

```

nuxt

```javascript
cnpm i koa-router koa-redis nodemailer

```

```javascript
mongoimport --db test --collection user --file /Users/workspace/Downloads/response.json

```

node 文件上传

我查了一下资料，发现可以实现文件上传的中间件有 3 个，选择其中一个就可以了：

1）koa-body

2）busboy

3）koa-multer

关于以上三种中间件的差异可以自行网上查资料，这里我选择比较顺眼的 koa-body，实用简单。

创建 koa2 项目

koa2 server

cnpm i koa2-cors -S
