# React-Portfolio
# Questions and Answers:
### 1. What is NPM?
NPM stands for "Node Package Manager." It is the default package manager for JavaScript runtime environment Node.js. NPM is used to install, share, and manage packages or modules of JavaScript code written by other developers. These packages may contain libraries, tools, frameworks, and other code that can be easily integrated into certain projects.

### 2. What is SPA?
A single page application (SPA) is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. SPAs aim to provide a smoother and more seamless user experience by loading only the necessary resources and updating the content dynamically without requiring full-page reloads. Some popular examples of SPAs are Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal, etc.

### 3. What is the event loop?
 The event loop continually scans for completed tasks, called events, and directs the program to handle them, allowing applications to run smoothly without waiting for each operation to finish before moving on to the next.
 
### 4. What is the difference between export x and export default x? How do you import them differently?
```export x```
This syntax is used to export a specific variable, function, or class with a given name from a module. When you use export x, you can later import that specific export by name in another module.
```export default x```
This syntax is used to export a default value from a module. You can only have one default export per module. When you use export default x, you can later import that default export using any name you choose in another module.

Difference with import:
For named exports (using ```export x```), you use curly braces {} in the import statement to specify the names you want to import.
For the default export (using ```export default x```), you can choose any name for the imported value in the import statement. It doesn't need to match the name used in the export statement.

### 5. Why do you use className as a property in React and not class?
The reason behind the fact that it uses className over class is that the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript, so we have to use className instead of class attribute.

### 6. Why should you not write the following? What will happen? 
```<button onClick={setCounter(counter + 1)}> +1 </button>```
The issue with this code is that you are invoking the setCounter function immediately when rendering the component, rather than passing it as a callback function to the onClick event handler.
To handle click events correctly in React, you should pass a function reference to onClick, not the result of a function call. You can use an arrow function to achieve this.
This is the correct syntax:
```<button onClick={() => setCounter(counter + 1)}> +1 </button>```

### 7. What is object deconstruction and how is it connected to React components (example)?
Object destructuring is a feature in JavaScript that allows you to extract properties from objects and bind them to variables with the same name. It provides a concise syntax for extracting values from objects and can make code more readable and expressive.
In the context of React components, object destructuring is often used to extract props or state properties, making it easier to work with the data passed down to a component.
For example:
```// Example object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'Example City',
};

// Object destructuring
const { firstName, lastName, age } = person;

// Using the destructured values
console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
```

### 8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
This is made possible by JSX , which is a syntax extension for JavaScript that looks similar to XML or HTML. JSX allows you to write declarative UI code in a way that closely resembles HTML while still being valid JavaScript. 

### 9. What is async/await? Bring an example
async/await is a feature in JavaScript that simplifies working with asynchronous code. It provides a more readable and concise way to handle promises, making asynchronous programming more like to traditional synchronous programming. For example:
```async function fetchData() {
  try {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### 10. What is a Promise? Bring an example
In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. For example:
let myPromise = new Promise(function(myResolve, myReject) {
```// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

