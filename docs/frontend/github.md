filename:vite.config.ts 指定文件



https://docs.github.com/zh/search-github/searching-on-github/searching-code




# github 添加ssh流程


### 1.生成ssh key

```
    ssh-keygen -t rsa -C leeycheung@gmail.com
```

### 2.添加ssh key

```
  cd ~/.ssh
  cat id_rsa.pub
  复制公钥到github
```


# github设置代理

```
git config --global http.proxy http://127.0.0.1:7890
git config --global -l
```