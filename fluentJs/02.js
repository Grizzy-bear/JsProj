// This 的理解
// 1
// console.log('hello')
// var name = "global this";
// function globalTest () {
// 	// this.name = "rename global this"
// 	console.log(this.name);
// 	// body... 
// }
// globalTest()
// 2
// function showName (argument) {
// 	console.log(this.name);
// 	// body... 
// }
// var obj = {};
// obj.name = "oooo";
// obj.show = showName;
// obj.show();

// 3
// var name = "global name";

// function showName (argument) {
// 	this.name = "showName function";
// 	// body... 
// }
// var obj = new showName();

// console.log(obj.name);
// console.log(name)

// call方法
// function cat (argument) {
// 	cat.prototype={
// 		food:"fish",
// 		say:function (argument) {
// 			console.log("i love" + this.food);
// 			/* body... */
// 		}
// 	}
// 	// body... 
// }

// var blackCat = new cat();
// blackCat.say();
var adder = {
	base : 1,
	add:function (a) {
		var f = v => v+ this.base;
		return f(a);

		/* body... */
	},
	addThruCall:function (a) {
		var f = v =>v+this.base;
		var b = {
			base:2
		};
		return f.call(b,a)
		/* body... */
	}
};
console.log(adder.add(1));
console.log(adder.addThruCall(1))