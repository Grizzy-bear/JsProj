// 初识状态
var Light = function () {
	this.state = 'off';
	this.button = null;
	/* body... */
};

// 定义Light的属性方法，创建一个buuton节点
Light.prototype.init = function(argument){
	var button = documentElement('button'),
	self = this;
	button.innerHTML = '开关'
	this.button = document.body.appendChild(button);
	this.button.onclick = function () {
		self.buttonWasPressed();
		/* body... */
	}
	// body... 
};

Light.prototype.buttonWasPressed = function(argument){
	if (this.state === 'off'){
		console.log('开灯')
		this.state = 'on'
	}else if (this.state === 'on') {
		console.log('关灯')
		this.state = 'off'
	}
	// body... 
};

var light = new Light();
light.init();

// 状态模式
