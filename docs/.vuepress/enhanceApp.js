// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'
// import "animate.css";

export default ({ Vue }) => {
  // Vue.use(ElementUI)
  Vue.mixin({
    computed: {
      $posts() {
        return this.$site.pages;
      },
    },
  });
};
