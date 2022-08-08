<template>
<div class="bookmark">
<div v-for="item in list" :key="item.title">
  <div class="title">{{item.title}}</div>
  <ul class="content">
    <li v-for="(i,index) in item.bookmark" :key="index" @click="handleClick(i.url)">
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
