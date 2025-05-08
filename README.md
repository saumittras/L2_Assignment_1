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

| Name                     | Interface                       | Type                                       |
| ------------------------ | ------------------------------- | ------------------------------------------ |
| Extedging                | ✅Can be extended using extends | ✅Can be extended using extends &          |
| Declaration Merging      | ✅ Supporte                     | ❌ Not supported                           |
| Union Types              | ❌ No direct                    | ✅ Fully Supporte                          |
| Supports Primitive Types | ❌ Only object/class            | ✅ Can alias primitives, tuples, functions |

# 🆚 What is the use of the keyof keyword in TypeScript? Provide an example.
