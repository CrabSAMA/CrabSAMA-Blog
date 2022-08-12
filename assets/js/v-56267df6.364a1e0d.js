"use strict";(self.webpackChunkcrabsama_blog=self.webpackChunkcrabsama_blog||[]).push([[5592],{7171:(e,d,c)=>{c.r(d),c.d(d,{data:()=>o});const o={key:"v-56267df6",path:"/git/common-commands.html",title:"常用命令",lang:"zh-CN",frontmatter:{title:"常用命令",date:"2020-06-09T12:34:44.000Z",lastUpdated:!0,categories:["git"]},excerpt:"",headers:[{level:2,title:"创建仓库",slug:"创建仓库",children:[]},{level:2,title:"本地仓库改动",slug:"本地仓库改动",children:[]},{level:2,title:"查看提交历史",slug:"查看提交历史",children:[]},{level:2,title:"回退提交",slug:"回退提交",children:[]},{level:2,title:"标签相关",slug:"标签相关",children:[]},{level:2,title:"远程仓库相关",slug:"远程仓库相关",children:[]},{level:2,title:"分支相关",slug:"分支相关",children:[]},{level:2,title:"stash暂存区相关",slug:"stash暂存区相关",children:[]},{level:2,title:"something else",slug:"something-else",children:[{level:3,title:"git撤销修改",slug:"git撤销修改",children:[]},{level:3,title:"禁用Fast forward模式",slug:"禁用fast-forward模式",children:[]},{level:3,title:"标签默认都只存储在本地",slug:"标签默认都只存储在本地",children:[]}]}],git:{createdTime:1656301772e3,updatedTime:1656301772e3,contributors:[{name:"CrabSAMA",email:"71915282@qq.com",commits:1}]},filePathRelative:"git/common-commands.md"}},3103:(e,d,c)=>{c.r(d),c.d(d,{default:()=>p});var o=c(6252);const t=(0,o.uE)('<h2 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h2><p><code>git init</code>——初始化一个 <code>git</code> 仓库 <code>git clone [*.git]</code>——将远程库中的内容克隆到本地</p><h2 id="本地仓库改动" tabindex="-1"><a class="header-anchor" href="#本地仓库改动" aria-hidden="true">#</a> 本地仓库改动</h2><p><code>git add [filename]</code>——把文件添加（提交的修改）放进修改暂存区 <code>git add</code> 只关注你当前对文件的修改 在 <code>add</code> 之后再对文件进行修改 不会被 <code>commit</code><code>git commit -m &quot;commit message&quot;</code>——提交一次修改 将暂存区的所有修改提交到分支 <code>git status</code>——查看当前仓库状态 <code>git diff</code>——查看当前仓库发生变化文件的详情 <code>git rm</code>——在版本库中删除改文件 完成后需要进行 <code>commit</code></p><h2 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h2><p><code>git log</code>——查看最近到最远的提交日志（<code>--pretty=oneline</code> 可以令日志在一行内输出 方便查看） <code>git log --graph</code>——以图形格式查看分支合并 <code>git reflog</code>——查看在本仓库中执行的每一次命令</p><h2 id="回退提交" tabindex="-1"><a class="header-anchor" href="#回退提交" aria-hidden="true">#</a> 回退提交</h2><p><code>git reset [commit]</code>——将仓库回退到某个版本 <code>commit</code>可以是16进制版本号，也可以用HEAD代替 <code>git reset [commit] [filename]</code>——将该文件在暂存区的修改撤销掉，重新放回工作区 <code>git checkout -- [filename]</code>——令该文件回到最近一次 <code>commit</code> 或者 <code>add</code> 时的状态</p><h2 id="标签相关" tabindex="-1"><a class="header-anchor" href="#标签相关" aria-hidden="true">#</a> 标签相关</h2><p><code>git tag</code>——查看所有标签 <code>git tag -a [tag name] -m [description] [commit]</code>——新建一个标签 默认绑定在HEAD上 也可以指定一个 <code>commit id</code>（<code>-a</code> 指定标签名 <code>-m</code>指定说明文字） <code>git tag -d [tag name]</code>——删除一个本地标签</p><h2 id="远程仓库相关" tabindex="-1"><a class="header-anchor" href="#远程仓库相关" aria-hidden="true">#</a> 远程仓库相关</h2><p><code>ssh-keygen -t rsa -C &quot;youremail@example.com&quot;</code>——生成<code>SSH Key</code><code>git remote add origin git@github.com:[github username]/[github repository name.git]</code>——将本地仓库与<code>github</code>上的仓库关联 在添加后 远程库的名字就是 <code>origin</code><code>git remote rm origin</code>——删除与当前绑定的远程库的关联 <code>git push -u origin [branch name]</code>——将本地库 <code>branch name</code> 分支的内容推送到远程库（<code>-u</code>参数 用于将本地<code>master</code>分支和远程<code>master</code>分支关联起来，在以后 <code>push</code> 和 <code>pull</code> 时可以简化命令） <code>git pull</code>——将当前分支与服务器绑定的分支的最新的提交抓下来 <code>git push origin [tag name]</code>——推送一个本地标签 <code>git push origin --tags</code>——推送全部未推送过的本地标签 <code>git push origin :refs/tags/[tag name]</code>——删除一个远程标签（要删除已经推送上去的远程标签，需要先删除本地标签，再删除远程标签）</p><h2 id="分支相关" tabindex="-1"><a class="header-anchor" href="#分支相关" aria-hidden="true">#</a> 分支相关</h2><p><code>git checkout -b [branch name]</code> ——表示创建并切换到某分支 <code>git checkout -b [branch name] origin/[branch name]</code>——在本地创建和远程分支对应的分支 本地和远程分支的名称最好一致 <code>git rebase</code>——将本地未 <code>push</code> 的分叉提交历史整理成直线 <code>git branch</code>——查看当前分支 <code>git branch [branch name]</code>——创建一条分支 <code>git branch -d [branch name]</code>——删除一条分支 <code>git branch -D [branch name]</code>——强行删除一条分支 用于丢弃一个没有被合并过的分支 <code>git branch --set-upstream [branch name] origin/[branch name]</code>——建立本地分支与远程分支的关联 <code>git merge [branch name]</code>——将目的分支合并到当前分支上（默认是“快进模式”，还有其他方式） <code>git merge --no-ff -m &quot;message&quot; [branch name]</code>——禁用<code>Faster forward</code>模式进行合并 由于不使用<code>Fast forward</code>模式时，在<code>merge</code>时<code>git</code>会生成一个新的<code>commit</code>，因此需要在后面打上<code>commit</code>的信息 <code>git switch [branch name]</code>——切换到某一条分支 <code>git switch -c [branch name]</code>——创建并切换到某一条分支 <code>git cherry-pick [commit]</code>——将一个特定的 <code>commit</code> 提交到当前分支（等于<strong>复制</strong>一个 <code>commit</code> 所做的修改到本分支） <code>cat [filename]</code>——查看某文件</p><h2 id="stash暂存区相关" tabindex="-1"><a class="header-anchor" href="#stash暂存区相关" aria-hidden="true">#</a> stash暂存区相关</h2><p><code>git stash</code>——将工作现场“储藏”起来 <code>git stash list</code>——查看 stash 列表 <code>git stash apply</code>——恢复第一个 stash 恢复后 stash 内容不删除 <code>git stash apply stash@{0}</code> 恢复指定的 stash <code>git stash drop</code>——删除 stash <code>git stash pop</code>——恢复工作现场 同时将 stash 内容删除</p><h2 id="something-else" tabindex="-1"><a class="header-anchor" href="#something-else" aria-hidden="true">#</a> something else</h2><p>在<code>Git</code>中，用<code>HEAD</code>表示当前版本，也就是最新的提交，上一个版本就是<code>HEAD^</code>，上上一个版本就是<code>HEAD^^</code>，当然往上100个版本写100个^比较容易数不过来，所以写成<code>HEAD~100</code>。</p><h3 id="git撤销修改" tabindex="-1"><a class="header-anchor" href="#git撤销修改" aria-hidden="true">#</a> git撤销修改</h3>',19),a=(0,o.Uk)("场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令"),i=(0,o._)("code",null,"git checkout -- file",-1),r=(0,o.Uk)("。 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令"),h=(0,o._)("code",null,"git reset HEAD <file>",-1),n=(0,o.Uk)("，就回到了场景1，第二步按场景1操作。 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考"),s={href:"https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192",target:"_blank",rel:"noopener noreferrer"},l=(0,o.Uk)("版本回退"),g=(0,o.Uk)("一节，不过前提是没有推送到远程库。"),m=(0,o.uE)('<h3 id="禁用fast-forward模式" tabindex="-1"><a class="header-anchor" href="#禁用fast-forward模式" aria-hidden="true">#</a> 禁用Fast forward模式</h3><p>通常，合并分支时，如果可能，<code>Git</code>会用<code>Fast forward</code>模式，但这种模式下，删除分支后，会丢掉分支信息。 如果要强制禁用<code>Fast forward</code>模式，<code>Git</code>就会在<code>merge</code>时<strong>生成一个新的<code>commit</code></strong>，这样，从分支历史上就可以看出分支信息。</p><h3 id="标签默认都只存储在本地" tabindex="-1"><a class="header-anchor" href="#标签默认都只存储在本地" aria-hidden="true">#</a> 标签默认都只存储在本地</h3>',3),u={},p=(0,c(3744).Z)(u,[["render",function(e,d){const c=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[t,(0,o._)("p",null,[a,i,r,h,n,(0,o._)("a",s,[l,(0,o.Wm)(c)]),g]),m],64)}]])}}]);