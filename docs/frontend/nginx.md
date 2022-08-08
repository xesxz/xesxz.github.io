### nginx

nginx 目录

/usr/local/Cellar/nginx

启动

启动命令： sudo nginx

快速停止命令 sudo nginx -s stop

平稳退出命令：sudo nginx -s quit

sudo nginx -s reload // 修改配置后重新加载生效

sudo nginx -s reopen // 重新打开日志文件

sudo nginx -s stop // 快速停止 nginx

sudo nginx -s quit // 完整有序的停止 nginx/优雅关闭（先服务完已打开的连接）
