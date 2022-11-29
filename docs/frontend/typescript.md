# typescript

## TypeScript 中为 window 对象添加属性

```javascript
declare global {  //设置全局属性
  interface Window {  //window对象属性
    aaa: boolean;   //加入对象
  }
}
window.aaa=true //不报错

```




## ts常见错误
`TS7053`
```typescript
interface DAMNU_ENABLE {
  [key: string]: {
    status: string
  }
}
const statuss:DAMNU_ENABLE = {
  "asdasd1":{
    status:"downloading"
  },
  "asdasd2":{
    status:"downloading"
  }

}
const a  = "ss"
statuss[a].status
```












[vue + typescript 项目起手式](https://segmentfault.com/a/1190000011744210)

[TypeScript - 不止稳，而且快](https://segmentfault.com/a/1190000010391598)

[TypeScript 入门教程](https://juejin.im/entry/587e09281b69e600584cd363)
