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

## Tomcat

[MAC 下安装配置 Tomcat（小白向）](https://www.jianshu.com/p/69496fb3495e)

```
cd /Library/Tomcat/bin
sudo sh ./startup.sh
sudo sh ./shutdown.sh
http://localhost:7777/dist/
./catalina.sh run
```
