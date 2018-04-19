###模块原理

#### 模块的隔离
######JavaScript是一种函数式编程语言，支持闭包

* Node.js把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。

```
// 例如：hello.js
var s = 'Hello';
var name = 'world';

console.log(s + ' ' + name + '!');
```
*  Node.js加载了hello.js后，它可以把代码包装一下，变成这样执行：
```
(function () {
    // 读取的hello.js代码:
    var s = 'Hello';
    var name = 'world';

    console.log(s + ' ' + name + '!');
    // hello.js代码结束
})();
```

* 这样一来，原来的全局变量s现在变成了匿名函数内部的局部变量。如果Node.js继续加载其他模块，这些模块中定义的“全局”变量s也互不干扰。

* 所以，Node利用JavaScript的函数式编程的特性，轻而易举地实现了模块的隔离。


#### 模块的输出 module.exports
* Node可以先准备一个对象module
```
// 准备module对象:
var module = {
    id: 'hello',
    exports: {}
};
var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
var exports = load(module);
// 保存module:
save(module, exports);
```

* 变量module是Node在加载js文件前准备的一个变量，并将其传入加载函数，我们在hello.js中可以直接使用变量module原因就在于它实际上是函数的一个参数：

```
module.exports = greet;
```
* 通过把参数module传递给load()函数，hello.js就顺利地把一个变量传递给了Node执行环境，Node会把module变量保存到某个地方。
* 由于Node保存了所有导入的module，当我们用require()获取module时，Node找到对应的module，把这个module的exports变量返回，这样，另一个模块就顺利拿到了模块的输出：
```
var greet = require('./hello');
```
######以上是Node实现JavaScript模块的一个简单的原理介绍。


#### Node的加载机制
* 首先，Node会把整个待加载的hello.js文件放入一个包装函数load中执行。在执行这个load()函数前，Node准备好了module变量：
```
var module = {
    id: 'hello',
    exports: {}
};
```
* load()函数最终返回module.exports：
```
var load = function (exports, module) {
    // hello.js的文件内容
    ...
    // load函数返回:
    return module.exports;
};

var exported = load(module.exports, module);
```
* 默认情况下，Node准备的exports变量和module.exports变量实际上是同一个变量，并且初始化为空对象{}，于是，我们可以写：
```
exports.foo = function () { return 'foo'; };
exports.bar = function () { return 'bar'; };
```
* 也可以这样写
```
module.exports.foo = function () { return 'foo'; };
module.exports.bar = function () { return 'bar'; };
```
* 换句话说，Node默认给你准备了一个空对象{}，这样你可以直接往里面加东西。

* 但是，如果我们要输出的是一个函数或数组，那么，只能给module.exports赋值：

```
module.exports = function () { return 'foo'; };
```
* 给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}。

