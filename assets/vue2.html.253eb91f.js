import{_ as n,o as s,c as a,a as t}from"./app.ace0dae9.js";const o={},p=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u865A\u62DFdom\u53D8\u6210\u771F\u5B9Edom  vue2</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
<span class="token keyword">const</span> Constructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">)</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> el <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>$el


<span class="token comment">// vue3  \u9700\u8981\u771F\u5B9E\u6302\u8F7D</span>

 <span class="token function">createApp</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>$el

</code></pre></div><p>\u91CD\u7F6E this.formValue = this.$options.data().formValue</p>`,2),e=[p];function c(l,u){return s(),a("div",null,e)}var k=n(o,[["render",c],["__file","vue2.html.vue"]]);export{k as default};
