## linux

### 关闭端口

lsof -i :8100 找到需要关闭的端口
sudo kill -9 1140 找到 pid 关闭它

### 路径

```
./ 代表一级上级目录(间隔一个目录)
../ 代表一级上级目录(间隔一个目录)
../../代表二级上级目录(间隔两个目录)

```


###
```
ss -tuln

netstat -tuln
```





返回到上级
`cd ..`

`open .`


## 常用命令
```
复制文件到文件夹//
# 将 /home/test.txt 复制到 /tmp/ 文件夹中
cp /home/test.txt /tmp/

复制文件夹到文件夹
# 将 /home/downloads/ 文件夹 复制到 /tmp/ 文件夹中
cp  -r /home/downloads/ /tmp/

在mac系统中加上
cp -r  ~/Desktop/drag/  ~/Desktop/done

```





## Tomcat

[MAC 下安装配置 Tomcat（小白向）](https://www.jianshu.com/p/69496fb3495e)

```
cd /Library/Tomcat/bin
sudo sh ./startup.sh
sudo sh ./shutdown.sh
http://localhost:7777/dist/
./catalina.sh run
```


vi


:wq 
保存bk
并退出

:q
不保存退出



:q!
不保存退出



docker run -p 8888:80 adolfintel/speedtest


`systemctl status firewalld `
`systemctl start firewalld`
`systemctl status firewalld` 
`systemctl stop firewalld`


```
<!-- centos -->
firewall-cmd --zone=public --add-port=514/udp --permanent
firewall-cmd --zone=public --add-port=514/tcp --permanent

firewall-cmd --reload

firewall-cmd --list-all
```

```
查看已放行的端口：firewall-cmd --list-ports
放行服务器端口：firewall-cmd --zone=public --add-port=1688/tcp --permanent
关闭服务器端口：firewall-cmd --zone=public --remove-port=1688/tcp --permanent
重启防火墙：firewall-cmd --reload
```



[debian 端口开启](https://blog.csdn.net/bangshabgni/article/details/131038760)

linux查看架构 uname -a


ip addr show eth0


[Debian12](https://blog.csdn.net/lym003/article/details/1337696)

```
sudo apt update
wget https://dev.mysql.com/get/mysql-apt-config_0.8.25-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.25-1_all.deb
```


sudo apt-get update
sudo apt-get install mlocate

sudo updatedb


locate -b '\example_folder'



curl
wget

vi
1、使用“:wq”或“:x”或“ZZ”命令即可保存退出；2、使用“:q”命令即可正常退出；使用“:q!”即可不保存退出；4、使用“:!”即可强制退出


vim 

:w            - 保存文件，不退出 vim

:w file  -将修改另外保存到 file 中，不退出 vim

:w!          -强制保存，不退出 vim

:wq          -保存文件，退出 vim

:wq!        -强制保存文件，退出 vim

:q            -不保存文件，退出 vim

:q!          -不保存文件，强制退出 vim

:e!          -放弃所有修改，从上次保存文件开始再编辑




 apt install


'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '5461150';
use mysql;

update user set host = '%' where user = 'root';


cp -r /etc/ssh/dist{,.bak}
cp /path/to/your/index.html{,.bak}
cp /etc/ssh/sshd_config{,.bak}


debian10 自带wget


sudo lsof -i -P -n
查看所有端口

lsof -i:端口号


netstat -ntlp


https://233boy.com/v2ray/v2ray-server/


systemctl stop firewalld; systemctl disable firewalld; ufw disable
关闭防火墙
