import{_ as t,o as p,c as o,b as n,d as e,e as s,a as r,r as c}from"./app.ace0dae9.js";const l={},u=n("h1",{id:"eslint-prettier",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-prettier","aria-hidden":"true"},"#"),s(" eslint + prettier")],-1),k=n("p",null,[n("code",null,"npm install eslint --save-dev"),n("code",null,"npm install --save-dev --save-exact prettier")],-1),i={href:"https://eslint.org/docs/latest/user-guide/getting-started",target:"_blank",rel:"noopener noreferrer"},y=s("eslint \u5B98\u65B9\u6587\u6863"),q=r(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:vue/essential&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@vue/prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">TMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token constant">SPPUC</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">turf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">westMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;warn&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-alert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u6B62\u4F7F\u7528alert\uFF0Cconfirm\uFF0Cprompt</span>
    <span class="token string-property property">&quot;object-shorthand&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u65B9\u6CD5\u548C\u5C5E\u6027\u4F7F\u7528\u7B80\u5199\u8BED\u6CD5</span>
    <span class="token string-property property">&quot;prefer-const&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;**/__tests__/*.{j,t}s?(x)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;**/tests/unit/**/*.spec.{j,t}s?(x)&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">jest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function d(g,_){const a=c("ExternalLinkIcon");return p(),o("div",null,[u,k,n("p",null,[n("a",i,[y,e(a)])]),q])}var b=t(l,[["render",d],["__file","b.html.vue"]]);export{b as default};
