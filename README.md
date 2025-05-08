# 1. 🆚 Interface vs Type in TypeScript: What’s the Real Difference?

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

✅ Both allow you to create reusable custom types across your codebase.<br>
✅ You can extend existing types/interfaces to build new ones (with different syntax).<br>
✅ Used for Functions & Classes:<br>

```ts
interface Greet {
  (name: string): string;
}

type GreetType = (name: string) => string;
```

✅ Work with generics<br>

```ts
interface Cat<T> {
  name: T;
}

type CatType<T> = {
  name: T;
};
```

## ⚔️ Differences Between Interface and Type

| Feature                  | Interface                       | Type                                       |
| ------------------------ | ------------------------------- | ------------------------------------------ |
| Extedging                | ✅Can be extended using extends | ✅Can be extended using extends &          |
| Declaration Merging      | ✅ Supporte                     | ❌ Not supported                           |
| Union Types              | ❌ No direct                    | ✅ Fully Supporte                          |
| Supports Primitive Types | ❌ Only object/class            | ✅ Can alias primitives, tuples, functions |

## ⚔️ When to use interface and type

| Use Case                                  | `interface`  | `type`                 |
| ----------------------------------------- | ------------ | ---------------------- |
| Defining object shapes or class contracts | ✅ Yes       | ✅ Yes                 |
| Extending/merging types                   | ✅ Yes       | ✅ With `&`            |
| Creating union/primitive/tuple types      | ❌ No        | ✅ Yes                 |
| Library or public API definitions         | ✅ Preferred | ❌ Avoid complex types |

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

## 🧠 Introduction

TypeScript provide
TypeScript provides several advanced type features to help developers write safer and more maintainable code. One such feature is the `keyof` keyword, which is used to extract the **keys** of a given object type or interface.

In this blog post, we will explore the `keyof` keyword, its practical applications, and how it can enhance your TypeScript code.

## What Does `keyof` Do?

The `keyof` keyword takes an object type or interface and return a union of its keys. for example<br>

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

// keyof User results in: 'name' | 'age' | 'isAdmin'
type UserKeys = keyof User;

const key: UserKeys = "age"; // ✅ Valid
// const key2: UserKeys = 'email'; ❌ Error: 'email' is not a key of User
```
