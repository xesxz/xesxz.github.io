import{_ as s,o as n,c as a,a as t}from"./app.ace0dae9.js";const p={},o=t(`<h2 id="ol-\u52A0\u8F7D-mvt-\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#ol-\u52A0\u8F7D-mvt-\u5730\u56FE" aria-hidden="true">#</a> ol \u52A0\u8F7D mvt \u5730\u56FE</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// &lt;script src=&quot;https://openlayers.org/en/v6.15.1/examples/resources/mapbox-streets-v6-style.js&quot;&gt;&lt;/script&gt;</span>

<span class="token keyword">import</span> <span class="token string">&quot;./style.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VectorTileLayer <span class="token keyword">from</span> <span class="token string">&quot;ol/layer/VectorTile&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VectorTileSource <span class="token keyword">from</span> <span class="token string">&quot;ol/source/VectorTile&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">MVT</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/format/MVT&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> apply <span class="token keyword">from</span> <span class="token string">&quot;ol-mapbox-style&quot;</span><span class="token punctuation">;</span>

<span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mapbox://styles/mapbox/streets-v11&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">accessToken</span><span class="token operator">:</span>
    <span class="token string">&quot;pk.eyJ1IjoiNjMxMjk4OTgzIiwiYSI6ImNrcXE3bGJjMzExd2Yyd3IxZnVsMzF3YnoifQ.PwJgJ85Al8qG_6Sr6OecbA&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">VectorTileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">declutter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorTileSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">MVT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span>
          <span class="token string">&quot;https://{a-d}.tiles.mapbox.com/v1/mapbox.mapbox-streets-v8/&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiNjMxMjk4OTgzIiwiYSI6ImNrcXE3bGJjMzExd2Yyd3IxZnVsMzF3YnoifQ.PwJgJ85Al8qG_6Sr6OecbA&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(l,r){return n(),a("div",null,e)}var k=s(p,[["render",c],["__file","ol\u52A0\u8F7Dmvt.html.vue"]]);export{k as default};
