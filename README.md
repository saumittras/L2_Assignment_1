# 🆚 Interface vs Type in TypeScript: What’s the Real Difference?

## 🧠 Introduction

In TypeScript, interfaces and types play a big role in declaring the type of data. These two methods are used to define data types, but there are significant differences between them. Today I will discuss about this two methodes.

## 🔍 Similarities Between `interface` and `type`

✅Both are use object parten except equal.

```ts
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```

✅ Both allow you to create reusable custom types across your codebase.
✅ You can extend existing types/interfaces to build new ones (with different syntax).
✅ Used for Functions & Classes:

```ts
interface Greet {
  (name: string): string;
}

type GreetType = (name: string) => string;
```

# 🆚 What is the use of the keyof keyword in TypeScript? Provide an example.
