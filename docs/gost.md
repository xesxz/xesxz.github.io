

[Linux 使用GOST搭建一个简单的端口转发](https://www.laoxu.cc/post/96.html)
gost -L=socks://:8443

gost -L=:10088 -F=socks://20.222.251.94:8443



nohup gost -L=socks://:8443 >/dev/null 2>&1 &
