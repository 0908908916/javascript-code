// 1. false  2. 0   3. ""  一個 string 其他什麼都沒有  4.null 5. undefined 6. NaN
// 除此六者之外，其他均為 Truthy(真實的)

// let x = 10; // This is a truthy value.  (true)


let x = "";  // This is a falsy value. (false)


// Boolean context
if (x) {
    console.log("This is a truthy value.");
} else {
    console.log("This is a falsy value.");
}