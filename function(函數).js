// function (函數)  含有一系列程式碼


// 宣告一個 function 在下面 (function declaration)
// 寫自己的函數  不是唯一
// 定義
//function sayHi(name, age) {
//    console.log("HI");    // () 裡面的 是一個參數 (parameter)
//    console.log("My name is "+ name + " .");  // 方式 (name)
//    console.log("I am " + age + " years old")
//} 


// 執行上面的函數  要用 invoke  execute a function
// sayHi("jie", 28); // 執行上面要做的函數裡的事情 帶入函數 //  




// return (回傳) 用法

// Calsius to Fahrenheit
// T(。F) = T(。C) * 1.8 + 32

// function convert(oc) {
//     return oc * 1.8 + 32;    // return 把她想成 東西丟出來 所以要有個變數使用他
// }

// let of = convert(0);  // 使用方式  把函數丟進去
// console.log(of);



// 換算溫度例子

// function convert(oc) {
//     return oc * 1.8 + 32;    // return 把她想成 東西丟出來 所以要有個變數使用他
// }

// let input = prompt("請輸入溫度(。C): ");
// let result = convert(input);
// alert("換算後的溫度為 " + result + " 。F");


///////////////////////////

// Array push() return value
// let friends = ["Josh", "John", "Mike"];
// let returnWord = friends.push("Bryant");

// console.log(friends);  // [ "Josh", "John", "Mike", "Bryant" ]
// console.log(returnWord);  // 4

//////////////////

let friends = ["Josh", "John", "Mike"];
friends.push("Bryant");
console.log(friends);  // [ "Josh", "John", "Mike", "Bryant" ]