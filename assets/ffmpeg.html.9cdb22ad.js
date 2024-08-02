import{_ as a,o as s,c as n,a as e}from"./app.ace0dae9.js";const p={},t=e(`<p>ffmpeg</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-i</span> input_video.mp4 <span class="token punctuation">\\</span>
<span class="token parameter variable">-c:v</span> libx264 <span class="token punctuation">\\</span>
<span class="token parameter variable">-c:a</span> aac <span class="token punctuation">\\</span>
<span class="token parameter variable">-hls_time</span> <span class="token number">10</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-hls_segment_type</span> mpegts <span class="token punctuation">\\</span>
<span class="token parameter variable">-hls_list_size</span> <span class="token number">0</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-f</span> hls <span class="token punctuation">\\</span>
<span class="token parameter variable">-max_muxing_queue_size</span> <span class="token number">1024</span> <span class="token punctuation">\\</span>
output.m3u8
</code></pre></div>`,2),c=[t];function l(o,r){return s(),n("div",null,c)}var u=a(p,[["render",l],["__file","ffmpeg.html.vue"]]);export{u as default};
