## ES6语法

### 变量声明 let const

#### let
* 不能重复声明
	 let a = 8;
	 let a = 9; // 报错
* 块级作用域

    do{
	    let a =9;
    }while(0);
    console.log(a) // 报错: a is not defined

#### const
* 声明时要初始化
 const a = 9
* 不能再次赋值，但可以改变对象的内容
 * const a = 9
  a = 8 // 报错
 * const a = {};
a.b = 9

### 函数的扩展
* 可以给函数参数一个默认的值
```
function fn(a,b=7) {
	console.log(a,b);
}
fn(1) // 1,7
fn(1,3) // 1,3
```

* 箭头函数
1.声明一个匿名的箭头函数
```
let a =（a, b, c = 90）=> {
	console.log(a, b, c);
};

a(1, 2) // 1 2 90
```

 2. 如果函数只有一个参数，可以不写括号
```
// 函数只有一个参数
let a = arg => {
	console.log(arg);
};

a(89) // 89
```

 3. 箭头后面可以直接写 返回值
```
 let a = ( ) => true  
 // 也可返回[1,2], 'str'等
 
 console.log( a() ); // true
```

 4.  返回值若是一个对象字面量，应该用一个括号括起来，否则会当成函数体, {} 会有歧义

```
let a =(a ,b) => ({ a:a, b:b })

console.log( a(122, 'hjk') ); // 122 hjk
```


 5.  this的指向问题
	 * this 指向会是 函数所在的上下文环境

```
let obj = {
	fn: function() {
		console.log(this, "fn")
		let a = () => {
			console.log(this, "arrow");
		};

		a();
	}
}

obj.fn();  
// {fn: f} "fn"
// {fn: f} "arrow" 

let newFn = obj.fn;
newFn();
// Window "fn"
// window "arrow"
```
```
let obj = {
	fn: function() {
		let a = function(){ // 普通函数
			console.log(this);
		};

		a();
	}
}

obj.fn();  // Window
```

### 模板字符串
* 声明模板字符串使用反引号
* 使用{}在里面写表达式
```
let name = 'yushu';
let age = 23;
let s = `${name} is ${age}.`
console.log(s);
```

```
let age = 23;
function fn() {
	return 'yushu';
}

let s = `${fn()} is ${age}.`
console.log(s);
```

```
let s = `${ 3<2 ? 'yushu' : 'shuxin' } is ${age}.`
console.log(s);
```

### 变量结构赋值

* 变量的结构赋值语法
```
let obj = {
	firstName: 'yushu',
	lastName: 'Zhao'
}
// 普通写法
/* let firstName = obj.firstName,
 	lastName = obj.lastName; */ 

// let { firstName: f, lastName: l } = obj;
   let { firstName, lastName} = obj;

console.log( `${firstName} ${lastName}` );
```

* 嵌套的结构
```
let obj = {
	firstName: 'yushu',
    lastName: 'Zhao',
    test: {
        a: 1,
        b: 2
    }
}
let {test:{a, b}, test} = obj;
console.log(test);
console.log(a);
console.log(b);
```

* 在函数参数里面可以直接解构
```
let obj = {
	firstName: 'yushu',
    lastName: 'Zhao',
    test: {
        a: 1,
        b: 2
    }
}

let { firstName, lastName} = obj;

// function logNames(obj) {
//     console.log(`${obj.firstName} ${obj.lastName}`);
// }

// logNames({firstName: 'a', lastName: 'b'});

function logNames({firstName, lastName}, age) {
    console.log(`${firstName} ${lastName} is ${age}`);
}

logNames({firstName: 'a', lastName: 'b'}, 23)
```

### spread rest
* spread 展开  
```
function fn(a, b, c){
	console.log(a, b, c)
}

// 在函数参数里面展开一个数组
let arr = [2, 3, 4];
fn(...arr); // 2 3 4

// 在一个数组里面展开另外一个数组
console.log(['a', 'b', ...arr, 'c']);
// a b 2 3 4 c

// 展开一个对象
let obj = {a: 1, b: 2};
console.log(
	{
		name: 'yushu',
		...obj
	}
)
```

* rest 剩余
```
// 在函数形参里面使用rest
function fn2(a, b, ...c){
	console.log(a, b, c) 
};

fn2(1, 2, 3, 4);

// 在解构一个对象的时候使用rest
let obj = {a: 1, b: 2, c: 3, d:4};

let {a, c, ...rest} = obj;

console.log(a, c, rest) // 1 3 {b:2, d:4}
```

### 类以及类的继承

```
// ES5中,声明一个函数
function Human() {
    this.eyes = 2;
    this.hands = 2;
}

Human.prototype.singing = function() {
    console.log('I can sing');
}

let a = new Human();

console.log(a);  // Human {} a是一个对象

a.singing();
```

```
// ES6中，使用class关键字直接声明一个类
class Human {
    constructor(){
    // 类的构造函数，初始化一个对象的属性
        this.eyes = 2;
        this.hands = 2;
    }

    // 方法
    singing() {
        console.log('I can sing');
    }
}

let a = new Human();
console.log(a);
a.singing();
```
```
// 类可以继承另外一个类，使用extends语法
// 可以继承到另外一个类的所有属性和方法
class NormalMan extends Human{
    constructor(){
	    // 调用一下父类的构造函数
	    // 当你继承了另外一个类的时候，你必须用
        super();  // 可传参
        this.eyes = 100;
        this.hands = 2;
    }
    // 重写父类继承过来的方法
	singing() {
        console.log('NormalMan can sing');
    }
    run() {
        console.log('NormalMan can run');
    }
}

let b = new NormalMan;
console.log(b);
b.singing();
```

* 关于类里面方法的 this 指向

```
class NormalMan extends Human{
    constructor(name = 'yushu'){
        super();
        this.feet = 2;
        this.name = name;
        this.singing = this.singing.bind(this);
    }
	singing() {
        // console.log(this);
        console.log(`${this.name} can sing`);
    }
    run() {
        console.log('NormalMan can run');
    }
}

let b = new NormalMan('shuxin');
// console.log(b);

let fnn = b.singing;
fnn();
```

### ES6规范的模块化语法
* export default function(){}  默认导出，可以没有名字
* import 接受默认导出，可以任意命名，只能使用一次
* export let num = 789; 可以使用多次export来导出
* import { num } from ' ' ; 

### CommonJS规范的模块化语法
(node js 就是使用CommonJS模块化规范的语法)
* 导入
 * const num = require('./modules/common');

* 导出
 * module.exports = 123;  
 * module.exports = { a: 1, b:2 };





