//Chpt 35-38 Function
// 1. Write a function that displays current date & time in your
// browser.
function telltime() {
    var now = new Date();
    document.write(now + "</br></br>");
}
telltime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function greet() {
    var first_name = prompt("Enter your first name");
    var last_name = prompt("Enter your last name");
    var full_name = first_name + " " + last_name;
    document.write("Hello " + full_name + "</br></br>");
}
greet();


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function sum() {
    var first_num = +prompt("Enter  first number");
    var last_num = +prompt("Enter  last number");
    var add = first_num + last_num;
    alert(add);
}
sum();


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function Calculator(num1, num2, operator) {
    var num1 = +prompt("Enter First Number");
    var num2 = +prompt("Enter Second Number");
    var operator = prompt("Enter operator");
    if (operator === '+') {
        document.write("<br>" + num1 + " ", operator + " " + num2 + " = " + num1 + num2)
    }
    if (operator === '-') {
        document.write("<br>" + num1 + " " + operator + " " + num2 + " = " + num1 - num2)
    }
    if (operator === '*') {
        document.write("<br>" + num1 + " " + operator + " " + num2 + " = " + num1 * num2)
    }
    if (operator === '/') {
        document.write("<br>" + num1 + " " + operator + " " + num2 + " = " + num1 / num2)
    }
    if (operator === '%') {
        document.write("<br>" + num1 + " " + operator + " " + num2 + " = " + num1 % num2)
    }
}
Calculator();


// 5. Write a function that squares its argument.
function square() {
    var num = +prompt("Enter Number");
    var square = Math.pow(num, 2);
    document.write(square);
}
square();


// 6. Write a function that computes factorial of a number.
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else return num * factorial(num - 1)
}
document.write(factorial(3));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function count(start, end) {
    var start = prompt("Enter start number");
    var end = prompt("Enter end number");
    var array = [];
    for (var i = start; i <= end; i++) {
        document.write(array.push(i) + "</br>");
    }
    return array;
}
count();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
function calculateHypo(base, perp) {
    var hyp = calculateSquare(calculateSquare(base) + calculateSquare(perp));
function calculateSquare(num) {
        return num * num;
   }
    return hyp;
}

var base = +prompt("Enter Base of Right Angle Triangle");
var perp = +prompt("Enter Perpendicular of Right Angle Triangle");
var hyp = calculateHypo(base, perp);
document.write("Hypotenus of Right Angle Triangle is " + hyp);


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculates(width, height) {
     var area = width * height;
     return area;
 }

// // i  Arguments as value
 var area1 = calculates(42, 10);
// // ii Arguments as variables
 var w = 25, h = 45;
var area2 = calculates(w, h);

document.write("Area of Rectangle Arguments as value: " + area1);
document.write("<br>Area of Rectangle Arguments as variables : " + area2);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function checkPalindrome(word) {
     word = word.toLowerCase();
    var check = true;
    var len = word.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (word[i] !== word[len - 1 - i]) {
             check = false;
         }
     }
     if (check === true) {
        alert(word + " is a palindrome");
     }
     else {
        alert(word + " is not a palindrome");
     }
 }
  checkPalindrome(prompt("Enter word to check whether it is palindrome or not","palindrome"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

 function titleCase(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
     }
     string = arr.join(" ");
     return string;
 }
 var input = prompt("Input any Sentence", "Sentence here");
 document.write("The Sentence after converting: " + titleCase(input));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longString(string) {
     var arr = string.split(" ");
     var long = arr[0];
    for (var i = 0; i < arr.length; i++) {
         if (long.length < arr[i].length) {
             long = arr[i];
        }
     }
     return long;
 }
 var input = prompt("Enter any sentence to find the longest word", "String here");
 document.write("The Longest Word is: " + longString(input));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

 function countletter(string, letter) {
     var count = 0;
     for (var i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++;
        }
     }
     return count;
 }
 var string = prompt("Enter any String");
 var letter = prompt("Enter any Letter to check its occurence in string");
 var occurence = countletter(string, letter);
 alert(" The letter " + letter + " occurrs " + occurence + " times in string " + string);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

 function calcCircumference(radius) {
    var circumference = 2 * 3.14159 * radius;
     document.write("<br>The Circumference is " + circumference.toFixed(2));
 }
function calcArea(radius) {
     var area = 3.14159 * radius * radius;
     document.write("<br>The Area is " + area.toFixed(2));
 }

 var radius = prompt("Enter radius of circle to calculate its circumference and area");
 calcCircumference(radius);
 calcArea(radius);

