// 1. 編寫一個名為“printMany”的函數，打印出整數 1、2、3、...、100。

function printMany (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

printMany(100);



// 2. 編寫一個名為“printEvery3”的函數，它打印出整數 1、4、7、10、...、88。 (+ 3)

function printEvery3 () {
    for (let i = 1; i <= 88; i += 3) {
        console.log(i)
    }
}

printEvery3();


// 3.   編寫一個名為“stars”的函數，它接受一個整數作為輸入，並返回 n 個連續“*”的串聯。

function stars (n) {
    let result = "";
    for (let i = 0; i <= n; i++) {
        result += "*";
    }
    return result;
}

console.log(stars(10));


// 4.  編寫一個名為“isUpperCase”的函數來檢查字符串的第一個字母是否為大寫。

function isUpperCase (str) {
    if (str.length == 0) {     // 所以要再加上這段 轉換
        return false;
    }
    // 如果只打下面會產生一個問題 就是 str[0] 會是一個 undefined 就不能用這個  toUpperCase()
    // if (str[0] == str[0].toUpperCase()) {
    //     return true;
    // } else {
    //     return false;
    // }


    return str[0] == str[0].toUpperCase();  // 正常簡短的快速寫法 下方只寫這段

}

console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false 



// 5.  編寫一個名為“isAllUpperCase”的函數來檢查給定字符串中的所有字母是否都是大寫的。


function isAllUpperCase (str) {   // 假設如果都是大寫的話
    if (str.length == 0) {
        return false;
    }

    let allUpperCase = true;   // 就可以先定義一個 true
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i].toUpperCase()) {
            allUpperCase = false;             //如果有字母是小寫的話 就把他設定成 false
            
        }
    }
    return allUpperCase;
}

console.log(isAllUpperCase("ABCD"));   // true
console.log(isAllUpperCase(""));   //  false
console.log(isAllUpperCase("ABCDEFGHIJKLm"));  // false



// 6.  編寫一個名為“位置”的函數，打印出第一個大寫字母及其索引位置。如果未找到，則打印 -1


function position(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {      // 確認他是不是都是大寫的字
            return str[i] + " " + i;   // 這個執行完 至少會return 一個東西 如果沒有就 return 下面的
        }
    }
    return -1;   // 沒有東西回傳這個
    
}

console.log(position("abcd"));  // -1
console.log(position("AbcD"));  // A 0
console.log(position("abCD"));  // C 2 


// 7.   編寫一個名為“findSmallCount”的函數，它將一個整數數組和一個整數作為輸入，並返回一個整數，表示數組中有多少元素小於輸入整數。

function findSmallCount(arr, n) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            counter++
        }
    }
    return counter;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0));   // returns 0


// 8.   編寫一個名為“findSmallerTotal”的函數，它將一個整數數組和一個整數作為輸入，並返回數組中小於輸入整數的所有元素的總和。

function findSmallerTotal (arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(findSmallerTotal([1, 2, 3], 3));  //  3
console.log(findSmallerTotal([1, 2, 3], 1));   //  0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));  // 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));   // 0




// 9.  編寫一個名為“findAllSmall”的函數，它將一個整數數組和另一個整數作為輸入，並返回一個整數數組，其中包含所有小於輸入整數的元素。


function findAllSmall(arr, n) {
    let answer = [];
    for (let  i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

console.log(findAllSmall([1, 2, 3], 10)); //   (3) [1, 2, 3]  
console.log(findAllSmall([1, 2, 3], 2));  //   (1) [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4));  //  (3) [1, 3, 2]



// 10.  編寫一個名為“sum”的函數，它接受一個數字數組，並返回輸入數組中所有元素的總和。

function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum([1, 2, 3,]));  // 6
console.log(sum([1, 5, 7]));    // 13
console.log(sum([-10, -20, -30]));   // -60



// Simple Exercise II

// 11.  編寫一個名為“stars”的函數，它按以下模式打印出星星層：

function stars(n) {
    for (let i = 1; i <= n; i++) {
        // prints out a layer of stars
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

stars(1);
console.log("--------------")
stars(4);


// 12 .  寫一個名為“makeStars”的函數，它按以下模式打印出星星：

function makeStars(n) {     // n 至少大於一 所以等於二的話
    let result = "*"      //  n 等於一的話 先讓他等於一顆星

    for (let i = 2; i <= n; i++) {    // 等於二的時候會執行 i 是 1
        let s = "\n";    //  要做的第一件事情 在 * 後面加 \n  
        for (let j = 0; j < i; j++) {   // 在 \n 後面再加入一定數量的星星 j 從 0 開始
            s += "*";
        }
        result += s;  // 把全部結果 +在這
    }
    console.log(result);  // 第一行只會出線一顆星
}

makeStars(4);


// 13. 編寫一個名為“stars2”的函數，它按以下模式打印出星星層：

function stars2(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }

    for (let i = n - 1; i > 0; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }

}



stars2(3);



// 14.   編寫一個名為“table”的函數，它接受一個輸入 n，並打印出 n x 1 到 n x 9

function table(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(n + "*" + i + "=" + n * i);
    }
}

table(3);


// 15. 編寫一個名為“table9to9”的函數，打印出99乘法表：

function table9to9() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(i + "*" + j + "=" + i * j );
            
        }
    }
}

table9to9();




// 16.  編寫一個名為“fib”的函數，它以整數 $n$ 作為輸入，並返回斐波那契數列的第 $n$ 個元素。
// 用文字來說，就是費氏數列由0和1開始，之後的費波那契數就是由之前的兩數相加而得出。首幾個費波那契數是：
//1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987……（OEIS數列A000045）
// F0 = 0 F1 = 1 
// Fn = F n-1 + F n-2 (n >= 2)

// 1. 第一個作法 (耗時)
function fid(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fid(n - 1) + fid(n - 2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fid(i));
}

// ------------------------

// 2. 第二個作法
function fid(n) {
    let arr = [0, 1];
    let i = 0;
    while (arr.length <= n) {
        arr.push(arr[i] + arr[i + 1]);
        i++;
    }
    console.log(arr);
    console.log(arr[n]);
}

fid(8);




// 17 .  編寫一個名為“reverse”的函數，將字符串作為輸入，並返回反向字符串。

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {   // 從最後一個開始找
        result += str[i];
    }
    return result;
}


console.log(reverse("ABCD"));
console.log(reverse("rets")); 




// 18.  編寫一個名為“swap”的函數，它將一個字符串作為輸入，並返回一個小寫變為大寫，大寫變為小寫的新字符串。


function swap(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    console.log(result);
    return result;

}

swap("AwAwAw");


// 19. 編寫一個名為“findMin”的函數，它將一個數組作為輸入，並返回輸入數組中的最小元素。


function findMin(arr) {
    let min = arr[0];    // 假設這個arr是最小的值

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(min);
    return min;
}

findMin([60, 70, 90, 20, 40]);   // 20




// 20.  編寫一個名為“findNthMin”的函數，它接受一個整數數組和另一個整數 n，並返回給定數組中第 n 幾個最小的數 如果整數1 就返回第一個最小的數。

function findNthMin(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                counter++;
            }
        }
        if (counter == n - 1) {
            return arr[i];
        }
    }
}


console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5
console.log(findNthMin([-1, -4, 1, 2, 9], 3));  // returns 1


// 21.  編寫一個名為“mySort”的函數，它將數組作為輸入，並返回輸入數組的排序版本 由小到大排序好
// 並不是一個很好的解法 可以用的  1. 在串列 先找一個最小值 sort()
function findMin(arr) {
    let min = arr[0];  // 最小的值預設
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];   // 找到最小值
        }
    }
    return min;
}

// splice(start, deleteCount, item1)  start 開始 - deleteCount 刪除 item1 插入的元素
// 假設
// let colors1 = ["red", "yellow", "blue", "gray", "purple"]
// let colors2 = colors1.splice(1, 2, "hi")

// colors1; // ["red", "hi", "gray", "purple"]
// colors2; // ["yellow", "blue"]
// 功能 可以藉由刪除原來的元素 並加入新元素改變陣列內容 

function mySort(arr) {
    let result = [];
    while (arr.length > 0) {    // 當我這個 array 長度大於 0
        let min = findMin(arr); // 我要找到他的最小值 繼承上方函式 findMin(arr)
        result.push(min);  // 找到的最小值丟進來 丟到 result = [] 當中
        arr.splice(arr.indexOf(min), 1);  // splice 會改變當中元素 移除一個元素 找到最小值就從這個 [] 拔掉 while 會不斷尋找那個是當中最小
    }
    return result;
}


console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17])



// 22.   編寫一個名為“isPrime”的函數，它接受一個整數作為輸入，並返回一個布爾值，指示輸入數字是否為素數(質素)。
// 只可以 被 1 和 自己整除。 比如說5 不能被 除1. 5 其他不能整除2.3.4 就是一個質數 
// 同时它必须是大于一的整数。

function isPrime(n) {
    if (n == 1) {
        return false;   // 1 並不是一個質數   return false
     }

    let starter = 2;  // 他是一個起點數
    while (starter < n) {
        if (n % starter == 0) {     // 如果會被 starter 被 n 整除的話 return false 
            return false;
        }
        starter++;   // 記得要 ++ 是一個迴圈
    }

    return true;      // true 他就是一個質數  從2 ...後面都沒有可以整除的就是質數
}

console.log(isPrime(1));   // returns false
console.log(isPrime(5));    // returns true
console.log(isPrime(91));   // returns false
console.log(isPrime(1000000));  // returns false



// 23.   編寫一個名為“confirmEnding”的函數，它將 2 個字符串作為輸入，並返回一個布爾值，該值指示第一個輸入是否以第二個輸入結束。
// 第一個結尾 是否跟最後一個一樣

function confirmEnding(str1, str2) {      // 一個 str1 字串(str)  str2 最後一個數
    let k = str1.length - 1;   // 設定變數 先找到串列打得字的最後一個數
    for (let i = str2.length - 1; i >= 0; i--) {
        if (str2[i] != str1[k]) {   // 檢查有沒有一樣 不一樣就 false
            return false;
        } else {
            k--;  // 這樣 i 才會對齊 k 從後面的數 相同位置
        }        
    }
    return true;  // 什麼都沒有發生迴傳 ture
}

console.log(confirmEnding("Bastian", "n"));  // true
console.log(confirmEnding("Connor", "n"));  // false
console.log(confirmEnding("Open sesame", "same")); // true


// 24.  編寫一個名為“findDuplicate”的函數，將整數數組作為輸入，並檢查數組中是否有任何重複值。
// 邏輯 確認 串列 除了自己之外 有沒有值是一樣的


function findDuplicate(arr) {  // 放入一個 arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] == arr[j]) {   // 如果 i 不等於 j 且 arr[i] = arr[j] 可以確認有重複值
                console.log(true);
                return true;
            }            
        }
    }
    console.log(false);
    return false;
}


findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
findDuplicate([]); // returns false
findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false 




// 25.  編寫一個名為“palindrome”的函數，用於檢查輸入字符串是否為回文。 （如果您不知道回文是什麼，請在谷歌上搜索。）
// 不管往前看讀 和從後面看讀都是一樣的

function palindrome(str) {      // palindrome 考試一定會看到的問題 小小技巧
    let i = 0;
    let j = str.length - 1;    // 設定兩個變數 i = 前面  j 最後面

    while (i < j) {               // 當 i 小於 j 我就要不斷去檢查所指到字母是不是一樣
        if (str[i] != str[j]) {     // 如果不等於 表示他不等於這個回文
            console.log(false);
            return false;
        }
        i++;    // 有等於
        j--;    // 有等於
    }
    console.log(true);
    return true;
}


palindrome("bearaeb"); // true
palindrome("Whatever revetahW"); // true
palindrome("Aloha, how are you today?"); // false



// 26.  編寫一個名為“pyramid”的函數，它接受一個整數作為輸入，並按以下模式打印一個金字塔：
// 設定兩個數 space 為空格  star為星星

function draeRow(space, star) {
    let result = "";
    for (let i = 0; i < space; i++) {
        result += " ";
    }
    for (let i = 0; i < star; i++) {
        result += "*";
    }

    console.log(result);
}



// draeRow(3, 1);
// draeRow(2, 3);
// draeRow(1, 5);
// draeRow(0, 7);


//  3     *     1   star  (j += 2) 
//  2    ***      3
//  1   *****       5
//  0  *******        7
//  row 以上 3. 2. 1 = n - 1
// 印出上方 可以看出來 第一行 空格三 一個星星 draeRow(3, 1);



function pyramid(n) {
    let i = n - 1;
    let j = 1;
    for (let k = 1; k <= n; k++) {     // k = row  橫的從上數下來
        draeRow(i, j);
        i--;
        j += 2;
    }  
}

pyramid(4);

// 27.   編寫一個名為“inversePyramid”的函數，將金字塔倒置。

function inversePyramid(n) {
    let i = 0;
    let j = 2 * n - 1;
    for (let k = 1; k <= n; k++) {
        draeRow(i, j);
        i++;
        j -= 2;
    }
}

inversePyramid(4);


// 當 n = 4 以下


// (空格)
//     *******  7 j -= 2    let n = 0 (7 個 *)
//  1   *****   5    let j = 2n - 1  (4 * n = 8) (8 - 1 = 7)
//  2    ***    3
//  3     *     1
// i++



// 28.  編寫一個名為“factorPrime”的函數，該函數將整數作為輸入，並返回輸入的素數分解。(質因素分解)


function factorPrime(n) {     // n 沒辦法直接整除 
    let answer = n + " = ";   // 知道最後要 return 字串 string
    let p = 2;  // 設定一個變數
    while (p <= n) {
        if (n % p == 0) {     // 如果可以被整除 餘數 0
            answer += p + " * ";
            n /= p;   // n / p 再把值放進 n
        } else {
            p++;   // 沒辦法整除 p + 1.....p + 2
        }
    }
    answer = answer.substring(0, answer.length - 3);  // 解決下面多一個 * 的問題 2 * 2 * 2 * 3 * 5
    console.log(answer);
}

factorPrime(120);   // 120 = "2 * 2 * 2 * 3 * 5 * "


// 29. 編寫一個名為“intersection”的函數，該函數接受 2 個數組，並返回一個包含 2 個數組交集的元素數組。

function intersection(arr1, arr2) {
    let result = [];    // 先說 = array
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {      // 如果等於的話代表有重複的值 是一個交集 原本裡面會有值 要以下檢查 
                // check if result array already has arr1[i] or arr2[j]
                let okay = true;   // 檢查 可不可以把值放進去
                for (let k = 0; k < result.length; k++) {
                    if (arr1[i] == arr2[k]) {
                        okay = false;  // 不能再把值丟進 result
                    }
                }
                if (okay) {
                    result.push(arr1[i]);  // for loop 執行完後 如果 okay 是 ture 代表可以丟進arr1[i]
                } 
            }
        }
    }
    console.log(result);   // result 結果
}

intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]




// 30.  編寫一個名為“flatten”的函數來展平數組。 把某個東西壓平

function flatten(arr) {
    let result = [];   // 先說變數 = arr
    helper(arr);    // 把 上面arr 丟進來
    console.log(result);
    return result;


    // 當我執行一個函數( helper) 把一個 array 放進來  放進去就會檢查 for loop 檢查是不是有另一個 array
    //  如果有另一個就會去執行 helper(arr1[i]); 如果沒有就可以放進  result

    function helper(arr1) {     // 他會幫我們做一些事情
        for (let i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) {    // 如果 arr1[i] 他還是一個  array 的話就會以下
                helper(arr1[i]);  //  執行這個 helper 把  arr[i] 套進來
            } else {
                result.push(arr1[i]);   // 如果不是一個 arr[i] 的話 可以放進 result 裡面
            }
        }
    }
}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]