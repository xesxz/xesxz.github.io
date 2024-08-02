import{_ as e,o,c,b as n,d as t,a as p,e as a,r as i}from"./app.ace0dae9.js";const u={},l=p('<h1 id="cesium" tabindex="-1"><a class="header-anchor" href="#cesium" aria-hidden="true">#</a> cesium</h1><h2 id="alphamode" tabindex="-1"><a class="header-anchor" href="#alphamode" aria-hidden="true">#</a> <strong>AlphaMode</strong></h2><p>3DTile b3dm \u5185\u5D4C\u7684 glb \u6570\u636E,glb \u7684 material \u4E2D alphaMode \u6709\u4E09\u79CD\u6A21\u5F0F</p><h2 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> <strong>Animation</strong></h2><p>\u63A7\u4EF6 widget</p><h2 id="animationviewmodel" tabindex="-1"><a class="header-anchor" href="#animationviewmodel" aria-hidden="true">#</a> <strong>AnimationViewModel</strong></h2><h2 id="\u7B2C\u4E09\u65B9\u516C\u53F8" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u516C\u53F8" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u516C\u53F8</h2><p><a href="">\u53A6\u95E8\u56FE\u6251\u8F6F\u4EF6\u79D1\u6280\u6709\u9650\u516C\u53F8</a></p>',8),r={href:"http://earthsdk.com/",target:"_blank",rel:"noopener noreferrer"},k=a("earthsdk"),d=p(`<p><a href="">\u6570\u5B57\u89C6\u89C9</a></p><h2 id="\u89C6\u89D2" tabindex="-1"><a class="header-anchor" href="#\u89C6\u89D2" aria-hidden="true">#</a> \u89C6\u89D2</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">;</span>
view<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">116.435314</span><span class="token punctuation">,</span> <span class="token number">39.960521</span><span class="token punctuation">,</span> <span class="token number">15000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u8BBE\u7F6E\u4F4D\u7F6E</span>
  <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">heading</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pitch</span><span class="token operator">:</span> cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2</span><span class="token punctuation">;</span>
view<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//west, south, east, north</span>

  <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">heading</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u65B9\u5411</span>

    <span class="token literal-property property">pitch</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u503E\u659C\u89D2\u5EA6</span>

    <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> center <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">98.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>center<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4790000.0</span><span class="token punctuation">,</span> <span class="token number">3930000.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Using a HeadingPitchRange offset</span>
<span class="token keyword">var</span> center <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> heading <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">50.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pitch <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> range <span class="token operator">=</span> <span class="token number">5000.0</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>
  center<span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRange</span><span class="token punctuation">(</span>heading<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> range<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u52A0\u8F7D\u6CB3\u6D41" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6CB3\u6D41" aria-hidden="true">#</a> \u52A0\u8F7D\u6CB3\u6D41</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>    <span class="token function">loadWater</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        _this<span class="token punctuation">.</span><span class="token function">reqRoadrData</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> features <span class="token operator">=</span> res<span class="token punctuation">.</span>features<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> features<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> geometry <span class="token operator">=</span> features<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>geometry<span class="token punctuation">;</span>
                <span class="token keyword">let</span> coordinates <span class="token operator">=</span> geometry<span class="token punctuation">.</span>coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> geo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> coordinates<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    geo<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> coordinates<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">geometry</span><span class="token operator">:</span> geo<span class="token punctuation">,</span> <span class="token comment">//\u6C34\u7684geometry\u6A21\u677F</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">water_normals_map</span><span class="token operator">:</span> <span class="token string">&#39;./js/comps/water/waternormals.jpg&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u6C34\u52A8\u6548\u8D34\u56FE</span>
                    <span class="token literal-property property">texture_width</span><span class="token operator">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">texture_height</span><span class="token operator">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">water_opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u6C34\u7684\u900F\u660E\u5EA6</span>
                    <span class="token literal-property property">water_color</span><span class="token operator">:</span> <span class="token number">0x3195fa</span><span class="token punctuation">,</span> <span class="token comment">//\u6C34\u7684\u989C\u82720x33CCFF</span>
                    <span class="token literal-property property">distortionScale</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//\u6C34\u4E2D\u5012\u5F71\u6E05\u6670\u5EA6\uFF08\u8D8A\u5927\u8D8A\u4E0D\u6E05\u6670\uFF09</span>
                    <span class="token literal-property property">fog</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5F00\u542F\u96FE\u5316\u6548\u679C</span>
                    <span class="token literal-property property">water_size</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token comment">//\u6C34\u9762\u8D77\u4F0F\u5927\u5C0F\uFF08\u8D8A\u5C0F\u8D8A\u5927\uFF09</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> widget <span class="token operator">=</span> _this<span class="token punctuation">.</span>map<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addWidget</span><span class="token punctuation">(</span>Vex<span class="token punctuation">.</span>Water<span class="token punctuation">,</span> data<span class="token punctuation">,</span> style<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                widget<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">computeViewRectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u89C6\u89D2\u7684 Rectangle</span>

viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>positionCartographic<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u76F8\u673A\u9AD8\u5EA6</span>

<span class="token function">copy</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u89C6\u89D2</span>

<span class="token keyword">function</span> <span class="token function">getRadiansOfCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> position <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> heading <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>heading<span class="token punctuation">;</span>
  <span class="token keyword">const</span> pitch <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>pitch<span class="token punctuation">;</span>
  <span class="token keyword">const</span> roll <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>roll<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> position<span class="token punctuation">,</span> <span class="token comment">//\u4E09\u7EF4\u7B1B\u5361\u5C14\u5750\u6807</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      heading<span class="token punctuation">,</span>
      pitch<span class="token punctuation">,</span>
      roll<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>





  <span class="token keyword">function</span> <span class="token function">getDegreesOfCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> lngLat <span class="token operator">=</span> <span class="token function">cartesian3ToDegrees</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>positionWC<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> heading <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>heading<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> pitch <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>pitch<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> roll <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>roll<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token punctuation">[</span>lngLat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> lngLat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> lngLat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">[</span>heading<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> roll<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>




<span class="token doc-comment comment">/**
 * \u4E09\u7EF4\u7B1B\u5361\u5C14\u5750\u6807\u8F6C\u89D2\u5EA6
 */</span>
 <span class="token keyword">function</span> <span class="token function">cartesian3ToDegrees</span><span class="token punctuation">(</span>
  <span class="token parameter">cartesian3</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lngLat <span class="token operator">=</span> <span class="token punctuation">(</span>viewer
    <span class="token operator">?</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>ellipsoid
    <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span>
  <span class="token keyword">const</span> lng <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>lngLat<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span>
  <span class="token keyword">const</span> lat <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>lngLat<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span>
  <span class="token keyword">const</span> hei <span class="token operator">=</span> lngLat<span class="token punctuation">.</span>height
  <span class="token keyword">return</span> <span class="token punctuation">[</span>lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> hei<span class="token punctuation">]</span>
<span class="token punctuation">}</span>


</code></pre></div><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>If the mouse is over a point <span class="token keyword">of</span> interest<span class="token punctuation">,</span> change the entity billboard scale and color
<span class="token keyword">var</span> previousPickedEntity <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mousemove <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
 mousemove<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> pickedPrimitive <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>endPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">var</span> pickedEntity <span class="token operator">=</span> <span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pickedPrimitive<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> pickedPrimitive<span class="token punctuation">.</span>id <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>previousPickedEntity<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     previousPickedEntity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token keyword">null</span>
     <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pickedEntity<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pickedEntity<span class="token punctuation">.</span>billboard<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


   pickedEntity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> pickedEntity<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>_name<span class="token punctuation">.</span>_value<span class="token punctuation">,</span>
      <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;15px SimHei &#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>LabelStyle<span class="token punctuation">.</span><span class="token constant">FILL</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token literal-property property">horizontalOrigin</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HorizontalOrigin<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">verticalOrigin</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">TOP</span>
     <span class="token punctuation">}</span>
    previousPickedEntity <span class="token operator">=</span> pickedEntity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">MOUSE_MOVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5206\u8272\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5206\u8272\u6E32\u67D3" aria-hidden="true">#</a> \u5206\u8272\u6E32\u67D3</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;./data/beijing.geojson&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">dataSource<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> entities <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> entities<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> entity <span class="token operator">=</span> entities<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6784\u9020\u968F\u673A\u989C\u8272</span>
    <span class="token keyword">var</span> color <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token function">fromRandom</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">alpha</span><span class="token operator">:</span> <span class="token number">0.6</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> color<span class="token punctuation">;</span>
    entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>outline <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u52A0\u8F7D\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6A21\u578B" aria-hidden="true">#</a> \u52A0\u8F7D\u6A21\u578B</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> modelentity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u662F\u6A21\u578B\u7684\u63CF\u8FF0\u5C5E\u6027\uFF0C\u53EF\u4EE5\u662Fhtml\u6807\u7B7E</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">112.07</span><span class="token punctuation">,</span> <span class="token number">35.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;Model/SFTDT.glb&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8D44\u6E90\u8DEF\u5F84</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a> \u94FE\u63A5</h2>`,14),m={href:"https://www.cnblogs.com/arxive/p/10256065.html",target:"_blank",rel:"noopener noreferrer"},h=a("\u7ECF\u7EAC\u5EA6"),g={href:"https://blog.csdn.net/weixin_43805235/article/details/85112444",target:"_blank",rel:"noopener noreferrer"},y=a("\u6750\u8D28"),f=p(`<h2 id="\u52A0\u8F7D\u503E\u659C\u6444\u5F71" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u503E\u659C\u6444\u5F71" aria-hidden="true">#</a> \u52A0\u8F7D\u503E\u659C\u6444\u5F71</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> tileset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileset</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//\u76F8\u5BF9\u8DEF\u5F84</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://data.marsgis.cn/3dtiles/max-piping2/tileset.json&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u6DFB\u52A0\u5230\u7403\u4F53\u4E0A</span>
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tileset<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u5B9A\u4F4D\u8FC7\u53BB</span>
viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>tileset<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="mti3d" tabindex="-1"><a class="header-anchor" href="#mti3d" aria-hidden="true">#</a> mti3d</h2><p>\u9762 areaLayer._contentVectorLayer._values.popupName = &quot;exposePersonDetail&quot;;</p><p>\u805A\u5408 clusterLayer._layer._options.popupName = &quot;testPop&quot;;</p><p>\u5173\u95ED\u5F39\u6846 globe.globalOverlay.visible &amp;&amp; globe.globalOverlay.setPosition(undefined);</p><p>\u5173\u95ED\u591A\u4E2A\u5F39\u7A97\u4E24\u79CD\u65B9\u5F0F window.mti3d.overlay.remove(item, window.globe); overlay.destroy()</p><h3 id="\u5750\u6807\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u7CFB" aria-hidden="true">#</a> \u5750\u6807\u7CFB</h3><p>Cesium \u4E2D\u5E38\u7528\u7684\u5750\u6807\u6709\u4E24\u79CD <strong>WGS84 \u5730\u7406\u5750\u6807\u7CFB(104,30)</strong> \u548C <strong>\u7B1B\u5361\u5C14\u7A7A\u95F4\u5750\u6807\u7CFB Cartesian3</strong>\uFF0CWGS84 \u5730\u7406\u5750\u6807\u7CFB\u5305\u62EC WGS84 \u7ECF\u7EAC\u5EA6\u5750\u6807\u7CFB\uFF08\u6CA1\u6709\u5B9E\u9645\u7684\u5BF9\u8C61\uFF09\u548C WGS84 \u5F27\u5EA6\u5750\u6807\u7CFB\uFF08Cartographic\uFF09\uFF1B</p><p>cesium \u52A0\u8F7D\u9700\u4F7F\u7528\u5929\u5730\u56FE\u58A8\u5361\u6258\u663E\u793A\u7684\u4F4D\u7F6E\u624D\u662F\u6B63\u786E\u7684 vec_w</p><h4 id="\u5750\u6807\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u8F6C\u6362" aria-hidden="true">#</a> \u5750\u6807\u8F6C\u6362</h4><p>var Cartesian3_to_WGS84 = function (point) { var cartesian33 = new Cesium.Cartesian3(point.x, point.y, point.z); var cartographic = Cesium.Cartographic.fromCartesian(cartesian33); var lat = Cesium.Math.toDegrees(cartographic.latitude); var lng = Cesium.Math.toDegrees(cartographic.longitude); var alt = cartographic.height; return {lng: lng, lat: lat, alt: alt}; }</p>`,12),v={href:"https://www.cnblogs.com/matanzhang/p/11846929.html",target:"_blank",rel:"noopener noreferrer"},b=a("cnblogs"),w=a(" \u7ECF\u7EAC\u5EA6\u548C\u5F27\u5EA6\u7684\u8F6C\u6362"),C=p(`<div class="language-text ext-text"><pre class="language-text"><code>//\u65B9\u6CD5\u4E00\uFF1A
var longitude = Cesium.Math.toRadians(longitude1); //\u5176\u4E2D longitude1\u4E3A\u89D2\u5EA6

var latitude= Cesium.Math.toRadians(latitude1); //\u5176\u4E2D latitude1\u4E3A\u89D2\u5EA6

var cartographic = new Cesium.Cartographic(longitude, latitude, height)\uFF1B

//\u65B9\u6CD5\u4E8C\uFF1A
var cartographic= Cesium.Cartographic.fromDegrees(longitude, latitude, height);//\u5176\u4E2D\uFF0Clongitude\u548Clatitude\u4E3A\u89D2\u5EA6

//\u65B9\u6CD5\u4E09\uFF1A
var cartographic= Cesium.Cartographic.fromRadians(longitude, latitude, height);//\u5176\u4E2D\uFF0Clongitude\u548Clatitude\u4E3A\u5F27\u5EA6
</code></pre></div><h2 id="\u5730\u5F62" tabindex="-1"><a class="header-anchor" href="#\u5730\u5F62" aria-hidden="true">#</a> \u5730\u5F62</h2><div class="language-text ext-text"><pre class="language-text"><code>      terrainProvider: new Cesium.ArcGISTiledElevationTerrainProvider({
    url: &quot;https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer&quot;,
  }),

     terrainProvider : Cesium.createWorldTerrain()


</code></pre></div><h2 id="\u53EF\u5B66\u4E60\u7684\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5B66\u4E60\u7684\u6846\u67B6" aria-hidden="true">#</a> \u53EF\u5B66\u4E60\u7684\u6846\u67B6</h2><p>supermap</p><p>mars3d</p><p>mti3d</p><p>x</p><p>heightReference</p><p>1 \u9762\u72B6\u3001\u70B9\u72B6\u3001\u5E7F\u544A\u724C (\u9762\u8C8C\u4F3C\u4E0D\u7528\u8BBE\u7F6E\uFF0C\u4F46\u662F\u4ED6\u7684 perPositionHeight \u4E0D\u80FD\u4E3A ture) heightReference: HeightReference.CLAMP_TO_GROUND, //\u8D34\u5730</p><p>\u7EBF\u8981\u8FD9\u6837\u8BBE\u7F6E clampToGround: true,//\u5F00\u542F\u8D34\u5730</p><p>2 geojson let\xA0promise = Cesium.GeoJsonDataSource.load(_geojsondata, {</p><p>clampToGround:\xA0true</p><p>});</p><p>3 \u7EBF\u72B6\u6570\u636E\u9700\u8981\u8BBE\u7F6E clampToGround \u7684\u5C5E\u6027\u4E3A true\u3002 \u4F5C\u8005\uFF1A\u5730\u7406\u4FE1\u606F\u6280\u672F\u6742\u8C08 https://www.bilibili.com/read/cv19452276?from=articleDetail \u51FA\u5904\uFF1Abilibili</p><div class="language-text ext-text"><pre class="language-text"><code>  for (var i = 0; i &lt; entities.length; i++) {
        var entity = entities[i];

        entity.polygon.material = new Color(12 / 255, 152 / 255, 207 / 255, 1);
        entity.polygon.outline = false;
        // entity.polygon.extrudedHeight = 100
        entity.polygon.outlineWidth = 10;
        // Cesium \u8BBE\u7F6EPolygon\u8F6E\u5ED3\u7EBFoutlineWidth\u5BBD\u5EA6
        entity.polyline = {
          positions: entity.polygon.hierarchy._value.positions,
          width: entity.polygon.outlineWidth,
          material: Color.YELLOW
      }

</code></pre></div><h2 id="\u5E95\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5E95\u56FE" aria-hidden="true">#</a> \u5E95\u56FE</h2><div class="language-text ext-text"><pre class="language-text"><code> imageryProvider: createWorldImagery({
      style: IonWorldImageryStyle.ROAD,
    }),
    \`\`\`


## \`Color\`

</code></pre></div><pre><code>var defaultFill = Cesium.Color.fromBytes(255, 0, 0, 100);
// var defaultFill = new Cesium.Color(160 / 255, 30 / 255, 240 / 255, 1);
// var defaultFill = new Cesium.Color(255 / 255, 0 / 255, 0 / 255, 1);
\`\`\`

  //\u9ED8\u8BA4\u7684Cesium\u4F1A\u52A0\u8F7D\u4E00\u4E2AbingMap\u5E95\u56FE\uFF0C\u8FD9\u4E2A\u5730\u56FE\u7F51\u7EDC\u4E0D\u592A\u597D\uFF0C\u4E00\u822C\u8981\u5148\u53BB\u6389\u8FD9\u4E2A\u9ED8\u8BA4\u7684
</code></pre><p>viewer.imageryLayers.remove(viewer.imageryLayers.get(0));</p><p>\u5728 cesium \u4E2D viewer.camera \u548C viewer.scene.camera \u7684\u533A\u522B</p><p>viewer.flyTo \u548C viewer.camera.flyTo \u533A\u522B</p><p>\u524D\u8005\u662F\u98DE\u5411\u4E00\u4E2A\u5B9E\u4F53 \u540E\u8005\u662F\u98DE\u5411\u4E00\u4E2A\u5177\u4F53\u7684\u5750\u6807</p><p>map.viewer.scene.primitives.get(0) \u67E5\u770B\u5C5E\u6027</p><pre><code>    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function(movement) {
const feature = viewer.scene.pick(movement.endPosition);
if (feature instanceof Cesium.Cesium3DTileFeature) {
    const propertyIds = feature.getPropertyIds();
    const length = propertyIds.length;
    for (let i = 0; i &lt; length; ++i) {
        const propertyId = propertyIds[i];
        console.log(\`{propertyId}: \${feature.getProperty(propertyId)}\`);
    }
}
</code></pre><p>}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);</p><p>http://data.mars3d.cn/3dtiles/bim-daxue/scenetree.json</p><p>map.on(mars3d.EventType.click, function(event) { let feature = event.pickedObject; //\u4E0B\u9762\u53EA\u662F\u6F14\u793A\u89E3\u91CA\u5E95\u5C42\u5B9E\u73B0\uFF0C\u5728\u5E73\u53F0\u4E2D\u76F4\u63A5\u901A\u8FC7 event.graphic.attr \u53EF\u4EE5\u83B7\u53D6\u5C5E\u6027 if (feature instanceof Cesium.Cesium3DTileFeature) { let propertyNames = feature.getPropertyNames(); let length = propertyNames.length; for (var i = 0; i &lt; length; ++i) { let propertyName = propertyNames[i]; console.log(propertyName + &#39;: &#39; + feature.getProperty(propertyName)); } } });</p><p>\u868A\u9999\uFF1F material: new Cesium.Material({ fabric: { type: &#39;VtxfShader1&#39;, uniforms: { color: new Cesium.Color(0.2, 1.0, 0.0, 1.0), repeat: 30.0, offset: 0.0, thickness: 0.3, }, source: <code> uniform vec4 color; uniform float repeat; uniform float offset; uniform float thickness; czm_material czm_getMaterial(czm_materialInput materialInput) { czm_material material = czm_getDefaultMaterial(materialInput); float sp = 1.0/repeat; vec2 st = materialInput.st; float dis = distance(st, vec2(0.5)); float m = mod(dis + offset, sp); float a = step(sp*(1.0-thickness), m); material.diffuse = color.rgb; material.alpha = a * color.a; return material; } </code> }, translucent: false }),</p><pre><code>                * \u63A8\u8350\u4F7F\u7528 Notepade ++ \u6253\u5F00\u9605\u8BFB\uFF1B
</code></pre><ol><li>\u573A\u666F\u6570\u636E\u6587\u4EF6\u4E3A json \u683C\u5F0F\uFF0C\u8F93\u51FA\u8DEF\u5F84\u4E3A /info/index.json ;</li><li>\u793A\u4F8B\u6570\u636E\u5982\u4E0B { &quot;version&quot;: &quot;0.5&quot;, &quot;created&quot;: &quot;2019-08-12 16:31:32.618&quot;, &quot;copyright&quot;: &quot;Copyright BimAngle 2017-2019&quot;, &quot;db&quot;: { &quot;rootDbId&quot;: 1, &quot;externalIds&quot;: [null, &quot;doc&quot;, &quot;91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e58&quot;, &quot;&quot;, &quot;&quot;, &quot;f72ed939-20fb-4570-b23e-88f5281ad539-00022c59&quot;, &quot;5c80e61e-acf5-442d-afcc-fefd6ffc74bf-001493d8&quot;, &quot;91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e5f&quot;, &quot;ec54546d-d2dd-4ba0-b637-29155aa29f08-00151623&quot;, &quot;91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e75&quot;, &quot;ec54546d-d2dd-4ba0-b637-29155aa29f08-00155837&quot;, &quot;91b213cd-b5bc-4a74-8a53-fa8a69a4b7e6-00118e7c&quot;, &quot;b906fd0a-6f15-438c-96ae-71b6da03e3c6-0015ab26&quot;], &quot;parentIds&quot;: [-1, -1, 1, 1, 3, 4, 5, 1, 5, 1, 5, 1, 5], &quot;names&quot;: [null, &quot;Model&quot;, &quot;MEP_C_5F(37.600)&quot;, &quot;\u98CE\u7BA1&quot;, &quot;\u77E9\u5F62\u98CE\u7BA1&quot;, &quot;\u534A\u5F84\u5F2F\u5934/\u63A5\u5934&quot;, &quot;\u534A\u5F84\u5F2F\u5934/\u63A5\u5934 [1348568]&quot;, &quot;MEP_C_6F(41.800)&quot;, &quot;\u534A\u5F84\u5F2F\u5934/\u63A5\u5934 [1381923]&quot;, &quot;MEP_C_7F(46.000)&quot;, &quot;\u534A\u5F84\u5F2F\u5934/\u63A5\u5934 [1398839]&quot;, &quot;MEP_C_8F(50.200)&quot;, &quot;\u534A\u5F84\u5F2F\u5934/\u63A5\u5934 [1420070]&quot;], &quot;categories&quot;: [null, &quot;Revit Document&quot;, &quot;Revit Level&quot;, &quot;Revit Category&quot;, &quot;Revit Family Name&quot;, &quot;Revit Family Type&quot;, &quot;Revit Duct&quot;, &quot;Revit Level&quot;, &quot;Revit Duct&quot;, &quot;Revit Level&quot;, &quot;Revit Duct&quot;, &quot;Revit Level&quot;, &quot;Revit Duct&quot;], &quot;types&quot;: [-1, 5, 2, 3, 3, 3, 4, 2, 4, 2, 4, 2, 4], &quot;propPackIds&quot;: [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], &quot;boundingBoxes&quot;: [null, [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], null, [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 34.7], [65.574, 2.573, 21.6, 67.774, 7.93, 22.1], null, [65.574, 2.573, 25.8, 67.774, 7.93, 26.3], null, [65.574, 2.573, 30.0, 67.774, 7.93, 30.5], null, [65.574, 2.573, 34.2, 67.774, 7.93, 34.7]] } }</li><li>\u6240\u6709\u6570\u636E\u4FDD\u5B58\u5728 db \u5B57\u6BB5\u4E2D\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u5982\u4E0B: 3.1 \u6982\u8FF0 a. \u6574\u4E2A\u573A\u666F\u662F\u6309\u6811\u5F62\u7ED3\u6784\u7EC4\u7EC7\u7684\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u552F\u4E00 id, \u79F0\u4E3A dbId\uFF1B b. db.rootDbId \u4FDD\u5B58\u573A\u666F\u6811\u8DDF\u8282\u70B9\u7684 dbId \u503C; c. db \u7684\u5176\u5B83\u5B57\u6BB5\u7C7B\u578B\u90FD\u662F\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u7D22\u5F15\u503C\u5C31\u662F\u5BF9\u5E94\u7684 dbId\u3002\u6BD4\u5982\u8981\u83B7\u53D6 dbId = 10 \u8FD9\u4E2A\u8282\u70B9\u7684\u8282\u70B9\u540D\u79F0\uFF0C\u53EF\u4EE5\u53D6\u503C: db.names[10]; 3.2 \u5B57\u6BB5\u63CF\u8FF0 a. db.rootDbId: \u7C7B\u578B\u4E3A int\uFF0C\u6839\u8282\u70B9\u7684 id \u503C; b. db.externalIds: \u7C7B\u578B\u4E3A string[]\uFF0C\u8282\u70B9\u7684\u5916\u90E8 ID\uFF0C\u7528\u4E8E\u5173\u8054\u539F\u59CB BIM \u6A21\u578B\u4E2D\u7684\u6784\u4EF6\u3002\u4F8B\u5982\u5BF9\u4E8E rvt \u6A21\u578B\uFF0C\u8FD9\u91CC\u4FDD\u5B58\u7684\u662F\u5BF9\u5E94\u6784\u4EF6\u7684 element.UniqueId (Revit Api); c. db.parentIds: \u7C7B\u578B\u4E3A int[], \u8282\u70B9\u7684\u7236\u8282\u70B9 dbId\u3002\u4F8B\u5982\u8981\u83B7\u53D6 dbId = 10 \u8FD9\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9 dbId\uFF0C\u53EF\u4EE5\u53D6\u503C: db.parentIds[10]; d. db.names: \u7C7B\u578B\u4E3A string[], \u8282\u70B9\u7684\u540D\u79F0\u3002\u6BD4\u5982\u8981\u83B7\u53D6 dbId = 10 \u8FD9\u4E2A\u8282\u70B9\u7684\u540D\u79F0\uFF0C\u53EF\u4EE5\u53D6\u503C: db.names[10]; e. db.categories: \u7C7B\u578B\u4E3A string[], \u8282\u70B9\u7684\u5206\u7C7B\u3002\u53D6\u503C\u65B9\u6CD5\u540C\u4E0A\uFF1B f. db.types: \u7C7B\u578B\u4E3A int[], \u8282\u70B9\u7684\u51E0\u4F55\u5206\u7C7B\uFF0C\u4E3B\u8981\u53C2\u8003\u4E86 Navisworks \u7684\u6807\u8BC6\u65B9\u5F0F\u3002\u8BE6\u7EC6\u5B9A\u4E49: -1: \u65E0\u6548, 0,1: \u672A\u77E5, 2: \u56FE\u5C42(layer), 3:\u96C6\u5408(collection), 4:\u7EC4\u5408(composite), 5: \u6A21\u578B(model) g. db.propPackIds: \u7C7B\u578B\u4E3A int[], \u8282\u70B9\u7684\u8BE6\u7EC6\u5C5E\u6027\u5305 id\u3002\u4F8B\u5982\u8981\u83B7\u53D6 dbId = 10 \u8FD9\u4E2A\u8282\u70B9\u7684\u8BE6\u7EC6\u6570\u636E\uFF0C\u53EF\u4EE5\u52A0\u8F7D\u8FD9\u4E2A json \u6587\u4EF6: /info/{db.propPackIds[10]}.json ; h. db.boundingBoxes, \u7C7B\u578B\u4E3A double[][6], \u8282\u70B9\u7684\u7A7A\u95F4\u5305\u56F4\u76D2\u4FE1\u606F\uFF0C\u5185\u5BB9\u4E3A: [minX, minY, minZ, maxX, maxY, maxZ]; \u5982\u679C\u5E0C\u671B\u5C06\u89C6\u89D2\u5B9A\u4F4D\u67D0\u4E2A\u8282\u70B9\u7684\u8303\u56F4\uFF0C\u53EF\u4EE5\u8C03\u7528\u4EE5\u4E0B\u4EE3\u7801:</li></ol><p>function zoomToFeature(viewer, tileset, db, dbId){ var box = db.boundingBoxes[dbId]; if(!!box) return false;</p><p>var minX = box[0]; var minY = box[1]; var minZ = box[2]; var maxX = box[3]; var maxY = box[4]; var maxZ = box[5];</p><p>var sphere = Cesium.BoundingSphere.transform( Cesium.BoundingSphere.fromCornerPoints(new Cesium.Cartesian3(minX, minY, minZ), new Cesium.Cartesian3(maxX, maxY, maxZ)), tileset.root.computedTransform, new Cesium.BoundingSphere() ); var camera = viewer.scene.camera; var offset = new Cesium.HeadingPitchRange(camera.heading, camera.pitch, 0); camera.flyToBoundingSphere(sphere, {offset: offset});<br> return true; }</p><p>map.viewer.scene.globe.depthTestAgainstTerrain \u9ED8\u8BA4\u662Ffalse\uFF0C\u4E5F\u5C31\u662F\u4E0D\u4F7F\u7528\u6DF1\u5EA6\u68C0\u6D4B\uFF0C\u6240\u4EE5\u6A21\u578B\u4F1A\u906E\u6321\u5730\u5F62\uFF0C\u5BFC\u81F4\u6A21\u578B\u65E0\u6CD5\u663E\u793A\u5728\u5730\u5F62\u4E0B\u9762\u3002</p><p>supermap \u9ED8\u8BA4\u8BBE\u7F6E\u7684\u662Ftrue</p><p>\u6839\u636E\u89C6\u8DDD\u7F29\u653E\u56FE\u6807 scaleByDistance: new Cesium.NearFarScalar(10000, 1.0, 500000, 0.1)</p><h2 id="\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h2><div class="language-text ext-text"><pre class="language-text"><code>viewer.dataSources.removeAll()
viewer.scene.primitives.removeAll()
viewer.imageryLayers.removeAll()
</code></pre></div><p>\u519B\u6807 https://jsrun.net/note/6URpp</p><div class="language-text ext-text"><pre class="language-text"><code>        const viewer = new Cesium.Viewer(&quot;cesiumContainer&quot;, {
            baseLayer:false,
            baseLayerPicker: false,
            sceneModePicker: false,
            navigationHelpButton: false,
            homeButton: false,
            infoBox: false,
            timeline: false,
            animation: false,
            vrButton: false,
            geocoder: false,
            fullscreenButton: false,
            navigationInstructionsInitiallyVisible: false,
            shouldAnimate: true,
            creditContainer: document.createElement(&quot;div&quot;)
        });
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

        \`\`\`

        \`\`\`
           // \u8BA1\u7B97\u77E9\u9635
    const computeModelMatrix = (position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) =&gt; {
        // \u8BA1\u7B97\u65CB\u8F6C\u89D2\u5EA6
        let rotationX = Cesium.Matrix4.fromRotationTranslation(
            Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(rotation[0])));

        let rotationY = Cesium.Matrix4.fromRotationTranslation(
            Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(rotation[1])));

        let rotationZ = Cesium.Matrix4.fromRotationTranslation(
            Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rotation[2])));
        // \u6839\u636E\u4F4D\u7F6E\u8BA1\u7B97\u77E9\u9635
        let enuMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
            Cesium.Cartesian3.fromDegrees(...position)
        );
        // \u65CB\u8F6C\u77E9\u9635
        Cesium.Matrix4.multiply(enuMatrix, rotationX, enuMatrix);
        Cesium.Matrix4.multiply(enuMatrix, rotationY, enuMatrix);
        Cesium.Matrix4.multiply(enuMatrix, rotationZ, enuMatrix);
        // \u7F29\u653E\u77E9\u9635
        let scaleMatrix = Cesium.Matrix4.fromScale(new Cesium.Cartesian3(...scale));
        // \u8BA1\u7B97\u6700\u7EC8\u77E9\u9635
        let modelMatrix = Cesium.Matrix4.multiply(enuMatrix, scaleMatrix, new Cesium.Matrix4());

        return modelMatrix;
    }


      tileset.root.transform = computeModelMatrix([113.31914084147262, 23.10896926740387, 0], [0, 0, 0], [2, 2, 2])
    \`\`\`


[Geometry types \u51E0\u4F55\u56FE\u5F62\u7C7B\u578B](http://cesium.coinidea.com/uploads/2019/06/02/5cf37e714b37217644.png)
[[CesiumJS]Cesium\u6559\u7A0B\u4E2D\u7EA77 -\u51E0\u4F55\u56FE\u5F62\u548C\u5916\u89C2](http://cesium.coinidea.com/topic/578.html)



  const  boundingSphere = Cesium.RectangleGeometry.createGeometry(geometry).boundingSphere
    viewer.camera.flyToBoundingSphere(boundingSphere, { duration: 0 })



PolylineGeometry -&gt; GeometryInstance -&gt; Primitive

RectangleGeometry -&gt; GeometryInstance -&gt; Primitive

PolygonGeometry -&gt; GeometryInstance -&gt; Primitive

const points = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());
const billboards = viewer.scene.primitives.add(new Cesium.BillboardCollection());

</code></pre></div>`,41);function x(q,_){const s=i("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",r,[k,t(s)])]),d,n("p",null,[n("a",m,[h,t(s)])]),n("p",null,[n("a",g,[y,t(s)])]),f,n("p",null,[n("a",v,[b,t(s)]),w]),C])}var I=e(u,[["render",x],["__file","cesium.html.vue"]]);export{I as default};
