//Chpt 38-42 FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 



//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function raise(a, b) {
    var power = Math.pow(a, b);
    alert(power);
}
raise(3, 3);

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
function leap_year(year) {

    var isLeap = "";
    if (year % 4 === 0) {
        isLeap = (year + " is a Leap Year");
    }
    else {
        isLeap = (year + "is not a Leap Year");
    }
    document.write(isLeap);
}
var year = +prompt("Enter year");
leap_year(year);

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions
function S_calc(a, b, c) {
    return ((a + b + c) / 2);
}
function area(a, b, c) {

    var S = S_calc(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    document.write("Area is: " + area);
}
area(5, 6, 7);



//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
function average(sub1, sub2, sub3) {
    return ((sub1 + sub2 + sub3) / 3);
}
function percentage(sub1, sub2, sub3) {
    return (
        ((sub1 + sub2 + sub3) / 300) * 100
    );
}
function mainFunction(sub1, sub2, sub3) {
    var result = average(sub1, sub2, sub3);
    var resultPercent = percentage(sub1, sub2, sub3);
    document.write("Average is: " + result + "</br>");
    document.write("Percentage is: " + resultPercent + "%");
}
mainFunction(67, 87, 98);


//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
function index_of(v, e) {
    for (i = 0; i < v.length; i++) {
        if (e === v[i]) {
            return i;
        }
    }
    return null;
}
var word = "Nasir";
var elem = "s";
var index = index_of(word, elem);
document.write(elem + " found at " + index + " in " + word);


//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function delete_vowel(s) {
    s = s.toLowerCase()
    var vowel = ["a", "e", "i", "o", "u"];
    s = s.split("");
    s = s.filter((value, index, arr) => {
        return !vowel.includes(value);
    });
    s = s.join(" ");
    document.write(s);
}
delete_vowel("My Name is Nasir");


//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
function succession(s) {
    s = s.toLowerCase();
    s = s.split("");
    var vowel = ["a", "e", "i", "o", "u"];
    var is_join = false;
    var vowel_join = "";
    var j = 0;
    for (i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "a":
                j = i + 1;
                if (vowel.includes(s[j]) && j <= s.length) {
                    document.write(s[i] + s[j]);
                }
                break;
            case "e":
                j = i + 1;
                if (vowel.includes(s[j]) && j <= s.length) {
                    document.write(s[i] + s[j]);
                }
                break;
            case "i":
                j = i + 1;
                if (vowel.includes(s[j]) && j <= s.length) {
                    document.write(`<p>${s[i] + s[j]}</p>`);
                }
                break;
            case "o":
                j = i + 1;
                if (vowel.includes(s[j]) && j <= s.length) {
                    document.write(s[i] + s[j]);
                }
                break;
            case "u":
                j = i + 1;
                if (vowel.includes(s[j]) && j <= s.length) {
                    document.write(s[i] + s[j]);
                }
                break;
        }
    }
}
succession('Please read this application and give me gratuity</br>');



//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
function countDecimals(value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}
function decimalCount(num) {
    if (countDecimals(num) >= 1) {
        return num.toFixed(2);
    }
    return num;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function meters(km) {
    return km * 1000;
}
function feet(km) {
    return km * 3280.84;
}
function inches(km) {
    return km * 39370.1;
}
function centimeters(km) {
    return km * 100000;
}
function distance(city1, city2, km) {
    document.write("Distance from " + city1 + " to " + city2 + " is " + (numberWithCommas(decimalCount(km))) + "in Kilometer</br>");
    document.write("Distance from " + city1 + " to " + city2 + " is " + (numberWithCommas(decimalCount(meters(km))) + " in Meter</br>");
    document.write("Distance from " + city1 + " to " + city2 + " is " + (numberWithCommas(decimalCount(feet(km))) + " in Feet</br>");
    document.write("Distance from " + city1 + " to " + city2 + " is " + (numberWithCommas(decimalCount(inches(km))) + " in Inch</br>");
    document.write("Distance from " + city1 + " to " + city2 + " is " + (numberWithCommas(decimalCount(centimeters(km))) + " in Centimeter</br>");
}

distance("Karachi", "Lahore", 1211.9);


//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function overtimePay(hrs, overHrWork) {
    if (hrs > 40) {
        return "Overtime Pay: " + overHrWork * 12.00
    }
    return "You haven't done work more than 40 hours";
}
document.write(overtimePay(41, 2));

//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 
function denomination(amount) {
    var hundred = parseInt(amount / 100);
    var fifty = parseInt((amount % 100) / 50);
    var ten = parseInt(((amount % 100) % 50) / 10);
    document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes, " + ten + "ten notes");
}
denomination(+prompt("Enter Amount to Withdraw"));












