<center> <h1> Node Js</h1> </center>

- ESM Way to IMPORT / Export (Ecmascript module) - ES6 (2015)

```java
import x from "y"
export default x
```

- Common JS Way for Import / Export (CJS)

<h2>NODE (2009) </h2>

```java
var x = require ("y")
module.exports = y
```

# Custom Modules

- Some code/logic that we wrote

```java
// Index.js
console.log("Calculator");

const{sum,product} = require("./calculator")

console.log(sum(10,20));
console.log(product(10,20));


```

```java
// Calculator.js
const sum = (a,b)=>{
    return a+b;
}

const product = (a,b)=>{
    return a*b;
}

module.exports = {sum,product};
```

# Inbuild Modules

- These are already definded in System. ex- os,fs

```javascript
const os = require("os");

console.log(os.cpus().length);
```

```javascript
const fs = require("fs");

fs.readFile("./Notes.MD", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```
