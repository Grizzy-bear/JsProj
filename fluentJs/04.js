'use strict';
// var m = new Map();
// var s = new Set();
// console.log('支持Map和 Set')

// var a = [1,2,3];
// for ( var x of a){
// 	console.log(x )
// }

// var abs = function (x) {
// 	if (x>=0){
// 		return x;
// 	}
// 	/* body... */
// else {
// 	return -x;
// };
// console.log(abs(-9))
// abs(10)
// function foo(argument) {
// 	console.log('x = ' + x);
// 	for (var i = 0; i < argument.length; i++) {
// 		console.log('arg' + i + '=' + argument[i]);
// 	}
// 	// body... 
// }
// foo(10, 20, 30)

function foo2(a, b, ...rest) {
	console.log('a=' + a);
	console.log('b=' + b);
	console.log(rest);
	// body... 
}
foo2(1, 2, 3, 4, 5)

var i, args = [];
for (i = 1; i <= 100; i++) {
	args.push(i);
}
console.log(args)

var area = [];

function area_of_circle(r, pi) {
	area = pi * r ^ 2
	// return area
	console.log(area)
	// body... 
}
area_of_circle(2, 3.14)

// 用rest累加
var sum2 = function(a, b, ...rest) {
	var result = 0;
	if (typeof(a) !== 'number') {
		throw 'Not a number'
	} else if (typeof(b) !== 'number') {
		throw 'Not a number'
	}

	result = a + b;
	for (i = 0; i < rest.length; i++) {
		if (typeof(rest[i]) != 'number') {
			throw 'Not a number';
		} else {
			result += rest[i]
		}
	}
	return result;
	/* body... */
}
console.log(sum2(2, 3, 4, 5))
// console.log(typeof(2))

var buildDate = function({
	year,
	month,
	day,
	hour = 0,
	minute = 0,
	second = 0
}) {
	return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
	/* body... */
}
// console.log(buildDate({2018, 4, 6}))
console.log(buildDate({
	year: 2018,
	month: 4,
	day: 6
}))

var xiaoming = {
	name: '小明',
	birth: 1990,
	age: function(argument) {
		var y = new Date().getFullYear();
		return y - this.birth;
		/* body... */
	}
	// body... 
}
console.log(xiaoming.age())

// var count = 0;
// var oldParseInt = parseInt;//保存原函数
// window.parseInt = function (argument) {
// 	count += 1;
// 	return oldParseInt.apply(null, arguments);//调用原函数
// 	/* body... */
// };

function pow(x) {
	return x * x;
	// body... 
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var resu = arr.map(pow);
console.log(resu)

console.log(arr.reduce(function(x, y) {
	return x * 10 + y;
	/* body... */
}))

var fn = (x, y) => x * x + y * y;
console.log(fn(1, 3))

var obj = {
	birth: 1990,
	getAge: function(argument) {
		var b = this.birth;
		var fn = () => new Date().getFullYear() - this.birth;
		return fn();
		/* body... */
	}
};
// obj.getAge();
console.log(obj.getAge())

var obj = {
	birth: 1990,
	getAge: function() {
		var that = this //增加这段修复this指针问题
		var b = that.birth; // 1990
		var fn = function() {
			return new Date().getFullYear() - that.birth; // this指向window或undefined
		};
		return fn();
	}
};
console.log(obj.getAge())

var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
	if (x < y) {
		return -1;
	} else {
		return 1;
	}
})
console.log(arr)

// normal fib function
function fib(max) {
	var t, a = 0,
		b = 1,
		arrk = [0, 1];
	while (arrk.length < max) {
		[a, b] = [b, a + b];
		arrk.push(b);

		// statement
	}
	return arrk;
	// body... 
}
console.log(fib(8))

//use yield fib function
function* fibx(max){
	var t,a=0,b=1,n=0;
	while (n<max) {
		yield a;
		[a,b] = [b, a+b];
		n++;
		// statement
	}
	return;
}
var hhh=[];
for (var x of fibx(10)){
	// console.log(x);
	hhh.push(x)
}
console.log(hhh)
// console.log(fibx(8))
// var f = fibx(8);
// console.log(f.next())
// console.log(f.next())
// var
// 	r,
// 	arry = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
// hh = arry.filter(function(element, index, self) {
// 	return self.indexof(element) === index;
// 	/* body... */
// });
// console.log(hh.toString());

// var arrr = ['A', '', 'B', null, undefined, 'C', '  '];
// var r = arr.filter(function(s) {
// 	return s && s.trim();
// 	/* body... */
// });
// console.log(r)



// console.log()