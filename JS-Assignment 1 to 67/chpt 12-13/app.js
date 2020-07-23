//chpt 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// 1. Write a program that takes a character (number or string) in a variable &
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ASCII = userInput.charCodeAt(0)
if (ASCII >= 65 && ASCII <= 90){
    alert("you input a Capital letter")
} else if (ASCII >= 97 && ASCII <=122){
    alert("you input a Small letter")
}else if (ASCII >= 48 && ASCII <=57){
    alert("your input is a number")
}
 else{
    alert ("you went some wrong codition");
}


// 2. Write a JavaScript program that accept two integers and display the larger.
//    Also show if the two integers are equal.

var num1 = prompt("Enter first Integar");
var num2 = prompt("Enter second Integar");
var a = Number(num1);
var b = Number(num2);
if (a > b) {
    alert(a + " is larger than " + b)
}
else if (a < b ) {
    alert(b + " is larger than " + a)

}
 else {
     alert(a + " and " + b + " are equal");
 }

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
 var num = prompt("Enter a number");
 var a = Number(num);

 if (a > 0 ) {
    alert("The given number is Positive")
}
else if (a < 0 ) {
    alert("The given number is Negative")
}
else {
alert( "The given number is zero");
}


// 4. Write a program that takes a character 
// (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.
var character = prompt("Enter a character");
if (character === "a" || character === "e"|| character === "i"|| character === "o"|| character === "u" ) {
    alert("true")
}
else {
    alert("false");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
var correctpassword = "123ac58";
var userPassword = prompt("Enter your password");
// i. Check if user has entered password. If not, 
// then give message “ Please enter your password”
if (userPassword === null || userPassword === ""){
    alert("Please enter your password");
}
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered matches the original password”.
else if (userPassword === correctpassword) {
    alert("“Correct ! The password you entered matches the original password.");
}
// Show “Incorrect password” otherwise.
else {
    alert("incorrect password");
}

// 6. This if/else statement does not work. 
// Try to fix it: var greeting; var hour = 13; if (hour < 18) 
// { greeting = "Good day"; else greeting = "Good evening"; }
var greeting;
var hour = 13;
if (hour <18){
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements

var time = +prompt("What time is it?");
if(time >= 0000 && time <1200){
    alert("Good Morning");
}
else if(time >= 1200 && time <1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time <1100){
    alert("Good Evening");
}
else if(time >= 2100 && time <2359){
    alert("Good Night");
}