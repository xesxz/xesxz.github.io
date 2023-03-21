# webpack vue cli vite



## webpack

### loader 和 plugin

loader 最主要的功能是加载 css sass img 等资源
还有就是对 es 语法进行转换

loader： sass loader babel loader
plugin html 生产环境 console



### 反编译

单个sourceMap文件反编译
reverse-sourcemap -o aaa -v app.9fbea7c7.js.map
将 app.9fbea7c7.js.map 反编译到 aaa 目录下

批量sourceMap反编译
reverse-sourcemap -o origin -v ./static/js
将 ./static/js目录下所有的 .js.map 类型的文件（递归）反编译到 origin 目录下面


or 

https://github.com/paazmaya/shuji 没有目录

## vue cli

出所有规则和插件的名字：

`vue inspect --plugins `

`vue-cli-service build --target lib --name tips --dest lib --entry ./src/components/map/index.js`


## vite

[如何为前端项目一键自动添加eslint和prettier的支持](https://juejin.cn/post/7113563466211786783)
`yarn create vite-pretty-lint`





## rollup 

[rollup](https://www.rollupjs.com/#installing-rollup-locally)



webpack  webpack-cli webpack-dev-server


在webpack5中没有为node环境设置的polyfill 所以无法直接访问process
在wepack5中默认静态文件是在static: "./public"  所以html文件一般放在public里面
在webpack4中默认静态文件是在static: "./" 所以html直接放在最外层

module.exports = { 
    mode:'development',
    devServer: {
		static: "./"
	}
    
    }
