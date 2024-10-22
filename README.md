## What is JavaScript? 
**JavaScript** is the standard scripting language used to create dynamic and interactive content on web pages. While HTML provides the structure and CSS provides the style, JavaScript adds interactivity—like making a button do something when clicked, or showing new content without reloading the page.

### Key Points:

- JavaScript provides interactivity and dynamic behavior.
- JavaScript can interact with HTML and CSS, allowing you to manipulate the **DOM (Document Object Model)**, handle events (like clicks), and even perform **asynchronous operations** (such as fetching data from a server).
- It can be embedded directly into HTML:

**Example:**
  
```js
  <body>
  <h1 id="heading">Hello, World!</h1>

  <!-- Embedding JavaScript directly into HTML -->
  <script>
    document.getElementById("heading").style.color = "blue";
  </script>
  </body>
  ```

or included as separate .js files:

**Example:** 

```js   
<body>
  <h1 id="heading">Hello, World!</h1>

  <!-- Link to an external JavaScript file -->
  <script src="app.js"></script>
</body>
```