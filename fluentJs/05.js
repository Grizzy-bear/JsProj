// var arr = [1,2,3];

// function Student (argument) {
// 	this.name = name;
// 	this.hello = function (argument) {
// 		console.log('hello,' + this.name+'!')
// 		/* body... */
// 	}
// 	// body... 
// }
function Student (props) {
	this.name = props.name || 'unnamed';
	// body... 
}

Student.prototype.hello = function(argument){
	console.log('hello'+this.name+'!')
	// body... 
};

function PrimaryStudent (props) {
	Student.call(this,props);
	this.grade = props.grade || 1;
	// body... 
}