// console.log(), alert(), prompt() 介紹三種函式用法



// console.log("目前正在學習JS"); //會顯示在控制台(網頁)



// alert("你們目前正在index.html文件");  // 可以在瀏覽器顯示一個視窗


// prompt("請輸入年齡");  // 可以讓使用者輸入東西。字





// let and const


// let 設定一個變數 但下一個設定就替換變新的 變數 let 只能一次 重複的話會產生錯誤
// let x = 3;
// x = 5;
// x = x + 5;
// console.log(x); 


// const 設定一個變數 不能再設定像 let 一樣 再給一個變數 會產生錯誤
// const x = 3.14159;
// console.log(x);




// let and const 
// console.log, prompt, alert 兩個結合起來使用

// 把輸入的姓名放入變數的一個程式碼
// let name = prompt("請輸入你的姓名:");
// console.log(name);

// 和使用者的一個互動 會顯示 Hello ???? 
let name = prompt("請輸入你的姓名:");
alert("Hello, " + name);
