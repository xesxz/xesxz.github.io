import{_ as n,o as a,c as l,b as t,d as r,a as o,e as c,r as s}from"./app.ace0dae9.js";const g={},i=o(`<h2 id="mac-\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#mac-\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> mac \u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1</h2><p>com.example.autorun.plist</p><div class="language-text ext-text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;
&lt;plist version=&quot;1.0&quot;&gt;
    &lt;dict&gt;
        &lt;key&gt;Label&lt;/key&gt;
        &lt;string&gt;com.example.autorun&lt;/string&gt;
        &lt;key&gt;ProgramArguments&lt;/key&gt;
        &lt;array&gt;
            &lt;string&gt;/bin/sh&lt;/string&gt;
            &lt;string&gt;/path/to/your/script.sh&lt;/string&gt;
        &lt;/array&gt;
        &lt;key&gt;StartCalendarInterval&lt;/key&gt;
        &lt;dict&gt;
            &lt;key&gt;Hour&lt;/key&gt;
            &lt;integer&gt;17&lt;/integer&gt;
            &lt;key&gt;Minute&lt;/key&gt;
            &lt;integer&gt;0&lt;/integer&gt;
        &lt;/dict&gt;
    &lt;/dict&gt;
&lt;/plist&gt;

</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>
mv com.example.autorun.plist /Library/LaunchDaemons/

launchctl load /Library/LaunchDaemons/com.example.autorun.plist

launchctl unload /Library/LaunchDaemons/com.example.autorun.plist

</code></pre></div>`,4),u={href:"https://blog.csdn.net/seanxwq/article/details/125484860",target:"_blank",rel:"noopener noreferrer"},d=c("macOS\u4E0B\u4F7F\u7528crontab\u5B9A\u65F6\u4EFB\u52A1");function p(m,h){const e=s("ExternalLinkIcon");return a(),l("div",null,[i,t("p",null,[t("a",u,[d,r(e)])])])}var _=n(g,[["render",p],["__file","mac.html.vue"]]);export{_ as default};
