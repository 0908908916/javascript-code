// answer 0-99
let answer = Math.floor(Math.random()*100);   // *100 就可以把random 的數字 原本0.1.... 變成0-99

let n1 = 0;
let n2 = 99;

while (true) {
    let guess = prompt("Make your guess: (between " + n1 + " and " + n2 + ")");  // 先讓使用者猜一個數字

    // || (或是)
    if (guess < n1 || guess > n2) {
        alert("請使用者輸入有效數字");
        continue;   // 直接重新回來執行 loop 迴圈 所以又會叫使用者去猜另一個數字 下面會跳過
    }

    if (guess == answer) {
        alert("The secert number is" + answer + ".");
        alert("You win the game.");
        break;
    } else if (guess <= answer) {
        n1 = guess;
    } else if (guess > answer) {
        n2 = guess;
    }  
}