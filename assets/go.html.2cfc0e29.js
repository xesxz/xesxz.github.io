import{_ as t,o as p,c as o,b as n,d as c,a as s,e,r as u}from"./app.ace0dae9.js";const l={},i=s(`<h2 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> print</h2><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello World&quot;</span>

	<span class="token comment">// ******** Printf\u9700\u8981\u81EA\u5DF1\u6307\u5B9A\u683C\u5F0F\u5316</span>
	<span class="token comment">/*
	 * Printf\u4E0D\u4F1A\u81EA\u52A8\u6362\u884C\uFF0C \u6240\u4EE5\u9700\u8981\u4F7F\u7528\\n\u4E3B\u52A8\u6362\u884C\uFF0C\u5982\u679C\u9700\u8981\u6362\u884C\u7684\u8BDD
	 * %d \u6574\u578B\u5360\u4F4D\u7B26
	 */</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A100</span>
	<span class="token comment">/*
	 * %f \u6D6E\u70B9\u578B\u5360\u4F4D\u7B26
	 * .2\u8868\u793A\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D
	 */</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A3.140000</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%.2f\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A3.14</span>
	<span class="token comment">// %s \u5B57\u7B26\u4E32\u5360\u4F4D\u7B26</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1AHello World</span>

	<span class="token comment">// ******** Println\u4F1A\u6309\u7167\u9ED8\u8BA4\u7684\u503C\u8868\u793A\u65B9\u6CD5\u6253\u5370\u5E76\u4E14\u8F93\u51FA\u4E00\u4E2A\u6362\u884C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A100 3.14 Hello World</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6253\u5370\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u5BF9\u8C61" aria-hidden="true">#</a> \u6253\u5370\u5BF9\u8C61</h2>`,3),k={href:"https://blog.csdn.net/K346K346/article/details/107314703",target:"_blank",rel:"noopener noreferrer"},r=e("Go \u7ED3\u6784\u4F53\u683C\u5F0F\u5316\u8F93\u51FA"),d=s(`<p>1.\u8F93\u51FA\u7ED3\u6784\u4F53\u5B57\u6BB5\u540D\uFF08%+v \uFF09 func main() { fmt.Printf(&quot;student=%+v\\n&quot;, student) } 2.\u8F93\u51FA\u683C\u5F0F\u5316 JSON \u4E32</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bs<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>
	<span class="token keyword">var</span> out bytes<span class="token punctuation">.</span>Buffer
	json<span class="token punctuation">.</span><span class="token function">Indent</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>out<span class="token punctuation">,</span> bs<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;student=%v\\n&quot;</span><span class="token punctuation">,</span> out<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>3.\u4F7F\u7528 go-huge-util</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	
    huge <span class="token string">&quot;github.com/dablelv/go-huge-util&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> huge<span class="token punctuation">.</span><span class="token function">ToIndentJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>student<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;student=%v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>0777\u8868\u793A\uFF1A\u521B\u5EFA\u4E86\u4E00\u4E2A\u666E\u901A\u6587\u4EF6\uFF0C\u6240\u6709\u4EBA\u62E5\u6709\u6240\u6709\u7684\u8BFB\u3001\u5199\u3001\u6267\u884C\u6743\u9650</p><p>0666\u8868\u793A\uFF1A\u521B\u5EFA\u4E86\u4E00\u4E2A\u666E\u901A\u6587\u4EF6\uFF0C\u6240\u6709\u4EBA\u62E5\u6709\u5BF9\u8BE5\u6587\u4EF6\u7684\u8BFB\u3001\u5199\u6743\u9650\uFF0C\u4F46\u662F\u90FD\u4E0D\u53EF\u6267\u884C</p><p>0644\u8868\u793A\uFF1A\u521B\u5EFA\u4E86\u4E00\u4E2A\u666E\u901A\u6587\u4EF6\uFF0C\u6587\u4EF6\u6240\u6709\u8005\u5BF9\u8BE5\u6587\u4EF6\u6709\u8BFB\u5199\u6743\u9650\uFF0C\u7528\u6237\u7EC4\u548C\u5176\u4ED6\u4EBA\u53EA\u6709\u8BFB\u6743\u9650\uFF0C\u90FD\u6CA1\u6709\u6267\u884C\u6743\u9650</p>`,7);function f(m,g){const a=u("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",k,[r,c(a)])]),d])}var h=t(l,[["render",f],["__file","go.html.vue"]]);export{h as default};
