
# Interfaces vs Types in TypeScript

When working with TypeScript, both `interface` and `type` allow you to define the shape of an object.  
At first glance, they might seem very similar — and in many cases, you can use either one.  
But there are some differences that are good to know.

## Similarities

Both `interface` and `type` can describe the structure of an object.

Example with `interface`:


interface Person {
  name: string;
  age: number;
}


Example with `type`:


type Person = {
  name: string;
  age: number;
}


Both do the same thing — they define the shape of an object. However, interface is more commonly used for defining class structures.

## Interfaces can be merged and extended multiple times:
 
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

// Now Animal has both 'name' and 'age'
const pet: Animal = { name: "Dog", age: 5 };
Types cannot be merged directly but can be extended using intersections:

 
type Animal = {
  name: string;
};

type AnimalWithAge = Animal & {
  age: number;
};

## Types offer more flexibility. They can define unions, tuples, and primitive types:

 
type ID = string | number;  // Union type
type Point = [number, number];  // Tuple type
Interfaces are limited to defining object structures.

 


 
## What is the use of the keyof keyword in TypeScript? with an example



# Understanding the `keyof` Keyword in TypeScript

The `keyof` keyword in TypeScript is a powerful tool that allows you to create types based on the keys of an object.  
It helps make your code safer and more flexible when working with property names dynamically.

## What does `keyof` do?

When you use `keyof` with a type, it produces a union of all the keys (property names) of that type.

Example:

 
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys is "name" | "age"










 