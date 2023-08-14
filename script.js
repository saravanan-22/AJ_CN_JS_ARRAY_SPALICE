let fruits = ["Apple", "Orange", "Mango", "Banana"];
console.log(fruits.splice(2, 2)); // removed element
//   console.log(fruits);

let subjects = ["English", "Maths", "Physics", "Chemistry"];
subjects.splice(1, 2);
console.log(subjects);


// let subjects = ["English", "Maths", "Physics", "Chemistry"];: This line declares a variable named subjects and initializes it with an array containing four strings: "English", "Maths", "Physics", and "Chemistry".

// subjects.splice(1, 2);: The splice() method is used here to modify the subjects array. The splice() method is used to add or remove elements from an array at a specified index. In this case, you're starting from index 1 (which is "Maths") and removing 2 elements.

// After this line of code executes, the subjects array will be modified as follows:

// The element at index 1 ("Maths") will be removed.
// The element at index 2 ("Physics") will also be removed.
// So, the array will now contain only two elements: "English" and "Chemistry".

// console.log(subjects);: This line uses the console.log() function to print the modified subjects array to the console.