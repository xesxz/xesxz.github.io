import{_ as n,o as s,c as a,a as p}from"./app.ace0dae9.js";const t={},o=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toFirst</span><span class="token punctuation">(</span><span class="token parameter">fieldData<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fieldData<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>fieldData<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u662F\u5426\u5305\u542B\u6307\u5B9A\u5143\u7D20
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token parameter">ele</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">isInclude</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * tree\u8F6C\u4E8C\u7EF4
 */</span>
    <span class="token function">treeToArray</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> copyCur <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>cur <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token keyword">delete</span> copyCur<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
          <span class="token keyword">return</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>copyCur<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">treeToArray</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p><code>new Date().toISOString()</code></p><p><code>new Date(new Date().getTime() + 288e5).toISOString().replace(&#39;T&#39;, &#39; &#39;)</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u7F6E\u9876\u6570\u636E</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4EA7\u54C1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/products&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8054\u7CFB\u6211\u4EEC&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/contact&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E\u6211\u4EEC&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06 name \u5C5E\u6027\u4E3A &quot;\u9996\u9875&quot; \u7684\u5143\u7D20\u7F6E\u9876</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;\u9996\u9875&#39;</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;\u9996\u9875&#39;</span> <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   { name: &#39;\u9996\u9875&#39;, url: &#39;/&#39; },</span>
<span class="token comment">//   { name: &#39;\u4EA7\u54C1&#39;, url: &#39;/products&#39; },</span>
<span class="token comment">//   { name: &#39;\u8054\u7CFB\u6211\u4EEC&#39;, url: &#39;/contact&#39; },</span>
<span class="token comment">//   { name: &#39;\u5173\u4E8E\u6211\u4EEC&#39;, url: &#39;/about&#39; },</span>
<span class="token comment">// ]</span>

</code></pre></div>`,6),c=[o];function e(u,l){return s(),a("div",null,c)}var r=n(t,[["render",e],["__file","utils.html.vue"]]);export{r as default};
