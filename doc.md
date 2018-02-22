## Docs

######插值表达式
* 不能直接输出对象，如果是一个数组对象则是可以的
* { [1,2,3] } ---> 123
相当于[1,2,3].join('') ---> 123
进行了转字符串操作，并且是使用空字符串进行连接: arr.join('');
* 对比：[1,2,3].toString() ---> 1,2,3

------
###### 属性
* 使用方法：在标签上添加属性名 = 属性值，值必须使用""包含
* 值是可以接受插值表达式，无需加""
* 注意：
1. class : 使用className属性来代替 
2. style: 值必须使用对象 
 `<h1 style={ { color: 'red' } }>Hello React</h1>`

-------
##### 注意
* React没有模版语法，插值表达式中只支持表达式(函数表达式)，不支持语句：for, if

------
##### 列表输出
	/*根据数组中的内容生成一个包含有结构的新数组*/
	/*通过数组生成的结构，每一个元素必须包含有一个key属性，同时这个key属性的值必须是唯一的*/
	var users = ['舒情', '顾之', '言栩']；
	-------------------------------------------
	<ul>
		{
			users.map( (user, index) => {
			   return <li key={index}>{user}</li>	
			})
		}
	</ul>

-------
		
	/* obj.map 是错误的 对象没有map方法 */
	var obj = { left: 100, top: 200 };
	-------------------------------------------
	<ul>
		{
			/* ['left', 'top'] */
			Object.keys(obj).map( key => {
				return <li key={key}>{key} - {obj[key]}</li>
			})
		}
	</ul>
	
-------

* 复用 （函数方式）
	
	var users = ['舒情', '顾之', '言栩']；
	function List(data) {
		return data.map( (item, index) => {
			return <li key={index}>{item}</li>
		})
	}
	
	ReactDOM.render(
		<div>
			<ul>
				{List(users)}
			</ul>
		</div>,
		document.getElementById('app')
	）;
	
* 复用 （组件，标签化）
	
	var users = ['舒情', '顾之', '言栩']；
	function List(data) {
		return data.map( (item, index) => {
			return <li key={index}>{item}</li>
		})
	}
	ReactDOM.render(
		<div>
			<ul>
				<List data={users}/>
			</ul>
		</div>,
		document.getElementById('app')
	）;
	
	-------------------------------------------
	function List(props) {
		return props.data.map( (item, index) => {
			return <li key={index}>{item}</li>
		})
	}
	ReactDOM.render(
		<div>
			<ul>
				<List data={users} a="1"/>
			</ul>
		</div>,
		document.getElementById('app')
	）;

------
###### 用类实现组件化

	class List extends React.Component {
		render(){
			return this.props.data.map( (item, index)=> {
				return <li key={index}>{index}</li>
			} )
		}
	}
	

	
