let sum = func(1, 3);
function func(x, y){
    return x+y;
}
console.log(sum)

/*const subirane = (a, b) => {
    return a+b;
}*/

let arr1 = [1,2,3,4]
let arr2 = [2,3,4,5]
function add(a, b){
    return a+b;
}
function substr(a, b){
    return a-b;
}
function multipl(a, b){
    return a*b;
}
function division(a, b){
    return a/b;
}
for (let i = 0; i <arr1.length; i++){
    console.log('The sum is ' + add(arr1[i], arr2[i]))
    console.log('The substract is ' + substr(arr1[i], arr2[i]))
    console.log('The multipl is ' + multipl(arr1[i], arr2[i]))
    console.log('The divishion is  ' + division(arr1[i], arr2[i]))
}