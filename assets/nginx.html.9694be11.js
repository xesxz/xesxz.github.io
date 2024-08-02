import{_ as o,o as s,c as r,b as n,d as a,a as i,e,r as l}from"./app.ace0dae9.js";const c={},d=i('<h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>nginx \u76EE\u5F55</p><p>/usr/local/Cellar/nginx</p><p>\u542F\u52A8</p><p>\u542F\u52A8\u547D\u4EE4\uFF1A sudo nginx</p><p>\u5FEB\u901F\u505C\u6B62\u547D\u4EE4 sudo nginx -s stop</p><p>\u5E73\u7A33\u9000\u51FA\u547D\u4EE4\uFF1Asudo nginx -s quit</p><p>sudo nginx -s reload // \u4FEE\u6539\u914D\u7F6E\u540E\u91CD\u65B0\u52A0\u8F7D\u751F\u6548</p><p>sudo nginx -s reopen // \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6</p><p>sudo nginx -s stop // \u5FEB\u901F\u505C\u6B62 nginx</p><p>sudo nginx -s quit // \u5B8C\u6574\u6709\u5E8F\u7684\u505C\u6B62 nginx/\u4F18\u96C5\u5173\u95ED\uFF08\u5148\u670D\u52A1\u5B8C\u5DF2\u6253\u5F00\u7684\u8FDE\u63A5\uFF09 nginx -t \u67E5\u770B\u914D\u7F6E\u6587\u4EF6</p><h2 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1" aria-hidden="true">#</a> nginx</h2>',12),h={id:"nginx-\u62A5\u9519",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#nginx-\u62A5\u9519","aria-hidden":"true"},"#",-1),_=e(),x={href:"https://blog.csdn.net/weixin_41544124/article/details/86594800",target:"_blank",rel:"noopener noreferrer"},g=e("nginx \u62A5\u9519"),u=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`
\u67E5\u770Bnginx\u8FDB\u7A0B
npx kill-port 9999
sudo ps aux | grep nginx



nginx: [error] open() "/opt/homebrew/var/run/nginx.pid" failed (2: No such f
\`nginx -c /opt/homebrew/etc/nginx/nginx.conf\`



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
			#\u662F\u5426\u5141\u8BB8cookie\u4F20\u8F93
            add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

        }

         location /other_hangzhou3857_0913/ {
            add_header 'Access-Control-Allow-Origin' '*';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
			#\u662F\u5426\u5141\u8BB8cookie\u4F20\u8F93
            add_header 'Access-Control-Allow-Credentials' 'true';
			add_header 'Access-Control-Allow-Headers' 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

        }


         location /930/ {
            add_header 'Access-Control-Allow-Origin' '*';
			add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
			#\u662F\u5426\u5141\u8BB8cookie\u4F20\u8F93
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
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \\.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\\.ht {
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

`)])],-1),m=n("h3",{id:"proxy-pass-add-header",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#proxy-pass-add-header","aria-hidden":"true"},"#"),e(" proxy_pass add_header")],-1),A=n("p",null,"\u53CD\u5411\u4EE3\u7406\u548C\u6DFB\u52A0\u8BF7\u6C42\u5934\u573A\u666F",-1),T=n("p",null,"\u524D\u7AEF\u9879\u76EE\u5728nginx\u4E0B\u9762\u901A\u8FC7\u53CD\u5411\u4EE3\u7406proxy_pass",-1),f=n("p",null,"\u540E\u7AEF\u9879\u76EE\u5728nginx\u4E0B\u9762\u901A\u8FC7\u54CD\u5E94\u5934add_header",-1);function w(y,C){const t=l("ExternalLinkIcon");return s(),r("div",null,[d,n("h3",h,[p,_,n("a",x,[g,a(t)])]),u,m,A,T,f])}var k=o(c,[["render",w],["__file","nginx.html.vue"]]);export{k as default};
