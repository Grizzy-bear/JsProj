// 通用结构
// Light类的实现如果没有添加buttonwaspressed，则抛出异常
var State = function () {
	/* body... */
};
State.prototype.buttonWasPressed = function(argument){
	throw new Error('父类的buttonwaspressed方法需要重写')

	// body... 
};
var SuperStrongeLightState = function (light) {
	this.light = light;
	/* body... */
};
SuperStrongeLightState.prototype = new State(); //继承父类
SuperStrongeLightState.prototype.buttonWasPressed(argument){
	console.log('off')
	this.light.setState(this.light.offLightState);
	// body... 
};
