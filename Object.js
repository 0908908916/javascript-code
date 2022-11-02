// Object (物件)
// 1. property
// 2. method
// 3. this
// 4. typeof


// 1. property
// 設定物件

/*let Wilson = {
    first_name: "Wilson",     // 物件屬性的行為  properties setting
    last_name: "Ren",
    age: 30,
    is_married: false,
    spouse: null,
    // methods setting

    sayHi () {
        console.log("Wilson says hi. ");
    },
    walk () {
        console.log("Wilson is walking on the street. ");
    },
    say (word) {
        console.log("Wilson says " + word);
    },
    sayAge () {
        console.log("Wilson says I am " + this.age + " years old.");  // age 指上面age的物件 將 Wilson 的age帶過來   
    }
};
*/


// 取的物件 [], dot notation 兩個方法

// 1.
//console.log(Wilson["first_name"]);   // 得到 Wilson
//console.log(Wilson["age"]);  //  30


//  2.
//console.log(Wilson.age);   // 30
//console.log(Wilson.is_married);  //  false




// 執行上面的 // methods setting

//Wilson.sayHi();  //  Wilson says hi.
//Wilson.walk(); //  Wilson is walking on the street. 
//Wilson.say("today is a good day. ");    // Wilson says today is a good day.



// this  指(object)
//Wilson.age = 35;   // 運用 this 可以在這邊改變年齡
//Wilson.sayAge();




// typeOf


let Wilson = {
    first_name: "Wilson",     // 物件屬性的行為  properties setting
    last_name: "Ren",
    age: 30,
    is_married: false,
    spouse: null,
}; 


let friends = ["jone", "joy", "mike"];

// 6 primitive data type
// 2 array, object

console.log(typeof Wilson);   //  object

// 在JS Array 是一個object 的一種