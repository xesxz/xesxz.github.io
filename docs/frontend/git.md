## git

> 在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
> 原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore 是无效的。
> 那么解决方法就是先把本地缓存删除（改变成未 track 状态），然后再提交。

```
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

## 创建分支

```
git checkout -b dev-zl

git push origin dev-zl
```

## svn

update+to+lastest+revision
会更新到服务器最新版本
Revert+to+last+updat
如果本地和服务器上 修改了同一个文件

## 查看全局安装 npm

`npm list -g --depth 0`

## 淘宝 npm 网址

https://npm.taobao.org/

修改

npm config set registry http://registry.npm.taobao.org/

还原
npm config set registry https://registry.npmjs.org/

使用 nrm 工具切换淘宝源
npx nrm use taobao

如果之后需要切换回官方源可使用
npx nrm use npm

npm i -g cnpm --registry=https://registry.npm.taobao.org
