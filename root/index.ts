// typesriptga otkazish
let fname: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Gaming", "Coding"];

function greet(person: string): string {
  return `Hello, ${person}`;
}

function calculateSum(a: number, b: number): number {
  return a + b;
}

function isAdult(personAge: number): boolean {
  return personAge >= 18;
}

// masalalar
// 1
{
  const arr: number[] = [1, 10, 20, 30, 9, -10, -20, -30, -1, -9];
  function countPositiveNumbers(arr: number[]): number {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }

    return count;
  }
  //   console.log(countPositiveNumbers(arr));
}

// 2
{
  function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }

  // fizzBuzz(15);
}

// 3
{
  function sumArray(arr: number[]): number {
    return arr.reduce((prev, current) => prev + current, 0);
  }
  //   console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5]));
}

// 4
{
  function findMax(arr: number[]): number {
    return Math.max(...arr);
  }

  //   console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5, 11]));
}

// 5
{
  function containsTarget(arr: number[], target: number): boolean {
    return arr.includes(target);
  }

  //   console.log(containsTarget([1, 2, 3, 4, 5], 3));
  //   console.log(containsTarget([1, 2, 3, 4, 5], 6));
}

// 6
{
  function reverseArray(arr: number[]): number[] {
    return arr.reverse();
  }
}

// 7
{
  function capitalizeWords(str: string): string {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  //   console.log(capitalizeWords("hello world"));
}

// 8
{
  function average(arr: number[]): number {
    return Math.ceil(arr.reduce((a, b) => a + b, 0) / arr.length);
  }

  //   console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}

// 9
{
  type T = number | string | boolean;
  function filterArr(arr: T[]): T[] {
    const result: T[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  const result = filterArr([1, 1, 1, 2, 2, true, true, true, 5, 5, 5, 5]);
  console.log(result); // [1, 1, 2, true, true, 5, 5, 5]
}
