
发送请求
```js
// const chalk = require("chalk")
import chalk from 'chalk';
// const https = require('https')
import http from "http"

http.get('http://gsafety.hefei.aicim.com:55505/vy/cim/tgs/styles/anhui_hefei_4326_blue/style.json', res => {
    let list = [];
    res.on('data', chunk => {
        // list.push(chunk);
        console.log(chunk.toString());
    });
    res.on('end', () => {
        const { data } = JSON.parse(Buffer.concat(list).toString());
        
        data.forEach(item => {
            console.log(`${chalk.yellow.bold(item.rank)}.${chalk.green(item.category_name)}`);
        })
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});

// const chalk = require("chalk")
import chalk from 'chalk';
// const https = require('https')
import https from "https"

https.get('https://api.juejin.cn/tag_api/v1/query_category_briefs', res => {
    let list = [];
    res.on('data', chunk => {
        list.push(chunk);
    });
    res.on('end', () => {
        const { data } = JSON.parse(Buffer.concat(list).toString());
        data.forEach(item => {
            console.log(`${chalk.yellow.bold(item.rank)}.${chalk.green(item.category_name)}`);
        })
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});
```