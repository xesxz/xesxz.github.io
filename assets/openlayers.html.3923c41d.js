import{_ as p,o,c,b as n,d as t,e as a,a as e,r as l}from"./app.ace0dae9.js";const u={},r=n("h1",{id:"openlayers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#openlayers","aria-hidden":"true"},"#"),a(" openlayers")],-1),i=n("h2",{id:"openlayers-api-\u6574\u7406-\u601D\u5426",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#openlayers-api-\u6574\u7406-\u601D\u5426","aria-hidden":"true"},"#"),a(" Openlayers API \u6574\u7406-\u601D\u5426")],-1),k={href:"https://segmentfault.com/a/1190000020297846",target:"_blank",rel:"noopener noreferrer"},d=a("Openlayers API \u6574\u7406-\u601D\u5426"),f=e(`<h2 id="openlayer-\u70B9\u51FB\u8981\u7D20\u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#openlayer-\u70B9\u51FB\u8981\u7D20\u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F" aria-hidden="true">#</a> openLayer \u70B9\u51FB\u8981\u7D20\u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F</h2><p>1.\u9996\u5148\u662F map \u7684\u70B9\u51FB\u4E8B\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> coordinate <span class="token operator">=</span> evt<span class="token punctuation">.</span>coordinate<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u70B9\u51FB\u8981\u7D20\u7684\u4F4D\u7F6Ecoordinate[0]\u4E3A\u7CBE\u5EA6coordinate[1]\u4E3A\u7EAC\u5EA6</span>
  <span class="token doc-comment comment">/****************************************************/</span>
  <span class="token comment">//\u5224\u65AD\u5F53\u524D\u5355\u51FB\u5904\u662F\u5426\u6709\u8981\u7D20\uFF0C\u6355\u83B7\u5230\u8981\u7D20\u65F6\u5F39\u51FApopup</span>
  <span class="token keyword">var</span> feature <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>
    evt<span class="token punctuation">.</span>pixel<span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layerVetor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> feature<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>feature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6355\u6349\u5230\u8981\u7D20</span>

    <span class="token comment">// featuerInfo = feature.getProperties().features[0].N.attribute;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
      <span class="token string">&quot;\u83B7\u53D6\u5230\u70B9\u51FB\u7684\u8981\u7D20&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;jingdu:&quot;</span> <span class="token operator">+</span> coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;lei&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5176\u4E2Dlei\u662F\u5B9A\u4E49\u7684\u5C5E\u6027</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>2.\u4F7F\u7528 Select \u8FDB\u884C\u8981\u7D20\u7684\u9009\u62E9</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5B9A\u4E49select\u63A7\u5236\u5668\uFF0C\u70B9\u51FB\u6807\u6CE8\u540E\u7684\u4E8B\u4EF6</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">;</span>
<span class="token keyword">var</span> select <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//map\u52A0\u8F7D\u8BE5\u63A7\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u6FC0\u6D3B\u53EF\u7528\u7684</span>
map<span class="token punctuation">.</span><span class="token function">addInteraction</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span><span class="token punctuation">;</span>
select<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u9009\u4E2D\u8981\u7D20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// console.log(e.selected[0].get(&#39;name&#39;)); //\u6253\u5370\u5DF2\u9009\u62E9\u7684Feature\u7684name\u5C5E\u6027</span>
  <span class="token keyword">var</span> currentRome <span class="token operator">=</span> e<span class="token punctuation">.</span>selected<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="openlayer-\u70B9\u51FB-wms-\u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#openlayer-\u70B9\u51FB-wms-\u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F" aria-hidden="true">#</a> openLayer \u70B9\u51FB wms \u83B7\u53D6\u5BF9\u5E94\u7684\u5C5E\u6027\u4FE1\u606F</h2><p>\u901A\u8FC7 <code>getFeatureInfoUrl</code>\u83B7\u53D6 url, url \u8BF7\u6C42\u8FD4\u56DE\u5BF9\u5E94\u7684 Feature (\u8001\u7248\u672C\u4E3A<code>getGetFeatureInfoUrl</code>) \u53EF\u4EE5\u8FD4\u56DE\u5177\u4F53\u7684 html\u3001json</p><h2 id="openlayer-\u83B7\u53D6\u56FE\u5C42\u662F-geojson-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#openlayer-\u83B7\u53D6\u56FE\u5C42\u662F-geojson-\u7C7B\u578B" aria-hidden="true">#</a> openLayer \u83B7\u53D6\u56FE\u5C42\u662F geojson \u7C7B\u578B</h2><p>\u65B9\u6CD5\u4E00</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> features <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> features<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geojsonType <span class="token operator">=</span> geometry<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u65B9\u6CD5\u4E8C</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> features <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> features<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

geometry <span class="token keyword">instanceof</span> <span class="token class-name">LineString</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5750\u6807\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u8F6C\u6362" aria-hidden="true">#</a> \u5750\u6807\u8F6C\u6362</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">11305782.573945541</span><span class="token punctuation">,</span> <span class="token number">3957322.3425137387</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;EPSG:3857&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7531\u6295\u5F71 \u8F6C\u5411 \u666E\u901A\u7ECF\u7EAC\u5EA6</span>
ol<span class="token punctuation">.</span>proj<span class="token punctuation">.</span><span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">37.41</span><span class="token punctuation">,</span> <span class="token number">8.82</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7531\u666E\u901A\u7ECF\u7EAC\u5EA6 \u8F6C\u5411 \u6295\u5F71</span>
</code></pre></div><h2 id="\u5750\u6807\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u7CFB" aria-hidden="true">#</a> \u5750\u6807\u7CFB</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>    <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&#39;EPSG:3857&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4\u662F\u6295\u5F71\u5750\u6807\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4E0D\u7528\u8BBE\u7F6E</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> ol<span class="token punctuation">.</span>proj<span class="token punctuation">.</span><span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">117.244302</span><span class="token punctuation">,</span> <span class="token number">31.822944</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u56E0\u4E3Aprojection\u662F\u8BBE\u7F6E\u7684\u6295\u5F71\u5750\u6807\uFF0C\u9700\u8981\u5C06\u7ECF\u7EAC\u5EA6\u5750\u6807\u8F6C\u6362\u4E3A\u6295\u5F71\u5750\u6807</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code>   <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">104.04754138059005</span><span class="token punctuation">,</span> <span class="token number">30.657127519105</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> ---</h2>`,18),g={href:"https://blog.csdn.net/qingyafan/article/details/49848455?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-3.nonecase",target:"_blank",rel:"noopener noreferrer"},m=a("OpenLayers 3 \u4E4B \u52A8\u6001\u70B9\u6269\u6563\u6548\u679C"),h=e(`<h2 id="flyto" tabindex="-1"><a class="header-anchor" href="#flyto" aria-hidden="true">#</a> flyTo</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>map
  <span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>point<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5148\u653E\u5927\u518D\u79FB\u52A8</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map
  <span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>point<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5148\u79FB\u52A8\u518D\u653E\u5927</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map
  <span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>point<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u540C\u65F6\u79FB\u52A8\u548C\u653E\u5927  \u8FD8\u53EF\u4EE5\u52A0\u4E00\u4E2A\u5C5E\u6027duration: 10000</span>
</code></pre></div><h2 id="\u98DE\u884C\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u98DE\u884C\u65B9\u5F0F" aria-hidden="true">#</a> \u98DE\u884C\u65B9\u5F0F</h2><h3 id="animate-view-animate" tabindex="-1"><a class="header-anchor" href="#animate-view-animate" aria-hidden="true">#</a> animate <code>view.animate</code></h3><h3 id="fit-view-fit" tabindex="-1"><a class="header-anchor" href="#fit-view-fit" aria-hidden="true">#</a> fit view.fit</h3><div class="language-text ext-text"><pre class="language-text"><code>
## \u6700\u4F73\u53EF\u89C6\u8303\u56F4\u548C\u9650\u5236\u7F29\u653E

[openlayers \u4E2D\u8BBE\u7F6E\u5730\u56FE\u6700\u4F73\u53EF\u89C6\u8303\u56F4\u548C\u9650\u5236\u7F29\u653E](https://blog.csdn.net/qq_34817440/article/details/104232186?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-2-104232186.nonecase&amp;utm_term=openlayers%E6%98%BE%E7%A4%BA%E5%9C%B0%E5%9B%BE%E8%8C%83%E5%9B%B4&amp;spm=1000.2123.3001.4430)

## \u70B9\u51FB\u9AD8\u4EAE\u533A\u57DF

\`\`\`javascript
   singleClickFun () {
      const self = this
      function mapClick (e) {
        //\u70B9\u51FB\u540E\u5148\u5224\u65ADfeature\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u5148\u8FD8\u539F
        if (self.feature) {
          self.feature.setStyle(new OlStyleStyle({
            stroke: new OlStyleStroke({
              color: &#39;#000&#39;,
              width: 2
            }),
            fill: new OlStyleFill({
              color: [38, 155, 0, 0.3]	//\u4F7F\u7528\u4E86\u4E00\u4E2A\u6570\u7EC4\uFF0C[r,g,b,a]
            })
          }))
        }
        let pixel = self.map.getEventPixel(e.originalEvent);
        let featureInfo = self.map.forEachFeatureAtPixel(pixel, (feature) =&gt; {
          return feature
        })
        self.feature = featureInfo
        const name1 = featureInfo.getProperties().name
        console.log(featureInfo, &quot;feature&quot;)
        console.log(featureInfo.ol_uid)
        featureInfo.setStyle(new OlStyleStyle({
          fill: new OlStyleFill({
            color: &#39;rgba(57,255,155,0.26)&#39;
          }),
          stroke: new OlStyleStroke({
            color: &#39;rgba(193,180,213,0.5)&#39;,
            width: 2
          }),
          text: new OlStyleText({
            text: name1,
            font: &#39;18px Calibri,sans-serif&#39;,
            fill: new OlStyleFill({
              color: &#39;#000000&#39;
            })
          })
        }))
      }
      this.map.on(&#39;singleclick&#39;, event =&gt; {
        mapClick(event)
      })
    },



</code></pre></div><h2 id="\u6DFB\u52A0\u7684\u56FE\u5C42\u5C45\u4E2D\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7684\u56FE\u5C42\u5C45\u4E2D\u663E\u793A" aria-hidden="true">#</a> \u6DFB\u52A0\u7684\u56FE\u5C42\u5C45\u4E2D\u663E\u793A</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> extent <span class="token operator">=</span> layerJson<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fit</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="openlayers-\u83B7\u53D6\u5355\u4E2A\u8981\u7D20-feature-\u7684\u51E0\u4F55\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#openlayers-\u83B7\u53D6\u5355\u4E2A\u8981\u7D20-feature-\u7684\u51E0\u4F55\u7C7B\u578B" aria-hidden="true">#</a> Openlayers \u83B7\u53D6\u5355\u4E2A\u8981\u7D20 feature \u7684\u51E0\u4F55\u7C7B\u578B</h2><p><code>feature.getGeometry().getType()</code></p><p><code>feature.getProperties().geometry instanceof Point</code></p><h2 id="\u5750\u6807\u7CFB\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u7CFB\u6CE8\u518C" aria-hidden="true">#</a> \u5750\u6807\u7CFB\u6CE8\u518C</h2>`,12),y={href:"https://epsg.io/",target:"_blank",rel:"noopener noreferrer"},v=a("epsg"),_=e(`<div class="language-text ext-text"><pre class="language-text"><code>
import { register } from &#39;ol/proj/proj4&#39;
import proj4 from &quot;proj4&quot;
proj4.defs(
  &#39;EPSG:4548&#39;,
  &#39;+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs&#39;
)
register(proj4)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>//\u6307\u5B9A\u8F93\u51FA\u5750\u6807
   format: new GeoJSON({
      dataProjection: &#39;EPSG:4544&#39;, // \u5143\u6570\u636E\u7684\u6295\u5F71\u5750\u6807
      featureProjection: &#39;EPSG:4326&#39; // \u89C4\u5B9A\u8981\u7D20\u4EE5\u54EA\u79CD\u5750\u6807\u663E\u793A
    }),
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>function getLayerById(map, layerId) {
  const layers = map.getLayers().getArray();
  for (let i = 0; i &lt; layers.length; i++) {
    if (layers[i].get(&#39;id&#39;) === layerId) {
      return layers[i];
    }
  }
  return null;
}

  getLayerByName(name) {
  return  this.map.getLayers().getArray().find(item =&gt; {
      return item.get(&quot;name&quot;) == name 
    })
  },
</code></pre></div><p>openlayers\u52A0\u8F7Dgif\u4E09\u79CD\u65B9\u6848 1.gifler 2 overlay 3 \u51E0\u5F20\u4E0D\u540C\u5E27\u7684\u56FE\u7247\u5FAA\u73AF\u6E32\u67D3</p>`,4),x={href:"https://blog.csdn.net/qq_40323256/article/details/107817399",target:"_blank",rel:"noopener noreferrer"},w=a("openlayer\u4E2D\u52A0\u8F7Dgeojson\u7684\u51E0\u79CD\u65B9\u5F0F"),b=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`new VectorSource({
        url: data,
        format: new GeoJSON(),
      });



new VectorSource({
        features: new GeoJSON().readFeatures(data),
      });



      \`\`\`

\u6269\u6563\u5708
\u4E00\u76F4\u5FAA\u73AF\u5F80\u590D
\u5411\u5916\u6269\u6563



\u5B66\u4E60\u8DEF\u7EBF 

iClient-JavaScript-master

https://github.com/NieuwlandGeo/SLDReade
dzsp

// \u95EA\u70C1\u65B9\u6CD5
let interval
function flash(feature, speed) {
  const defaultStyle = olStyle.getPointStyle(feature);
  const hoverStyle = olStyle.getPointStyle(feature, true);

  //\u505C\u6B62\u95EA\u70C1\u7684\u6807\u5FD7
  let flag = 0;
  interval && clearInterval(interval);
  //\u95EA\u70C1\u65B9\u6CD5\u5BF9\u8C61
  interval = setInterval(function () {
    //\u95EA\u70C1\u6B21\u6570
    if (flag <= 1 * 20) {
      if (flag % 2 == 0) {
        feature.setStyle(defaultStyle);
      } else {
        feature.setStyle(hoverStyle);
      }
      flag++;
    } else {
      //\u505C\u6B62\u95EA\u70C1,\u8FD8\u539F\u6837\u5F0F,\u5220\u9664\u95F4\u9694\u5BF9\u8C61
      feature.setStyle(defaultStyle);
      window.clearInterval(interval);
    }
    //\u95F4\u9694\u65F6\u95F4
  }, speed * 100);
}
`)])],-1);function j(S,q){const s=l("ExternalLinkIcon");return o(),c("div",null,[r,i,n("p",null,[n("a",k,[d,t(s)])]),f,n("p",null,[n("a",g,[m,t(s)])]),h,n("p",null,[n("a",y,[v,t(s)])]),_,n("p",null,[n("a",x,[w,t(s)])]),b])}var L=p(u,[["render",j],["__file","openlayers.html.vue"]]);export{L as default};
