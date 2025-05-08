



 
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
