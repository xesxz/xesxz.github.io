import{_ as n,o as s,c as a,a as p}from"./app.ace0dae9.js";const t={},o=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \`server\` is passed in as the second argument to \`fetch\`.</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> Bun<span class="token punctuation">.</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> server</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// Get url and method</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> method <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">;</span>
   <span class="token comment">// Get pathname from url</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// Get All Users</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&quot;/api/users&quot;</span> <span class="token operator">&amp;&amp;</span> method <span class="token operator">===</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zz&#39;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
       <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
         <span class="token string-property property">&quot;Access-control-allow-origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Hono <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hono&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hono/cors&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hono</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">hello</span><span class="token operator">:</span><span class="token string">&quot;world&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> Bun<span class="token punctuation">.</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">fetch</span><span class="token operator">:</span>app<span class="token punctuation">.</span>fetch<span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">4000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","bun.html.vue"]]);export{k as default};
