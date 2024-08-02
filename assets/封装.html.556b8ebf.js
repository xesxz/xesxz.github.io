import{_ as n,o as s,c as a,a as p}from"./app.ace0dae9.js";const t={},o=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accept</span><span class="token operator">:</span> <span class="token string">&#39;application/json, text/plain, */*&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;accept-language&#39;</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN,zh;q=0.9&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">authorization</span><span class="token operator">:</span>
          <span class="token string">&#39;Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjE4OTU1MTI5Njc4IiwidXNlcl9uYW1lIjoic3lzdGVtIiwib3BlbmlkIjoiMSIsInNjb3BlIjpbImFsbCJdLCJuYW1lIjoi5bmz5Y-w566h55CG5ZGYIiwiYXZhdGFyIjpudWxsLCJleHAiOjE2ODExODY5OTQsInVzZXJOYW1lIjoic3lzdGVtIiwianRpIjoiMGY5NjJmOTgtZTA2Zi00OWY5LWE4ZTItMDU0ZDQ5NTliNGI0IiwiY2xpZW50X2lkIjoiMGY2MGI4OTgtNTE0ZS00YzVmLWJhMTMtNmM0YzZkY2JlOWFlIn0.nargAWBRgYhpc2QRsWlQbsAZxbEkF6gKkKsSqBH5Rqg&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;cache-control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;no-cache&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pragma</span><span class="token operator">:</span> <span class="token string">&#39;no-cache&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">referrer</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:9629/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">referrerPolicy</span><span class="token operator">:</span> <span class="token string">&#39;strict-origin-when-cross-origin&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Network response was not ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1),e=[o];function c(l,r){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","\u5C01\u88C5.html.vue"]]);export{i as default};
