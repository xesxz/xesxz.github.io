<template>
<div >
  <img :src="imgUrl" alt="必应壁纸">
</div>
</template>

<script>
export default {
  name: "banner",
  data(){
    return{
      imgUrl:null
    }
  },
  mounted(){
    this.getWallpaper()
  },
  methods:{
    getWallpaper(){
      fetch('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1').then(res => {
        return res.json()
      }).then(data => {
        this.imgUrl =  'https://cn.bing.com/' + data.images[0].url
      })
    }
  }
}
</script>

<style scoped>

</style>
