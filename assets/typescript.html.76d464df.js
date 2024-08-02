import{_ as e,o as p,c as o,b as n,d as a,a as c,e as t,r}from"./app.ace0dae9.js";const l={},i=c(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> typescript</h1><h2 id="typescript-\u4E2D\u4E3A-window-\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#typescript-\u4E2D\u4E3A-window-\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" aria-hidden="true">#</a> TypeScript \u4E2D\u4E3A window \u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>declare global <span class="token punctuation">{</span>  <span class="token comment">//\u8BBE\u7F6E\u5168\u5C40\u5C5E\u6027</span>
  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>  <span class="token comment">//window\u5BF9\u8C61\u5C5E\u6027</span>
    <span class="token literal-property property">aaa</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>   <span class="token comment">//\u52A0\u5165\u5BF9\u8C61</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>aaa<span class="token operator">=</span><span class="token boolean">true</span> <span class="token comment">//\u4E0D\u62A5\u9519</span>

</code></pre></div><h2 id="ts\u5E38\u89C1\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#ts\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a> ts\u5E38\u89C1\u9519\u8BEF</h2><p><code>TS7053</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">DAMNU_ENABLE</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> statuss<span class="token operator">:</span><span class="token constant">DAMNU_ENABLE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;asdasd1&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    status<span class="token operator">:</span><span class="token string">&quot;downloading&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;asdasd2&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    status<span class="token operator">:</span><span class="token string">&quot;downloading&quot;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">const</span> a  <span class="token operator">=</span> <span class="token string">&quot;ss&quot;</span>
statuss<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>status
</code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-text ext-text"><pre class="language-text"><code>const arr:number[]= [1,4,6,8]

const arr:Array&lt;number&gt;= [1,4,6]

</code></pre></div>`,8),u={href:"https://segmentfault.com/a/1190000011744210",target:"_blank",rel:"noopener noreferrer"},d=t("vue + typescript \u9879\u76EE\u8D77\u624B\u5F0F"),k={href:"https://segmentfault.com/a/1190000010391598",target:"_blank",rel:"noopener noreferrer"},h=t("TypeScript - \u4E0D\u6B62\u7A33\uFF0C\u800C\u4E14\u5FEB"),_={href:"https://juejin.im/entry/587e09281b69e600584cd363",target:"_blank",rel:"noopener noreferrer"},g=t("TypeScript \u5165\u95E8\u6559\u7A0B");function y(m,f){const s=r("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",u,[d,a(s)])]),n("p",null,[n("a",k,[h,a(s)])]),n("p",null,[n("a",_,[g,a(s)])])])}var b=e(l,[["render",y],["__file","typescript.html.vue"]]);export{b as default};
