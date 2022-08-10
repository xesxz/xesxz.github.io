<template>
<div class="bookmark">
<div v-for="item in list" :key="item.title">
  <div class="title">{{item.title}}</div>
  <ul class="content">
    <li v-for="(i,index) in item.bookmark" :key="index" @click="handleClick(i.url)"   class="animate__animated animate__bounceIn">
      <div class="top">
        <img :src="i.url + 'favicon.ico'" alt="" class="ico">
        {{i.name}}</div>
      <div class="bottom">asd</div>
    </li>
  </ul>
</div>
</div>
</template>

<script>

import 'animate.css';

export default {
  name: "bookmark",
  data(){
    return {
      list:[
        {
          title:"博客",
          bookmark:[
            {
              name:'artielyblog',
              url:'https://artiely.github.io/'
            },
            {
              name:'joshwcomeau-blog',
              url:'https://www.joshwcomeau.com/'
            },
            {
              name:'artielyblog',
              url:'https://artiely.github.io/'
            },
            {
              name:'joshwcomeau-blog',
              url:'https://www.joshwcomeau.com/'
            },


          ]
        },
        {
          title:"css工具",
          bookmark:[
            {
              name:"animate",
              url:"https://animate.style/"
            },
            {
              name:'coolhue-渐变色',
              url:'https://webkul.github.io/coolhue/'
            },


            {
              name:'Smooth Shadow',
              url:'https://shadows.brumm.af/'
            },
            {
              name:'animista',
              url:'https://animista.net/'
            },
            {
              name:'Animista - CSS Animations on Demand',
              url:'https://www.joshwcomeau.com/'
            },
            {
              name:'cssgradient',
              url:'https://cssgradient.io/'
            },
            {
              name:'iconify',
              url:'https://iconify.design/'
            },
            {
              name:'fontawesome-icons',
              url:'https://fontawesome.com/icons'
            }
          ]
        },

        {
          title:"工具",
          bookmark:[
            {
              name:'阿里云区划',
              url:'http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5'
            },
            {
              name:'shp转json',
              url:'https://mapshaper.org/'
            },

            {
              name:'fastmock',
              url:'https://www.fastmock.site/'
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleClick(url){
      console.log(url)
      window.open(url)
    }
  }
}
</script>

<style scoped>
  *{
    list-style: none;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .content li  {
    cursor: pointer;
    width: 200px;
    height: 100px;
    background: linear-gradient(145deg,#cacaca,#f0f0f0);
    box-shadow: 24px 24px 60px #c3c3c3,-24px -24px 60px #fdfdfd;
    border: 2px solid #fdfdfd;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .top{
    height: 50%;
  }
  .bottom{
    height: 50%;
    border-top: 2px solid #eaecef;;
  }
.ico{
  width: 24px;
  height: 24px;
}
</style>
