import{_ as p,o as e,c as o,b as n,d as c,a as s,e as a,r}from"./app.ace0dae9.js";const l={},i=s(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h2 id="vue-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#vue-\u88C5\u9970\u5668" aria-hidden="true">#</a> VUE \u88C5\u9970\u5668</h2><p>vue \u88C5\u9970\u5668\u6709\u4E24\u79CD vue-class-component(\u5B98\u65B9\u7248)</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">&quot;vue-class-component&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>vue-property-decorator(\u793E\u533A\u7248)</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-property-decorator&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p><code>cnpm i vue-property-decorator -S</code> https://www.cnblogs.com/shiww/p/11322737.html</p><h3 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3</span>
    <span class="token comment">// hot: true,</span>
    <span class="token comment">// open: true, // \u81EA\u52A8\u5F00\u542F\u6D4F\u89C8\u5668</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>vue3 <img src="https://raw.githubusercontent.com/xesxz/image/main/screenshot202211021014096.png" alt="vue3"></p><p>vue2 <img src="https://raw.githubusercontent.com/xesxz/image/main/screenshot202211021016579.png" alt="vue2"></p><p>\u5728vue3\u4E2D\u4F7F\u7528reactive\u5B9A\u4E49\u6570\u7EC4</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token comment">//\u65B9\u6848\u4E00</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;asd&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//\u8D4B\u503C\u7684\u65F6\u5019  </span>
 data<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>res<span class="token punctuation">.</span>result<span class="token punctuation">)</span>

</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6848\u4E8C</span>
<span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u8D4B\u503C\u7684\u65F6\u5019  </span>
state<span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>result
</code></pre></div><h2 id="vuecli" tabindex="-1"><a class="header-anchor" href="#vuecli" aria-hidden="true">#</a> vuecli</h2>`,15),u=a("tailwind \u4F7F\u7528vuecli \u521B\u5EFA\u9879\u76EE\u540E\u53EF\u4EE5\u4F7F\u7528 "),k=n("code",null,"vue add tailwind",-1),d=a("\u6DFB\u52A0tailwind "),v={href:"https://juejin.cn/post/7083294405280399390",target:"_blank",rel:"noopener noreferrer"},h=a("\u5728VUE\u4E2D\u4F7F\u7528Tailwind CSS"),m=s(`<p>postcss npx tailwindcss init -p</p><h2 id="\u914D\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u4EE3\u7406</h2><p><code>baseURL: &#39;/admin&#39;,</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/admin&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://221.237.108.102:81&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;^/admin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`


vue2\u80FD\u591F\u76D1\u6D4B\u5230\u6570\u7EC4push \u56E0\u4E3A\u91CD\u5199\u4E86\u6570\u7EC4\u7684\u65B9\u6CD5  \u4E0D\u80FD\u76D1\u6D4B\u5230\u6570\u7EC4\u957F\u5EA6\u6539\u53D8 \u76F4\u63A5\u4FEE\u6539\u6570\u7EC4\u4E0B\u6807\uFF08vue3\u53EF\u4EE5\uFF09  </code></pre></div>`,4);function g(y,_){const t=r("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[u,k,d,n("a",v,[h,c(t)])]),m])}var x=p(l,[["render",g],["__file","vue.html.vue"]]);export{x as default};
