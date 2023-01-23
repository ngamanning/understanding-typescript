// return type of function
function add(n1, n2) {
    return n1 + n2;
}
function addWithReturnType(n1, n2) {
    return n1 + n2;
}
// function return void 
function print(n1) {
    console.log("The number is " + n1);
}
console.log(print(6)); // ==> yeild undefined
// function as TYPE - a custom type that describe a function
var combine;
combine = add;
console.log(combine(8, 8));
// function types in callback 
function addAndDoSomething(n1, n2, doSomething) {
    var result = n1 + n2;
    doSomething(result);
}
addAndDoSomething(8, 10, print);
addAndDoSomething(8, 10, function (result) { return console.log("The new number is " + result); });
