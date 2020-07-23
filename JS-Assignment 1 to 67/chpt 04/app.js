//Chpt-04 Variable Names: LEGAL & ILLEGAL

// Declare 3 variables in one statement.
var x,y,z;

//Declare 5 legal & 5 illegal variable names.
//Legal variable names
var myname = "Jhon Doe";
var my_name = "Jhon Doe";
var MYNAME = "Jhon Doe";
var myname1 = "Jhon Doe";
var MyName = "Jhon Doe";

//Illegal variable names
var 1myname = "Jhon Doe";
var my-name = "Jhon Doe";
var -myname = "jhon Doe";
var *my-name = "jhon Doe";
var my name = "Jhon Doe";

//  Q3 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<h3> Rules for naming Js variables </h3> </br></br> Variable names can only contain  numbers, $, and _.For example: $my_1stVariable <br/>Variable must begin with a letter,$ or _. For example $name, _name or name .<br/>Variable names are case sensitive <br/> Variable names should not be JS keywords");