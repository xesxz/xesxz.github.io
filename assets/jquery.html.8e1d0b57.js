import{_ as n,o as a,c as s,a as t}from"./app.ace0dae9.js";const e={},p=t(`<h2 id="js-\u548C-jquery-\u5BF9\u6BD4\u8BB0\u5FC6" tabindex="-1"><a class="header-anchor" href="#js-\u548C-jquery-\u5BF9\u6BD4\u8BB0\u5FC6" aria-hidden="true">#</a> js \u548C jquery \u5BF9\u6BD4\u8BB0\u5FC6</h2><h3 id="js-\u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#js-\u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> js \u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9</h3><div class="language-text ext-text"><pre class="language-text"><code>  document.body.appendChild(document.createElement(&quot;a&quot;)) //\u65B0\u589E\u8282\u70B9
  document.querySelector(&quot;div&quot;).removeChild(document.querySelector(&quot;a&quot;)) //\u5220\u9664\u8282\u70B9
</code></pre></div><h3 id="jquery-\u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#jquery-\u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> jquery \u65B0\u589E\u8282\u70B9\u5220\u9664\u8282\u70B9</h3><div class="language-text ext-text"><pre class="language-text"><code>    $(&#39;div&#39;).remove()  //\u5220\u9664\u88AB\u9009\u4E2D\u5143\u7D20\u53CA\u5176\u5B50\u5143\u7D20
    $(&#39;div&#39;).empty()  //\u5220\u9664\u88AB\u9009\u4E2D\u5143\u7D20\u7684\u5B50\u5143\u7D20
    \u6CE8\u610F\u5143\u7D20\u5305\u542B\u6587\u672C\u8282\u70B9
</code></pre></div><h3 id="js-\u4FEE\u6539\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#js-\u4FEE\u6539\u5C5E\u6027" aria-hidden="true">#</a> js \u4FEE\u6539\u5C5E\u6027</h3><div class="language-text ext-text"><pre class="language-text"><code>    document.querySelector(&#39;div&#39;).style.width = &quot;500px&quot;
    document.querySelector(&#39;div&#39;).className = &quot;close&quot;
</code></pre></div><h3 id="jquery-\u4FEE\u6539-css-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#jquery-\u4FEE\u6539-css-\u5C5E\u6027" aria-hidden="true">#</a> jquery \u4FEE\u6539 css \u5C5E\u6027</h3><div class="language-text ext-text"><pre class="language-text"><code>   $(&#39;div&#39;).css(&#39;color&#39;, &quot;red&quot;)
    $(&#39;div&#39;).addClass(&#39;close&#39;)
</code></pre></div><h3 id="jquery-\u4FEE\u6539\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#jquery-\u4FEE\u6539\u5C5E\u6027" aria-hidden="true">#</a> jquery \u4FEE\u6539\u5C5E\u6027</h3><div class="language-text ext-text"><pre class="language-text"><code>   $(&#39;div&#39;).attr(&#39;src&#39;, &quot;./&quot;)

</code></pre></div><h3 id="js-\u4FEE\u6539\u5C5E\u6027-1" tabindex="-1"><a class="header-anchor" href="#js-\u4FEE\u6539\u5C5E\u6027-1" aria-hidden="true">#</a> js \u4FEE\u6539\u5C5E\u6027</h3><div class="language-text ext-text"><pre class="language-text"><code> setAttribute

</code></pre></div><h4 id="jquery-\u79FB\u9664\u4E4B\u540E\u52A0\u4E0A\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#jquery-\u79FB\u9664\u4E4B\u540E\u52A0\u4E0A\u7684\u5C5E\u6027" aria-hidden="true">#</a> jquery \u79FB\u9664\u4E4B\u540E\u52A0\u4E0A\u7684\u5C5E\u6027</h4><p><code> bg2.removeAttr(&#39;style&#39;)</code></p><h4 id="jquery-\u4FEE\u6539-css-\u6837\u5F0F\u6709\u4E24\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#jquery-\u4FEE\u6539-css-\u6837\u5F0F\u6709\u4E24\u79CD\u5199\u6CD5" aria-hidden="true">#</a> jquery \u4FEE\u6539 css \u6837\u5F0F\u6709\u4E24\u79CD\u5199\u6CD5</h4><div class="language-text ext-text"><pre class="language-text"><code>   $(&#39;div&#39;).css(&#39;background-image&#39;, &quot;url(./wind1.png&quot;)
   $(&#39;div&#39;).css({ &quot;background-image&quot;: &quot;url(./wind1.png&quot; })
</code></pre></div><h2 id="\u6DFB\u52A0\u591A\u5C42\u7684-dom-\u4F8B\u5982-ul-li" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u5C42\u7684-dom-\u4F8B\u5982-ul-li" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u5C42\u7684 dom\uFF0C\u4F8B\u5982 ul li</h2><div class="language-text ext-text"><pre class="language-text"><code>   var ulinfo = document.createElement(&#39;ul&#39;);   //\u8FD9\u4E00\u79CD\u662F\u5199\u6B7B\u7684
    ulinfo.innerHTML =
      \`
&lt;li&gt;134&lt;/li&gt;
&lt;li&gt;134qer&lt;/li&gt;
\`
    document.body.appendChild(ulinfo)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>   var ulinfo = document.createElement(&#39;ul&#39;),  \u8FD9\u4E00\u79CD\u662F\u52A8\u6001\u6DFB\u52A0
      fragment = document.createDocumentFragment()
    const arr = [
      123,
      134,
      25435
    ]
    for (var i = 0; i &lt; arr.length; i++) {
      var li = document.createElement(&#39;li&#39;)
      li.innerHTML = arr[i]
      fragment.appendChild(li)
    }

    ulinfo.appendChild(fragment)
    document.body.appendChild(ulinfo)
</code></pre></div><p>https://www.webhek.com/post/javascript-documentfragment.html</p><p>fragment \u662F\u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u788E\u7247\uFF0C\u6BD4\u5982\u8981\u5728 ul \u4E0B\u9762\u52A8\u6001\u6DFB\u52A0\u662F\u4E2A li \u5FAA\u73AF\u7684\u65F6\u5019\u5C31\u8981\u64CD\u4F5C dom10 \u6B21\uFF0C\u4E3A\u4E86\u6027\u80FD\u7684\u8003\u8651\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A fragment\uFF0C\u4ED6\u662F\u4E0D\u5360\u4F4D\u7684\u7A7A\u8282\u70B9\uFF0C\u5148\u628A li \u653E\u5728 fragment \u91CC\u9762\uFF0C\u518D\u628A\u6DFB\u52A0 fragment\uFF0C\u8FD9\u6837\u5C31\u53EA\u64CD\u4F5C\u4E86\u4E00\u6B21 dom\u3002</p><h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jquery</h1><h2 id="jquery-html" tabindex="-1"><a class="header-anchor" href="#jquery-html" aria-hidden="true">#</a> jquery html</h2><h3 id="jquery-\u83B7\u53D6\u3001\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#jquery-\u83B7\u53D6\u3001\u8BBE\u7F6E" aria-hidden="true">#</a> jquery \u83B7\u53D6\u3001\u8BBE\u7F6E</h3><ul><li>text() - \u8BBE\u7F6E\u6216\u8FD4\u56DE\u6240\u9009\u5143\u7D20\u7684\u6587\u672C\u5185\u5BB9</li><li>html() - \u8BBE\u7F6E\u6216\u8FD4\u56DE\u6240\u9009\u5143\u7D20\u7684\u5185\u5BB9\uFF08\u5305\u62EC HTML \u6807\u8BB0\uFF09</li><li>val() - \u8BBE\u7F6E\u6216\u8FD4\u56DE\u8868\u5355\u5B57\u6BB5\u7684\u503C</li></ul><h3 id="jquery-\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#jquery-\u6DFB\u52A0" aria-hidden="true">#</a> jquery \u6DFB\u52A0</h3><ul><li>append(<em>content</em>) - \u5728\u88AB\u9009\u5143\u7D20\u7684\u7ED3\u5C3E\u63D2\u5165\u5185\u5BB9\uFF08\u6587\u672C\u5143\u7D20\u548C\u65B0\u521B\u5EFA\u7684 dom \u5143\u7D20\u90FD\u53EF\u4EE5\uFF09</li><li>prepend() - \u5728\u88AB\u9009\u5143\u7D20\u7684\u5F00\u5934\u63D2\u5165\u5185\u5BB9</li><li>after() - \u5728\u88AB\u9009\u5143\u7D20\u4E4B\u540E\u63D2\u5165\u5185\u5BB9</li><li>before() - \u5728\u88AB\u9009\u5143\u7D20\u4E4B\u524D\u63D2\u5165\u5185\u5BB9</li></ul><p>\u6CE8\u8BE6\u60C5\u7684\u53C2\u6570\u770B\u83DC\u9E1F\u6559\u7A0B\u6BD4\u8F83\u597D</p><h3 id="\u5220\u9664\u5143\u7D20-\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5143\u7D20-\u5185\u5BB9" aria-hidden="true">#</a> \u5220\u9664\u5143\u7D20/\u5185\u5BB9</h3><ul><li>remove() - \u5220\u9664\u88AB\u9009\u5143\u7D20\uFF08\u53CA\u5176\u5B50\u5143\u7D20\uFF09</li><li>empty() - \u4ECE\u88AB\u9009\u5143\u7D20\u4E2D\u5220\u9664\u5B50\u5143\u7D20</li></ul><h3 id="jquery-\u64CD\u4F5C-css" tabindex="-1"><a class="header-anchor" href="#jquery-\u64CD\u4F5C-css" aria-hidden="true">#</a> jQuery \u64CD\u4F5C CSS</h3><ul><li>addClass() - \u5411\u88AB\u9009\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B</li><li>removeClass() - \u4ECE\u88AB\u9009\u5143\u7D20\u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B</li><li>toggleClass() - \u5BF9\u88AB\u9009\u5143\u7D20\u8FDB\u884C\u6DFB\u52A0/\u5220\u9664\u7C7B\u7684\u5207\u6362\u64CD\u4F5C</li><li>css() - \u8BBE\u7F6E\u6216\u8FD4\u56DE\u6837\u5F0F\u5C5E\u6027</li></ul><p>https://www.runoob.com/jquery/jquery-css.html \u83DC\u9E1F\u6559\u7A0B</p><h2 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;./product.json&quot;</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">;</span>
    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      content <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;li&gt;
            &lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>image<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; alt=&quot;&quot;&gt;
            &lt;/li&gt;
          </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> content<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="jquery-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#jquery-\u5FAA\u73AF" aria-hidden="true">#</a> jquery \u5FAA\u73AF</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// $(&#39;ul&#39;)\u83B7\u53D6\u7684\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F46\u662F\u8981\u4F7F\u7528\u5B83\u7684\u65B9\u6CD5\u5C31  $(&#39;ul&#39;).html() \u8FD9\u6837\u4ED6\u53D6\u7684\u662F\u7B2C\u4E00\u4E2A</span>
<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6728\u6613\u6768&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;https://www.muyiy.cn/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> content <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  content <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;li&gt;&lt;a href=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> target=&quot;_blank&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/a&gt;&lt;/li&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,38),o=[p];function c(u,l){return a(),s("div",null,o)}var r=n(e,[["render",c],["__file","jquery.html.vue"]]);export{r as default};