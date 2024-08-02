import{_ as n,o as s,c as a,a as t}from"./app.ace0dae9.js";const p={},o=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token comment">//ts</span>
<span class="token keyword">class</span> <span class="token class-name">Overlay</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> width
  <span class="token keyword">private</span> height
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">height</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">333</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u7EA6\u5B9A\u4FD7\u79F0</span>
    <span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">width<span class="token punctuation">,</span>height</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_width <span class="token operator">=</span> width
        <span class="token keyword">this</span><span class="token punctuation">.</span>_height <span class="token operator">=</span> height

      <span class="token punctuation">}</span>
      <span class="token keyword">get</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_height
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



   <span class="token keyword">const</span> shape <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>

   
</code></pre></div>`,2),e=[o];function c(l,k){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","\u7C7B.html.vue"]]);export{r as default};
