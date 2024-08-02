import{_ as n,o as a,c as s,a as p}from"./app.ace0dae9.js";const t={},o=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>

<span class="token keyword">function</span> <span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>showLabel <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> layerName <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaultOptions<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>



\u5728mapbox\u4E2D\u4F7F\u7528\u7684
        options <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">localIdeographFontFamily</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_localIdeographFontFamily<span class="token punctuation">,</span> <span class="token literal-property property">localFontFamily</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_localFontFamily<span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> showLabel <span class="token operator">=</span> options<span class="token punctuation">.</span>showLabel <span class="token operator">||</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> layerName <span class="token operator">=</span> options<span class="token punctuation">.</span>layerName  <span class="token operator">||</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>







    <span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _option <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>_option<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

    <span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _option <span class="token operator">=</span> option <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> showLabel <span class="token operator">=</span>
        _option<span class="token punctuation">.</span>showLabel <span class="token operator">||</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> layerName <span class="token operator">=</span> _option<span class="token punctuation">.</span>layerName  <span class="token operator">||</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>


<span class="token function">addArea</span><span class="token punctuation">(</span><span class="token parameter">geojson<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>fill <span class="token operator">=</span> options<span class="token punctuation">.</span>fill <span class="token operator">||</span> <span class="token string">&quot;rgba(136,217,255,0.2)&quot;</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>stroke <span class="token operator">=</span> options<span class="token punctuation">.</span>stroke <span class="token operator">||</span> <span class="token string">&quot;#88D9FF&quot;</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>width <span class="token operator">=</span> options<span class="token punctuation">.</span>width <span class="token operator">||</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token function">addArea</span><span class="token punctuation">(</span>geojson<span class="token punctuation">,</span>  <span class="token punctuation">{</span> fill <span class="token operator">=</span> <span class="token string">&quot;rgba(136,217,255,0.2)&quot;</span><span class="token punctuation">,</span> stroke <span class="token operator">=</span> <span class="token string">&quot;#88D9FF&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

\u5904\u7406\u62A5\u9519
  <span class="token function">createTempVectorLayer</span><span class="token punctuation">(</span><span class="token parameter">layerName<span class="token punctuation">,</span> geojson<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> location <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> zIndex <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> hover <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token number">1</span> \u786E\u5B9Aoption\u662F\u5426\u5B58\u5728\u4E09\u79CD\u5199\u6CD5
option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> 
<span class="token keyword">var</span> _option <span class="token operator">=</span> option <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token number">2</span> defaultOption \u5199\u5728\u5916\u573A\u6700\u597D





</code></pre></div><h2 id="nodemodules-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#nodemodules-\u5220\u9664" aria-hidden="true">#</a> nodemodules \u5220\u9664</h2><p><code>rimraf</code></p><p>\u5982\u679C\u60A8\u60F3\u8981\u5C06JavaScript\u4EE3\u7801\u63D2\u5165\u5230\u5F53\u524D\u7F51\u7AD9\u4E2D\uFF0C\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\uFF1A</p><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177 \u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u6709\u5185\u7F6E\u7684\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u5728\u5F53\u524D\u9875\u9762\u4E2D\u63D2\u5165JavaScript\u4EE3\u7801\u3002\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u5E76\u8F6C\u5230\u201CConsole\u201D\u9009\u9879\u5361\u3002\u5728\u63A7\u5236\u53F0\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u952E\u5165JavaScript\u4EE3\u7801\u5E76\u6309Enter\u952E\u6267\u884C\u5B83\u3002\u6216\u8005\uFF0C\u60A8\u53EF\u4EE5\u5C06\u4EE3\u7801\u590D\u5236\u5E76\u7C98\u8D34\u5230\u63A7\u5236\u53F0\u4E2D\uFF0C\u7136\u540E\u6309Enter\u952E\u6267\u884C\u5B83\u3002</p><p>\u4F7F\u7528\u4E66\u7B7E \u60A8\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5305\u542BJavaScript\u4EE3\u7801\u7684\u4E66\u7B7E\uFF0C\u5E76\u5728\u9700\u8981\u65F6\u5355\u51FB\u8BE5\u4E66\u7B7E\u4EE5\u5728\u5F53\u524D\u9875\u9762\u4E2D\u6267\u884C\u8BE5\u4EE3\u7801\u3002\u8981\u521B\u5EFA\u4E00\u4E2AJavaScript\u4E66\u7B7E\uFF0C\u8BF7\u6253\u5F00\u60A8\u7684\u6D4F\u89C8\u5668\u5E76\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E66\u7B7E\u3002\u5728\u4E66\u7B7E\u7684URL\u5B57\u6BB5\u4E2D\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><p>javascript:(function() { /* \u5728\u8FD9\u91CC\u8F93\u5165\u60A8\u7684\u4EE3\u7801 */ })(); \u5C06\u201C\u5728\u8FD9\u91CC\u8F93\u5165\u60A8\u7684\u4EE3\u7801\u201D\u66FF\u6362\u4E3A\u60A8\u8981\u63D2\u5165\u7684JavaScript\u4EE3\u7801\u3002\u73B0\u5728\uFF0C\u5F53\u60A8\u5355\u51FB\u8BE5\u4E66\u7B7E\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u5728\u5F53\u524D\u9875\u9762\u4E2D\u6267\u884C\u8BE5\u4EE3\u7801\u3002</p><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u63D2\u4EF6 \u67D0\u4E9B\u6D4F\u89C8\u5668\u63D2\u4EF6\u53EF\u4EE5\u8BA9\u60A8\u8F7B\u677E\u5730\u5728\u5F53\u524D\u9875\u9762\u4E2D\u63D2\u5165JavaScript\u4EE3\u7801\u3002\u4F8B\u5982\uFF0CChrome\u6D4F\u89C8\u5668\u4E2D\u7684\u201CCustom JavaScript for Websites\u201D\u63D2\u4EF6\u5141\u8BB8\u60A8\u5728\u5F53\u524D\u9875\u9762\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49JavaScript\u4EE3\u7801\u3002\u5B89\u88C5\u63D2\u4EF6\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5F53\u524D\u9875\u9762\u5E76\u5355\u51FB\u63D2\u4EF6\u56FE\u6807\u3002\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8F93\u5165\u60A8\u8981\u63D2\u5165\u7684JavaScript\u4EE3\u7801\u3002\u5355\u51FB\u201C\u4FDD\u5B58\u201D\u4EE5\u6267\u884C\u8BE5\u4EE3\u7801\u3002</p><p>\u65E0\u8BBA\u60A8\u9009\u62E9\u54EA\u79CD\u65B9\u6CD5\uFF0C\u90FD\u5E94\u8BE5\u5C0F\u5FC3\u63D2\u5165\u7684JavaScript\u4EE3\u7801\uFF0C\u4EE5\u786E\u4FDD\u5B83\u4E0D\u4F1A\u7834\u574F\u5F53\u524D\u9875\u9762\u6216\u5371\u5BB3\u60A8\u7684\u8BA1\u7B97\u673A\u3002</p><p>Mac \u67E5\u770B\u672C\u673A\u516C\u7F51IP \u547D\u4EE4</p><p><code>curl ifconfig.me</code><code>curl -L ip.tool.lu</code><code>curl ipinfo.io/json</code></p><h2 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h2><p>\u5728\u56FE\u5F62\u8BBE\u8BA1\u548C\u989C\u8272\u7BA1\u7406\u4E2D\uFF0CHSB\u3001RGB \u548C LAB \u662F\u5E38\u7528\u7684\u989C\u8272\u8868\u793A\u65B9\u5F0F\uFF0C\u5B83\u4EEC\u5206\u522B\u4EE3\u8868\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><p>RGB\uFF08\u7EA2\u7EFF\u84DD\uFF09\uFF1A</p><p>RGB \u662F\u4E00\u79CD\u57FA\u4E8E\u5149\u7684\u989C\u8272\u8868\u793A\u65B9\u5F0F\uFF0C\u5E38\u7528\u4E8E\u8BA1\u7B97\u673A\u56FE\u5F62\u548C\u5C4F\u5E55\u663E\u793A\u3002 \u5B83\u4F7F\u7528\u7EA2\u8272\uFF08Red\uFF09\u3001\u7EFF\u8272\uFF08Green\uFF09\u548C\u84DD\u8272\uFF08Blue\uFF09\u4E09\u4E2A\u901A\u9053\u7684\u503C\u6765\u63CF\u8FF0\u989C\u8272\u3002 \u6BCF\u4E2A\u901A\u9053\u7684\u503C\u901A\u5E38\u5728 0 \u5230 255 \u4E4B\u95F4\uFF0C\u5176\u4E2D 0 \u8868\u793A\u6CA1\u6709\u989C\u8272\uFF0C255 \u8868\u793A\u6700\u5927\u5F3A\u5EA6\u7684\u989C\u8272\u3002 RGB \u8868\u793A\u7684\u989C\u8272\u662F\u52A0\u6CD5\u6DF7\u5408\u7684\uFF0C\u901A\u8FC7\u8C03\u6574\u8FD9\u4E09\u4E2A\u901A\u9053\u7684\u503C\uFF0C\u53EF\u4EE5\u5F97\u5230\u5404\u79CD\u989C\u8272\u3002 HSB\uFF08\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\uFF1A</p><p>HSB \u662F\u4E00\u79CD\u5C06\u989C\u8272\u5206\u89E3\u4E3A\u66F4\u5BB9\u6613\u7406\u89E3\u7684\u6210\u5206\u7684\u989C\u8272\u8868\u793A\u65B9\u5F0F\u3002 \u8272\u76F8\uFF08Hue\uFF09\u8868\u793A\u989C\u8272\u7684\u79CD\u7C7B\uFF0C\u901A\u5E38\u4EE5\u89D2\u5EA6\u5EA6\u91CF\uFF0C\u4F8B\u5982\uFF0C\u7EA2\u8272\u5728 0 \u5EA6\uFF0C\u7EFF\u8272\u5728 120 \u5EA6\uFF0C\u84DD\u8272\u5728 240 \u5EA6\u3002 \u9971\u548C\u5EA6\uFF08Saturation\uFF09\u8868\u793A\u989C\u8272\u7684\u7EAF\u5EA6\uFF0C0 \u8868\u793A\u65E0\u9971\u548C\u5EA6\uFF08\u7070\u9636\uFF09\uFF0C100 \u8868\u793A\u6700\u5927\u9971\u548C\u5EA6\uFF08\u9C9C\u8273\uFF09\u3002 \u4EAE\u5EA6\uFF08Brightness\uFF09\u8868\u793A\u989C\u8272\u7684\u4EAE\u5EA6\uFF0C\u901A\u5E38\u5728 0 \u5230 100 \u4E4B\u95F4\uFF0C0 \u8868\u793A\u9ED1\u8272\uFF0C100 \u8868\u793A\u767D\u8272\u3002 LAB\uFF08CIELAB \u6216 Lab*\uFF09\uFF1A</p><p>LAB \u662F\u4E00\u79CD\u989C\u8272\u7A7A\u95F4\uFF0C\u65E8\u5728\u6A21\u62DF\u4EBA\u773C\u5BF9\u989C\u8272\u7684\u611F\u77E5\u65B9\u5F0F\u3002 L \u8868\u793A\u4EAE\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4\u901A\u5E38\u662F 0 \u5230 100\uFF0C0 \u8868\u793A\u9ED1\u8272\uFF0C100 \u8868\u793A\u767D\u8272\u3002 a \u548C b \u8868\u793A\u989C\u8272\u7684\u8272\u5DEE\u3002a \u8868\u793A\u4ECE\u7EFF\u8272\uFF08\u8D1F\u503C\uFF09\u5230\u7EA2\u8272\uFF08\u6B63\u503C\uFF09\u7684\u53D8\u5316\uFF0C\u800C b \u8868\u793A\u4ECE\u84DD\u8272\uFF08\u8D1F\u503C\uFF09\u5230\u9EC4\u8272\uFF08\u6B63\u503C\uFF09\u7684\u53D8\u5316\u3002 LAB \u7A7A\u95F4\u7684\u4F18\u70B9\u662F\u5B83\u5BF9\u989C\u8272\u7684\u53D8\u5316\u66F4\u5747\u5300\uFF0C\u4E0D\u50CF RGB \u548C HSB \u90A3\u6837\u5728\u89C6\u89C9\u4E0A\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0D\u5747\u5300\u7684\u8272\u5F69\u8F6C\u6362\u3002 \u8FD9\u4E9B\u989C\u8272\u8868\u793A\u65B9\u5F0F\u5728\u4E0D\u540C\u7684\u9886\u57DF\u548C\u5E94\u7528\u4E2D\u90FD\u6709\u7528\u5904\uFF0C\u9009\u62E9\u5408\u9002\u7684\u8868\u793A\u65B9\u5F0F\u53D6\u51B3\u4E8E\u60A8\u7684\u9700\u6C42\u548C\u5DE5\u4F5C\u73AF\u5883\u3002\u4F8B\u5982\uFF0CRGB \u9002\u7528\u4E8E\u5C4F\u5E55\u663E\u793A\u548C\u56FE\u5F62\u8BBE\u8BA1\uFF0C\u800CLAB \u66F4\u9002\u7528\u4E8E\u989C\u8272\u7BA1\u7406\u548C\u8272\u5F69\u79D1\u5B66\u7814\u7A76\u3002 HSB \u5219\u5E38\u7528\u4E8E\u5728\u8BBE\u8BA1\u8F6F\u4EF6\u4E2D\u76F4\u89C2\u5730\u8C03\u6574\u989C\u8272\u3002</p>`,17),e=[o];function c(u,l){return a(),s("div",null,e)}var k=n(t,[["render",c],["__file","trick.html.vue"]]);export{k as default};
