import{_ as o,o as l,c as d,b as e,d as a,a as n,e as s,r as c}from"./app.ace0dae9.js";const p={},r=n(`<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h2><h3 id="\u5173\u95ED\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u7AEF\u53E3" aria-hidden="true">#</a> \u5173\u95ED\u7AEF\u53E3</h3><p>lsof -i :8100 \u627E\u5230\u9700\u8981\u5173\u95ED\u7684\u7AEF\u53E3 sudo kill -9 1140 \u627E\u5230 pid \u5173\u95ED\u5B83</p><h3 id="\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84" aria-hidden="true">#</a> \u8DEF\u5F84</h3><div class="language-text ext-text"><pre class="language-text"><code>./ \u4EE3\u8868\u4E00\u7EA7\u4E0A\u7EA7\u76EE\u5F55(\u95F4\u9694\u4E00\u4E2A\u76EE\u5F55)
../ \u4EE3\u8868\u4E00\u7EA7\u4E0A\u7EA7\u76EE\u5F55(\u95F4\u9694\u4E00\u4E2A\u76EE\u5F55)
../../\u4EE3\u8868\u4E8C\u7EA7\u4E0A\u7EA7\u76EE\u5F55(\u95F4\u9694\u4E24\u4E2A\u76EE\u5F55)

</code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-text ext-text"><pre class="language-text"><code>ss -tuln

netstat -tuln
</code></pre></div><p>\u8FD4\u56DE\u5230\u4E0A\u7EA7 <code>cd ..</code></p><p><code>open .</code></p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-text ext-text"><pre class="language-text"><code>\u590D\u5236\u6587\u4EF6\u5230\u6587\u4EF6\u5939//
# \u5C06 /home/test.txt \u590D\u5236\u5230 /tmp/ \u6587\u4EF6\u5939\u4E2D
cp /home/test.txt /tmp/

\u590D\u5236\u6587\u4EF6\u5939\u5230\u6587\u4EF6\u5939
# \u5C06 /home/downloads/ \u6587\u4EF6\u5939 \u590D\u5236\u5230 /tmp/ \u6587\u4EF6\u5939\u4E2D
cp  -r /home/downloads/ /tmp/

\u5728mac\u7CFB\u7EDF\u4E2D\u52A0\u4E0A
cp -r  ~/Desktop/drag/  ~/Desktop/done

</code></pre></div><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h2>`,12),i={href:"https://www.jianshu.com/p/69496fb3495e",target:"_blank",rel:"noopener noreferrer"},h=s("MAC \u4E0B\u5B89\u88C5\u914D\u7F6E Tomcat\uFF08\u5C0F\u767D\u5411\uFF09"),u=n(`<div class="language-text ext-text"><pre class="language-text"><code>cd /Library/Tomcat/bin
sudo sh ./startup.sh
sudo sh ./shutdown.sh
http://localhost:7777/dist/
./catalina.sh run
</code></pre></div><p>vi</p><p>:wq \u4FDD\u5B58bk \u5E76\u9000\u51FA</p><p>:q \u4E0D\u4FDD\u5B58\u9000\u51FA</p><p>:q! \u4E0D\u4FDD\u5B58\u9000\u51FA</p><p>docker run -p 8888:80 adolfintel/speedtest</p><p><code>systemctl status firewalld </code><code>systemctl start firewalld</code><code>systemctl status firewalld</code><code>systemctl stop firewalld</code></p><div class="language-text ext-text"><pre class="language-text"><code>&lt;!-- centos --&gt;
firewall-cmd --zone=public --add-port=514/udp --permanent
firewall-cmd --zone=public --add-port=514/tcp --permanent

firewall-cmd --reload

firewall-cmd --list-all
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u67E5\u770B\u5DF2\u653E\u884C\u7684\u7AEF\u53E3\uFF1Afirewall-cmd --list-ports
\u653E\u884C\u670D\u52A1\u5668\u7AEF\u53E3\uFF1Afirewall-cmd --zone=public --add-port=1688/tcp --permanent
\u5173\u95ED\u670D\u52A1\u5668\u7AEF\u53E3\uFF1Afirewall-cmd --zone=public --remove-port=1688/tcp --permanent
\u91CD\u542F\u9632\u706B\u5899\uFF1Afirewall-cmd --reload
</code></pre></div>`,9),m={href:"https://blog.csdn.net/bangshabgni/article/details/131038760",target:"_blank",rel:"noopener noreferrer"},x=s("debian \u7AEF\u53E3\u5F00\u542F"),g=e("p",null,"linux\u67E5\u770B\u67B6\u6784 uname -a",-1),f=e("p",null,"ip addr show eth0",-1),_={href:"https://blog.csdn.net/lym003/article/details/1337696",target:"_blank",rel:"noopener noreferrer"},w=s("Debian12"),v=n(`<div class="language-text ext-text"><pre class="language-text"><code>sudo apt update
wget https://dev.mysql.com/get/mysql-apt-config_0.8.25-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.25-1_all.deb
</code></pre></div><p>sudo apt-get update sudo apt-get install mlocate</p><p>sudo updatedb</p><p>locate -b &#39;\\example_folder&#39;</p><p>curl wget</p><p>vi 1\u3001\u4F7F\u7528\u201C:wq\u201D\u6216\u201C:x\u201D\u6216\u201CZZ\u201D\u547D\u4EE4\u5373\u53EF\u4FDD\u5B58\u9000\u51FA\uFF1B2\u3001\u4F7F\u7528\u201C:q\u201D\u547D\u4EE4\u5373\u53EF\u6B63\u5E38\u9000\u51FA\uFF1B\u4F7F\u7528\u201C:q!\u201D\u5373\u53EF\u4E0D\u4FDD\u5B58\u9000\u51FA\uFF1B4\u3001\u4F7F\u7528\u201C:!\u201D\u5373\u53EF\u5F3A\u5236\u9000\u51FA</p><p>vim</p><p>:w - \u4FDD\u5B58\u6587\u4EF6\uFF0C\u4E0D\u9000\u51FA vim</p><p>:w file -\u5C06\u4FEE\u6539\u53E6\u5916\u4FDD\u5B58\u5230 file \u4E2D\uFF0C\u4E0D\u9000\u51FA vim</p><p>:w! -\u5F3A\u5236\u4FDD\u5B58\uFF0C\u4E0D\u9000\u51FA vim</p><p>:wq -\u4FDD\u5B58\u6587\u4EF6\uFF0C\u9000\u51FA vim</p><p>:wq! -\u5F3A\u5236\u4FDD\u5B58\u6587\u4EF6\uFF0C\u9000\u51FA vim</p><p>:q -\u4E0D\u4FDD\u5B58\u6587\u4EF6\uFF0C\u9000\u51FA vim</p><p>:q! -\u4E0D\u4FDD\u5B58\u6587\u4EF6\uFF0C\u5F3A\u5236\u9000\u51FA vim</p><p>:e! -\u653E\u5F03\u6240\u6709\u4FEE\u6539\uFF0C\u4ECE\u4E0A\u6B21\u4FDD\u5B58\u6587\u4EF6\u5F00\u59CB\u518D\u7F16\u8F91</p><p>apt install</p><p>&#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH caching_sha2_password BY &#39;5461150&#39;; use mysql;</p><p>update user set host = &#39;%&#39; where user = &#39;root&#39;;</p><p>cp -r /etc/ssh/dist{,.bak} cp /path/to/your/index.html{,.bak} cp /etc/ssh/sshd_config{,.bak}</p><p>debian10 \u81EA\u5E26wget</p><p>sudo lsof -i -P -n \u67E5\u770B\u6240\u6709\u7AEF\u53E3</p><p>lsof -i:\u7AEF\u53E3\u53F7</p><p>netstat -ntlp ss -tuln https://www.quanxiaoha.com/linux-command/linux-port-occupancy.html</p><p>https://233boy.com/v2ray/v2ray-server/</p><p>systemctl stop firewalld; systemctl disable firewalld; ufw disable \u5173\u95ED\u9632\u706B\u5899</p><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 curl \u6216 wget \u547D\u4EE4\u7ED3\u5408\u5916\u90E8\u670D\u52A1\u6765\u67E5\u770B\u672C\u673A\u7684\u516C\u5171 IP \u5730\u5740\u3002 curl ifconfig.me wget -qO- ifconfig.me</p><div class="language-text ext-text"><pre class="language-text"><code>
\u88C5vim  vi\u4E0D\u597D\u7528

/etc/ssh/sshd_config


# Authentication:

#LoginGraceTime 2m
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10



service sshd restart

</code></pre></div>`,27);function b(y,k){const t=c("ExternalLinkIcon");return l(),d("div",null,[r,e("p",null,[e("a",i,[h,a(t)])]),u,e("p",null,[e("a",m,[x,a(t)])]),g,f,e("p",null,[e("a",_,[w,a(t)])]),v])}var T=o(p,[["render",b],["__file","linux.html.vue"]]);export{T as default};
