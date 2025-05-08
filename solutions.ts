const formatString = (input: string, toUpper: boolean = true): string => {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
};

type Book = {
  title: string;
  rating: number;
};
const filterByRating = (items: Book[]): Book[] => {
  let output: Book[] = items.filter((item) => item.rating >= 4);
  return output;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let result: any = [];
  for (let arr of arrays) {
    result = [...result, ...arr];
  }
  return result;
};

class Vehicle {
  private _make: string;
  private _year: number;
  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo() {
    const result = `Make: ${this._make}, Year: ${this._year}`;
    return result;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }

  getModel() {
    const result = `Model: ${this._model}`;
    return result;
  }
}

const processValue = (value: string | number): number => {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
};

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) {
    return null;
  } else {
    const result = products.reduce((max, current) => {
      return current.price > max.price ? current : max;
    });
    return result;
  }
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
};

const squareAsync = (n: number): Promise<number> => {
  return new Promise<number>((solve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        solve(n * n);
      } else {
        reject(new Error("Negative number not allowed"));
      }
    }, 1000);
  });
};
