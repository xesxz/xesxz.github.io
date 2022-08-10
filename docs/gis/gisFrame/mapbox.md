# mapbox

## 注释 token

mapbox-gl 升级到 2.0 版本以后后，使用自搭建的后端服务，也需要设置 token 才能正常运行，
本身 mapbox-gl 是开源地图类库，不过在 2.0 版本后，修改了开源协议，基于 mapbox-gl 源代码，能够修改去掉 token 的请求。
从 github 上克隆一份 mapbox-gl 的源码，最好是按照版本进行克隆，这样代码比较稳定，yarn 或者 npm 安装代码所需要的依赖包，确定安装成功，能按照 package.json 进行文件 build，才进行修改。
需要修改的文件：
mapbox-gl-js-2.2.0\src\ui\map.js
文中代码开始位置：
/**\*** START WARNING - REMOVAL OR MODIFICATION OF THE
其中 \_authenticate()引用注释掉，就能达到去掉 token 的效果。
