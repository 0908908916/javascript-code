// Math Object

// Object  1. properties 屬性
//         2. methods 事件 

// 屬性
// Math.PI = 3.14159

// 事件
// Math.pow(a, b)   = power return  a 的 b 次方
// Math.random()    = return 0-1 之間的任一數字
// Math.sqrt()      = 開根號 例: Math.sqrt(64); // 8
// Math.abs()       = absolute number 絕對值
// Math.floor()     = 小數點都殺掉 例子: 1.18 => 1,   100.33 => 100   不管怎樣捨去
// Math.ceil()      = 小數點進位  小數點不管怎樣進位




// Math.PI

//console.log(Math.PI);    //  3.141592653589793



// Nath.pow(a, b)

//let n1 = Math.pow(2, 10);  //  1024
//console.log(n1);





// Math.random()  return 0-1 (0 is inclusive, 1 is exclusive) 會回傳0這個數字 但是不會回傳1這個數字

// for (let i = 0; i < 10; i++) {
//     console.log(Math.random());  // 出現10個隨機數字
// } 




// Math.sqrt()
// let n1 = Math.sqrt(64);
// console.log(n1);   // 8



// Math.abs()
// let n1 = Math.abs(-64);
// console.log(n1);   // 64



// Math.floor()  不管怎樣捨去
// let n1 = Math.floor(118.5);
// console.log(n1);   // 118




// Math.ceil()  小數點不管怎樣進位
let n1 = Math.ceil(3.0000001);
console.log(n1);     // 4
