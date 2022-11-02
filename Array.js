// Array  // 並不是一個資料型態  把資料放在一起會用到 array [ , , , ,]
// 1. index
// 2. length
// 3. push()
// 4. pop()
// 5. shift()
// 6. unshift()


// array

// let friends = ["John", "Sandy", "Alex", "Jim"];

// index

// console.log(friends[0]);  // John
// console.log(friends[-1]); // undefined


// length


// console.log(friends.length);  // 4  4個字元





let friends = ["John", "Sandy", "Alex", "Jim", "Greg"];

// push() 函數 尾巴加(+)一個 item  array 有很多個 item


// friends.push("Harry");  // [ "John", "Sandy", "Alex", "Jim", "Greg", "Harry" ]
// console.log(friends);



// pop() 函數 尾巴減(-)一個 item  array 有很多個 item

// friends.pop();   //  [ "John", "Sandy", "Alex", "Jim" ]
// console.log(friends);




// shift() 函數 頭端減(-)一個 item  array 有很多個 item

// friends.shift();    //  [ "Sandy", "Alex", "Jim", "Greg" ]
// console.log(friends);





// unshift() 函數 頭端加(+)一個 item  array 有很多個 item

friends.unshift("Jie");   //  [ "Jie", "John", "Sandy", "Alex", "Jim", "Greg" ]
console.log(friends);

