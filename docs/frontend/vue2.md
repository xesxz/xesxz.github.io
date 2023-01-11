
```javascript
//虚拟dom变成真实dom  vue2
import HelloWorld from './components/HelloWorld.vue'
const Constructor = Vue.extend(HelloWorld)

const instance =  new Constructor()

const el = instance.$mount().$el


// vue3  需要真实挂载

 createApp(HelloWorld).mount('#app').$el

```
