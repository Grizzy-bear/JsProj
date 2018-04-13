function foo (name) {
	this.name = name;
	this.hello = function () {
		console.log('Hello,' + this.name + '|');
		/* body... */
	}
	// body... 
}

var xiaoming = new foo('小明');
xiaoming.name;
xiaoming.hello();

// 封装所有new操作
function Student (props) {
	this.name = props.name || '匿名';
	this.grade = props.grade || 1;
	// body... 
}

Student.prototype.hello = function(argument){
	console.log('hello' + this.name + '|' + this.grade);
	// body... 
};
function createStudent (props) {
	return new Student(props || {})
	// body... 
};

var xiaoFang = createStudent({
	name:'消防',
	grade:56
});
xiaoFang.grade;
xiaoFang.hello();