###Node.js基本模块
* Node.js是运行在服务区端的JavaScript环境
* 服务器程序必须能接收网络请求，读写文件，处理二进制内容


##### global
* JavaScript有且仅有一个全局对象，叫global
```
> global.console
Console {
  log: [Function: bound ],
  info: [Function: bound ],
  warn: [Function: bound ],
  error: [Function: bound ],
  dir: [Function: bound ],
  time: [Function: bound ],
  timeEnd: [Function: bound ],
  trace: [Function: bound trace],
  assert: [Function: bound ],
  Console: [Function: Console] }
```

##### process
* 代表当前Node.js进程
  * process.version;
  * process.platform;
  * process.arch;
  * process.cwd(); //返回当前工作目录
  * process.chdir('/private/tmp'); // 切换当前工作目录
  * process.cwd();

###Node.js内置模块
#### fs模块
* Node.js内置的fs模块就是文件系统模块，负责读写文件。
* fs模块同时提供了异步和同步的方法。