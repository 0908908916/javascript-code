// 1. 將array與loop併用，現在你要用這兩樣的工具，將一個array反過來


/*

const friends = ["Harry", "Ron", "Snap"];
//                0        1      2        firends.length = 3
const reversed_friends = [];   // const 不可變


// friends.length - 1; 因為  firends.length = 3 所以 - 1 才會跑到 Snap
// push() 把東西加進去 i >= 0  i--  讓他從2跑到0
// 演算法通用很多東西 都可以反過來

for (let i = friends.length - 1; i >= 0; i--) {
    let friend = friends[i];  // 可變數
    reversed_friends.push(friend);
}

console.log(reversed_friends);  // [ "Snap", "Ron", "Harry" ]

*/



// 2. 在這個coding練習裡面，你要寫一個function，他可以接受一個parameter，parameter必須是一個array of numbers。這個function要return一個值 - array當中最大的數!
// 若是 input是一個 empty array，則return undefined.

/*

function findBiggest(arr) {
    if (arr.length === 0) {
        return undefined;  // 如果是空值就回傳  undefined.
    }

    let biggestNumber = -1000000;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
}

console.log(findBiggest([100, 150, 50, 7]));  // 150
console.log(findBiggest([]));  // undefined

*/


// 3.  兩種做法  n + 1  + 2  + 3  + 4  + 5 的總和 


function addUpTo(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(addUpTo(10)); // 55


// 等差級數公式 = ((首項 + 末項) * 頂數) / 2
function add(n) {
    let res = ((1 + n) * n) / 2;
    return res;
}

console.log(add(10));