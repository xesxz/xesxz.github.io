import{_ as o,o as e,c,b as n,d as t,a as p,e as s,r as l}from"./app.ace0dae9.js";const r={},u=p(`<h2 id="\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D" aria-hidden="true">#</a> \u5C45\u4E2D</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u65B9\u6848\u4E00flex */</span>

<span class="token comment">/* \u65B9\u6848\u4E8C\u5B9A\u4F4D+translate \u6B64\u65B9\u6848\u4E0D\u9700\u8981\u77E5\u9053\u5143\u7D20\u7684\u5BBD\u9AD8*/</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u65B9\u6848\u4E09\u5B9A\u4F4D\u52A0\u4E0A margin-left margin-top \u8D1F\u7684\u5BBD\u9AD8 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
       <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
       <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
       <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
       <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
       <span class="token property">margin-top</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
       <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
       <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
       <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u65B9\u6848\u56DB\u5B9A\u4F4D\u52A0\u4E0A \u56DB\u4E2A\u65B9\u54110 margin auto */</span>

<span class="token selector">.box</span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
       <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
       <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
       <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
       <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
       <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div><h2 id="\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6E21" aria-hidden="true">#</a> \u8FC7\u6E21</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> background-color 1s linear<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5355\u884C\u6587\u672C\u6EA2\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u6587\u672C\u6EA2\u51FA" aria-hidden="true">#</a> \u5355\u884C\u6587\u672C\u6EA2\u51FA</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="flex-\u5F39\u6027\u76D2\u5E03\u5C40-\u6700\u540E\u4E00\u884C\u5DE6\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#flex-\u5F39\u6027\u76D2\u5E03\u5C40-\u6700\u540E\u4E00\u884C\u5DE6\u5BF9\u9F50" aria-hidden="true">#</a> flex \u5F39\u6027\u76D2\u5E03\u5C40\uFF0C\u6700\u540E\u4E00\u884C\u5DE6\u5BF9\u9F50</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #2fbaff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),i=n("iframe",{id:"iframe",height:"100",width:"80%",frameborder:"0",allowfullscreen:"true",src:"/html/flex.html"},`  
 `,-1),k=n("h2",{id:"hover-label-animation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hover-label-animation","aria-hidden":"true"},"#"),s(" hover-label-animation")],-1),d=n("iframe",{id:"iframe",height:"50",width:"80%",frameborder:"0",allowfullscreen:"true",src:"/html/hover-label-animation.html"},`  
 `,-1),h={id:"iconfont-\u5361\u7247-hover-\u6837\u5F0F",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#iconfont-\u5361\u7247-hover-\u6837\u5F0F","aria-hidden":"true"},"#",-1),f=s(),g={href:"https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2",target:"_blank",rel:"noopener noreferrer"},m=s("iconfont \u5361\u7247 hover \u6837\u5F0F"),x=p(`<div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.rec-card:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.rec-card</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> background 0.3s ease-in-out<span class="token punctuation">,</span> transform 0.3s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="iconfont-\u7684\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#iconfont-\u7684\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> iconfont \u7684\u4F7F\u7528\u65B9\u6CD5</h2>`,2),_={href:"https://blog.csdn.net/qq_39176732/article/details/81390423",target:"_blank",rel:"noopener noreferrer"},b=s("iconfont \u7684\u4F7F\u7528\u65B9\u6CD5"),v={id:"echarts-\u5B9E\u73B0\u9690\u85CF-x-\u8F74-y-\u8F74-\u523B\u5EA6\u7EBF-\u7F51\u683C",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#echarts-\u5B9E\u73B0\u9690\u85CF-x-\u8F74-y-\u8F74-\u523B\u5EA6\u7EBF-\u7F51\u683C","aria-hidden":"true"},"#",-1),q=s(),S={href:"https://www.cnblogs.com/xiaojun-zxj/p/8327683.html",target:"_blank",rel:"noopener noreferrer"},C=s("Echarts \u5B9E\u73B0\u9690\u85CF x \u8F74\uFF0Cy \u8F74\uFF0C\u523B\u5EA6\u7EBF\uFF0C\u7F51\u683C"),j=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">//\u662F\u5426\u663E\u793A\u5206\u5272\u7EBF</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">//\u662F\u5426\u663E\u793Ax\u8F74\u7684\u5750\u6807\u8F74</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//\u662F\u5426\u663E\u793Ax\u8F74\u7684label</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//\u662F\u5426\u663E\u793Ax\u8F74\u7684\u523B\u5EA6</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="\u6C34\u7403" tabindex="-1"><a class="header-anchor" href="#\u6C34\u7403" aria-hidden="true">#</a> \u6C34\u7403</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#050038&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;ewfw&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgb(97, 142, 205)&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;liquidFill&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">&quot;45%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255,0,255,0.1)&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token number">0.5</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="scss-\u6761\u4EF6\u8BED\u53E5-\u5FAA\u73AF\u8BED\u53E5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#scss-\u6761\u4EF6\u8BED\u53E5-\u5FAA\u73AF\u8BED\u53E5\u4F7F\u7528" aria-hidden="true">#</a> scss- \u6761\u4EF6\u8BED\u53E5 \u5FAA\u73AF\u8BED\u53E5\u4F7F\u7528</h2>`,4),V={href:"https://blog.csdn.net/weixin_40054326/article/details/103054843",target:"_blank",rel:"noopener noreferrer"},L=s("scss- \u6761\u4EF6\u8BED\u53E5 \u5FAA\u73AF\u8BED\u53E5\u4F7F\u7528"),z=p(`<h2 id="\u5B89\u88C5-sass" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-sass" aria-hidden="true">#</a> \u5B89\u88C5 sass</h2><p><code>npm install sass-loader@7.3.1 node-sass@4.14.1 --save-dev </code></p><p><code>npm install node-sass sass-loader --save-dev</code></p><p><code>cnpm install --save less less-loader</code></p><p><code> import less from &#39;less&#39; Vue.use(less);</code></p><h2 id="el-dialog-\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u753B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#el-dialog-\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u753B\u6548\u679C" aria-hidden="true">#</a> el-dialog \u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u753B\u6548\u679C</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> dialog-fade-in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> dialog-fade-out</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> -100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u547C\u5438" tabindex="-1"><a class="header-anchor" href="#\u547C\u5438" aria-hidden="true">#</a> \u547C\u5438</h2>`,8),E=n("img",{src:"https://raw.githubusercontent.com/xesxz/image/main/screenshot202208161129581.png?token=AFPLVXUTCTHYASVQ3A77ECTC7MHUQ",alt:""},null,-1),T={href:"http://k21vin.gitee.io/front-end-data-visualization/#/native/pureCSS/loading",target:"_blank",rel:"noopener noreferrer"},A=s("\u547C\u5438"),N=n("h2",{id:"\u6837\u5F0F\u662F\u901A\u8FC7class\u6DFB\u52A0\u7684-\u53EF\u4EE5\u901A\u8FC7getcomputedstyle\u83B7\u53D6\u6837\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6837\u5F0F\u662F\u901A\u8FC7class\u6DFB\u52A0\u7684-\u53EF\u4EE5\u901A\u8FC7getcomputedstyle\u83B7\u53D6\u6837\u5F0F","aria-hidden":"true"},"#"),s(" \u6837\u5F0F\u662F\u901A\u8FC7class\u6DFB\u52A0\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7getComputedStyle\u83B7\u53D6\u6837\u5F0F")],-1),B=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`var element = document.querySelector('.my-class');
var computedStyle = window.getComputedStyle(element);
var backgroundColor = computedStyle.backgroundColor;
`)])],-1);function F(H,I){const a=l("ExternalLinkIcon");return e(),c("div",null,[u,i,k,d,n("h2",h,[y,f,n("a",g,[m,t(a)])]),x,n("p",null,[n("a",_,[b,t(a)])]),n("h2",v,[w,q,n("a",S,[C,t(a)])]),j,n("p",null,[n("a",V,[L,t(a)])]),z,n("p",null,[E,n("a",T,[A,t(a)])]),N,B])}var U=o(r,[["render",F],["__file","css.html.vue"]]);export{U as default};
