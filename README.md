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
<code>
interface Person { name: string } // For objects/classes
type Age = number;                // For aliasing any type
</code>