![](https://iweek.eu.org/images/ym.png)

> 购买服务器之后都想测试下服务器的网速以及其他的信息详情，Windows系统网页就可以进行测速，那么Linux系统测速呢？这边小编推荐几款常用的**Linux服务器测速脚本**给大家使用，这样购买到服务器之后第一时间就可以进行测试下机器性能。

### [](#bench-sh脚本工具 "bench.sh脚本工具")bench.sh脚本工具

这个脚本工具可以检测当前服务器的基本信息，以及简单的IO读写性能和下载上传测速。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">wget -qO- bench.sh | bash</span><br></pre></td></tr></tbody></table>

这里直接复制脚本到Linux服务器中回车。

![image](https://s2.loli.net/2023/12/21/MCGR4FIWt1oubmZ.jpg)

### [](#三网回程路由测试 "三网回程路由测试")三网回程路由测试

![image](https://s2.loli.net/2023/12/21/muTOaYWFci4jdsJ.webp)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">curl https://raw.githubusercontent.com/zhanghanyun/backtrace/main/install.sh -sSf | sh</span><br></pre></td></tr></tbody></table>

### [](#三网测速脚本 "三网测速脚本")三网测速脚本

![image](https://s2.loli.net/2023/12/21/dmPeRKoI7JELkfH.png)

1、安装准备

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">##Centos：</span><br><span class="line"></span><br><span class="line">yum install -y curl</span><br><span class="line"></span><br><span class="line">##Debian/Ubuntu：</span><br><span class="line"></span><br><span class="line">apt install -y curl</span><br></pre></td></tr></tbody></table>

2、执行测速

国外服务器

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">bash &lt;(curl -Lso- https://git.io/superspeed_uxh)</span><br></pre></td></tr></tbody></table>

国内服务器

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">bash &lt;(curl -Lso- https://raw.githubusercontent.com/uxh/superspeed/master/superspeed.sh)</span><br></pre></td></tr></tbody></table>

### [](#流媒体解锁测试脚本 "流媒体解锁测试脚本")流媒体解锁测试脚本

![image](https://s2.loli.net/2023/12/21/9Hd6AMaE71gONz4.png)

使用方法

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">bash &lt;(curl -Ls unlock.moe)</span><br></pre></td></tr></tbody></table>

只检测IPv4结果:

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">bash &lt;(curl -Ls unlock.moe) -m 4</span><br></pre></td></tr></tbody></table>

只检测IPv6结果：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">bash &lt;(curl -Ls unlock.moe) -m 6</span><br></pre></td></tr></tbody></table>

### [](#一键检测VPS回程国内三网路由 "一键检测VPS回程国内三网路由")一键检测VPS回程国内三网路由

![image](https://s2.loli.net/2023/12/21/x1CWQBPT3V6dg9i.png)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">curl https://raw.githubusercontent.com/zhucaidan/mtr_trace/main/mtr_trace.sh|bash</span><br></pre></td></tr></tbody></table>

支持的线路为：电信CN2 GT，电信CN2 GIA，联通169，电信163，联通9929，联通4837，移动CMI，比如下方图片测试为搬瓦工CN2 GIA。

### [](#三网回程路由测试-1 "三网回程路由测试")三网回程路由测试

![image](https://s2.loli.net/2023/12/21/mtzFeEVablw8fOM.png)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">wget -qO- git.io/besttrace | bash</span><br></pre></td></tr></tbody></table>

### [](#检测VPS真实可分配内存，适用于检测VPS超售情况 "检测VPS真实可分配内存，适用于检测VPS超售情况")检测VPS真实可分配内存，适用于检测VPS超售情况

![image](https://s2.loli.net/2023/12/21/FXmHUz1cQrSq5Dk.png)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br></pre></td><td class="code"><pre><span class="line">yum install wget -y</span><br><span class="line"></span><br><span class="line">yum groupinstall "Development Tools" -y</span><br><span class="line"></span><br><span class="line">wget https://raw.githubusercontent.com/FunctionClub/Memtester/master/memtester.cpp</span><br><span class="line"></span><br><span class="line">gcc -l stdc++ memtester.cpp</span><br><span class="line"></span><br><span class="line">./a.out</span><br><span class="line"></span><br><span class="line">#Ubuntu / Debian</span><br><span class="line"></span><br><span class="line">apt-get update</span><br><span class="line"></span><br><span class="line">apt-get install wget build-essential -y</span><br><span class="line"></span><br><span class="line">wget https://raw.githubusercontent.com/FunctionClub/Memtester/master/memtester.cpp</span><br><span class="line"></span><br><span class="line">gcc -l stdc++ memtester.cpp</span><br><span class="line"></span><br><span class="line">./a.out</span><br></pre></td></tr></tbody></table>

### [](#vps信息查看 "vps信息查看")vps信息查看

![image](https://s2.loli.net/2023/12/21/1xWnzMRFUlfVXYT.png)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line">下面4条命令随便输入一条即可测试VPS性能</span><br><span class="line"></span><br><span class="line">bash -c "$(wget -qO- https://github.com/Aniverse/A/raw/i/a)"</span><br><span class="line"></span><br><span class="line">bash &lt;(wget -qO- https://github.com/Aniverse/A/raw/i/a)</span><br><span class="line"></span><br><span class="line">bash &lt;(curl -s https://raw.githubusercontent.com/Aniverse/A/i/a)</span><br><span class="line"></span><br><span class="line">wget -q https://github.com/Aniverse/A/raw/i/a &amp;&amp; bash a</span><br></pre></td></tr></tbody></table>
