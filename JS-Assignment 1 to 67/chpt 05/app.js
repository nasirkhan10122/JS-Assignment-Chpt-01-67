//Chpt-05 Math Expressions

// 1. Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.
var num1 = 3;
var num2 = 5;
var total = num1 + num2;
document.write("Sum of " +num1+ " and " +num2+ " is " + total)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var total = num1 - num2;
document.write("</br>Subtraction of " +num1+ " and " +num2+ " is " + total)

var total = num1 * num2;
document.write("</br>Multiplictaion of " +num1+ " and " +num2+ " is " + total)

var total = num1 / num2;
document.write("</br>Division of " +num1+ " and " +num2+ " is " + total)

var total = num1 & num2;
document.write("</br>Modulus of " +num1+ " and " +num2+ " is " + total+"</br></br></br>")

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
var a;
document.write("Value after variable declaration is: " +a + "</br>");
a=5;
document.write("Initial Value: " +a + "</br>");
a++;
document.write("Value after increment is: " +a+ "</br>");
a +=7;
document.write("Value after addition is: " +a+ "</br>");
a--;
document.write("Value after decrement is: " +a+ "</br>");
a = a%3;
document.write("The remainder is: " +a+"</br></br></br>")

// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie.
var ticket_cost = 600;
var no_of_tickets = 5;
var total_cost = ticket_cost*no_of_tickets;
document.write("Total cost to buy "+no_of_tickets+" tickets to a movie is "+total_cost+"PKR</br></br></br>");


// 5. Write a script to display multiplication table of any number in your browser.
document.write("<h3>Table of 4</h3></br>");
var table = 4;
document.write(table+ " X"+" 1"+" = "+ table*1+"</br>");
document.write(table+ " X"+" 2"+" = "+ table*2+"</br>");
document.write(table+ " X"+" 3"+" = "+ table*3+"</br>");
document.write(table+ " X"+" 4"+" = "+ table*4+"</br>");
document.write(table+ " X"+" 5"+" = "+ table*5+"</br>");
document.write(table+ " X"+" 6"+" = "+ table*6+"</br>");
document.write(table+ " X"+" 7"+" = "+ table*7+"</br>");
document.write(table+ " X"+" 8"+" = "+ table*8+"</br>");
document.write(table+ " X"+" 9"+" = "+ table*9+"</br>");
document.write(table+ " X"+" 10"+" = "+ table*10+"</br></br></br>");

// 6. The Temperature Converter: It’s hot out! 
// Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsius_temp = 25;
var c_convert = (celsius_temp*9/5)+32;
var fahrenheit_temp = 70;
var f_convert = (fahrenheit_temp-32)*5/9;
document.write(celsius_temp+"<sup>0</sup>C is  "+ c_convert+"<sup>0</sup>F </br>"+fahrenheit_temp+"<sup>0</sup>F is "+ f_convert+"<sup>0</sup>C </br></br></br>" );


// 7. Write a program to implement 
// checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables.
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var price_item_1 = 650;
var quantity_item_1 = 3;
var price_item_2 = 100;
var quantity_item_2 = 7;
var shipping_charges = 100;
var total_cost = (price_item_1*quantity_item_1)+(price_item_2*quantity_item_2)+shipping_charges;
document.write("<h1>Shopping Cart</h1></br></br>")
document.write("Price of item 1 is "+price_item_1+"</br>");
document.write("Quantity of item 1 is "+quantity_item_1+"</br>");
document.write("Price of item 2 is "+price_item_2+"</br>");
document.write("Quantity of item 2 is "+quantity_item_2+"</br>");
document.write("Shipping Charges "+shipping_charges+"</br></br>");
document.write("Total cost of your order is "+total_cost+"</br></br></br>");

// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser.
document.write("<h2> Marks Sheet</h2></br></br>");
var total_marks = 980;
var mark_obtained = 804;
var percentage = (mark_obtained*100)/total_marks;
document.write("Total Marks: "+total_marks+"</br>");
document.write("Marks obtained: "+mark_obtained+"</br>");
document.write("Percentage: "+percentage+"%</br></br></br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var us_dollars = 10*104.80; var saudi_riyals = 25*28; var Pakistani_rupees = us_dollars + saudi_riyals; document.write("<h1>Currency in PKR</h1></br></br>Total Currency in PKR: "+Pakistani_rupees+"</br></br></br>");

// 10. Write a program to initialize a variable with some number and 
// do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression.
var num = 1; var num = ((num + 5)*10)/2; alert(num);

// 11. The Age 
// Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
var current_year = 2020;
var birth_year = 1996;
var age = current_year - birth_year;
document.write("Current Year: "+current_year+"</br>");
document.write("Birth Year: "+birth_year+"</br>");
document.write("Your Age is: "+age+"</br></br></br>");

// 12. The Geometrizer: 
// Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output 
// “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)
document.write("<h1>The Geometrizer</h1></br></br>")
var radius_of_circle = 20;
var value_of_pie  = 3.142;
var circumference = 2 * value_of_pie * radius_of_circle;
var area_of_circle =  value_of_pie * radius_of_circle * radius_of_circle;
document.write("Radius of a circle: "+radius_of_circle+"</br>");
document.write("The circumference is: "+circumference+"</br>");
document.write("The area is: "+area_of_circle+"</br></br></br>");

// 13. The Lifetime Supply 
// Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: 
// “You will need NNNN to last you until the ripe old age of NN”.
document.write("<h1>The Lifetime Supply Calculator</h1></br></br>")
var favourite_snack = "chocolate chip";
var current_age  = 15;
var max_age = 65;
var snack_per_day = 3;
var total  = (max_age - current_age) * snack_per_day;
document.write("Favourite Snack: "+favourite_snack+"</br>");
document.write("Current Age: "+current_age+"</br>");
document.write("Estimated Maximum Age: "+max_age+"</br>");
document.write("Amount of snacks per day: "+snack_per_day+"</br>");
document.write("You will need "+total + favourite_snack +" to last you until the rip old age of "+max_age);





