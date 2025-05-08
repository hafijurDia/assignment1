# Interview Questions - Blog Task

## 1.What are some differences between interfaces and types in TypeScript?

### Interface
In TypeScript an interface is used to define structure of an object. An interface lists the properties and methods an object must have, without writing their code. It checks if objects fit correctly and ensures they have the right shape. It helps with type-checking and ensuring objects follow a specific structure.

### Type
n TypeScript, a type is a way to define a custom data type. It can represent primitive types (like string, number), object shapes, unions, intersections, or other complex types. Types help you specify and enforce what kind of data a variable or function should work with.

### Differences between interfaces and types in TypeScript
1. Declaration Merging:
Interfaces can be re-declared and merged. Types cannot.

2. Extending:
Interfaces use extends, types use & (intersection).

3. Flexibility:
Types can define unions (string | number), primitives, or tuples. Interfaces only describe object shapes.

4. Class Implementation:
Interfaces can be implemented by classes. Types cannot.

### Example
<pre>
interface Person { name: string } // For objects/classes
type Age = number;                // For aliasing any type
</pre>
<hr>

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

 In TypeScript, the keyof operator generates a union type consisting of all the property names (keys) of a specified object type, represented as string literal types. This feature is particularly helpful when you need to constrain variables or function parameters to only accept valid property keys of an object, enhancing type safety. For instance, consider an interface Person with properties name and age. Using keyof Person results in the type 'name' | 'age', ensuring that only these keys can be used in relevant contexts. 

### example:
 <pre>
    interface Person {
    name: string;
    age: number;
    }

    function getProperty(obj: Person, key: keyof Person): any {
    return obj[key];
    }

    const person: Person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name")); // Output: Alice
    console.log(getProperty(person, "age"));  // Output: 30
 </pre>

 <hr>

 ## 3. Explain the difference between any, unknown, and never types in TypeScript.

 ### any
 <ol>
    <li>In TypeScript it is the most flexible and least restrictive type. It allows you to assign any value to a variable and perform any operations on it without type errors. </li>
    <li>It's useful for quickly working with dynamic data or older code, but is has some limitaion in TypeScript's type safety and can cause runtime errors.</li>
    <li>Example</li>
 </ol>
  <pre>
     let value: any = 'hello';  
     value = 123;              
     console.log(value.toUpperCase());  
  </pre>

  ### Never
  In TypeScript, never is a special type that represents values that never occur. It is used for functions that always throw an error or run into an infinite loop, meaning they do not successfully finish executing and do not return a value. For example, a function that always throws an exception or never terminates would have a return type of never. 

  ### Example
   <pre>
          function throwError(message: string): never {
         throw new Error(message); 
     }
   
     type Shape = 'circle' | 'square';
     function processShape(shape: Shape): string {
         switch (shape) {
             case 'circle': return 'Processing circle';
             case 'square': return 'Processing square';
             default: {
                 const check: never = shape; 
                 return 'Unexpected shape';
             }
         }
     }
     
  </pre>

