// Primitive Data Types (原始的資料類型)
// 六種 JS 最基本的儲存資料的方式

/* 1. Number  
2. String  
3. Boolean  (True, False)  
4. Undefined (未被定義)   
5. Null (甚麼都沒有)
6. Symbol
*/ 


// 1. Number 
// 重點 : methods = funtion  兩個函數  toString() 轉換成字串  toFixed() 抓小數點幾位


// 例子

// let age = 27;
// console.log(age.toString()); 
// toString 27會變成 字串 "27" 在數字方面上才能用



// let pi = 3.1415926535;
// console.log(pi.toFixed(2));  
// toFixed 設定小數點的幾位數 (2) 就是二位 3.14




// 2. String

/** 
 * 1. length (長度)
 * 2. retrieve character (索引) 
 * 3. slice()  (切)
 * 4. indexOf()  (尋找字在第幾個)
 * 5. toLowerCase() (全部轉小寫)
 * 6. toUpperCase() (全部轉大寫)
 * 7. split()
*/


// length (長度)
// let name = "jiejing";
// console.log(name.length);  //  length 算出多少字 也會把空白鍵算進去 7個英文字




// index = 0, 1, 2, 3, 4, 5, 6    ====  0, ....... -1
// retrieve character 

// let name = "jie jing";
// console.log(name[0]); // j
// console.log(name[1]); // i
// console.log(name[-1]);  // undefined 未被定義
// console.log(name[4]); // j




// slice()  (切)
// let name = "jiejing";
// console.log(name.slice(3, 5)); // ji  3 - 5 的字 只會出現 3 - 4




// indexOf()
// let name = "jiejing";
// console.log(name.indexOf("i")); // 1  數字在第幾個  i = 第一個 0, 1
// 兩個重複的英文 只會回傳前面的那個
// 找到不存在的數字 都會是 -1



// toLowerCase() (全部轉小寫)
// toUpperCase() (全部轉大寫)

// let name = "jiejing";
// console.log(name.toUpperCase().indexOf("G"));  // 可以將字轉成大寫再找到大寫G這個英文

// console.log(name.toLowerCase());  // (全部轉小寫)
// console.log(name.toUpperCase());  // (全部轉大寫)





// split()
// let name = "jiejing welcome home";
// console.log(name.split(" "));  
// split 用空格 會把空白建切割開來 變成一個字 array [jiejing, welcome, home]



// 3. Boolean  (True, False)

// let isPremium = true;
// console.log(isPremium);


// let notPremium = false;
// console.log(notPremium);



// typeof 檢查資料類型

// let x = "true"; // string
// let y = true; // boolean

// console.log(typeof x);
// console.log(typeof y);




// 4. Undefined (未被定義)
// 等待一個箱子 被丟到裡面

// let x;
// console.log(x); // underfined




// 5. Null (甚麼都沒有)
// 幾本上告訴說箱子 裡面不能有任何東西

// let y = null;
// console.log(y); // null




// 6. Symbol
// 不常用到


let z = Symbol;
console.log(z); // function Symbol()