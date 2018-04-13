// 状态模式
// 定义三个类
// offlightState
var OffLightState = function (light) {
	this.light = light;
	/* body... */
};
OffLightState.prototype.buttonwasPressed = function(argument){
	console.log('弱光')
	this.light.setState(this.light.weakLightState);//切换到状态weakLightState


	// body... 
};

//weakLightState
var WeakLightState = function (light) {
	this.light = light;
	/* body... */
}
WeakLightState.prototype.buttonwasPressed = function(argument){
	console.log('强光')
	this.light.setState(this.strongLightState);
	// body... 
};

// StrongLightState：
var StrongLightState = function( light ){
    this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function(){
    console.log( '关灯' ); // strongLightState 对应的行为
    this.light.setState( this.light.offLightState ); // 切换状态到offLightState
};

// 构造Light类
var Light = function () {
	this.offlightState = new OffLightState(this);
	this.weakLightState = new WeakLightState(this);
	this.strongLightState = new StrongLightState( this );
    this.button = null;
	/* body... */
};

Light.prototype.init = function(argument){
	// body... 
	var button = document.createElement( 'button' ),
    self = this;
    this.button = document.body.appendChild( button );
    this.button.innerHTML = '开关';
    this.currState = this.offLightState; // 设置当前状态
    this.button.onclick = function(){
        self.currState.buttonWasPressed();
    }   
};

Light.prototype.setState = function(newState){
	this.currState = newState;
	// body... 
};
var light = new Light();
light.init();