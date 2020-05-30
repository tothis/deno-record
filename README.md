>deno安装 https://github.com/denocn/deno_install
***
>使用示例 `deno run --allow-net server.ts`

命令
+ bundle 将脚本和依赖打包
+ eval 执行代码
+ fetch 将依赖抓取到本地
+ fmt 代码的格式美化
+ help 等同于-h参数
+ info 显示本地的依赖缓存
+ install 将脚本安装为可执行文件
+ repl 进入 REPL 环境
+ run 运行脚本
+ test 运行测试

安全控制 默认情况执行脚本无权限
+ --allow-read 打开读权限 可指定固定目录 如--allow-read=/temp
+ --allow-write 打开写权限 可指定固定目录 如--allow-read=/temp
+ --allow-net 允许网络通信 可指定固定地址 如--allow-net=baidu.com
+ --allow-env 允许读取环境变量
