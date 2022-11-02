// Loop 迴圈

// 1. for loop  知道迴圈要用幾次 使用
// 2. while loop    不知道迴圈要用幾次 使用


// for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);      // 0 1 2 3 4 5 6 7 8 9
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i);      // 1 2 3 4 5 6 7 8 9 10
// }


//  while loop
// let j = 0;
// while (j <= 10) {
//     console.log(j);  // 0 1 2 3 4 5 6 7 8 9 10
//     j++;   // 務必一定要加 j ++  注意 否則電腦會癱瘓
// }



// Keywords in Loop 特別字有特殊功能
// 1. break
// 2. continue


// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;  // 跳脫 loop 不執行 5 其他繼續執行     continue(動作不執行哪一段)
//     }
//     console.log(i);  // 0 1 2 3 4 6 7 8 9 10
// }




// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         break;  // i = 5 的時候會做 break(中斷) 後面部分不執行
//     }     
//     console.log(i);  // 0 1 2 3 4 
// }


// i++ 可以用別的改法
// for (let i = 0; i <= 50; i = i += 4) {
//     console.log(i);   // 每次 i 執行一次就會 + 4
//  }




// Nested loop 在 loop 當中 還有 loop 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(i, j);
//     }
// }

// 以上執行下列
// 0 0 
// 0 1
// 1 0 
// 1 1 
// 2 0 
// 2 1 
// 3 0 
// 3 1


//////////////////

// 看運行幾次
// let count = 0;

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         count++;
//     }
// }

// console.log(count);  // 6


////////////////////


//  Quick Note
/* 在function當中的return keyword會停止整個function的運行，
所有的for loop, while loop, if statement都會暫停。*/

function trying() {
    for (let i = 0; i < 10; i++) {
        console.log(i);

        if (i == 5) {
            return;
        }
    }
    
}

trying();

// 0 1 2 3 4 5


// HOW TO LOOP THROUGH AN ARRAY
// let friends = ["Josh", "John", "Mike"]

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i].toUpperCase());  // 印出大寫三個字元 列表 JOSH JOHN MIKE  務必記得 i < friends.length;
// }