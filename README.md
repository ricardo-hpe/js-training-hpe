# HPE - JS - Internal Training 

## JavaScript - Training
Wanna know the length of a String? Using the code below at the end of any variable, will review its length.
```
.length
```
reference: syntax_helpers.js => line 3-4

#Comments
Leading a line by the code below, will make it a comment.
```
//
```
reference: syntax_helpers.js => line 1

#Dialogs
If you wanna open a dialog and receive an answer from the user, here's the answer:
```
confirm("Any text to accept");
```
reference: syntax_helpers.js => line 6

#Print something
If you wanna print something, here's the solution:
```
console.log()
```
reference: syntax_helpers.js => line 12-13

#Logical Operators
When you need to create a condition inside the If's, For's and While's. Here are the logical operators.
```
> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to
```

#Modulo operations
If we do 23 % 10, we divide 23 by 10 which equals 2 with 3 left over. So 23 % 10 evaluates to 3.
```
25 % 5 === 0
```
reference: syntax_helpers.js => line 15


#Substring
In order to evaluate a String by parts, x is where you start chopping and y is where you finish chopping the original string.
```
"some word".substring(x, y)
```
reference: syntax_helpers.js => line 27

#Variables
As in any other programming language, you must declare your variables, here is how you will be covering this part using JS.
```
a. var myName = "Leng";
b. var myAge = 30;
c. var isOdd = true;
```
reference: syntax_helpers.js => line 17-18

#Functions
A function takes in inputs, does something with them, and produces an output. First we declare a function using var, and then give it a name sayHello. The name should begin with a lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter. Then we use the function keyword to tell the computer that you are making a function. The code in the parentheses is called a parameter. It's a placeholder word that we give a specific value when we call the function. Then write your block of reusable code between { }. Every line of code in this block must end with a ;.
Here's an example of a function:
```
var sayHello = function(name) {
    console.log('Hello ' + name);
};
```
reference: syntax_helpers.js => line 33-39

#Running a Function
You can run the code by "calling" the function, calling this function will print out Hello Emily(According to the code above^^).
Like this:
```
sayHello("Emily");
```
reference: syntax_helpers.js => line 41

#Loops using for
Every for loop makes use of a counting variable. Here, our variable is called i (but it can have any name). The variable has many roles. The first part of the for loop tells the computer to start with a value of 1 for i. It does this by declaring the variable called i and giving it a value of 1.

When the for loop executes the code in the code block—the bit between { }—it does so by starting off where i = 1.
```
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
```
reference: syntax_helpers.js => line 29-31

#Loops using while
The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.
The syntax looks like this:
```
while(condition){
    // Do something!
}
```
reference: syntax_helpers.js => line 43-47

#Arrays
Any time you see data surrounded by [ ], it is an array. Here is a small list for what they can be used.
a. store lists of data
b. can store different data types at the same time
c. are ordered so the position of each piece of data is fixed
Example:
```
var names = ["Mao","Gandhi","Mandela"];
var sizes = [4, 6, 3, 2, 1, 9];
var mixed = [34, "candy", "blue", 11];
var arrayName = [data, data, data];
```
reference: syntax_helpers.js => line 49
