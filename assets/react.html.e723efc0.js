import{_ as a,o as t,c as p,b as n,d as o,e,a as c,r as l}from"./app.ace0dae9.js";const u={},r={href:"https://www.bilibili.com/video/BV1n24y1y7DN/?spm_id_from=333.788&vd_source=58062a60064ce04f53de08103b9cfd89",target:"_blank",rel:"noopener noreferrer"},i=e("\u5251\u610F\u9ED8"),k=c(`<h3 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h3><p><img src="https://raw.githubusercontent.com/xesxz/image/main/screenshot202211291109554.png" alt=""></p><h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h3><p>\u7EC4\u4EF6\u6302\u8F7D\u7684\u65F6\u5019\u548C\u6570\u636E\u53D8\u5316\u7684\u65F6\u5019\u6267\u884C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">scroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span>scroll<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre></div><p><img src="http://rlbxv9w32.hd-bkt.clouddn.com/202211291020417.png" alt=""></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>


document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function d(f,g){const s=l("ExternalLinkIcon");return t(),p("div",null,[n("p",null,[n("a",r,[i,o(s)])]),k])}var m=a(u,[["render",d],["__file","react.html.vue"]]);export{m as default};
