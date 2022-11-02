// Logical Operator 邏輯運算
// returns a Boolean value
// == === != !== > < >= <=


// ==, ===

// == (比較左右值是否相等) 
console.log(3 == 3); // ture
console.log(3 == "3");  // ture 比的是值 所以還是ture


// === (比較資料類型一不一樣)
console.log(3 === 3);   // ture
console.log(3 === "3");  //  flase



// != (不等於)

console.log(4 != "4"); //  flase values are different 4 是等於 4
console.log(4 !== "4"); //  true 判斷資料類型是不是不一樣 


// > < >= <=
console.log(4 > 3); // ture
console.log(4 < 3); // flase




// and(且)  兩邊都要是True 才會是 True 
// or(或) 有一邊是 True 其他都是 True
// && (and)
// || (or)

let condition = 3 > 2; // true
let condition1 = 5 > 6; // false

console.log(condition && condition1); // false
console.log(condition || condition1); // true






