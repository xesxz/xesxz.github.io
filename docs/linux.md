## linux

### 关闭端口

lsof -i :8100 找到需要关闭的端口
sudo kill -9 1140 找到 pid 关闭它

## Tomcat

[MAC 下安装配置 Tomcat（小白向）](https://www.jianshu.com/p/69496fb3495e)

```
cd /Library/Tomcat/bin
sudo sh ./startup.sh
sudo sh ./shutdown.sh
http://localhost:7777/dist/
./catalina.sh run
```

## nginx

### [nginx 报错](https://blog.csdn.net/weixin_41544124/article/details/86594800)
