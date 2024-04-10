

[Linux 使用GOST搭建一个简单的端口转发](https://www.laoxu.cc/post/96.html)
gost -L=socks://:1080

gost -L=:8080 -F=socks://server_ip:1080
