//Chpt 14-16 ARRAYS


// 1. Declare an empty array using JS 
// literal notation to store student names in future.
var literalArray = [];

// 2. Declare an empty array using JS 
// object notation to store student names in future.
var objectArray = [];

// 3. Declare and initialize a strings array.
var stringArray = ["Karachi", "Lahore", "Multan"];

// 4. Declare and initialize a numbers array.
var numArray = [0,1,2,3,4];

// 5. Declare and initialize a boolean array.
var booleanArray =[true,false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["x","Apple","true",5];

// 7. Declare and Initialize an array and store 
// available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like:

var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}

// 8. Write a program to store 3 student names in an array.
//  Take another array to store score of these three students.
//  Assume that total marks are 500 for each student,
//  display the scores & percentages of students like:
var studentName = ["Michael","John", "Tony"]
var score = [320,230,480];
var percentages = [];
for(var i = 0; i <=2; i++){
    percentages[i] =  score[i] / 500 * 100
}
for (var a = 0; a<=2; a++){
document.write("Score of "+studentName[a]+" is "+score[a]+". "+"Precentage "+percentages[a]+"% <br/>")
}


// 9. Initialize an array with color names. 
// Display the array elements in your browser. 
var color = ["Black","Red","voilet"]
document.write(color+"<br/>");
// a. Ask the user what color he/she wants to add to the 
// beginning 
// & add that color to the beginning of the array. 
// Display the updated array in your browser.
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning);
document.write(color+"<br/>");
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. 
// Display the updated array in your browser.
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending);
document.write(color+"<br/>");
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
var color = ["Black","Red","voilet"];
color.unshift("Green", "Blue");
document.write(color+"</br>");
// d. Delete the first color in the array. 
// Display the updated array in your browser.
color.shift()
document.write(color+"<br/>"); 
// e. Delete the last color in the array.
//  Display the updated array in your browser.
color.pop()
document.write(color+"<br/>"); 
//  f. Ask the user at which index he/she wants to add a color 
//  & color name. Then add the color to desired position/index. 
// Display the updated array in your browser. 
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
// g. Ask the user at which index he/she wants to delete color(s) 
// & how many colors he/she wants to delete. Then
// remove the same number of color(s) 
// from user-defined position/index. 
// Display the updated array in your browser.
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort method.
var scoreArray = [320,230,480,120]
document.write("Score of students :" +scoreArray+"<br/>");
scoreArray.sort()
document.write(" Ordered Score of students: " +scoreArray+"<br/>");



// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi","Lahore","Quetta","Islamabad"];
document.write("Cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("Selected Cities list: <br/>"+selectedCities);

// 12. Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)
var array = ["This","is","my","cat"];
document.write(" <br/>"+array+"<br/>")
var join = array.join(" ")
document.write("string: <br/>"+join);

// 13. Create a new array. 
// Store values one by one in such a way that 
// you can access the values in the order in which 
// they were stored. 
// (FIFO-First In First Out)
var device = ["Keyboard",",Mouse","Printer","Monitor"];
document.write("Devices : <br/>"+device+"<br/><br/>");
var firstDevice = device.shift()
document.write("Out : <br/>"+firstDevice+"<br/>");
var secondDevice = device.shift()
document.write("Out : <br/>"+secondDevice+"<br/>");
var thirdDevice = device.shift()
document.write("Out : <br/>"+thirdDevice+"<br/>");
var fourthDevice = device.shift()
document.write("Out : <br/>"+fourthDevice+"<br/>");




// 14. Create a new array. 
// Store values one by one in such a way that 
// you can access the values in reverse order. 
// (Last In-First Out)
var device = ["Keyboard",",Mouse","Printer","Monitor"];
document.write("Devices : <br/>"+device+"<br/>");
var firstDevice = device.pop()
document.write("Out : <br/>"+firstDevice+"<br/>");
var secondDevice = device.pop()
document.write("Out : <br/>"+secondDevice+"<br/>");
var thirdDevice = device.pop()
document.write("Out : <br/>"+thirdDevice+"<br/>");
var fourthDevice = device.pop()
document.write("Out : <br/>"+fourthDevice+"<br/>");


// 15. Write a program to store phone manufacturers 
// (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser 
//  using document.write() method:

var phoneArray = ["Apple","Samsung","Motorola","Nokia","Sony & Haier"]
document.write(
    "<select>"+
    "<option>"+phoneArray[0]+"</option>"+
    "<option>"+phoneArray[1]+"</option>"+
    "<option>"+phoneArray[2]+"</option>"+
    "<option>"+phoneArray[3]+"</option>"+
    "<option>"+phoneArray[4]+"</option>"+
    "</select>"
);