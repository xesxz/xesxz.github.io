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

返回到上级
`cd ..`


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
