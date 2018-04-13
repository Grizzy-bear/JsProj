'use strict';

function Student (name) {
	this.name = name;
	// body... 
};
Student.prototype.hello = function(argument){
	console.log('hello' + this.name);
	// body... 
};

// 使用class关键字来编写Student
class NewStudent{
	constructor(name){
		this.name = name;
	};
	hello(){
		console.log('Hello'+ this.name)
	}
}

var xiaoming = new Student('小明');
xiaoming.hello();

var xiaogui = new NewStudent('小鬼')
xiaogui.hello();

// 派生类
class PrimaryStudent extends Student{
	constructor(name, grade){
		super(name);
		this.grade = grade;
	}
	mygrade(){
		console.log(this.name + ' am at grade' + this.grade);
	}
}

var Prim = new PrimaryStudent('小鬼', 45)

Prim.mygrade()
 