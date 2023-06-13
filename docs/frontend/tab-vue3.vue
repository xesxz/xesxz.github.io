<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2023-05-24 16:53:40
 * @LastEditors: zl
 * @LastEditTime: 2023-05-24 16:53:44
-->
<template>
  <div style="display: flex">
    <div :class="[active === index?'active':'']" class="tabs" v-for="(item,index) in data"
         :key="item.name"
         @click="switchCom(item,index)">
      {{ item.name }}
    </div>

  </div>
  <component :is="comId"></component>

</template>

<style scoped>
#app, html, body {

  height: 100%;
}

* {
  padding: 0;
  margin: 0;
}

.tabs {
  border: 1px solid #CCC;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
}

.active {
  background: skyblue;
}

</style>

<script setup lang="ts">

import AVue from "./A.vue";
import BVue from "./B.vue";
import CVue from "./C.vue";
import {markRaw, reactive, ref, shallowRef} from "vue";

const data = [
  {
    name: "A组件",
    com: markRaw(AVue)
  },
  {
    name: "B组件",
    com: markRaw(BVue)
  },
  {
    name: "C组件",
    com: markRaw(CVue)
  }

]
const comId = shallowRef(AVue)
const active = ref(0)

const switchCom = (item: any, index: number) => {
  comId.value = item.com
  console.log(comId.value)
  active.value = index
}

</script>