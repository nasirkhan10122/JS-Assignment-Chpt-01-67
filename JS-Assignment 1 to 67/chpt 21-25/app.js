//Chpt 21-25 String Methods

// 1. Write a program that takes two user inputs for first and last name
//    using prompt and merge them in a new variable titled fullName. 
//    Greet the user using his full name.
var firstname = prompt("Enter you first name");
var lastname = prompt("Enter you last name");
alert("Hello " + firstname + " " + lastname);

// 2. Write a program to take a user input about his favorite mobile phone model. 
//    Find and display the length of user input in your browser
var phone_model = prompt("Enter your phone model here");
document.write("My favorite phone is: " + phone_model + "</br>Length of string: " + phone_model.length + "</br></br>");

// 3. Write a program to find the index of letter “n” in the word 
//    “Pakistani” and display the result in your browser .
var word = "Pakistani";
var indexletter = word.indexOf("n");
document.write("<b>String: <b>" + word);
document.write("</br><b>Index of 'n': <b>" + indexletter + "</br></br>");


// 4. Write a program to find the last index of letter “l” in the word 
//    “Hello World” and display the result in your browser
var word = "Hello World";
var indexletter = word.lastIndexOf("l");
document.write("<b>String: <b>" + word);
document.write("</br><b>Last Index of 'l': <b>" + indexletter + "</br></br>");

// 5. Write a program to find the character at 3rd index in the word
//    “Pakistani” and display the result in your browser
var word = "Pakistani";
var character = word.charAt(3);
document.write("<b>String: " + word);
document.write("<b></br>Character at index 3<b>: " + character + "</br></br>");

// 6. Repeat Q1 using string concat() method.
var firstname = prompt("Enter you first name");
var lastname = prompt("Enter you last name");
var fullname = firstname.concat(" ", lastname);
alert("Hello " + fullname);

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
//    “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var after_replace = city.replace("Hyder", "Islam");
document.write("<b>City: " + city + "</br>");
document.write("After replacement: " + after_replace + "</br></br>");



// 8. Write a program to replace all occurrences of “and”
//    in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together."
var afterreplace = message.replace(/and/g, "&");
document.write("<b>Message before replacement:</b> " + message + "</br></br>");
document.write("<b>Message after replacement:</b> " + afterreplace + "</br></br>");

// 9. Write a program that converts a string “472” to a
//    number 472. Display the values & types in your browser.
var string = "472";
var num = parseInt(string);
document.write("Value: " + string);
document.write("</br>Type: " + typeof (string));
document.write("</br>Value: " + num);
document.write("</br>Type: " + typeof (num) + "</br></br>");


// 10. Write a program that takes user input. 
//     Convert and show the input in capital letters.
var input = prompt("Enter user input");
var uppercase = input.toUpperCase();
document.write("User Input: " + input + "</br>");
document.write("Upper Case: " + uppercase + "</br></br>");

// 11. Write a program that takes user input.
//     Convert and show the input in title case.
var input = prompt("Enter user input");
var firstchar = input.slice(0, 1);
var otherchars = input.slice(1);
firstchar = firstchar.toUpperCase();
otherchars = otherchars.toLowerCase();
var titledcase = firstchar + otherchars;
document.write("User Input: " + input + "</br>");
document.write("Title Case: " + titledcase + "</br></br>");


// 12. Write a program that converts the variable num to string. 
//     var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var num = 35.36;
num = Math.trunc(35.36 * 100) / 100;
var string = num.toString();
string = string.replace(".", "");
document.write("Number: " + num + "</br>");
document.write("Result: " + string + "</br></br>");


// 12. Write a program that converts the variable num to string. 
//     var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var username = prompt("Enter your user name");
for (var i = 0; i < username.length; i++) {
    if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64) {
        alert("please enter a valid username");
    }
}


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, 
// COOKIE or coOkIE, program should inform about its availability. Example
var array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
input = input.toLowerCase();
for (var i = 0; i < array1.length; i++) {
    if (input === array1[i]) {
        document.write(input + " is <strong>Available</strong> at index " + i + " in our bakery");
        break;
    }
}
if (i >= array1.length) {
    document.write("We are Sorry! " + input + " is <strong>Not Available</strong> in our bakery");

}



// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
//    prompt the user to enter a valid password. 
//    For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter your Password");
var alpha = false, num = false, start_num = false, len = false;
for (var i = 0; i < password.length; i++) {
    if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
        alpha = true
    }
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        num = true
    }
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        start_num = true
    }
    if (password >= 6) {
        len = true
    }
}
document.write("Entered password: " + password);
if (alpha == false) {
    document.write("<br>Password should contain alphabet");
    document.write("<br>Please enter a valid password");
}
else if (num == false) {
    document.write("<br>Password should contain number ");
    document.write("<br>Please enter a valid password");
}
else if (start_num == true) {
    document.write("<br>Password can not begin with a number ");
    document.write("<br>Please enter a valid password");
}
else if (len == false) {
    document.write("<br>Password must atleast 6 characters long :");
    document.write("<br>Please enter a valid password");
}
else {
    document.write("<br>Valid password!");
}


// 16. Write a program to convert the following string to an array using string split method. 
//     var university = “University of Karachi”; Display the elements of array in your browser.
var university = "University of Karachi";
var array2 = university.split("");
document.write("Elements of Array are");
for (var i = 0; i < array2.length; i++) {
    document.write("</br>" + array2[i]);
}

// 17. Write a program to display the last character of a user input.
var user_input = prompt("User input");
document.write("User input: " + user_input + "</br>");
document.write("last character of " + user_input + ": " + user_input.charAt(user_input.length - 1) + "</br></br>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
//     Write a program to count number of occurrences of word “the” in given string
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
        count++;
    }
}
document.write("Text: " + string);
document.write("<br>There are " + count + " occurence(s) of the word 'the'");


