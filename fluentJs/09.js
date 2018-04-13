var a = 'a b  c';
// console.log(a)
// console.log(a.split(' '))
console.log(a.split(/\s+/)) 

var s = 'JavaScript, VBScript, JScript and ECMAScript';
// var re = /[a-zA-Z]+Script/;
// var reg = /^(Script)$/;;

// console.log(re.exec(s));
// console.log(re.lastIndex); 
console.log(s.match(reg))