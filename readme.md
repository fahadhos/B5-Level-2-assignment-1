
# Interfaces vs Types in TypeScript

When working with TypeScript, both `interface` and `type` allow you to define the shape of an object.  
At first glance, they might seem very similar — and in many cases, you can use either one.  
But there are some differences that are good to know.

## Similarities

Both `interface` and `type` can describe the structure of an object.

Example with `interface`:

```ts
interface Person {
  name: string;
  age: number;
}



 
## What is the use of the keyof keyword in TypeScript? with an example



# Understanding the `keyof` Keyword in TypeScript

The `keyof` keyword in TypeScript is a powerful tool that allows you to create types based on the keys of an object.  
It helps make your code safer and more flexible when working with property names dynamically.

## What does `keyof` do?

When you use `keyof` with a type, it produces a union of all the keys (property names) of that type.

Example:

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys is "name" | "age"
