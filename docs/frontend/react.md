


[剑意默](https://www.bilibili.com/video/BV1n24y1y7DN/?spm_id_from=333.788&vd_source=58062a60064ce04f53de08103b9cfd89)

### useState
![](https://raw.githubusercontent.com/xesxz/image/main/screenshot202211291109554.png)

### useEffect

组件挂载的时候和数据变化的时候执行

```javascript
function scroll(){
  window.addEventListener('scroll',() => {
    console.log("scroll");
  })
}
  useEffect(() => {
    scroll()
    return () => {
    window.removeEventListener('scroll',scroll)
    }
  },[])

```

![](http://rlbxv9w32.hd-bkt.clouddn.com/202211291020417.png)





```js
import { createRoot } from'react-dom/client';
import React from'react';


document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<App />);


function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
```
