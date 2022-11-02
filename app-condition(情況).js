// if statement and condition 如果....則  不然.....    condition 情況/條件
// 條件有網路就會跳   "Execute the running game."   如果沒有就會跳  "Display the google search page."

// let thereIsInter = true;
// let thereIsInter = false;

// Google Chrome Game


// if (thereIsInter) {
//     console.log("Execute the running game.");
// } else {
//     console.log("Display the google search page.");
// }






// 電影院票價設定 兒童票 0-12歲 100元
// 12-65 成人票 250元
// 65上 敬老票 150元


let age = prompt("請輸入你的年齡");  // prompt 可以設定輸入 input 輸入國字數字都是 string

age = Number(age);  // 轉換成 number 數字
console.log(age, typeof age);  // 這個輸入以外的數字會出現包括國字 NaN

// 所以
// 用NaN 比較數值一定要用 isNaN
// 不能 age == NaN, age === NaN


if (isNaN(age)) {
    alert("請輸入阿拉伯數字");  // 當變成 NaN 就會出現這個 alert
} else {
    if (age < 0) {
        alert("請輸入正確的年齡 (年齡必須大於等於0)");  // 解決輸入負數錯誤問題
    } else if (age <= 12) {
        alert("你的兒童票一張100元");
    } else if ((age > 12) && (age <= 65)) {
        alert("你的一張成人票250元")
    } else if ((age > 65) && (age < 150)) {
        alert("您的敬老票一張150元")
    } else {
        alert("請輸入正確年齡 (年齡必須小於等於150)");
    }
    
    
}



