// 電影票處理價格與折扣



// # (條件)
// # 1. 0 - 11 free
// # 2. 12-18 or welfare 75%
// # 3. 19 - 120 100%
// # 4. else error message

function ticketPrice(age, price, welfare = false) {
    if (0 <= age && age <= 11) {           // && 且 的意義
        return 0;
    } else if (12 <= age && age <= 18 || welfare) {       // || 或 的意義
        return price * 0.75;
    } else if (19 <= age && age <= 120) {
        return price;
    } else {
        return "invalid age input";
    }
}

console.log(ticketPrice(15, 200)); // 150
console.log(ticketPrice(60, 100, true)); // 75
console.log(ticketPrice(14, 200, true)); // 150
console.log(ticketPrice(4, 100, true)); // 0
console.log(ticketPrice(150, 300)); //  invalid age input