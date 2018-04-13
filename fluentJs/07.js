// 原型继承
function Student (argument) {
	this.name = argument.name || 'unnamed';
	// body... 
}
Student.prototype.hello = function(argument){
	console.log('Hello', + this.name)
	// body... 
};

function PrimaryStudent (argument) {
	Student.call(this, argument);
	this.grade = argument.grade || 1;
	// body... 
}

// 空函数
function F (argument) {
	// 把F函数指向Student
	F.prototype = Student.prototype;
	// 把PrimaryStudent指向F函数
	PrimaryStudent.prototype = new F();
	// 把primaryStuent原型的构造函数修复为PrimaryStudent;
	PrimaryStudent.prototype.constructor = PrimaryStudent;

	// PrimaryStudent.prototype = F.prototype;
	PrimaryStudent.prototype.getGrade = function () {
		return this.grade;
		// console.log(this.grade)

		/* body... */
	};

	// body... 
};

// 重新构造函数
var  xiaogui = new PrimaryStudent({
	name : '小鬼',
	grade : 98
});
xiaogui.name;
// xiaogui.getGrade();
// xiaogui.getGrade()
// console.log(xiaogui.getGrade())
console.log(typeof(xiaogui.__proto__))


// 验证原型
console.log(xiaogui.__proto__ === PrimaryStudent.prototype);
console.log(xiaogui.__proto__.__proto__ === PrimaryStudent.prototype);


// 验证函数
// console.log(xiaogui.getPrototypeOf(xiaogui))

// 使用inherits函数隐藏函数,
function inherits (Child, Parent) {
	var F = function () {
		/* body... */
	};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	// body... 
}

function PrimStudent (argument) {
	Student.call(this, argument);
	this.grade = argument.grade ||1;
	// body... 
}
// 实现继承
inherits(PrimStudent, Student);
// PrimStudent添加方法
PrimStudent.prototype.getGrade = function (argument) {
	return this.grade
	/* body... */
};

var FOOO = new PrimStudent({
	name : 'rtr',
	grade : 988
});
console.log(FOOO.name)
console.log(FOOO.grade)
console.log(FOOO.getGrade())
