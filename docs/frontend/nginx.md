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

## nginx

### [nginx 报错](https://blog.csdn.net/weixin_41544124/article/details/86594800)

```



nginx: [error] open() "/opt/homebrew/var/run/nginx.pid" failed (2: No such f
`nginx -c /opt/homebrew/etc/nginx/nginx.conf`



#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /opt/homebrew/var/www/dist;
            index  index.html index.htm;
        }
            location /h5 {
            alias   /opt/homebrew/var/www/h5/;
            index  index.html index.htm;
        }


        location /json/ {
            add_header 'Access-Control-Allow-Origin' '*';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
			#是否允许cookie传输
            add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

        }

         location /other_hangzhou3857_0913/ {
            add_header 'Access-Control-Allow-Origin' '*';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
			#是否允许cookie传输
            add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

        }


         location /930/ {
            add_header 'Access-Control-Allow-Origin' '*';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
			#是否允许cookie传输
            add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

        }


        location /api/ {
            proxy_pass  http://www.xiongmaoyouxuan.com/api/;

        }
            location /xyz/ {
            proxy_pass  http://www.xiongmaoyouxuan.com/;

        }

         location /hz/ {
            proxy_pass  http://222.73.139.7:9000/;

        }



        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}

```



###  proxy_pass add_header 

反向代理和添加请求头场景

前端项目在nginx下面通过反向代理proxy_pass

后端项目在nginx下面通过响应头add_header


