//chpt 31-34  Date Methods


// 1. Write a program that displays current date and time in
//    your browser.
var rightnow = new Date();
document.write(rightnow + "</br></br>");



// 2. Write a program that alerts the current month in words.
// For example December
var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var the_month = now.getMonth();
var name_of_current_month = month_names[the_month];
document.write("Current month: " + name_of_current_month + "</br></br>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun
var date = new Date();
var Day = date.getDay();
var Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.write("Today is " + Week[Day]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
var date = new Date;
if (date.getDay() === 6 || date.getDay() === 0) {
    document.write("It’s Fun day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var fullDate = new Date();
var date = fullDate.getDate();
if (date < 16) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var date = new Date();
var month = date.getTime();
var min = month / (1000 * 60);
document.write("Current Date: " + date);
document.write("<br>Elapsed milliseconds since January 1, 1970: " + min+"</br>");
document.write("<br>Elapsed minutes since January 1, 1970: " + month+"</br></br>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var date = new Date();
var hours = date.getHours();
if (hours < 12) {
    alert("Its AM");
}
else {
    alert("Its PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate = new Date(2020, 11, 31);
document.write("Later Date: " + laterDat);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var ramdanDate = new Date(2020, 3, 25);
var currDate = new Date();
var ramdanTime = ramdanDate.getTime();
var currTime = currDate.getTime();
var diff = (currTime - ramdanTime);
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(days + " days have passed since 1st Ramadan 2020</br></br>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var RefDate = new Date();
var startDate = new Date(2015, 0, 1, 0, 0, 0);
var refTime = RefDate.getTime();
var startTime = startDate.getTime();
var diff = (refTime - startTime);
var sec = Math.floor(diff / (1000));
document.write("On reference Date " + RefDate);
document.write("<br>" + sec + " seconds had passed since beginning of 2015");


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var currDate = new Date();
document.write("Current date: " + currDate);
currDate.setHours(currDate.getHours()-1);
document.write("<br>1 hour ago, it was " + currDate)


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var currDate = new Date();
alert("Current date: " + currDate);
currDate.setFullYear(currDate.getFullYear()-100);
document.write("100 years back, it was " + currDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
var age = +prompt("Enter your age please");
var birthYear = (new Date().getFullYear())-age;
document.write("Your Age is: "+age);
document.write("<br>Your Birth Year is: "+birthYear)


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h1>K-Electric Bill</h1></br>");
var customer_name = prompt("Enter Customer Name here","Customer Name");
var month = prompt("Enter Month here","Month");
var units = prompt("Enter Number of units used by cutomer","Units");
var charges_per_unit = 16;
var late_payment_surcharge = 350;
var net_amount = units * charges_per_unit;
var gross_amount = net_amount + late_payment_surcharge;
document.write("Customer Name: <b>"+customer_name+"</br>");
document.write("Month: "+month+"</br>");
document.write("Number of units: "+units+"</br>");
document.write("Charges per unit: <b>"+charges_per_unit+"</br></br>");
document.write("Net Amount Payable (within due Date): "+net_amount+"</br>");
document.write("Late payment surcharge: <b>"+late_payment_surcharge+"</br>");
document.write("Gross Amount Payable (after Due Date): "+gross_amount+"</br>");