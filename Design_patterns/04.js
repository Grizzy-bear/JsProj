// 上传文件
window.external.upload = function(state) {
	console.log(state); //可能是sign,uploading,done,error
	/* body... */
};
// 放置上传插件
var plugin = (function() {
	var plugin = document.createElement('embed');
	plugin.style.display = 'none';
	plugin.type = 'application/txftn-webkit';
	plugin.sign = function() {
		console.log('文件扫描')

		/* body... */
	};
	plugin.pause = function() {
		console.log('暂停')

		/* body... */
	};
	plugin.uploading = function() {
		console.log('开始上传')

		/* body... */
	};
	plugin.del = function() {
		console.log('删除文件上传');
	}
	plugin.done = function() {
		console.log('文件上传完成');
	};
	document.body.appendChild(plugin);
	return plugin
	/* body... */
})();

// 定义上传类
var Upload = function(filename) {
	this.plugin = plugin;
	this.filename = filename;
	this.button1 = null;
	this.button2 = null;
	this.state = 'sign'; //初始化为waiting
	/* body... */
};

// Upload.prototype.init方法会进行一些初始化工作，包
// 括创建页面中的一些节点。在这些节点里，起主要作用的是两
// 用于控制上传流程的按钮，第一个按钮用于暂停和继续上传，
// 二个用于删除文件：
Upload.prototype.init = function(argument) {
	var that = this;
	this.dom = document.createElement('div');
	this.dom.innerHTML = '' //create buttons ,such as scanning, and del
	// body...
	document.body.appendChild(this.dom);
	this.button1 = this.dom.querySelector('[data-action="button1"]'); //the first button
	this.button2 = this.dom.querySelector('[data-action="button2"]'); //the second button
	this.bindEvent();
};

// create click 
Upload.prototype.bindEvent = function(argument) {
	var self = this;
	this.button1.onclick = function() {
		if (self.state === 'sign') {
			console.log('it is scanning ')
		} else if (self.state === 'uploading') {
			self.changeState('pause')

		} else if (self.state === 'pause') {
			self.changeState('uploading')

		} else if (self.state === 'done') {
			console.log('upload done!!!')


		} else if (self.state === 'error') {
			console.log('click error')


		}
		/* body... */
	};
	this.button2.onclick = function() {
		if (self.state === 'done' || self.state === 'error' || self.state === 'pause') {
			// 上传完成、上传失败和暂停状态下可以删除
			self.changeState('del');
		} else if (self.state === 'sign') {
			console.log('文件正在扫描中，不能删除');
		} else if (self.state === 'uploading') {
			console.log('文件正在上传中，不能删除');
		}
	};
	// body... 
};

// Upload.prototype.changeState方法，它负责切换状态之后的具体行为，
// 包括改变按钮的innerHTML，以及调用插件开始一些“真正”的操作
Upload.prototype.changeState = function(state) {
	switch (state) {
		case 'sign':
			this.plugin.sign();
			this.button1.innerHTML = 'scanning'
			// statements_1
			break;
		case 'uploading':
			this.plugin.uploading();
			this.button1.innerHTML = '正在上传，点击暂停';
			break;
		case 'pause':
			this.plugin.pause();
			this.button1.innerHTML = '已暂停，点击继续上传';
			break;
		case 'done':
			this.plugin.done();
			this.button1.innerHTML = '上传完成';
			break;
		case 'error':
			this.button1.innerHTML = '上传失败';
			break;
		case 'del':
			this.plugin.del();
			this.dom.parentNode.removeChild(this.dom);
			console.log('删除完成');
			break;
	};
	this.state = state
	// body... 
};