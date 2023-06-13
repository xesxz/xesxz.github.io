# git

> 在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
> 原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore 是无效的。
> 那么解决方法就是先把本地缓存删除（改变成未 track 状态），然后再提交。

```
git rm -r --cached .

git add .

git commit -m 'update .gitignore'

放弃所有的文件修改可以使用 git checkout .  命令。

线上的代码重置到指定时间
git reset --hard 0563e5ca4d17767e758b0bf3ce40450c8a32d7b6
git push -f
```


## git常用命令


```

git grep [关键字]
git blame 文件


```



## 创建分支

```
git checkout -b dev-zl

git push origin dev-zl
```

```
git fetch origin dev2   //从远程dev2分支拉取代码到本地

git checkout -b dev origin/dev（新建本地分支对应远程分支，并切换到这个分支）

```

## git 提交规范

- update 更新某些功能
- feat 新功能
- fix bug 修复
- refactor 重构代码(既没有新增功能，也没有修复 bug)
- docs 文档更新
- style 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- revert 回滚某个更早之前的提交
- test 新增测试用例或是更新现有测试
- chore 不属于以上类型的其他类型
- perf 性能优化

# svn
update+to+lastest+revision
会更新到服务器最新版本
Revert+to+last+updat
如果本地和服务器上 修改了同一个文件

# npm

## 查看全局安装 npm

`npm list -g --depth 0`

# yarn

## yarn 常用指令

```
yarn add

yarn remove

```

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

## 忽略配置

```
.DS_Store
node_modules
/dist
*.zip


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.zip

```

## docker

```
 docker run -dp 80:80 docker/getting-started

 docker cp /Users/wk/Downloads/pip 3e805cc23737798772cdac53e139dbbef6e582d0860b4b442f12a734f05f3fbf:/opt/geoserver/data_dir

```



#### 1、restore 重置

如果你修改了代码，但是并未执行 `git add` 操作，可直接执行：

```bash
git restore .
```

. 表示所有文件，如果想重置个别文件，指定文件路径即可

```bash
git restore <文件>...
```

注意⚠️：如果你已经执行了 `git add` 操作，此时代码已保存至暂存区，需要先取消暂存区变更：

```bash
git restore --staged .
```

或者

```bash
git reset .
```

然后，再执行 `git pull` 拉取远程代码同步即可。

#### 2、reset 回退

`reset` 比较暴力，相当于 可适用于 代码在工作区、暂存区、仓库区等任何场景，重置后不可恢复🙅‍♂️，对于新手有一定的安全隐患。

```bash
git fetch --all
git reset --hard origin/master
git pull   // 这一步为了同步远程代码，不需要的话可不执行
```

+   git fetch 指令是下载远程仓库最新内容，不做合并。
+   git reset 指令把HEAD指向master最新版本。

> reset --hard：重置后不保留暂存区和工作区  
> reset --soft：保留工作区，并把重置 HEAD 所带来的新的差异放进暂存区（此时代码的变更状态相当于执行完 `git add`命令）  
> reset --mixed：reset的默认参数，保留工作目录，并重置暂存区（此时代码的变更状态相当于执行 `git add`命令之前）

#### 3、stash 暂存（推荐）

我比较喜欢的方法，是用stash，暂存代码再同步。

首先，将所有代码添加至暂存区：

```bash
git add .
```

然后，将代码临时保存：

```bash
git stash
```

此时代码会重置到修改前的状态，可以同步远程仓库区，完事儿。

```bash
git pull
```

同步后，**如果**还想继续修改原来的代码，可将临时代码恢复至工作区：

```bash
git stash pop
```


git branch <branch-name>
git checkout <branch-name>


或者在较新版本的Git中，可以使用以下命令来同时创建和切换到新分支：
git checkout -b <branch-name>




git reflog：查看每一次命令记录
git reset --hard ca936c3即回滚到了最新的版本号了