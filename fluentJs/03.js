'use strict';
// for (var i=1;i<=3;i++){
// 	setTimeout(function () {
// 		console.log(i)
// 		/* body... */
// 	}, 0);
// };

var async = require('async');
// async.series({
// 	one:function (callback) {
// 		callback(null,1)
// 		/* body... */
// 	},
// 	two:function (callback) {
// 		callback(null,2)
// 		/* body... */
// 	}
// }),function (err,result) {
// 	console.log(result)
// 	/* body... */
// }
async.series({
	one: function(callback){
		callback(null, 1);
	},
	two: function(callback){
		callback(null, 2);
	}
},function(err, results) {
	console.log(results);
});