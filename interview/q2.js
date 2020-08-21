var a = 0
b = 0
function A(a) {
    A = function(b) {
        console.log(a+b++);
    }
    console.log(a++)
}

A(1) // 1 => a = 2
A(2) // 4 => 2+2 = 4 
console.log(a,b) //0,0