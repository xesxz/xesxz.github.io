import{_ as n,o as a,c as s,a as t}from"./app.ace0dae9.js";const p={},e=t(`<h1 id="react-\u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#react-\u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4" aria-hidden="true">#</a> react \u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4</h1><p>\u5728React\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6DFB\u52A0\u8DEF\u7531\uFF0C\u53EF\u4EE5\u4F7F\u7528React Router\u5E93\uFF0C\u4E0B\u9762\u662F\u5982\u4F55\u6DFB\u52A0\u8DEF\u7531\u7684\u6B65\u9AA4\uFF1A</p><ol><li><p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 React Router\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u8FD8\u6CA1\u6709\u5B89\u88C5\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 npm \u6216 yarn \u6765\u6DFB\u52A0\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react-router-dom
</code></pre></div><p>\u6216</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> react-router-dom
</code></pre></div></li><li><p>\u5BFC\u5165\u9700\u8981\u4F7F\u7528\u7684\u8DEF\u7531\u7EC4\u4EF6\u3002\u5728React Router\u4E2D\uFF0C\u4E3B\u8981\u6709BrowserRouter, Route, Switch\u7B49\u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u4F7F\u7528\u5BFC\u5165\u7684\u8DEF\u7531\u7EC4\u4EF6\u521B\u5EFA\u8DEF\u7531\u3002\u901A\u5E38\u6211\u4EEC\u4F1A\u5728App\u7EC4\u4EF6\u4E2D\u5305\u542B\u6574\u4E2A\u5E94\u7528\u7684\u8DEF\u7531\u3002</p></li></ol><div class="language-text ext-text"><pre class="language-text"><code>import { BrowserRouter as Router, Routes, Route } from &quot;react-router-dom&quot;;
import AboutPage from &quot;./AboutPage&quot;;
import HomePage from &quot;./HomePage&quot;;

function App() {
  return (
    &lt;Router&gt;
      &lt;Routes&gt;
        &lt;Route path=&quot;/&quot; element={&lt;HomePage /&gt;} /&gt;
        &lt;Route path=&quot;/about&quot; element={&lt;AboutPage /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}

export default App;
</code></pre></div><h1 id="vue3-\u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#vue3-\u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4" aria-hidden="true">#</a> vue3 \u6DFB\u52A0\u8DEF\u7531\u6B65\u9AA4</h1><ol><li><p>\u5B89\u88C5 vue-router</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm install vue<span class="token operator">-</span>router@<span class="token number">4</span>
</code></pre></div></li><li><p>\u521B\u5EFA\u8DEF\u7531\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">&#39;./page/index.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Wz <span class="token keyword">from</span> <span class="token string">&#39;./page/wz.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Index<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/wz&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Wz&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Wz<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u5728 main.js \u4E2D\u5F15\u5165\u8DEF\u7531</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>app \u4E2D\u4F7F\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
</code></pre></div></li></ol><p>curl -u &quot;$username:$token&quot; https://api.github.com/user/repos -d &#39;{&quot;name&quot;:&quot;t3-app-quotes&quot;}&#39;</p>`,7),o=[e];function c(r,u){return a(),s("div",null,o)}var i=n(p,[["render",c],["__file","\u8DEF\u7531.html.vue"]]);export{i as default};
