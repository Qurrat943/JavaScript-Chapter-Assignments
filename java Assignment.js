 
// Chapter 1: Alerts

alert("Welcome to My JavaScript Assignment!");


// Chapter 2: Variables for Strings

let name = prompt("Enter Your Name: ");
let fname = prompt("Enter Your Father Name: ");
let course = prompt("Enter Your Course Name: ");


// Chapter 3: Variables for Numbers

let age = Number(prompt("Enter Your Age: "));
let num1 = Number(prompt("Enter First Number: "));
let num2 = Number(prompt("Enter Second Number: "));


// Chapter 4: Variable Names Legal and Illegal

// Legal Variable Names

let studentName = name;
let fatherName = fname;
let totalMarks = 450;
let _city = "Karachi";
let $price = 500;

// Illegal Variable Names (Examples)

// let 123name = "Ali";
// let student name = "Sara";
// let var = 100;


// Chapter 5: Math Expressions - Familiar Operators

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;


// Display User Data

document.write("<center>");
document.write("<font size='20' color='orange' face='Arial'>JavaScript Chapter Assignments</font><br><br>");

document.write("<b>Chapter 1: Alerts</b><br>");
document.write("Welcome to My JavaScript Assignment!<br><br>");

document.write("<b>Chapter 2: Variables for Strings</b><br>");
document.write("Name: " + name + "<br>");
document.write("Father Name: " + fname + "<br>");
document.write("Course: " + course + "<br><br>");

document.write("<b>Chapter 3: Variables for Numbers</b><br>");
document.write("Age: " + age + "<br>");
document.write("First Number: " + num1 + "<br>");
document.write("Second Number: " + num2 + "<br><br>");

document.write("<b>Chapter 4: Variable Names Legal and Illegal</b><br>");
document.write("Legal Variable: " + studentName + "<br>");
document.write("Legal Variable: " + fatherName + "<br>");
document.write("Legal Variable: " + totalMarks + "<br>");
document.write("Legal Variable: " + _city + "<br>");
document.write("Legal Variable: " + $price + "<br><br>");

document.write("<b>Chapter 5: Math Expressions - Familiar Operators</b><br>");
document.write("Addition: " + addition + "<br>");
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

document.write("</center>");
