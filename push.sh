#!/bin/bash

cd /Users/wk/xesxz.github.io


 fix_message="Auto commit by shell script"

    # 执行git命令
    git add --all && git commit -m "$fix_message" && git push

    这里如果出现 Enter passphrase for key '/Users/wk/.ssh/id_rsa':
    自动填入密码5461150



    # 输出结果
    echo "Auto commit by shell script"
